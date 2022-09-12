---
title: Lập trình hướng đối tượng (OOP) - Khái niệm và ý nghĩa
date: '2022-09-13'
tags: ['oop', 'definition']
images: ['/static/thumbnails/2022/lap-trinh-huong-doi-tuong-khai-niem-va-y-nghia.png']
draft: false
summary: Trong xã hội được thúc đẩy bởi công nghệ ngày nay, kiến thức lập trình máy tính đang có nhu cầu cao. Và là một nhà phát triển, bạn sẽ cần biết nhiều ngôn ngữ lập trình khác nhau.
---

![Lập trình hướng đối tượng](/static/thumbnails/2022/lap-trinh-huong-doi-tuong-khai-niem-va-y-nghia.png)

<TOCInline toc={props.toc} asDisclosure />

Trong xã hội được thúc đẩy bởi công nghệ ngày nay, kiến thức lập trình máy tính đang có nhu cầu cao. Và là một nhà phát triển, bạn sẽ cần biết nhiều ngôn ngữ lập trình khác nhau.

Trong vài thập kỷ qua, nhiều ngôn ngữ lập trình đã trở nên phổ biến. Bạn có thể xem các ngôn ngữ phổ biến được xếp hạng như thế nào trong bảng xếp hạng thời gian thực [tại đây](https://www.tiobe.com/tiobe-index).

Trong khi các ngôn ngữ mới đang được tạo ra, các ngôn ngữ hiện có luôn được cập nhật để làm cho chúng tốt hơn.

Mặc dù hầu hết các ngôn ngữ lập trình đều có một số điểm tương đồng, nhưng mỗi ngôn ngữ đều có các quy tắc và phương pháp cụ thể làm cho nó trở nên độc đáo.

Một khái niệm phổ biến giữa nhiều ngôn ngữ lập trình là **Lập trình hướng đối tượng**.

Khi tôi lần đầu tiên nhìn thấy thuật ngữ này, nó là một chút khó hiểu. Tôi đã mất một thời gian để thực sự hiểu được tầm quan trọng của nó trong lập trình. Nhưng điều này cũng nhân đôi như một cơ hội để tôi tìm hiểu các khái niệm chính của nó, và biết tầm quan trọng của nó đối với sự nghiệp của một nhà phát triển và khả năng giải quyết các thách thức.

Trong bài viết này, chúng ta sẽ tìm hiểu tổng thể về **Lập trình hướng đối tượng** (OOP) mà không dựa vào một ngôn ngữ cụ thể nào. Bạn sẽ tìm hiểu nó là gì, tại sao nó lại phổ biến như một mô hình lập trình, cấu trúc của nó, cách thức hoạt động, nguyên tắc của nó và hơn thế nữa.

Bắt đầu nào.

## Lập trình hướng đối tượng là gì?

Nếu bạn thực hiện một tìm kiếm nhanh trên internet về lập trình hướng đối tượng là gì, bạn sẽ thấy rằng OOP được định nghĩa là một mô hình lập trình dựa trên khái niệm về các lớp và đối tượng.

Bây giờ, đối với người mới bắt đầu, điều đó có thể hơi khó hiểu - nhưng không cần phải lo lắng. Tôi sẽ cố gắng giải thích nó theo cách đơn giản nhất có thể, giống như câu nói nổi tiếng "Hãy giải thích cho tôi như tôi lên 5".

Dưới đây là tổng quan ngắn gọn về những gì bạn có thể đạt được với OOP: bạn có thể sử dụng nó để cấu trúc chương trình phần mềm thành các khối mã đơn giản, có thể tái sử dụng (trong trường hợp này thường được gọi là các lớp), sau đó bạn sử dụng để tạo các phiên bản riêng lẻ của các đối tượng.

Vì vậy, chúng ta hãy tìm một định nghĩa dễ dàng hơn về lập trình hướng đối tượng và tìm hiểu thêm về nó.

## Giải thích OOP như tôi 5 tuổi

Từ hướng đối tượng là sự kết hợp của hai thuật ngữ, đối tượng và hướng.

Nghĩa từ điển của một đối tượng là "một thực thể tồn tại trong thế giới thực", và định hướng có nghĩa là "quan tâm đến một loại sự vật hoặc thực thể cụ thể".

Theo thuật ngữ cơ bản, OOP là một mẫu lập trình được xây dựng xung quanh các đối tượng hoặc thực thể, vì vậy nó được gọi là lập trình hướng đối tượng.

Để hiểu rõ hơn về khái niệm này, chúng ta hãy xem xét các chương trình phần mềm thường được sử dụng: Một ví dụ tốt để giải thích điều này sẽ là việc sử dụng máy in khi bạn in tài liệu.

Bước đầu tiên là bắt đầu hành động bằng cách nhấp vào lệnh in hoặc sử dụng phím tắt. Tiếp theo, bạn cần chọn máy in của mình. Sau đó, bạn sẽ đợi phản hồi cho bạn biết tài liệu đã được in hay chưa.

Đằng sau những gì chúng ta không thể nhìn thấy, lệnh bạn nhấp vào sẽ tương tác với một đối tượng (máy in) để thực hiện nhiệm vụ in.

Có lẽ bạn có thể tự hỏi, chính xác thì làm thế nào mà OOP lại trở nên phổ biến như vậy?

## Cách OOP trở nên phổ biến

Các khái niệm về OOP bắt đầu xuất hiện từ những năm 60 với một ngôn ngữ lập trình gọi là [Simula](https://en.wikipedia.org/wiki/Simula). Mặc dù trước đây, các nhà phát triển không hoàn toàn nắm bắt những tiến bộ đầu tiên trong ngôn ngữ OOP, nhưng các phương pháp luận vẫn tiếp tục phát triển.

Tua nhanh đến những năm 80, và một bài xã luận do David Robinson viết là một trong những bài giới thiệu đầu tiên về OOP, vì nhiều nhà phát triển không biết nó tồn tại.

Giờ đây, các ngôn ngữ như C ++ và Eiffel đã trở nên phổ biến hơn và trở nên phổ biến hơn trong giới lập trình máy tính. Sự công nhận tiếp tục phát triển trong suốt những năm 90 và với sự xuất hiện của Java, OOP đã thu hút một lượng lớn người theo dõi.

Vào năm 2002 cùng với việc phát hành .NET Framework, Microsoft đã giới thiệu một ngôn ngữ OOP hoàn toàn mới gọi là C # - ngôn ngữ này thường được mô tả là ngôn ngữ lập trình mạnh mẽ nhất.

Thật thú vị rằng, các thế hệ sau, khái niệm tổ chức mã của bạn thành các đối tượng có ý nghĩa để mô hình hóa các phần của vấn đề của bạn vẫn tiếp tục đánh đố các lập trình viên.

Nhiều người chưa biết máy tính hoạt động như thế nào sẽ thấy suy nghĩ về lập trình hướng đối tượng khá tự nhiên. Ngược lại, nhiều người có kinh nghiệm với máy tính ban đầu nghĩ rằng có điều gì đó kỳ lạ về hệ thống hướng đối tượng.

## Cấu trúc của OOP

![Cấu trúc OOP](https://www.freecodecamp.org/news/content/images/size/w1600/2022/09/OOP.png)

Hãy tưởng tượng rằng bạn đang điều hành một cửa hàng thú cưng, với rất nhiều giống chó khác nhau và bạn phải theo dõi tên, tuổi, ngày theo học và các chi tiết bảo dưỡng phổ biến khác. Bạn sẽ thiết kế phần mềm có thể tái sử dụng như thế nào để xử lý điều này?

Hãy nhớ rằng chúng ta có nhiều giống, vì vậy việc viết mã cho mỗi giống sẽ rất mệt mỏi. Nhưng chúng ta có thể nhóm các thông tin liên quan lại với nhau để có thể tạo ra mã ngắn hơn và có thể tái sử dụng nhiều hơn.

Đó là nơi các khối xây dựng đi vào để giúp chúng ta thực hiện điều này bằng cách sử dụng **Lớp**, **Đối tượng**, **Phương thức** và **Thuộc tính**.

Hãy đi sâu và hiểu chính xác các khối xây dựng này là gì:

- Lớp - đây là những kiểu dữ liệu do người dùng xác định, đóng vai trò là bản thiết kế cho các đối tượng, thuộc tính và phương thức.
- Đối tượng - Đây là các thể hiện của một lớp với dữ liệu được xác định cụ thể. Khi một lớp được định nghĩa ban đầu, mô tả là đối tượng duy nhất được định nghĩa.
- Phương thức - Đây là những hàm được định nghĩa bên trong một lớp mô tả hành vi của một đối tượng. Chúng hữu ích cho việc tái sử dụng hoặc giữ chức năng được gói gọn bên trong một đối tượng tại một thời điểm. Khả năng tái sử dụng mã là một lợi ích lớn khi gỡ lỗi.
- Thuộc tính - Chúng được định nghĩa trong mẫu lớp và đại diện cho trạng thái của một đối tượng. Các đối tượng chứa dữ liệu được lưu trữ trong trường thuộc tính.

## Nguyên tắc của OOP

![Nguyên tắc của OOP](https://www.freecodecamp.org/news/content/images/2021/10/Creative-Business-Template-Presentation--2-.png)

Để chúng ta biết cách viết mã OOP tốt, chúng ta cần hiểu 4 trụ cột của OOP mà chúng ta nên tuân thủ:

- Tính đóng gói
- Tính kế thừa
- Tính trừu tượng
- Tính đa hình

Hãy đi sâu vào và hiểu rõ hơn ý nghĩa chính xác của từng điều này.

### Tính đóng gói

Đây là khái niệm liên kết dữ liệu với nhau. Các chức năng thao tác thông tin và giữ nó an toàn. Không có quyền truy cập trực tiếp nào được cấp cho thông tin trong trường hợp nó bị ẩn. Nếu bạn muốn có quyền truy cập vào thông tin, bạn cần phải tương tác với bài báo phụ trách thông tin.

Nếu bạn đang làm việc trong một công ty, khả năng cao là bạn đã có kinh nghiệm với việc đóng gói.

Hãy nghĩ về một bộ phận nhân sự. Các nhân viên phòng nhân sự đóng gói (ẩn) dữ liệu về nhân viên. Họ xác định cách dữ liệu này sẽ được sử dụng và thao tác. Mọi yêu cầu về dữ liệu công nhân hoặc yêu cầu cập nhật thông tin phải được chuyển qua chúng.

Bằng cách đóng gói dữ liệu, bạn làm cho thông tin của hệ thống của mình an toàn hơn và đáng tin cậy hơn. Bạn cũng có thể theo dõi thông tin đang được truy cập như thế nào và những thao tác nào được thực hiện trên nó. Điều này làm cho việc bảo trì chương trình dễ dàng hơn và đơn giản hóa quá trình gỡ lỗi.

### Tính kế thừa

Tính kế thừa cho phép các lớp kế thừa các tính năng của các lớp khác. Ví dụ, bạn có thể phân loại tất cả các con mèo cùng có những đặc điểm chung nhất định, chẳng hạn như có bốn chân. Các giống chó của họ tiếp tục phân loại chúng thành các nhóm phụ với các thuộc tính chung, như kích thước và màu sắc.

Bạn sử dụng tính kế thừa trong OOP để phân loại các đối tượng trong chương trình của mình theo đặc điểm và hiệu suất chung. Điều này làm cho việc làm việc với các đối tượng và lập trình dễ dàng hơn, vì nó cho phép bạn trộn các đặc điểm chung vào một đối tượng mẹ và kế thừa những đặc điểm này trong các đối tượng con.

Ví dụ: bạn sẽ xác định một đối tượng nhân viên xác định tất cả các đặc điểm tổng thể của nhân viên trong công ty của bạn.

Sau đó, bạn sẽ có thể xác định đối tượng người quản lý kế thừa các đặc điểm của đối tượng người lao động nhưng cũng thêm các đặc điểm duy nhất cho người quản lý trong công ty của bạn. Đối tượng manager sẽ tự động phản ánh bất kỳ thay đổi nào trong quá trình triển khai đối tượng worker.

### Tính trừu tượng

Trừu tượng đề cập đến việc sử dụng các lớp đơn giản để biểu diễn độ phức tạp. Về cơ bản, chúng tôi sử dụng tính trừu tượng để xử lý độ phức tạp bằng cách cho phép người dùng chỉ xem thông tin hữu ích và có liên quan.

Một ví dụ điển hình để giải thích điều này là lái xe số tự động. Khi bạn có một chiếc ô tô số tự động và muốn đi từ điểm A đến điểm B, tất cả những gì bạn cần làm là cho nó điểm đến và khởi động xe. Sau đó, nó sẽ đưa bạn đến đích của bạn.

Những gì bạn không cần biết là chiếc xe được tạo ra như thế nào, cách di chuyển và làm theo đúng hướng dẫn, cách chiếc xe lọc ra các tùy chọn khác nhau để tìm ra tuyến đường tốt nhất, v.v.

Khái niệm tương tự cũng được áp dụng khi xây dựng các ứng dụng OOP. Bạn thực hiện việc này bằng cách ẩn các chi tiết không cần thiết để người dùng có thể nhìn thấy. Tính trừu tượng làm cho nó dễ dàng hơn và cho phép bạn xử lý các dự án của mình trong các phần nhỏ có thể quản lý được.

### Tính đa hình

Đây là sức mạnh của hai đối tượng khác nhau để trả lời một mẫu. Chương trình sẽ xác định cách sử dụng nào là quan trọng đối với mỗi lần thực thi thứ từ lớp cha để giảm sự trùng lặp mã. Nó cũng cho phép các loại đối tượng khác nhau tương tác với cùng một giao diện.

## Ví dụ về ngôn ngữ OOP

Công nghệ và ngôn ngữ lập trình luôn phát triển. Chúng tôi đã thấy sự gia tăng của các ngôn ngữ may lang trong danh mục OOP, nhưng Simula được ghi nhận là ngôn ngữ OOP đầu tiên.

Các ngôn ngữ lập trình được coi là OOP thuần túy coi mọi thứ như các đối tượng, trong khi các ngôn ngữ khác được thiết kế chủ yếu với một số quy trình thủ tục.

Ví dụ về ngôn ngữ OOP:

- Scala
- Emerald
- Ruby
- JADE
- Java
- Python
- C++
- Javascript
- Visual Basic .NET
- PHP

Và còn nhiều nữa.

## Lợi ích của OOP

Trong suốt những năm 70 và 80, các ngôn ngữ lập trình hướng theo thủ tục như C và Pascal đã được sử dụng rộng rãi để phát triển các hệ thống phần mềm theo định hướng kinh doanh. Nhưng khi các chương trình thực hiện các chức năng nghiệp vụ phức tạp hơn và tương tác với các hệ thống khác, những thiếu sót của phương pháp luận lập trình cấu trúc bắt đầu xuất hiện.

Do đó, nhiều nhà phát triển phần mềm đã chuyển sang phương pháp luận hướng đối tượng và ngôn ngữ lập trình để giải quyết các vấn đề gặp phải. Những lợi ích của việc sử dụng ngôn ngữ này bao gồm những điều sau:

- **Khả năng sử dụng lại mã** - thông qua kế thừa, bạn có thể sử dụng lại mã. Điều này có nghĩa là một nhóm không phải viết cùng một mã nhiều lần.
- Cải thiện khả năng tích hợp với các hệ điều hành hiện đại.
- **Cải thiện Năng suất** - các nhà phát triển có thể xây dựng các chương trình mới một cách dễ dàng và nhanh chóng thông qua việc sử dụng nhiều thư viện.
- Tính đa hình cho phép một chức năng duy nhất thích ứng với lớp mà nó được đặt trong.
- Dễ dàng nâng cấp và các lập trình viên cũng có thể thực hiện các chức năng của hệ thống một cách độc lập.
- Thông qua các đối tượng **đóng gói** có thể được tự chứa. Nó cũng giúp xử lý sự cố và hợp tác phát triển dễ dàng hơn.
- Bằng cách sử dụng tính năng đóng gói và trừu tượng, mã phức tạp được ẩn đi, bảo trì phần mềm dễ dàng hơn và các giao thức internet được bảo vệ.

## Tổng kết

Ngày nay, hầu hết các ngôn ngữ đều cho phép các nhà phát triển kết hợp các mô hình lập trình. Điều này thường là vì chúng sẽ được sử dụng cho các phương pháp lập trình khác nhau.

Ví dụ, hãy sử dụng JavaScript - bạn có thể sử dụng nó cho cả lập trình OOP và chức năng. Khi bạn viết mã JS hướng đối tượng, bạn phải suy nghĩ cẩn thận về cấu trúc của chương trình và lập kế hoạch khi bắt đầu viết mã. Bạn có thể làm điều này bằng cách xem cách bạn có thể chia các nhu cầu cần thiết thành các lớp đơn giản, có thể tái sử dụng, sẽ là các bản thiết kế chi tiết quen thuộc của các đối tượng.

Các nhà phát triển làm việc với OOP thường đồng ý rằng nói chung, việc sử dụng nó cho phép cấu trúc dữ liệu tốt hơn và khả năng tái sử dụng của mã. Điều này giúp tiết kiệm thời gian về lâu dài.

Source: https://www.freecodecamp.org/news/what-is-object-oriented-programming/
