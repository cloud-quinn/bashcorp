echo "🌐	Deploy new reverse proxy image to live:"
version=""
if [ -z $1 ];
then
	echo "(Image versions are logged out from build_website_image.sh and build_reverseproxy_image.sh)"
	read -p "Version of reverse proxy to update: " version
else
	version=$1
fi 

az acs kubernetes get-credentials --resource-group BashCorp --name BashCorpCluster
kubectl set image deployment reverseproxy reverseproxy=bashcorpacr.azurecr.io/reverseproxy:$version
echo "✅   Done deploying image"