echo "Connecting to Azure image container..."
az acr login --name bashcorpAcr
docker tag bashcorp/website bashcorpacr.azurecr.io/website
echo "Pushing new version..."
docker push bashcorpacr.azurecr.io/website:latest