# Using nodejs runtime with version 20
FROM node:20
# Create working directory
WORKDIR /usr/src/saturn
# Copy all files into working directory
COPY . .
# Running npm for building production
RUN npm ci --omit=dev
# Expose port 8080
EXPOSE 8080
CMD ["node", "index.js"]