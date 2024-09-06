# Step 1: Use an official Node.js runtime as a parent image
FROM node:16-alpine AS build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Build the Vite app for production
RUN npm run build

# Step 7: Use an official NGINX image to serve the built app
FROM nginx:alpine

# Step 8: Copy the built app from the previous stage to the NGINX public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Step 9: Expose port 80 for NGINX to serve the app
EXPOSE 80

# Step 10: Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
