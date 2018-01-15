#!/bin/bash

echo "Starting build process for BashCorp Ltd. Reverse Proxy. CTRL+C to cancel."
echo "⚙ 	(1/3) Building..."
cp infrastructure/nginx.conf infrastructure/nginx.release
if [ -z $1 ];
then
	version=$(date +%s)
else
	version=$1
fi 

echo "Waiting for external IP of Kubernetes 'website' service..."
echo "(If this hangs for a long time (more than 2-3 mins) or errors then check that the infrastructure has been created in Azure)"
external_ip=""
while [ -z $external_ip ]; do
    sleep 10
    external_ip=$(kubectl get svc website --template="{{range .status.loadBalancer.ingress}}{{.ip}}{{end}}")
done

echo "Reverse proxy for $external_ip"
sed -i -e "s/WEBSITESERVICE/$external_ip/g" infrastructure/nginx.release
docker_running=$(systemctl status docker.service | grep "running")
status=${#docker_running}
if [ "$status" -eq 0 ];
then
	echo "🔒	 Docker is not running, starting it with sudo..."
	sudo systemctl start docker.service
fi

rm -rf dist/*

echo "⚙	(2/3) Building reverse proxy Docker image..."
docker build --build-arg proxy=$http_proxy -t bashcorpacr.azurecr.io/reverseproxy:$version -f infrastructure/ReverseProxy.dockerfile . || exit 1
rm infrastructure/nginx.release
echo "✳	(3/3) Ready to push image $version to Azure."