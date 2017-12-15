FROM "centos:7"
ENV http_proxy "http://www-cache.reith.bbc.co.uk:80"
ENV https_proxy "http://www-cache.reith.bbc.co.uk:80"
RUN yum update -y
RUN yum install epel-release -y
RUN yum install nginx -y
COPY ./infrastructure/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80 443
CMD service nginx start