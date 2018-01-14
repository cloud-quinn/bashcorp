echo "Starting..."

sh build/build_images.sh
#sh build/deploy_assets.sh
sh build/deploy_images.sh
#sh infrastructure/deploy_infrastructure.sh

echo "Updating live version:"
kubectl set image deployment/website website=bashcorpacr.azurecr.io/website