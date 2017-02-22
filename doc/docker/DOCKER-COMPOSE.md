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

1. Xác định version mà docker enginge sẽ chạy file config này

    ```yaml
    version: '2'
    ```

2. Tạo các service (container): ```db``` (chứa database), ```api``` (chứa code api), ```admin``` (chứa code admin), và ```phpmyadmin``` để có thể truy cập phpmyadmin vào service ```db```
3. Mỗi service sẽ có các thuộc tính sau:
    - ```depends_on``` (depends_on) - Xác đinh xem container hiện tại sẽ phụ thuộc vào container nào, ví dụ chúng ta cần bắt buộc docker chạy ```db``` trước khi chạy code ```api``` (Vì không có lý nào api chạy mà không có database).
    - ```image``` - Chọn image để khởi tạo container. Ở đây mình không sử dụng image ```node:latest``` mà sử dụng custom images của mình là ```kryptstorm/api-dev``` và ```kryptstorm/client-dev``` để có thể thêm 1 số tùy chỉnh.
    - ```volumns``` - Dùng để mount (các bạn có thể hiểu là sync thư mục) từ máy thật đến container.
    - ```ports``` Dùng để map port từ container ra máy thật để có thể chạy. Như ở container ```phpmyadmin```, container này khở tạo mới port mặc định là ```80``` nhưng máy thật chúng ta đã có dịch vụ chiếm port này. Nên ta map port ```3000``` từ máy thật vào port ```80``` ở container. Nghĩa là bạn truy cập ```localhost:3000``` thì tương đương với truy cập ```localhost:80``` trong container.
    - ```command``` Command này sẽ được chạy ngay khi container được khởi tạo và chạy thành công. Các bạn có thể tưởng tượng nó là 1 code startup của máy tính, khởi động lên là nó chạy trước tiên.
    - ```environment``` Đây là biến chứa những tham số mà chúng ta sẽ mặc định set cho container khi chạy. Ví dụ ở container ```api``` mình có ```DB_USER```, thì khi vào container ```api```, ```process.env.DB_USER``` sẽ có giá trị là ```kryptstorm```