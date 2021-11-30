FROM node:12-alpine AS build-stage

WORKDIR /react-app
COPY . .

# You have to set this because it should be set during build time.
#ENV REACT_APP_BASE_URL=http://www.alaga.tech/
EXPOSE 3000
# Build our React App
RUN npm install
RUN npm run build

# WORKDIR /var/www
# COPY . .
#COPY /react-app/build/* app/static/
#COPY --from=build-stage /react-app/build/* app/static/

CMD ["npm", "run", "start"]