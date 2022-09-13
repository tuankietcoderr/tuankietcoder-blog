---
title: REST API là gì? Định nghĩa REST API cho người mới bắt đầu
date: '2022-09-13'
tags: ['definition', 'rest', 'api']
images: ['/static/thumbnails/2022/rest-api.png']
draft: false
summary: Một chương trình có API ngụ ý rằng một số phần dữ liệu của nó được hiển thị cho khách hàng sử dụng. Máy khách có thể là giao diện người dùng của cùng một chương trình hoặc một chương trình bên ngoài.
---

![REST API](/static/thumbnails/2022/rest-api.png)

<TOCInline toc={props.toc} asDisclosure />

Trong bài viết này, bạn sẽ tìm hiểu thuật ngữ REST có nghĩa là gì và cách nó cho phép chúng ta giao tiếp với máy chủ một cách hiệu quả.

Trước khi đi vào REST, chúng ta hãy tìm hiểu API là gì. Tôi tin rằng điều này sẽ giúp bạn hiểu REST tốt hơn.

## API là gì?

Vì chúng ta đang nói về API REST, định nghĩa của chúng ta về API sẽ không vượt ra ngoài phạm vi của web.

API là viết tắt của **Giao diện lập trình ứng dụng**. API thiết lập kết nối giữa các chương trình để chúng có thể truyền dữ liệu.

Một chương trình có API ngụ ý rằng một số phần dữ liệu của nó được hiển thị cho khách hàng sử dụng. Máy khách có thể là giao diện người dùng của cùng một chương trình hoặc một chương trình bên ngoài.

Để có được dữ liệu này, một yêu cầu có cấu trúc phải được gửi đến API. Nếu yêu cầu đáp ứng các yêu cầu mong muốn, một phản hồi chứa dữ liệu sẽ được gửi trở lại nơi yêu cầu được thực hiện. Phản hồi này thường ở dạng dữ liệu `JSON` hoặc `XML`.

Trong một số trường hợp, bạn sẽ cần một số loại ủy quyền để có quyền truy cập vào dữ liệu API bên ngoài.

Mọi API đều có tài liệu cho bạn biết dữ liệu nào có sẵn và cách cấu trúc yêu cầu của bạn để nhận được phản hồi hợp lệ.

## Ví dụ về API

Có rắc rối với bạn lắm không?

Hãy sử dụng một tình huống thực tế để làm ví dụ.

Hãy tưởng tượng đến thăm một nhà hàng mới. Bạn đến đó để gọi đồ ăn, và vì bạn chưa từng đến đó trước đây nên bạn không biết chính xác loại đồ ăn họ phục vụ.

Sau đó, máy chủ tiếp cận bạn với một thực đơn để bạn có thể chọn những gì bạn muốn ăn. Sau khi thực hiện lựa chọn của bạn, người phục vụ sẽ đi vào nhà bếp và lấy thức ăn của bạn.

Trong trường hợp này, máy chủ là API đang kết nối bạn với nhà bếp. Tài liệu của API là menu. Yêu cầu được đưa ra khi bạn chọn món bạn muốn ăn và phản hồi là thức ăn được phục vụ.

Tôi hy vọng điều đó sẽ giúp bạn hiểu API là gì và nó hoạt động như thế nào.

