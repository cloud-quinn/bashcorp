FROM centos:7
ARG proxy
RUN export http_proxy=$proxy
RUN export https_proxy=$proxy
RUN if [ ! -z $proxy ]; then echo "proxy=$proxy" >> /etc/yum.conf; fi
RUN yum update -y -q
RUN yum install epel-release -y -q
RUN yum install nodejs -y -q
RUN if [ ! -z $proxy ]; then npm config set proxy $proxy; fi
RUN if [ ! -z $proxy ]; then npm config set https-proxy $proxy; fi
RUN npm install -g nodemon --silent
RUN mkdir usr/bashcorp
ADD ./dist usr/bashcorp
WORKDIR usr/bashcorp
RUN npm install express --silent
RUN export http_proxy=false
RUN export https_proxy=false
EXPOSE 3000
CMD nodemon /usr/bashcorp/server.js