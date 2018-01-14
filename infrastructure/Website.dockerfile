FROM centos:7
ARG proxy
RUN export http_proxy=$proxy
RUN export https_proxy=$proxy
RUN yum update -y -q
RUN yum install epel-release -y -q
RUN yum install nodejs -y -q
RUN npm install -g nodemon --silent
RUN mkdir usr/bashcorp
ADD ./dist usr/bashcorp
WORKDIR usr/bashcorp
RUN npm install express --silent
EXPOSE 3000
CMD nodemon /usr/bashcorp/server.js
