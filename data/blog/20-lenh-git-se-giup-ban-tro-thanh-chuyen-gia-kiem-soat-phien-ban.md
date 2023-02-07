---
title: 20 lệnh Git sẽ giúp bạn trở thành Chuyên gia kiểm soát phiên bản
date: '2023-02-08'
tags: ['git']
draft: false
summary: 'Kiểm soát phiên bản là điều cần thiết cho các lập trình viên muốn cộng tác hiệu quả và theo dõi các thay đổi khi làm việc trên mã trong nhóm.'
images:
  ['/static/thumbnails/2023/20-lenh-git-se-giup-ban-tro-thanh-chuyen-gia-kiem-soat-phien-ban.webp']
layout: PostLayout
---

![20 lệnh Git sẽ giúp bạn trở thành Chuyên gia kiểm soát phiên bản.](/static/thumbnails/2023/20-lenh-git-se-giup-ban-tro-thanh-chuyen-gia-kiem-soat-phien-ban.webp)

<TOCInline toc={props.toc} asDisclosure />

Kiểm soát phiên bản là điều cần thiết cho các lập trình viên muốn cộng tác hiệu quả và theo dõi các thay đổi khi làm việc trên mã trong nhóm. Git là một hệ thống kiểm soát phiên bản cho phép bạn theo dõi các bản sửa đổi, xác định phiên bản tệp và khôi phục các phiên bản cũ hơn nếu cần.
Người dùng có một số kinh nghiệm lập trình có thể bắt đầu với Git khá dễ dàng, nhưng không dễ để chọn tất cả các tính năng nâng cao. Trong bài viết này, tôi sẽ chỉ cho bạn một số lệnh hữu ích nhất sẽ giúp bạn trở thành một chuyên gia Git.

## 1. git config

`git config` là một trong những lệnh Git cơ bản mà bạn phải biết. Lệnh giúp thiết lập các giá trị cấu hình cho email, tên người dùng, định dạng tệp, thuật toán tệp ưu tiên và nhiều thuộc tính khác. Ví dụ về lệnh như sau:

```bash
# cấu hình người dùng sẽ được Git sử dụng
# đây không phải là từ viết tắt mà là tên đầy đủ của bạn
$ git config --global user.name "Firstname Lastname"
# cấu hình địa chỉ email
$ git config --global user.email "your.email@example.org"
```

## 2. git init

`git init` là một trong những lệnh Git hàng đầu và lý tưởng để khởi tạo kho lưu trữ Git. Lệnh giúp tạo thư mục .git ban đầu trong một dự án hiện có hoặc dự án mới. Thư mục `.git` vẫn bị ẩn và bạn phải tắt tính năng này trong trường hợp Windows để xem nó. Trong trường hợp của Linux, bạn có thể sử dụng lệnh `ls –a` để xem thư mục `.git`. Mình khuyên không ai nên giả mạo nội dung của thư mục `.git`.

```bash
$ git init <tên repository của bạn>
```

## 3. git clone

Lệnh này được sử dụng để lấy kho lưu trữ từ một URL hiện có (.git):

```bash
$ git clone <url của repository>
```

## 4. git add

Lệnh `git add` giúp thêm các sửa đổi tệp hiện có trong thư mục làm việc vào chỉ mục của người dùng. Lệnh này giúp thêm các tệp không bị theo dõi đã sẵn sàng để commit vào kho lưu trữ từ xa. Ví dụ về cách sử dụng lệnh `git add` như sau:

```bash
$ git add README.md
```

Lệnh này sẽ thêm README.md vào khu vực staging.

## 5. git branch

`git branch` là một đề cập đáng chú ý trong số các lệnh Git dành cho người mới bắt đầu. Lệnh `branch` giúp bạn tạo, xóa và liệt kê các nhánh.

Lệnh này có một số tùy chọn quan trọng:
`-v -a`
Cung cấp thêm thông tin về tất cả các chi nhánh của bạn. Việc liệt kê các nhánh của bạn, theo mặc định, sẽ chỉ hiển thị tên các nhánh ở local của bạn.

- Việc thêm cờ `-a` sẽ đảm bảo các nhánh từ xa cũng được đưa vào danh sách.
- Việc thêm cờ `-v` sẽ làm cho lệnh trở nên “dài dòng” hơn và
- Bao gồm các hàm băm SHA-1 cũng như các đối tượng commit của các lần commit mới nhất trên các nhánh của bạn.
  `--no-merged`
  Trả về tất cả các nhánh chưa được hợp nhất vào nhánh `HEAD` hiện tại của bạn.
  `-d`
  Xóa một nhánh được chỉ định.
  Cách sử dụng:

```bash
# liệt kê tất cả các nhánh (kể cả remote branch)
$ git branch -a -v
# trả về danh sách các nhánh chưa được merge vào nhánh chính
$ git branch --no-merged
# trả về danh sách các nhánh đã được merge vào nhánh chính
$ git branch --merged
```

## 6. git commit

Lệnh `git commit` ghi lại snapshot các thay đổi hiện đang được thực hiện của dự án:

