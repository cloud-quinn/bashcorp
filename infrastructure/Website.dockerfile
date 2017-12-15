FROM "centos:7"
ENV http_proxy "http://www-cache.reith.bbc.co.uk:80"
ENV https_proxy "http://www-cache.reith.bbc.co.uk:80"
RUN yum update -y -q
RUN yum install epel-release -y -q
RUN yum install nodejs -y -q
RUN npm install -g nodemon --silent
RUN mkdir usr/bashcorp
ADD ./dist usr/bashcorp
WORKDIR usr/bashcorp
RUN npm install express --silent
CMD nodemon /usr/bashcorp/server.js