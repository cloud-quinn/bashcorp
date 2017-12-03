yarn install
if ERRORLEVEL 1 exit 

webpack -p
if ERRORLEVEL 1 exit 

docker build -t bashcorp .
if ERRORLEVEL 1 exit 

docker save bashcorp > bashcorp.tar.gz
if ERRORLEVEL 1 exit 


