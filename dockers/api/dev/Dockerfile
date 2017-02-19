FROM node:7

# Prepare work directory
RUN mkdir /code
# Point to work directory
WORKDIR /code

# Loopback tool
RUN npm install -g loopback-cli

# Nodemon - auto refresh for dev-env
RUN npm install -g nodemon

# Default port of kryptstorm system
EXPOSE 3000
