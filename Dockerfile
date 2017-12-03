FROM "fedora:27"
RUN yum update -y
RUN yum install nodejs -y
RUN npm install -g nodemon
RUN mkdir usr/bashcorp
ADD dist usr/bashcorp
WORKDIR usr/bashcorp
RUN npm install express
EXPOSE 3000
CMD ["nodemon", "/usr/bashcorp/server.js"]
