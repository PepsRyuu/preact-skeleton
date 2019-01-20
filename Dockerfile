# --- Compile --- #
FROM node:9 as builder
RUN mkdir /code
WORKDIR /code

COPY package.json /code
RUN npm install --quiet

COPY . /code
RUN npm run build

# --- Deploy --- #
FROM nginx
COPY ./nginx/conf.d /etc/nginx/conf.d
COPY --from=builder /code/dist /usr/share/nginx/html
RUN chown -R nginx /usr/share/nginx/html

EXPOSE 80 443