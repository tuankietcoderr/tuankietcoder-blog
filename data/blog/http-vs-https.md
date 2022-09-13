---
title: HTTP vs HTTPS - Sự khác biệt
date: '2022-09-13'
tags: ['definition', 'https', 'http']
images: ['/static/thumbnails/2022/http-vs-https.png']
draft: false
summary: Hầu hết người dùng máy tính chỉ thấy rằng trình duyệt đang nói với họ rằng ứng dụng của họ không an toàn và một hacker có thể muốn đánh cắp thông tin quan trọng của họ. Điều này dẫn đến việc người dùng bỏ chạy nhanh hơn kỷ lục hiện tại của Usain Bolt.
---

![REST API](/static/thumbnails/2022/http-vs-https.png)

<TOCInline toc={props.toc} asDisclosure />

Chúng ta tương tác với `HTTP` và `HTTPS` rất nhiều trong cuộc sống hàng ngày, nhưng nhiều người không biết sự khác biệt.

Hầu hết người dùng máy tính chỉ thấy rằng trình duyệt đang nói với họ rằng ứng dụng của họ không an toàn và một hacker có thể muốn đánh cắp thông tin quan trọng của họ. Điều này dẫn đến việc người dùng bỏ chạy nhanh hơn kỷ lục hiện tại của Usain Bolt.

Nhưng điều này có thể tránh được. Đó là nơi `HTTPS` xuất hiện và thay thế `HTTP`. Và chúng ta sẽ thảo luận về điều đó ngày hôm nay. :)

## HTTP là gì?

**Hyper Text Transfer Protocol** (Giao thức truyền tải siêu văn bản), hay HTTP, là một phương thức giao tiếp giữa trình duyệt của bạn và trang web bạn muốn truy cập (máy chủ web).

Điều này cho phép bạn lấy thông tin bạn cần từ máy chủ trên trình duyệt của mình.

Một cách tốt để hiểu HTTP và HTTPS là sử dụng phép loại suy. Chúng tôi biết rằng các trình duyệt và máy chủ giao tiếp bằng HTTP. HTTP thường ở dạng văn bản thuần túy. Nhiều người trên khắp thế giới nói tiếng Anh. Nếu một hacker biết tiếng Anh xâm nhập vào máy tính của bạn, họ có thể dễ dàng nhìn thấy bất kỳ mật khẩu nào bạn nhập vào.

Ở đây ở Kenya, bằng tiếng mẹ đẻ của tôi, chúng tôi nói tiếng Turkana. Nếu bạn không nói được ngôn ngữ này và bạn đến Kenya và thấy hai người Turkana đang nói, bạn có thể không hiểu họ đang nói gì.

Đó là vẻ đẹp của HTTPS. Nó được mã hóa để tin tặc không hiểu được giao tiếp giữa trình duyệt và máy chủ.

