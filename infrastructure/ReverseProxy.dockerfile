FROM centos:7
ARG proxy
RUN export http_proxy=$proxy
RUN export https_proxy=$proxy
RUN yum update -y -q
RUN yum install epel-release -y -q
RUN yum install nginx -y -q
COPY ./infrastructure/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
RUN export http_proxy=""
RUN export https_proxy=""
CMD service nginx start
