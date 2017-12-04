#!/bin/bash

VERSION=`date '+%Y%m%d%H%M%S'`
RELEASE="bashcorp.v$VERSION.tar.gz"
rm -rf dist/*
yarn install || exit 1
webpack -p || exit 1
docker build -t bashcorp . || exit 1
docker save bashcorp > releases/$RELEASE || exit 1


