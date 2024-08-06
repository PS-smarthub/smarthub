FROM node:20-alpine AS builder
# Set working directory
WORKDIR /app
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

# Only Take packages that are needed to compile this app
RUN npx turbo prune --scope=sot --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:20-alpine AS installer
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json
COPY --from=builder /app/turbo.json ./turbo.json
RUN npm install


FROM node:20-alpine AS sourcer
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=builder /app/out/full/ .
RUN npx turbo build --filter=sot

FROM node:20-alpine AS runner
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=sourcer /app/ .
WORKDIR /app/apps/sot/

CMD [ "npm", "start" ]