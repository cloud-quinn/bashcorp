echo "Connecting to Azure image container..."
az acr login --name bashcorpAcr
docker tag bashcorp/reverseproxy bashcorpacr.azurecr.io/reverseproxy
echo "Pushing new version..."
docker push bashcorpacr.azurecr.io/reverseproxy