![HTTP Workflow](https://user-images.githubusercontent.com/33565767/178446926-d904cc04-57cd-4427-bdcc-e76c35f8b51b.png)

Máy khách, trong hầu hết các trường hợp là trình duyệt web, gửi một thông báo mà theo thuật ngữ máy tính là một yêu cầu. Sau đó, máy chủ sẽ đưa ra một câu trả lời, đó là phản hồi.

HTTP rất hữu ích trong việc gửi các tài liệu HTML cũng như hình ảnh và video đến trình duyệt web để người dùng xem. Nó cũng được sử dụng để gửi dữ liệu đến máy chủ dưới dạng HTML.

![Web server workflow](https://user-images.githubusercontent.com/33565767/178460366-d0568e2d-d107-4afe-a778-0ce1d224b176.png)

### Cách HTTP hoạt động

HTTP gửi dữ liệu thông qua văn bản thuần túy. Ví dụ: nếu bạn truy cập vào trang web của ngân hàng và họ đang sử dụng HTTP, thì một tin tặc có thể truy cập và đọc bất kỳ thông tin nào mà bạn gửi.

Đây là lúc HTTPS xuất hiện. Nhiều công ty đã triển khai HTTPS để có thể cho phép người dùng của họ gửi dữ liệu một cách an toàn. Chúng tôi sẽ thảo luận thêm về vấn đề này bên dưới.

### Tính năng của HTTP

- Văn bản thô. Ban đầu khi HTTP được phát triển, các nhà phát triển đã lưu ý một điều: chỉ phục vụ các tài liệu văn bản. Bây giờ, HTTP được sử dụng theo nhiều cách hơn so với dự định ban đầu.
- Giao thức lớp 7. HTTP là một giao thức lớp 7 trong Mô hình mạng OSI. Lớp 7 là lớp ứng dụng. Lớp này là lớp trên cùng trong mô hình OSI. Các lớp khác bao gồm vật lý, liên kết dữ liệu, mạng, truyền tải, phiên và lớp trình bày. Để tìm hiểu thêm về mô hình OSI, bạn có thể xem video miễn phí này trên kênh YouTube của freeCodeCamp của Brian Ferrill về cách thức hoạt động của Internet. Có nhiều cookie hơn trong jar khác với mô hình OSI.
- Không an toàn. Khi bạn gửi các yêu cầu HTTP, chúng sẽ được gửi qua văn bản thuần túy. Ngoài ra, khi bạn nhận được phản hồi, bạn sẽ nhận được nó thông qua văn bản thuần túy. Điều này có nghĩa là bất kỳ ai có thể truy cập các yêu cầu và phản hồi đều có thể đọc chúng.
  ![HTTP](https://user-images.githubusercontent.com/33565767/179723161-3ec27c27-df79-4749-b810-974583cf1687.png)

- Trọng lượng nhẹ. Ưu điểm của HTTP là nó rất nhẹ. Do đó, nó rất nhanh vì nó không thực hiện công cụ mã hóa để bảo mật dữ liệu, giống như HTTPS.
- HTTP thường lắng nghe trên cổng 80.

### Làm thế nào để biết nếu một trang web không an toàn

Khi một trang web không an toàn, Chrome thường sẽ gửi cảnh báo cho biết `Kết nối của bạn không ở chế độ riêng tư`.

![Insecure Connection](https://user-images.githubusercontent.com/33565767/182329336-d405d5b4-f5bb-45df-b936-aa1d04b9dffd.png)

Trên Chrome, thanh URL thường sẽ hiển thị `Không an toàn` bằng màu đỏ nếu một trang web không an toàn.

### Có phải tất cả các trang web HTTP đều không an toàn?

Vâng, hãy xem một ví dụ. Hãy tưởng tượng bạn đang duyệt một trang web meme, cười nhạo từng cái khi bạn cuộn qua. Nếu nó đang sử dụng HTTP, thì bạn đã không thành công. Nó không phải là một việc lớn.

Bạn cảm thấy nhàm chán và quyết định vào trang của ngân hàng để truy cập vào tài khoản của mình trên trình duyệt. Nếu trang web không sử dụng HTTPS, bạn cũng có thể đang cung cấp thông tin chi tiết tài khoản của mình cho tin tặc trên một đĩa bạc.

Vì vậy, điểm mấu chốt là, nếu bạn đang duyệt thông tin không quan trọng, HTTP vẫn ổn. Nhưng nếu bạn đang xử lý thông tin không an toàn, HTTP là không đủ.

## HTTPS là gì?

**Hyper Text Transfer Protocol Secure** (Giao thức truyền tải siêu văn bản an toàn), hay HTTPS, là một cách mà giao tiếp có thể diễn ra AN TOÀN giữa trình duyệt của bạn và trang web bạn muốn truy cập (máy chủ web).

### Cách HTTPS hoạt động

HTTPS tạo kết nối an toàn bằng cách sử dụng giao thức bảo mật mã hóa dữ liệu của bạn.

Đối với hầu hết các trang web, cách tốt nhất để có HTTPS là lấy Chứng chỉ SSL (Lớp cổng bảo mật) hoặc chứng chỉ TLS (Bảo mật lớp truyền tải).

Hiện tại, SSL đã đủ nâng cao để hỗ trợ TLS. Vì vậy, bạn không cần phải lấy chứng chỉ TLS.

### Tính năng của HTTPS

- Mã hóa dữ liệu. Mã hóa dữ liệu xảy ra thông qua giao thức TLS / SSL.
- Nó là một giao thức lớp 4 (Lớp vận chuyển).
- Việc trao đổi khóa công khai và khóa riêng diễn ra trong HTTPS để mã hóa và giải mã dữ liệu.
- HTTPS nặng hơn so với HTTP. Khi mã hóa và giải mã xảy ra trong HTTPS, nó sẽ trở nên nặng hơn.
- HTTPs lắng nghe trên cổng 443.

## Mã hóa hoạt động như thế nào?

![Encrypt](https://user-images.githubusercontent.com/33565767/180215739-5e731309-eda1-4993-927c-c9daa400c3c5.png)

Giả sử tôi nhập "Tôi là một nhà phát triển". Văn bản này được mã hóa khi tôi nhấp vào gửi, và sau đó nó được giải mã ở phía máy chủ.

Điều này cũng đúng từ phía máy chủ. Nếu tôi nhận được phản hồi từ máy chủ, trước tiên nó sẽ được mã hóa, sau đó sẽ được giải mã ở phía máy khách.

## Làm thế nào để biết một trang web có an toàn hay không?

Để biết rằng một trang web an toàn, bạn thường nhìn vào thanh URL nơi bạn có thể thấy một ổ khóa. Nếu có khóa, kết nối từ máy khách đến máy chủ được bảo mật.

![Secure Site](https://user-images.githubusercontent.com/33565767/178449484-738fb908-901d-4a61-9f8f-fa5a39029012.png)

Khi bạn nhấp vào biểu tượng ổ khóa, nó sẽ cho bạn biết thêm về kết nối an toàn.

![Lock](https://user-images.githubusercontent.com/33565767/180213859-21460cfa-6a8c-484e-81e5-5dba4fc31f2a.png)

## Chứng chỉ SSL (SSL Certificate) là gì?

Chứng chỉ SSL là một tệp nhỏ thông báo cho các trình duyệt biết rằng trang web của bạn – ví dụ: tuankietcoder.tech - là trang web của nó và nó là đáng tin cậy.

Để xác thực, chứng chỉ có thể xác nhận với máy khách (người dùng) rằng máy chủ mà họ đang kết nối là máy chủ quản lý miền đó. Tất cả điều này là để giữ an toàn cho người dùng khỏi các vấn đề bảo mật như giả mạo tên miền.

Nó chứa khóa công khai và cho bạn biết ai là chủ sở hữu của trang web mà bạn đang cố gắng kết nối. Nếu một trang web không có chứng chỉ SSL, nó không thể được mã hóa bằng TLS.

Cá nhân bạn có thể tạo chứng chỉ SSL của riêng mình (còn được gọi là chứng chỉ tự ký), nếu bạn là chủ sở hữu trang web. Vấn đề với cách tiếp cận này là các trình duyệt như Chrome không tin tưởng các chứng chỉ này. Họ thích các chứng chỉ đáng tin cậy được cấp bởi cơ quan cấp chứng chỉ.

## Mã hóa SSL hoạt động như thế nào?

Có hai loại mã hóa SSL, không đối xứng và đối xứng. Sự kết hợp của bất đối xứng và đối xứng là điều làm cho Mã hóa SSL hoạt động. Hãy xem chúng dưới đây để tìm hiểu thêm.

### Mã hóa bất đối xứng là gì?

Trong mã hóa bất đối xứng, bạn có hai khóa. Đó là:

1. Public Key
2. Private Key
   ![Asymmetric Encryption](https://user-images.githubusercontent.com/33565767/181718454-847858dc-0df5-4bc5-bfaf-b6210c571d8f.png)

Máy khách/người dùng/trình duyệt cung cấp khóa công khai cho máy chủ mà họ đang giao tiếp. Sau đó, quá trình mã hóa xảy ra với sự trợ giúp của khóa công khai và quá trình giải mã xảy ra với sự trợ giúp của khóa riêng của máy chủ.

Khóa riêng tư chỉ có thể được tìm thấy trên máy chủ cụ thể đó. Không ai khác có nó. Điều này cho bạn thấy tại sao mã hóa không đối xứng mạnh hơn và khó bị hack hơn, bởi vì nó có hai khóa khác nhau, khóa riêng tư và khóa công khai. Hai khóa hoạt động cùng nhau để đảm bảo dữ liệu được an toàn hơn.

Điều này cũng cho bạn biết tại sao kích thước của mã hóa này là 1024/2048 bit.

### Mã hóa đối xứng là gì?

Trong mã hóa đối xứng, nó rất đơn giản. Bạn có một chìa khóa, và đó là nó. Máy khách sử dụng một khóa để mã hóa và máy chủ sử dụng cùng một khóa để giải mã dữ liệu.

Mã hóa đối xứng có trọng lượng rất nhẹ. Kích thước là 128/256 bit. Nhưng nó dễ dàng hơn một chút để xâm nhập so với bất đối xứng. Điều này không có nghĩa là nó không hữu ích. Khi chúng tôi sử dụng SSL, chúng tôi kết hợp Không đối xứng và Đối xứng để có thể làm cho giao tiếp an toàn hơn và bảo mật hơn.

![Symmetric Encryption](https://user-images.githubusercontent.com/33565767/181720497-326e0dd9-5e0b-4bfb-b01a-2effec5ab9e0.png)

### Cách hoạt động của mã hóa bất đối xứng + đối xứng

Sự kết hợp của cả bất đối xứng và đối xứng bây giờ là bức tường hai mặt.

![Asymmetric + Symmetric Encryption](https://user-images.githubusercontent.com/33565767/182565306-224f199a-da88-4a68-be81-707636cc1069.png)

Trong bước đầu tiên, máy chủ sẽ gửi đến trình duyệt khóa công khai không đối xứng. Như chúng ta đã biết, khóa bất đối xứng có cả khóa công khai và khóa cá nhân. Do đó, trình duyệt sẽ nhận được khóa công khai.

Sau đó, trình duyệt tạo khóa phiên.

Mã hóa đối xứng chỉ sử dụng một khóa duy nhất cho cả máy khách và máy chủ. Vì vậy, những gì sẽ xảy ra là, trình duyệt sẽ tạo một khóa phiên cục bộ. Đây là một khóa phiên mã hóa đối xứng. Sau đó, nó sẽ mã hóa nó, với việc sử dụng khóa công khai không đối xứng, được đưa ra ở bước đầu tiên. Khóa phiên được tạo cục bộ sau đó sẽ được kết hợp với khóa công khai và được gửi đến máy chủ.

Sau đó, máy chủ sẽ sử dụng khóa riêng để giải mã khóa phiên được mã hóa mà nó đã nhận được. Trong bước cụ thể này, máy chủ sẽ sử dụng khóa riêng không đối xứng để giải mã khóa phiên mà nó đã nhận được.

Bây giờ, khi quá trình giải mã đã xảy ra, máy chủ và trình duyệt sẽ sử dụng khóa phiên để giao tiếp. Khóa phiên sẽ chỉ được sử dụng cho phiên cụ thể đó.

Giả sử bạn đóng trình duyệt của mình và có thể đăng nhập vào ngày hôm sau - mọi thứ bắt đầu lại từ đầu. Các khóa phiên được tạo lại.

## Làm cách nào để có thể nhận SSL cho trang web của mình?

Nếu bạn là chủ sở hữu trang web, bạn có thể lấy chứng chỉ SSL từ cơ quan cấp chứng chỉ.

Sau đó, bạn sẽ cần cài đặt chứng chỉ trên máy chủ web nơi lưu trữ trang web của bạn. Hầu hết thời gian, công ty lưu trữ nơi bạn lưu trữ trang web của bạn xử lý quá trình này cho bạn.

## Tôi có thể nhận chứng chỉ SSL ở đâu?

Có tổ chức cấp chứng chỉ bảo mật. Các tổ chức này được gọi là cơ quan cấp chứng chỉ. Một số tổ chức cung cấp chứng chỉ này bao gồm: DigiCert, Comodo và nhiều tổ chức khác.

Nhiều nhà phát triển nhận được chứng chỉ từ các tổ chức này. Vì họ là những tổ chức phát hành chứng chỉ được sử dụng rộng rãi nhất, nên các trình duyệt thường tin tưởng chứng chỉ từ các tổ chức này.

## Tôi có thể nhận chứng chỉ SSL miễn phí không?

Cloudflare cung cấp chứng chỉ SSL miễn phí. Đây là một trong những công ty bảo mật internet đầu tiên làm như vậy.

## HTTPS được sử dụng để làm gì?

HTTPS giúp ích rất nhiều cho việc bảo mật. Nếu không có nó, việc chuyển thông tin nhạy cảm sẽ trở thành một thách thức lớn, đặc biệt nếu doanh nghiệp của bạn yêu cầu một cách liên lạc an toàn.

Các trang web chấp nhận thanh toán trực tuyến như các trang web thương mại điện tử thường yêu cầu HTTPS. Điều này nhằm tránh các thông tin như chi tiết thẻ tín dụng và thông tin đăng nhập bị đánh cắp (Nguồn: [Tony Messer](https://www.entrepreneur.com/article/281633)).

## Sự khác biệt chính giữa HTTPS và HTTP

- Lớp mã hóa được bật trong HTTPS trong khi không có lớp mã hóa nào trong HTTP.
- Dữ liệu của bạn được bảo vệ trong HTTPS trong khi ở HTTP thì không.
- Xếp hạng của bạn được tăng lên trong Google khi bạn sử dụng HTTPS trong khi với HTTP, bạn không nhận - được bất kỳ sự gia tăng xếp hạng nào.
- Bạn được bảo vệ khỏi lừa đảo khi sử dụng HTTPS trong khi không được bảo vệ khi sử dụng HTTP.
- Bạn tuân thủ các quy định của ngành thanh toán khi sử dụng HTTPS trong khi HTTP không tuân thủ.
- Tải HTTPS trong vài giây đầu tiên có thể chậm hơn tải HTTP.
- Nhận chứng chỉ SSL có thể tốn tiền trong khi không có chi phí chứng nhận với HTTP.
- Trong khi sử dụng HTTPS, bạn sẽ trở thành bạn của nhau với Google Chrome. Google Chrome không thích HTTP và do đó bạn sẽ luôn nhận được các thông báo trang web không an toàn.

## Tổng kết

HTTP và HTTPS rất quan trọng trong cuộc sống hàng ngày của chúng ta với tư cách là nhà phát triển. Giao tiếp giữa trình duyệt và máy chủ là yếu tố thúc đẩy nhiều công việc chúng tôi làm.

Bằng cách bảo vệ dữ liệu của người dùng nhiều nhất có thể để thông tin của họ không bị đánh cắp, bạn sẽ nhận được sự tin tưởng của họ và cung cấp trải nghiệm người dùng tốt hơn.

Hẹn sớm gặp lại.

Source: https://www.freecodecamp.org/news/http-vs-https/
