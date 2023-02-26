FROM node:18.14 as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

# run nginx
FROM nginx:1.23.3
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build .
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
