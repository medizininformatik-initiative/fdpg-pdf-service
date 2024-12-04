FROM node:20 AS build
ENV CHROME_BIN="/usr/bin/chromium-browser" \
  PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM node:20-alpine as productionModules
ENV CHROME_BIN="/usr/bin/chromium-browser" \
  PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"
WORKDIR /usr/src/app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install --production=true


FROM node:20-alpine as release
ARG NODE_ENV=production
ENV NODE_ENV=$NODE_ENV
ARG SOFTWARE_VERSION
ENV SOFTWARE_VERSION=$SOFTWARE_VERSION
ENV CHROME_BIN="/usr/bin/chromium-browser" \
  PUPPETEER_SKIP_CHROMIUM_DOWNLOAD="true"
WORKDIR /usr/src/app
EXPOSE 3000

COPY print-frontend ./print-frontend
COPY --from=productionModules /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist

RUN set -x \
  && apk update \
  && apk upgrade \
  && apk add --no-cache \
  udev \
  ttf-freefont \
  icu-data-full \
  chromium
CMD ["node", "dist/main"]
