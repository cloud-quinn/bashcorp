version=""
if [ -z $1 ];
then
	read -p "Version of website to update: " version
else
	version=$1
fi 

echo "Updating website to v$version..."
az acs kubernetes get-credentials --resource-group BashCorp --name BashCorpCluster
kubectl set image deployment website website=bashcorpacr.azurecr.io/website:$version