# Use more common Node.js tag
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

# Add retry logic for npm install
RUN npm config set fetch-retry-mintimeout 20000 && \
    npm config set fetch-retry-maxtimeout 120000 && \
    npm install --no-optional --retry 3

COPY . .

RUN npm run build

# Use standard nginx alpine tag
FROM nginx:alpine

# Create nginx.conf if it doesn't exist
RUN mkdir -p /etc/nginx/conf.d && \
    touch /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]