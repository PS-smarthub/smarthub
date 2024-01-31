FROM node:18-slim

RUN wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" && chmod +x /bin/pnpm

WORKDIR /app

COPY . .

RUN pnpm install

RUN pnpm run build --filte=web

RUN ls && pwd

RUN cp -r ./apps/dist/* /usr/share/nginx/html