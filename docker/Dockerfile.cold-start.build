FROM node:20-alpine AS base
 
FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app
RUN npm install -g turbo
COPY . .
RUN turbo prune cold-start --docker

FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/package-lock.json ./package-lock.json
RUN npm ci
 
# Build the project
COPY --from=builder /app/out/full/ .
RUN npx turbo run build --filter=cold-start
 
FROM base AS runner
WORKDIR /app
 
# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 angelo
USER angelo
 
COPY --from=installer /app/apps/cold-start/next.config.js .
COPY --from=installer /app/apps/cold-start/package.json .
 
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/cold-start/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/cold-start/.next/static ./apps/cold-start/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/cold-start/public ./apps/cold-start/public
 
EXPOSE 3000

CMD node apps/cold-start/server.js