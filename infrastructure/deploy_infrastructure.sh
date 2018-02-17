echo "You'll need the private key password."
az aks get-credentials --resource-group BashCorp2 --name BashCorpCluster2
echo "Deleting old infrastructure..."
kubectl delete pods,services,replicationcontroller,deployment --all
echo "Creating new infrastructure..."
kubectl create -f infrastructure/kubernetes.website.yml
kubectl create -f infrastructure/kubernetes.reverseproxy.yml
echo "Waiting for reverse proxy IP..."
external_ip=""
while [ -z $external_ip ]; do
    sleep 10
    external_ip=$(kubectl get svc reverseproxy --template="{{range .status.loadBalancer.ingress}}{{.ip}}{{end}}")
done
sh /vagrant/deploy.sh
echo "Todo: log in to Azure and repoint domain to $external_ip"