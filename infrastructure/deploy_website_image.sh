echo "Connecting to Azure image container..."
az acr login --name bashcorpAcr
version=""
if [ -z $1 ];
then
	read -p "Version of website to push: " version
else
	version=$1
fi 

echo "Pushing v$version of website to Azure container repository..."
docker push bashcorpacr.azurecr.io/website:$version