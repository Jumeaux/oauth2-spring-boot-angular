# stage1: compile and build angular app

FROM node:latest as build

WORKDIR /usr/hassane/app

COPY ./ /usr/hassane/app

RUN npm install

RUN npm run build


# stage2: server app with nginx
FROM nginx:latest
COPY --from=build /usr/hassane/app/dist/angular-app /usr/share/nginx/html
EXPOSE 8088