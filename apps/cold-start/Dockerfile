FROM node:20-alpine AS builder
# Set working directory
WORKDIR /app
COPY . .
RUN npm config set registry https://rb-artifactory.bosch.com/artifactory/api/npm/npmjs-remote/ \
//rb-artifactory.bosch.com/artifactory/api/npm/npmjs-remote/:_authToken=eyJ2ZXIiOiIyIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYiLCJraWQiOiJnMzR0ZXRQV1R6cVZRZGFRRTI2eEhrOE5HZFhkZnI1VVMzc0VKcXloV1JJIn0.eyJzdWIiOiJqZi1hcnRpZmFjdG9yeUBmNmYyNDhhOC00YzdjLTQ1YjgtYmU4Ny03MzExYzM1MGI5M2MvdXNlcnMvY25yNmNhIiwic2NwIjoibWVtYmVyLW9mLWdyb3VwczoqIiwiYXVkIjoiamYtYXJ0aWZhY3RvcnlAZjZmMjQ4YTgtNGM3Yy00NWI4LWJlODctNzMxMWMzNTBiOTNjIiwiaXNzIjoiamYtYXJ0aWZhY3RvcnlAZjZmMjQ4YTgtNGM3Yy00NWI4LWJlODctNzMxMWMzNTBiOTNjL3VzZXJzL2NucjZjYSIsImV4cCI6MTcxNjU3MzE4MiwiaWF0IjoxNzEzOTgxMTgyLCJqdGkiOiJiYzIyNzBkNS00MzVjLTRjZTgtOGNmZS1mZjFmOWE4ZTllYzgifQ.jmKRmSyn-vLNHmUiAzh_AsMSOX7oKiSgPRjbrpC3twV0-uxMDjzbgsXDeQTB4gkB86Gs_UAjrQGygnWBi0JSUxT67ZL-ITLalx7zb7gVWip_zfbcV_ZeRGlulJx3iRZXUJayFV6SLuV6Dx001XoyNVrC-qUQ19Zu6EGoIzZ7s2-mnpu2vrPxADRzAXfzRnsZvD4-_Wb4DOgLoyFKBHYchET2dvYNe8LTmBzooHrROwQpDP4f3P8qIO13YNhsk7srdGVdB_tLWVpHoCJxxiSUYg75KUROzwk3Qm4rx3yNOv_VsZb8M2v7NS__IIh3JKc9io60OdQ1Pr5ZizumXEQyIQ
RUN npm i -g turbo
# Only Take packages that are needed to compile this app
RUN turbo prune --scope=cold-start --docker

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
RUN npx turbo run build --scope=cold-start --include-dependencies --no-deps

FROM node:20-alpine as runner
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=sourcer /app/ .
WORKDIR /app/apps/cold-start/

CMD [ "npm", "start" ]