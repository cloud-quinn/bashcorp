# registry: bashcorpACR
# login server: bashcorpacr.azurecr.io
echo "Connecting to Azure image container..."
az acr login --name bashcorpAcr
docker tag bashcorp/website bashcorpacr.azurecr.io/website
docker tag bashcorp/reverseproxy bashcorpacr.azurecr.io/reverseproxy
echo "Pushing new version..."
docker push bashcorpacr.azurecr.io/website:latest
docker push bashcorpacr.azurecr.io/reverseproxy:latest