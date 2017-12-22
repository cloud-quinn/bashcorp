#!/bin/bash
echo "Deploy src/assets"
echo "-----------------"
read -p "d for develop, p for production:" environment

$container_name = "bashcorp"


export AZURE_STORAGE_ACCOUNT="bashcorp"

read -p "Storage account key for $AZURE_STORAGE_ACCOUNT:" accountkey
export AZURE_STORAGE_ACCESS_KEY=accountkey

echo "Creating the container..."
az storage container create --name $container_name

echo "Uploading the file..."
az storage blob upload --container-name $container_name --file $file_to_upload --name $blob_name

echo "Listing the blobs..."
az storage blob list --container-name $container_name --output table

echo "Downloading the file..."
az storage blob download --container-name $container_name --name $blob_name --file $destination_file --output table

echo "Done"