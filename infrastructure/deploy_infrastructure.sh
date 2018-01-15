
sh build_website_image.sh
sh deploy_website_image.sh

echo "You'll need the private key password."
az acs kubernetes get-credentials --resource-group BashCorp --name BashCorpCluster
echo "Deleting old infrastructure..."
kubectl delete pods,services,replicationcontroller,deployment --all
echo "Creating new infrastructure..."
kubectl create -f infrastructure/kubernetes.website.yml
echo "Waiting for website IP..."
external_ip=""
while [ -z $external_ip ]; do
    sleep 10
    external_ip=$(kubectl get svc website --template="{{range .status.loadBalancer.ingress}}{{.ip}}{{end}}")
done
cp nginx.conf nginx.release
sed -i -e 's/WEBSITESERVICE/$external_ip/g' nginx.release
sh build_reverseproxy_image.sh
sh deploy_reverseproxy_image.sh
rm nginx.release
kubectl create -f infrastructure/kubernetes.reverseproxy.yml
echo "Waiting for reverse proxy IP..."
external_ip=""
while [ -z $external_ip ]; do
    sleep 10
    external_ip=$(kubectl get svc reverseproxy --template="{{range .status.loadBalancer.ingress}}{{.ip}}{{end}}")
done