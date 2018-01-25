#!/bin/bash

echo "🌐	Creating node-based website..."
echo "⚙️ 	(1/4) Building..."

if [ -z $1 ];
then
	version=$(date +%s)
else
	version=$1
fi 

docker_running=$(systemctl status docker.service | grep "running")
status=${#docker_running}
if [ "$status" -eq 0 ];
then
	echo "🔒	 Docker is not running, starting it with sudo..."
	sudo systemctl start docker.service
fi

rm -rf dist/*

echo "⚙️	(2/4) Building production code..."
webpack --config webpack.production.config.js > dist/build.output
npx uglify-es -o dist/bashcorp.js --compress --mangle -- dist/bashcorp.js 

echo "⚙️	(3/4) Building website Docker image..."
docker build --build-arg proxy=$http_proxy -t bashcorpacr.azurecr.io/website:$version -f infrastructure/Website.dockerfile . || exit 1
export deploy_website_version=$version
echo "✅		(4/4) Ready to push image $version to Azure."