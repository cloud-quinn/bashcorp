FROM "fedora:27"
RUN yum update -y
RUN yum install nodejs -y
RUN yum install nginx -y
RUN npm install -g nodemon
RUN mkdir usr/bashcorp
ADD dist usr/bashcorp
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR usr/bashcorp
RUN npm install express
EXPOSE 80 443
RUN service nginx start
CMD ["nodemon", "/usr/bashcorp/server.js"]
