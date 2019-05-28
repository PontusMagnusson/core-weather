FROM node:12.2.0-alpine as builder
WORKDIR /app
COPY ./package.json ./
COPY ./.npmrc ./
RUN npm install --silent
COPY ./ ./
RUN npm run build --nomaps

FROM nginx:alpine
EXPOSE 3000
RUN apk add --no-cache bash
WORKDIR /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build .

ENTRYPOINT nginx -g 'daemon off;'