#!/bin/bash

echo "Starting build process for BashCorp Ltd. Website. CTRL+C to cancel."
echo "⚙ 	(1/4) Building..."
docker_running=$(systemctl status docker.service | grep "running")
status=${#docker_running}
if [ "$status" -eq 0 ];
then
	echo "🔒	 Docker is not running, starting it with sudo..."
	sudo systemctl start docker.service
fi

rm -rf dist/*

echo "⚙	(2/4) Building production code..."
webpack --config webpack.production.config.js -p > dist/build.output || exit 1

echo "⚙	(3/4) Building website Docker image..."
docker build --build-arg proxy=$http_proxy -t bashcorp/website -f infrastructure/Website.dockerfile . || exit 1

echo "📦	(5/4) Ready to push images to Azure."