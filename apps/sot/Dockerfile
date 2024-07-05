FROM node:20-alpine AS builder
# Set working directory

WORKDIR /app
COPY . .
ARG BOSCH_REGISTRY
RUN npm config set registry ${BOSCH_REGISTRY}
RUN npm i -g turbo
# Only Take packages that are needed to compile this app
RUN turbo prune --scope=sot --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:20-alpine AS installer
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json
COPY --from=builder /app/turbo.json ./turbo.json
RUN npm i


FROM node:20-alpine AS sourcer
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=builder /app/out/full/ .
COPY .gitignore .gitignore
RUN npx turbo run build --scope=sot --include-dependencies --no-deps

FROM node:20-alpine as runner
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=sourcer /app/ .
WORKDIR /app/apps/sot/
