# registry: bashcorpACR
# login server: bashcorpacr.azurecr.io
docker tag bashcorp/website bashcorpacr.azurecr.io/website
docker tag bashcorp/reverseproxy bashcorpacr.azurecr.io/reverseproxy
docker push bashcorpacr.azurecr.io/website
docker push bashcorpacr.azurecr.io/reverseproxy
# Private key password is bibble
az acs kubernetes get-credentials --resource-group BashCorp --name BashCorpCluster
