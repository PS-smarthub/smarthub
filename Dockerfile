FROM node:20-alpine


# https://github.com/vercel/turbo/issues/2198
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

# add turborepo
RUN npm i -g turbo

# Set working directory
WORKDIR /app

# Install app dependencies
COPY  ["package-lock.json", "package.json", "./"] 

# Copy source files
COPY . .

# Install app dependencies
RUN npm install

EXPOSE 3000 3001 3002

CMD ["npm", "run", "dev"]