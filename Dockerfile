FROM nginx:1.24.0-alpine

COPY ./dist/it-club-frontend /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf