# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:21-alpine3.18 AS build

WORKDIR /app
# copy the current directory contents into the container at /app
COPY . .
# install dependencies, matching package-lock.json
RUN npm ci
# build the app
RUN npm run build

EXPOSE 443


# Use the latest version of the official Nginx image as the base image
FROM nginx:latest
# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy SSL certificates
COPY localhost.crt /etc/ssl/certs/
COPY localhost.key /etc/ssl/private/

# copy the built application from the build stage to the nginx html 
# directory
RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/ccilunch-angular/ /usr/share/nginx/html

RUN chmod -R 755 /usr/share/nginx/html

RUN chown -R nginx:nginx /usr/share/nginx/html