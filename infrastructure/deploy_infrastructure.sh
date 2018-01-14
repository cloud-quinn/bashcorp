echo "‼️		This will generate a new IP for all servers. CTRL+C to cancel."
echo " * You'll need to update DNS records manually"
echo " * You can find the IP addresses by using `kubectl get service`"
echo "You'll need the private key password."
az acs kubernetes get-credentials --resource-group BashCorp --name BashCorpCluster
echo "Deleting old infrastructure..."
kubectl delete pods,services,replicationcontroller,deployment --all
echo "Creating new infrastructure..."
kubectl create -f infrastructure/kubernetes.yml