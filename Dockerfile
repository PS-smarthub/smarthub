FROM node:20-alpine as base


FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app
RUN npm config set registry https://rb-artifactory.bosch.com/artifactory/api/npm/npm-repo/ 
RUN npm install -g turbo

COPY . .
RUN turbo prune cold-start --docker

FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY turbo.json turbo.json
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json

RUN npm install 

# # Build the project
COPY --from=builder /app/out/full/ .

CMD ["turbo", "dev"]
