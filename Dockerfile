FROM node:lts-alpine as angular
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . .

ARG MARVEL_BASE_URL
ARG MARVEL_API_PUBLIC_KEY
ARG MARVEL_API_PRIVATE_KEY
ARG ENVIRONMENT

RUN npm run build

FROM nginx:alpine
VOLUME [ "/var/cache/nginx" ]
COPY --from=angular app/dist/MarvelHubAngular /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

# docker build -t marvel-hub-angular .
# docker run -p 8081:80 marvel-hub-angular
