# GIới thiệu docker-compose

## 1. Nội dung

```yaml
version: '2'

services:
   db:
     image: mysql:latest
     volumes:
       - ./db:/var/lib/mysql
     environment:
       MYSQL_ROOT_PASSWORD: kryptstorm
       MYSQL_DATABASE: kryptstorm
       MYSQL_USER: kryptstorm
       MYSQL_PASSWORD: kryptstorm

   api:
     depends_on:
       - db
     image: kryptstorm/api-dev:latest
     volumes:
       - ./api:/code
     ports:
       - "3000:3000"
     command: "npm start"
     environment:
       DB_HOST: db
       DB_PORT: 3306
       DB_USER: kryptstorm
       DB_PASSWORD: kryptstorm
       DB_DATABASE: kryptstorm
       KS_PORT: 3000

   admin:
     depends_on:
       - api
     image: kryptstorm/client-dev:latest
     volumes:
       - ./admin:/code
     ports:
       - "3001:3000"
     command: "npm start"
     environment:
       KS_API: api

   phpmyadmin:
     depends_on:
       - db
     image: phpmyadmin/phpmyadmin:latest
     ports:
       - "4000:80"
     environment:
       PMA_USER: kryptstorm
       PMA_PASSWORD: kryptstorm
```

## 2. Giải thích