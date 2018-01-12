#!/bin/bash
echo "Starting deployment process for BashCorp Ltd. Website Assets. CTRL+C to cancel."
echo "⚙ 	(1/5) Ready to push to Azure"
container_name="website"
export AZURE_STORAGE_ACCOUNT="bashcorp"
az login
read -p "Storage account key for $AZURE_STORAGE_ACCOUNT: " accountkey
export AZURE_STORAGE_ACCESS_KEY=$accountkey

for f in dist/public/img/*.*; do
  echo "Uploading $f..."
  filename="$(basename $f)"
  az storage blob upload --container-name $container_name --file $f --name $filename
done

# todo a better way to handle folders within img

container_name="carousel"
for f in dist/public/img/carousel/*.*; do
  echo "Uploading $f..."
  filename="$(basename $f)"
  az storage blob upload --container-name $container_name --file $f --name $filename
done

echo "Done"