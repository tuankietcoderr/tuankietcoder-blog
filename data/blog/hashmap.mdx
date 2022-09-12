---
title: Bảng băm (Hash table)
date: '2022-09-12'
tags: ['cpp', 'code', 'dsa']
images: ['/static/thumbnails/2022/hash_map.jpg']
draft: false
summary: Bảng băm hay HashTable là một cấu trúc mà khi người dùng thực hiện truy xuất một phần tử qua khóa thì nó sẽ được ánh xạ vào thông qua hàm băm (Hash function).
---

![Bảng băm](/static/thumbnails/2022/hash_map.jpg)

<TOCInline toc={props.toc} asDisclosure />

## Bảng băm là gì?

Bảng băm hay HashTable là một cấu trúc mà khi người dùng thực hiện truy xuất một phần tử qua khóa thì nó sẽ được ánh xạ vào thông qua hàm băm (Hash function).

Quá trình ánh xạ khóa vào bảng băm được thực hiện thông qua hàm băm (Hashing). Một bảng băm tốt cần phải có hàm băm tốt. Bảng băm là một mảng có M vị trí được đánh số từ 0 đến M - 1.

![Hash Table](https://www.khiemle.dev/static/images/2020/06/bang-bam-hash-table/HashTable.jpg)

Có rất nhiều cách cài đặt kết nối của bảng băm như trực tiếp, dò tuyến tính, dò bậc hai, băm kép... Trong bài viết này mình sẽ giới thiệu đến các bạn phương pháp kết nối dò trực tiếp. Nhưng trước tiên, ta cần tìm hiểu hàm băm trước đã vì như mình đã nói, một bảng băm tốt khi nó có hàm băm tốt.

## Hàm băm

Hàm băm hay là Hash function là hàm thực hiện việc ánh xạ khóa k nào đó vào trong bảng băm ($$h(k)$$). Một hàm băm tốt thỏa mản các tiêu chí sau:

- Tốc độ tính toán nhanh
- Các khóa được phân bố đều trong bảng
- Ít xảy ra đụng độ
  Mình sẽ giới thiệu đến các bạn các phép băm thường được sử dụng nhất là phương pháp chia và nhân.

Đối với phương pháp chia, mình sẽ ánh xạ khóa theo hàm $$h(k) = k \% M$$, với k là khóa và M là kích thước của bảng băm.

Đối với phương pháp nhân, hàm ánh xạ $$h(k) = M * (k*A \% 1)$$, với k là khóa, M là kích thước bảng băm và A là số thực $$0 < A < 1$$. Theo phương pháp nhân này, sự hiệu quả phụ thuộc vào việc lựa chọn A, theo như nhà khoa học máy tính Knuth, chọn $$A = \frac{\sqrt{5} - 1}{2}$$ là hiệu quả nhất ($$\approx 0.618033987$$).

Thông thường, mình sử dụng phương pháp chia cho dễ cài đặt. Tuy nhiên, không thể nào tránh khỏi đụng độ dù có dùng hàm băm nào đi nữa, do đó, chúng ta cần giải quyết đụng độ.

## Giải quyết đụng độ

Đối với việc sử dụng phương pháp kết nối trực tiếp, các phần tử bị đụng độ sẽ được thêm vào danh sách liên kết tại $$h(k)$$ trong bảng băm.

![Hash Table](https://www.khiemle.dev/static/images/2020/06/bang-bam-hash-table/HashTable-Chaining.jpg)

Như bạn có thể thấy trong hình, các khóa như 7, 17 đụng độ nhau thì chúng sẽ được thêm vào danh sách liên kết ở $$h(k) = M$$. Tương tự các khóa 4, 19 cũng bị đụng và được thêm vào danh sách liên kết ở $$h(k) = 2$$...

Bây giờ chúng ta hãy cùng bắt đầu cài đặt bảng băm vào trong trong C++ nha.

## Cấu trúc một nút trong bảng băm

Như đã nói, phương pháp kết nối trực tiếp dùng danh sách liên kết đơn, các phần tử bị đụng độ tại phần tử i trong bảng băm thì sẽ được thêm vào danh sách liên kết đơn tại i trong bảng băm. Do đó, một phần tử trong bảng băm có cấu trúc như một nút trong danh sách liên kết đơn.

```cpp
struct Node
{
    int key;
    Node* next;
};
```

## Cấu trúc bảng băm và hàm khởi tạo

Một bảng băm là một mảng chứa các nút, giả sử mình có 100 phần tử, vậy mình sẽ định nghĩa một HashTable như sau:

```cpp
#define M 100

typedef Node *HashTable[M];
```

Như vậy, chúng ta có thể khai báo một bảng băm như sau:

```cpp
HashTable mHashTable;
```

Các bạn có thể dễ dàng thấy một nút trong bảng là một con trỏ trỏ đến một Node, như vậy, chúng ta cần phải khởi tạo chúng bằng NULL để tránh gặp lỗi. Mình sẽ có hàm khởi tạo bảng như sau:

```cpp
void InitHashTable(HashTable &HT)
{
    for (int i = 0; i < M; i++)
        HT[i] = NULL;
}
```

## Hàm băm

Như đã nói ở trên, để đơn giản mình sẽ sử dụng hàm băm theo phép chia:

```cpp
int Hash(int k)
{
    return k % M;
}
```

## Thêm một nút vào bảng băm

Để thêm một nút, ta cần xác định vị trí sẽ thêm qua hàm băm $$h(k)$$, sau đó thêm vào danh sách liên kết ở vị trí $$h(k)$$ đó. Việc đụng độ sẽ được giải quyết do nếu đụng độ thì khóa sẽ được tự thêm vào sau danh sách liên kết đơn. Mình sẽ có hàm thêm như sau:

```cpp
void InsertNode(HashTable &HT, int k)
{
    int i = Hash(k);
    AddTail(HT[i], k);
}
```

Hàm AddTail thì trong danh sách liên kết đơn, mình đã có bài viết về nó rồi, các bạn có thể đọc lại.

```cpp
void AddTail(Node *&l, int k)
{
    Node *newNode = new Node{k, NULL};
    if (l == NULL)
    {
        l = newNode;
    }
    else
    {
        Node* p = l;
        while (p != NULL && p->next != NULL)
            p = p->next;
        p->next = newNode;
    }
}
```

## Tìm kiếm một khóa trong bảng băm

Để tìm kiếm một khóa trong bảng băm, ta cũng thực hiện xác định vị trí $$h(k)$$, sau đó ta thực hiện tìm kiếm trong danh sách liên kết tại vị trí $$h(k)$$ trong bảng băm.

```cpp
Node *SearchNode(HashTable HT, int k)
{
    int i = Hash(k);
    Node *p = HT[i];
    while (p != NULL && p->key != k)
        p = p->next;
    if (p == NULL)
        return NULL;
    return p;
}
```

## Xóa một nút ra khỏi bảng băm

Để xóa một phần tử ra khỏi bảng băm, đầu tiên ta cũng phải xác định $$h(k)$$, sau đó tìm xem nó nằm ở đâu trong danh sách liên kết đơn tại vị trí $$h(k)$$ đó rồi thực hiện xóa nó đi.

```cpp
void DeleteNode(HashTable &HT, int k)
{
    int i = Hash(k);
    Node *p = HT[i];
    Node *q = p;
    while (p != NULL && p->key != k)
    {
        q = p; // Lưu lại địa chỉ của phần tử trước đó
        p = p->next;
    }
    if (p == NULL)
        cout << k << " not found!" << endl;
    else if (p == HT[i])
        DeleteHead(HT[i]); // Nút cần xóa là phần tử đầu của DSLK
    else
        DeleteAfter(q); // Xóa nút sau nút q
}
```

```cpp
void DeleteHead(Node *&l)
{
    if (l != NULL)
    {
        Node *p = l;
        l = l->next;
        delete p;
    }
}

void DeleteAfter(Node *&q)
{
    Node *p = q->next;
    if (p != NULL)
    {
        q->next = p->next;
        delete p;
    }
}
```

## Duyệt qua bảng băm

Duyệt qua bảng băm rất đơn giản, bạn chỉ cần duyệt qua mảng, mỗi phần tử của mảng là một danh sách liên kết đơn, vậy thì duyệt danh sách liên kết đơn nữa là xong.

```cpp
void Traverse(Node *p) // duyệt DSLK
{
    while (p != NULL)
    {
        cout << p->key << ' ';
        p = p->next;
    }
    cout << endl;
}

void TraverseHashTable(HashTable HT)
{
    for (int i = 0; i < M; i++)
    {
        cout << "Bucket " << i << ": ";
        Traverse(HT[i]);
    }
}
```

## Lưu ý về bảng băm

Đối với dữ liệu lớn, việc cấp phát một mảng quá lớn sẽ gây lãng phí bộ nhớ không đáng có, tuy nhiên, việc M lớn đảm bảo việc đụng độ ít xảy ra do các khóa phân bố đều. Ngược lại, nếu M nhỏ để tiết kiệm bộ nhớ, việc này sẽ làm giảm hiệu suất của bảng băm do việc đụng độ xảy ra với tần suất cao hơn.

Do vậy, khi thao tác với bảng băm, các bạn cần phải cân nhắc giữa hiệu suất và dung lượng lưu trữ.

## Tổng kết

Như vậy là trong bài viết này, mình đã giới thiệu đến các bạn về bảng băm trong C++, cách cài đặt bảng băm bằng phương thức kết nối trực tiếp dùng danh sách liên kết đơn. Nếu các bạn có bất kỳ ý kiến, đóng góp nào, đừng ngần ngại comment phía bên dưới bài viết nha. Cảm ơn các bạn đã theo dõi bài viết!

## Source code

```cpp
#include <iostream>
using namespace std;

#define M 10

struct Node
{
    int key;
    Node *next;
};

typedef Node *HashTable[M];

void InitHashTable(HashTable &HT)
{
    for (int i = 0; i < M; i++)
        HT[i] = NULL;
}

int Hash(int k)
{
    return k % M;
}

void AddTail(Node *&l, int k)
{
    Node *newNode = new Node{k, NULL};
    if (l == NULL)
    {
        l = newNode;
    }
    else
    {
        Node* p = l;
        while (p != NULL && p->next != NULL)
            p = p->next;
        p->next = newNode;
    }
}

void InsertNode(HashTable &HT, int k)
{
    int i = Hash(k);
    AddTail(HT[i], k);
}

void DeleteHead(Node *&l)
{
    if (l != NULL)
    {
        Node *p = l;
        l = l->next;
        delete p;
    }
}

void DeleteAfter(Node *&q)
{
    Node *p = q->next;
    if (p != NULL)
    {
        q->next = p->next;
        delete p;
    }
}

void DeleteNode(HashTable &HT, int k)
{
    int i = Hash(k);
    Node *p = HT[i];
    Node *q = p;
    while (p != NULL && p->key != k)
    {
        q = p;
        p = p->next;
    }
    if (p == NULL)
        cout << k << " not found!" << endl;
    else if (p == HT[i])
        DeleteHead(HT[i]);
    else
        DeleteAfter(q);
}

Node *SearchNode(HashTable HT, int k)
{
    int i = Hash(k);
    Node *p = HT[i];
    while (p != NULL && p->key != k)
        p = p->next;
    if (p == NULL)
        return NULL;
    return p;
}

void Traverse(Node *p)
{
    while (p != NULL)
    {
        cout << p->key << ' ';
        p = p->next;
    }
    cout << endl;
}

void TraverseHashTable(HashTable HT)
{
    for (int i = 0; i < M; i++)
    {
        cout << "Bucket " << i << ": ";
        Traverse(HT[i]);
    }
}

int main()
{
    HashTable mHashTable;
    InitHashTable(mHashTable);

    InsertNode(mHashTable, 0);
    InsertNode(mHashTable, 1);
    InsertNode(mHashTable, 2);
    InsertNode(mHashTable, 3);
    InsertNode(mHashTable, 10);
    InsertNode(mHashTable, 13);
    InsertNode(mHashTable, 9);
    InsertNode(mHashTable, 11);

    cout << "HashTable:\n";
    TraverseHashTable(mHashTable);

    DeleteNode(mHashTable, 3);
    DeleteNode(mHashTable, 13);
    DeleteNode(mHashTable, 9);
    cout << "HashTable after Delete:\n";
    TraverseHashTable(mHashTable);

    Node *result = SearchNode(mHashTable, 10);
    if (result == NULL)
        cout << "Not found!";
    else
        cout << "Found!";

    std::cout << std::endl;
    system("pause");
    return 0;
}
```

Source: https://www.khiemle.dev/blog/bang-bam-hash-table
