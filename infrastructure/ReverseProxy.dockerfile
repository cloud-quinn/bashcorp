FROM centos:7
ARG proxy
RUN export http_proxy=$proxy
RUN export https_proxy=$proxy
RUN if [ ! -z $proxy ]; then echo "proxy=$proxy" >> /etc/yum.conf; fi
RUN yum update -y -q
RUN yum install initscripts -y
RUN yum install sudo -y
RUN yum install epel-release -y -q
RUN yum install nginx -y -q
COPY ./infrastructure/nginx.release /etc/nginx/nginx.conf
RUN mkdir /data
RUN mkdir /data/nginx
RUN mkdir /data/nginx/cache
RUN chown nginx /data/nginx/cache
RUN export http_proxy=false
RUN export https_proxy=false
EXPOSE 80 443
CMD ["nginx", "-g", "daemon off;"]