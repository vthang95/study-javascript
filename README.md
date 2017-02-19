# Study JavaScript - TuanNguyen

## Tại sao VN có rất ít project open source

Bắt nguồn từ khi mình đọc những topic tương tự thế này
- https://daynhauhoc.com/t/y-tuong-lam-project-open-source-cho-day-nhau-hoc/2036/2
- https://daynhauhoc.com/t/tuyen-tat-ca-moi-nguoi-cung-tham-gia-lam-mot-open-source-ve-c-c/2058
- https://daynhauhoc.com/t/y-tuong-nhom-phat-trien-ma-nguon-mo-php-day-nhau-hoc/2076

Mình thấy mọi người có rất nhiều người ấp ủ những project open source , giúp đỡ cộng đồng lập trình viên nước ta. Nhưng  hầu hết các porject tiến triển khá chậm chạp hoặc có thể là đã dừng (Mình nhớ a Đạt dó start một project với JS để hướng dẫn các bạn học nhưng đã dừng).  Mình tổng kết một số lý do như sau khi mà những project đó dần đi vào quên lãng:

- Mọi người chỉ được cái nhiệt tình ban đầu, thấy  khó khăn là nản. Một câu kinh điển "Không phải tất cả mọi người,  bla bla ...", nhưng liệu có mấy người thấy khó khăn mà không nản? Bản thân mình khi gặp khó khăn cũng nản, cũng bỏ qua nhiều thứ lắm, để rồi tiếc nuối.
- Bản thân người start project không nhận được lợi ích gì. Lợi ích là  động lực để làm việc, chỉ những comment, thanks là không đủ (nhiều khi 2 cái đơn giản  cũng không có). Liệu bạn có giúp đỡ người khác vô điều kiện không?
- Những người đóng góp cho project không có thời gian. Cái này là tất nhiên, người ta còn có công ăn việc làm mà. Không được lợi ích gì (như #2 đã nói) thì làm sao người ta đóng góp tiếp tục được chứ?

Mình không nghĩ có thể thay đổi thực tế  ở trên, mình start project này, đơn giản là vì mình thích, và mình muốn làm. Chẳng có lý do to lớn gì ở đây cả.
Vậy mình giải quyết 3 vấn đề ở trên ra sao?

- #1 - Mình tin sẽ có người có muốn đóng góp cho 1 project open source. Và tất nhiên, phải có lợi ích gì đó để các bạn đóng góp cho 1 project như thế.
- #2 - Về bản thân người start project, là mình, lợi ích để mình làm cái này nhiều lắm. Những cái nổi bật như là mình sẽ có một project để mình show lên cho nhà tuyển dụng - một thứ quan trọng nếu muốn tìm việc ở các công ty nước ngoài, mình học thêm về JS, luyện kỹ năng quản lý nhóm và lên kế hoạch, tiếp cận SCRUM, ...
- #3 - Thời gian thì một tuần mình có thế dành ra được 20h cho project này

## Chủ đề
Mình chọn chủ đề là "Market Place Online". Chủ đề này  không quá phức tạp, đồng thời có đầy đủ những thứ hay ho mà ta có thể làm. Và quan trọng nhất: Mình quen thuộc với loại project này nhất.

## Tổng quan
Chúng ta sẽ làm một trang giống như thế này, ([BanXeHoi](https://banxehoi.com/)) , Chúng ta cần làm 3 phần:

- Trang frontend, cái này chắc mọi người biết rồi nên không cần nói nhiều
- Trang Admin, Dùng cho các tính năng quản lý, và sử dụng.
- Trang CRM, trang quản lý quan hệ khách hàng, để dành cho dân Sale xài, bán các gói dịch vụ kiếm tiền.

## Công nghệ sử dụng

- Ngôn ngữ chính: Javascript, tất nhiên.
- Loopback Framework, hỗ trợ dựng nhanh API, xem thêm tại [Loopback by IBM](http://loopback.io/)
- ReactJS, xem thêm tại [ReactJS by Facebook](https://facebook.github.io/react/)
- MySQL, đơn giản, dễ dùng. Project này chưa phải là nơi lý tưởng để mình bắt đầu sử dụng MongoDB mặc dù dùng MongoDB khá là sướng
- Docker, để tạo nên sự thống nhất trong môi trường phát triển, xem thêm tại [Docker](https://www.docker.com/)

## Cách thực hiện
Project này mình sẽ học theo các thực hiện của SCRUM, theo mình hiểu thì chia task ra những phần nhỏ rồi ai có thể làm gì rồi tự pick lấy.

- Mình sẽ chia task trên bản bản Google Sheet (Excel Online), đồng thời tạo task trên Github. Đáng lẽ chúng ta nên tạo trên một dịch vụ quản lý nhưng mà mình không có tiền để đăng ký ([Jira](https://www.atlassian.com/software/jira))
- Mỗi bạn tham gia, cần phải học các để hoàn thành một task trong đó. Không quan trọng bạn làm bao lâu, mà quan trọng nhất là cách bạn code để có thể "hòa hợp" với code của người khác. Cái nào không hiểu thìì bạn phải tự tìm hiểu cách để giải quyết vấn đề.
- Nếu được, mình sẽ tìm người để review code của project, giúp chúng ta nâng cao khả năng. Nhưng hi vọng mong manh lắm nên đừng ai hi vọng quá.

## Nhân sự
Lý tưởng nhất gồm 4 nhóm,

- System: Khởi tạo Docker, cấu hình server, quản  lý  kỹ thuật, ...
- Backend Dev: Sử dụng Loopback để tạo API, thiết kế hệ thống - database, ...
- Frontend Dev: Tạo giao diện trang Frontend, dùng reactJS build trang Admin và CRM, có thể dùng SCSS chúng ta có thể.
- Tester: Viết test case, tốt nhất test được bằng Mocha - xem thêm tại [MochaJS](https://mochajs.org/), quản lý SCRUM, tiến độ project, "Deadline", nhân sự,...

Thật sự thì mình không nghĩ chúng ta có đủ 4 nhóm đâu. Có thể một người sẽ phải kiêm nhiệm ít nhất 2 nhóm, đặc biệt phần Tester là mình thấy khó có người sẽ join. Cho nên Dev viết thì Dev test luôn.

## Lợi ích của người tham gia
- Bạn có một Project để show cho nhà tuyển dụng, nhất là nhà tuyển dụng cho công ty nước ngoài
- Học được kha khá thứ với các công nghệ mình đã liệt kê, nổi bật nhất có lẽ là Docker, NodeJS
- Học được cách vận hành một project thực tế, từ nhân sự làm việc, họp tác nhóm đến việc những khó khăn các bạn có thể đổi mặt như "code ướt" (Vi phạm nguyên tắc "Don't Repeat Yourself" - DRY), "code thối" (Không một ai có thể tránh được, không sớm thì muộn bạn cũng sẽ tạo ra những đoạn code chắp vá để giải quyết nhanh một vấn đề, do khách quan lẫn chủ quan), tìm cách ráp code của bạn với một đống  "code thối" - cách mà bạn gọi code của người đi trước - maà không làm crash hệ thống (thật sự mình thường xuyên bực bội vì việc phải đọc code của người khác rồi ráp code mình vào, nhưng sau này mình hiểu rằng người đi sau mình cũng chửi code mình ầm lên cả thôi).

Cái #3 mới là cái quan trọng nhất - theo mình nghĩ -  để giúp các bạn join vào một project. Nhất là với các bạn sinh viên, sự thật bạn học trong trường cần hàng tá bước chuẩn bị, họp hành để bắt tay vào ... xây dựng kế hoạch, nhưng trong thực tế sáng nhận yêu cần lúc 10h, chiều 5h demo thì có mà thánh mới làm đủ hết các bước. Chúng ta phải tinh giảm bớt các bước, vì thế mà bug dễ dàng sinh ra, rồi ta fix nhanh (k fix nhanh thì mất tiền), rồi lại ra bug. Chúng ta fix bug của người khác, chúng ta lại tạo ra bug của mình, rồi người đi sau fix bug của chúng ta, họ lại tạo ra bug của họ. Một vòng tròn lẩn quẩn.

### Vấn đề bản quyền
Mình đặt LICENSE là MIT nên các bạn có thể sử dụng thoải mái, có thể dùng  source để kinh doanh, bán lại, tùy mọi người.

##### Giới thiệu bản thân
Mình tên Tuấn, 1993, hiện tại là PHP dev, đang chuyển dần sang hướng DevOps với Javascript. Những kỹ năng mình có:

- Javascript: 6/10, chủ yếu là mình học pure JS, chưa tiếp cận nhiều lắm với các framework hoặc platform, (NodeJS thì có dự án demo bằng ExpressJS, ReactJS thì có TodoList)
- Server: Cấu hình được LAMP (Phalcon framework, proxy Nginx cho Apache), Docker, Redis, ElasticSearch, MongoDB
- Database: không có gì nổi bật, từng sử dụng MySQL, PostgreSQL, MonggoDB, Redis, ElasticSearch
- Quản lý: Hầu như rất ít, mình không có khiểu quản lý, chủ yếu giao task rồi mọi người tự làm.
- Các kỹ năng khác: Git, SVN

---
Hi vọng các bạn sẽ thích project này.
Tuấn
2017-02-19