```bash
$ git commit -m “first commit”
```

## 7. git push

Lệnh `git push` có thể giúp đẩy tất cả các đối tượng cục bộ đã sửa đổi vào kho lưu trữ từ xa và sau đó phát triển các nhánh của nó. Một ví dụ về việc sử dụng lệnh này như sau:

```bash
$ git push origin master
```

hoặc:

```bash
$ git push origin <tên nhánh>
```

## 8. git diff

Lệnh `git diff` rất hữu ích để tạo các tệp vá lỗi hoặc thống kê sự khác biệt giữa các đường dẫn hoặc tệp trong chỉ mục, thư mục làm việc hoặc kho lưu trữ git của bạn. Một ví dụ về việc sử dụng lệnh này như sau:

```bash
$ git diff
```

## 9. git status

Lệnh `git status` có thể giúp hiển thị trạng thái của các tệp trong chỉ mục và các tệp trong thư mục làm việc. Lệnh sẽ dễ dàng liệt kê các tệp không được theo dõi, sửa đổi và dàn dựng. Một ví dụ về cách sử dụng lệnh `git status` như sau:

```bash
$ git status
```

## 10. git show

Lệnh này hiển thị các thay đổi về siêu dữ liệu và nội dung của cam kết đã chỉ định

```bash
$ git show
```

## 11. git tag

Lệnh này sẽ giúp gắn thẻ một commit cụ thể bằng một tag đơn giản, bền và dễ đọc. Ví dụ về lệnh này như sau:

```bash
$ git tag –a v2.0 –m ‘this is version 2.0 tag’
```

## 12. git merge

`git merge` là một lệnh có tính năng mạnh mẽ cho phép bạn kết hợp công việc từ hai nhánh thành một. Điều này hữu ích khi các nhà phát triển làm việc trên cùng một mã và muốn tích hợp các thay đổi của họ trước khi `push chúng lên một nhánh.

```bash
$ git merge <tên nhánh>
```

hoặc

```bash
$ git merge <tên nhánh gốc> <tên nhánh muốn merge>
```

## 13. git log

Lệnh `git log` liệt kê mọi commit đã từng xảy ra trong dự án của bạn để xem điều gì đã thay đổi theo thời gian, cùng với một số thông tin khác về cách thực hiện commit:

```bash
$ git log
```

## 14. git reset

Sử dụng git reset để `un-track` một tệp để không còn bất kỳ liên kết nào đến kho lưu trữ Git.

```bash
$ git reset <commit id>
```

## 15. git rm

Lệnh này được sử dụng để xóa một tệp cụ thể khỏi thư mục làm việc hiện tại và xóa các giai đoạn. Để xóa một tệp cụ thể khỏi thư mục làm việc hiện tại và xóa các giai đoạn, hãy sử dụng lệnh sau:

```bash
$ git rm <tên file>
```

## 16. git remote

Lệnh này được sử dụng để kết nối kho lưu trữ git cục bộ (local) với máy chủ từ xa (remote)

```bash
$ git remote add [variable name] [Remote Server Link]
```

## 17. git fsck

Lệnh này được sử dụng để kiểm tra tính toàn vẹn của hệ thống tệp Git và nó cũng giúp xác định các đối tượng bị hỏng.

```bash
$ git fsck
```

## 18. git pull

Lệnh này tìm nạp và hợp nhất các thay đổi trên máy chủ từ xa vào thư mục làm việc của bạn

```bash
$ git pull repository_link
```

## 19. git checkout

Lệnh `git checkout` cho phép chúng ta chuyển sang một nhánh hiện có hoặc tạo và chuyển sang một nhánh mới. Để đạt được điều này, nhánh bạn muốn chuyển sang phải có trong hệ thống cục bộ của bạn và những thay đổi trong nhánh hiện tại của bạn phải được commit hoặc lưu trữ trước khi bạn thực hiện chuyển đổi. Bạn cũng có thể sử dụng lệnh này để kiểm tra các tệp

```bash
# Đổi sang một nhánh hiện có
$ git checkout <branch-name>
# Tạo một nhánh mới và chuyển sang nhánh đó
$ git checkout -b <branch-name>
```

## 20. git stash

Lệnh này được sử dụng để lưu trữ tạm thời tất cả các tệp đã thay đổi trong thư mục làm việc.
Cách sử dụng:

- Lưu tạm thời tất cả các tệp được theo dõi đã sửa đổi:

```bash
$ git stash
```

- Liệt kê tất cả các stash:

```bash
$ git stash list
```

- Xóa stash mới nhất:

```bash
$ git stash drop
```

## Tổng kết

Chúng ta đã đi đến cuối bài viết này. Giờ đây, bạn có thể tự nhận mình là Chuyên gia kiểm soát phiên bản. Nhưng hãy nhớ rằng, có những lệnh git hữu ích khác và Git không phải là công cụ kiểm soát phiên bản duy nhất.

Cảm ơn vì đã đọc! Nếu bạn có bất kỳ câu hỏi hoặc phản hồi nào, vui lòng để lại nhận xét bên dưới.
