FROM node:lts-alpine as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile
COPY . .
RUN yarn build --prod

FROM nginx:stable-alpine as run
COPY --from=build /app/default.conf.template /etc/nginx/conf.d/default.conf.template
COPY --from=build /app/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/www /usr/share/nginx/html
CMD /bin/sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
