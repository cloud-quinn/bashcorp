echo "🌐	Deploy new website image to live:"
version=""
if [ -z $1 ];
then
	echo "(Image versions are logged out from build_website_image.sh and build_reverseproxy_image.sh)"
	read -p "Version of website to update: " version
else
	version=$1
fi 

echo "Updating website to v$version..."
az aks get-credentials --resource-group BashCorp2 --name BashCorpCluster2
kubectl set image deployment website website=bashcorpacr.azurecr.io/website:$version
echo "✅   Done deploying image"