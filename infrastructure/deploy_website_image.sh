echo "🌐	Publishing website image to Azure container repository:"
az acr login --name bashcorpAcr
version=""
if [ -z $1 ];
then
	echo "(Image versions are logged out from build_website_image.sh and build_reverseproxy_image.sh)"
	read -p "#️⃣	Version of website to push: " version
else
	version=$1
fi 

docker push bashcorpacr.azurecr.io/website:$version
echo "✅   Done pushing image"