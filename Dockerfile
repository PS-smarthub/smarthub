FROM node:18-alpine

WORKDIR /app

COPY pacakge.json ./

RUN npm install

COPY . .

RUN npm run build

COPY ./apps/web/.next ./.next

CMD ["npm", "run", "dev"]