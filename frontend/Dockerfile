# Use more common Node.js tag
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

# Add retry logic for npm install
RUN npm install

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