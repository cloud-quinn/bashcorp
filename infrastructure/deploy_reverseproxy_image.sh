echo "Connecting to Azure image container..."
az acr login --name bashcorpAcr
version=""
if [ -z $1 ];
then
	read -p "Version of website to push: " version
else
	version=$1
fi 

docker push bashcorpacr.azurecr.io/reverseproxy:$version