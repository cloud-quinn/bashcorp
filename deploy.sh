echo "Deploying new code... to deploy infrastructure, sh infrastructure/deploy_infrastructure.sh"
version=$(date +%s)

sh infrastructure/build_website_image.sh "$version"
sh infrastructure/deploy_website_image.sh "$version"
sh infrastructure/update_website.sh "$version"
sh infrastructure/build_reverseproxy_image.sh "$version"
sh infrastructure/deploy_reverseproxy_image.sh "$version"
sh infrastructure/update_reverseproxy.sh "$version"