![API Workflow](https://user-images.githubusercontent.com/828489/61420964-89c8a900-a8ca-11e9-8d74-daae0874e317.png)

## REST là cái gì?

REST là viết tắt của **Representational State Transfer**. Nó là một tiêu chuẩn hướng dẫn thiết kế và phát triển các quy trình cho phép chúng ta tương tác với dữ liệu được lưu trữ trên máy chủ web.

Định nghĩa trên có thể trông không phức tạp hoặc "chuyên nghiệp" như những định nghĩa bạn gặp trên internet, nhưng mục đích ở đây là để bạn hiểu mục đích cơ bản của REST API.

Một API tuân thủ một số hoặc tất cả [6 ràng buộc](https://en.wikipedia.org/wiki/Representational_state_transfer#:~:text=The%20REST%20architectural%20style%20defines,visibility%2C%20portability%2C%20and%20reliability.) hướng dẫn của REST được coi là RESTful.

chúng ta có thể giao tiếp với các máy chủ bằng giao thức `HTTP`. Với các giao thức này, chúng ta có thể Tạo (Create), Đọc (Read), Cập nhật (Update) và Xóa dữ liệu (Delete) - hay còn gọi là hoạt động **CRUD**.

Nhưng làm thế nào chúng ta có thể thực hiện các hoạt động CRUD này và giao tiếp với dữ liệu trên máy chủ?

Chúng ta có thể làm điều này bằng cách gửi các yêu cầu HTTP và đó là nơi REST xuất hiện. REST đơn giản hóa quá trình giao tiếp bằng cách cung cấp các phương thức/hoạt động/động từ HTTP khác nhau mà chúng ta có thể sử dụng để gửi yêu cầu đến máy chủ.

## Cách để giao tiếp với Server bằng cách sử dụng REST APIs

Như chúng ta đã thảo luận trong phần trước, các API REST giúp quá trình giao tiếp với máy chủ dễ dàng hơn đối với chúng ta bằng cách cung cấp cho chúng ta các phương thức yêu cầu HTTP khác nhau. Các phương pháp thường được sử dụng là:

- GET: Phương thức `GET` dùng để đọc dữ liệu từ server.
- POST: Phương thức `POST` dùng để tạo dữ liệu mới trên server.
- PUT/PATCH: Phương thức `PUT/PATCH` dùng để cập nhật dữ liệu trên server.
- DELETE: Phương thức `DELETE` dùng để xóa dữ liệu trên server.

Các phương pháp này do REST cung cấp cho phép chúng ta thực hiện các hoạt động CRUD một cách dễ dàng. Đó là:

Create => POST.
Read => GET.
Update => PATCH/PUT.
Delete => DELETE.

Vì vậy, nếu chúng ta thực hiện một yêu cầu đến một máy chủ, giả sử để truy xuất dữ liệu, chúng ta sẽ thực hiện một yêu cầu GET tới một điểm cuối/tài nguyên do máy chủ cung cấp. Điểm cuối tương tự như một URL.

Nếu yêu cầu được thực hiện là một yêu cầu hợp lệ, thì máy chủ sẽ trả lời chúng ta bằng dữ liệu mà chúng ta yêu cầu. Nó cũng gửi mã trạng thái trong đó `200` là thành công và `400` là lỗi máy khách.

Dưới đây là một ví dụ về một yêu cầu được thực hiện đối với `API JSONPlaceholder` bằng JavaScript:

```js
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json))
```

Khi thực hiện một yêu cầu bằng cách sử dụng API tìm nạp, phương thức mặc định là phương thức `GET` - vì vậy chúng ta không buộc phải chỉ định nó. Nhưng chúng ta cần chỉ định khi đưa ra yêu cầu bằng các phương thức khác.

Trong ví dụ mã ở trên, điểm cuối (endpoint) là https://jsonplaceholder.typicode.com và dữ liệu cụ thể mà chúng ta đang yêu cầu là một mục việc cần làm. Dữ liệu sẽ được trả lại cho chúng ta ở định dạng JSON.

Nếu chúng ta thực hiện một yêu cầu POST, thì chúng ta sẽ bao gồm loại phương thức sẽ là `POST` và một phần thân yêu cầu sẽ chứa dữ liệu chúng ta đang tạo để gửi đến máy chủ.

Việc xóa sẽ yêu cầu chúng ta sử dụng phương thức yêu cầu tương ứng cùng với id của mục việc cần làm mà chúng ta muốn xóa. Như thế này:

```js
fetch('https://jsonplaceholder.typicode.com/posts/3', {
  method: 'DELETE',
})
```

Việc cập nhật sẽ yêu cầu cả id và nội dung yêu cầu sẽ được sử dụng để cập nhật dữ liệu. Đây là một ví dụ:

```js
fetch('https://jsonplaceholder.typicode.com/posts/5', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'new todo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json))
```

## Tổng kết

Trong hướng dẫn này, bạn đã biết REST là gì và cách nó giúp chúng ta giao tiếp với máy chủ một cách hiệu quả.

Chúng ta đã định nghĩa một API và đưa ra một ví dụ để giúp giải thích ý nghĩa của nó. chúng ta cũng đã biết một số phương pháp được cung cấp bởi REST để tạo, đọc, cập nhật và xóa dữ liệu được lưu trữ trên máy chủ.

Cảm ơn bạn đã đọc!

Source: https://www.freecodecamp.org/news/what-is-rest-rest-api-definition-for-beginners/
