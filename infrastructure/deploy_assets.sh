#!/bin/bash
echo "🌄    Deploying images:"
echo "⚙️ 	(1/3) Uploading dist/public/img/*.*..."
container_name="website"
export AZURE_STORAGE_ACCOUNT="bashcorp"
az login
read -p "🔐   Storage account key for $AZURE_STORAGE_ACCOUNT: " accountkey
export AZURE_STORAGE_ACCESS_KEY=$accountkey

for f in dist/public/img/*.*; do
  echo "⚙️  Uploading $f..."
  filename="$(basename $f)"
  az storage blob upload --container-name $container_name --file $f --name $filename
done

# todo a better way to handle folders within img
echo "⚙️ 	(2/3) Uploading dist/public/img/carousel/*.*..."
container_name="carousel"
for f in dist/public/img/carousel/*.*; do
  echo "⚙️  Uploading $f..."
  filename="$(basename $f)"
  az storage blob upload --container-name $container_name --file $f --name $filename
done

echo "✅   (3/3) Done uploading assets"