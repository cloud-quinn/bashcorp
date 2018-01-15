#!/bin/bash

echo "Starting build process for BashCorp Ltd. Reverse Proxy. CTRL+C to cancel."
echo "⚙ 	(1/3) Building..."
docker_running=$(systemctl status docker.service | grep "running")
status=${#docker_running}
if [ "$status" -eq 0 ];
then
	echo "🔒	 Docker is not running, starting it with sudo..."
	sudo systemctl start docker.service
fi

rm -rf dist/*

echo "⚙	(2/3) Building reverse proxy Docker image..."
docker build --build-arg proxy=$http_proxy -t bashcorp/reverseproxy -f infrastructure/ReverseProxy.dockerfile . || exit 1

echo "📦	(3/3) Ready to push image to Azure."