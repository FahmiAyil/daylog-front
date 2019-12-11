FROM node:10
MAINTAINER M. Fahmi Ayil ILahi (fahmiayil@gmail.com)
COPY . /opt/app
WORKDIR /opt/app
RUN npm install
EXPOSE 3000
CMD ["npm","start"]