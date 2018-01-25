#!/bin/bash
echo "🌄    Deploying images:"
echo "⚙️ 	(1/2) Uploading images in /dist..."
container_name="website"
export AZURE_STORAGE_ACCOUNT="bashcorp"
read -p "🔐   Storage account key for $AZURE_STORAGE_ACCOUNT: " accountkey
export AZURE_STORAGE_ACCESS_KEY=$accountkey

for f in dist/*.jpg; do
  echo "⚙️  Uploading $f..."
  filename="$(basename $f)"
  az storage blob upload --container-name $container_name --file $f --name $filename
done

for f in dist/*.jpeg; do
  echo "⚙️  Uploading $f..."
  filename="$(basename $f)"
  az storage blob upload --container-name $container_name --file $f --name $filename
done

for f in dist/*.gif; do
  echo "⚙️  Uploading $f..."
  filename="$(basename $f)"
  az storage blob upload --container-name $container_name --file $f --name $filename
done

for f in dist/*.png; do
  echo "⚙️  Uploading $f..."
  filename="$(basename $f)"
  az storage blob upload --container-name $container_name --file $f --name $filename
done

echo "✅   (2/2) Done uploading assets"