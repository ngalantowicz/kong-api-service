FROM node:latest

RUN mkdir -p /dong-kong
WORKDIR /dong-kong

COPY ./ /dong-kong

EXPOSE 8041

RUN npm install

CMD npm start
