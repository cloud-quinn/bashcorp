#!/bin/bash

echo "Building..."
rm -rf dist/*
yarn install --offline --non-interactive || exit 1
webpack --config webpack.production.config.js -p > dist/build.output || exit 1
docker build -t bashcorp/website -f infrastructure/Website.dockerfile . || exit 1
docker build -t bashcorp/reverseproxy -f infrastructure/ReverseProxy.dockerfile . || exit 1
read -p "Docker username:" username
echo "Docker password for $username:"
read -s password
echo $password | docker login --username $username --password-stdin
docker push bashcorp/website
docker push bashcorp/reverseproxy
