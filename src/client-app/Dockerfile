FROM node:alpine As builder
WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY nginx-site.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/dist/client-app/ /app
