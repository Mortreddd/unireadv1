
FROM node:22.2-alphine AS BUILD_IMAGE

WORKDIR /app/frontend

COPY package.json .

RUN npm install

COPY . .

RUN npm run build


# * Multi-stage build

FROM node:22.2-alphine as PRODUCTION

WORKDIR /app/frontend

COPY --from=BUILD_IMAGE /app/frontend/dist ./app/frontend/dist

EXPOSE 8080

COPY package.json .

COPY vite-config.ts .

CMD ["npm", "run", "preview"]
