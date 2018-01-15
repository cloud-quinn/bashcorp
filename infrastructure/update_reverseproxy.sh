version=""
if [ -z $1 ];
then
	read -p "Version of reverse proxy to update: " version
else
	version=$1
fi 

az acs kubernetes get-credentials --resource-group BashCorp --name BashCorpCluster
kubectl set image deployment reverseproxy reverseproxy=bashcorpacr.azurecr.io/reverseproxy:$version