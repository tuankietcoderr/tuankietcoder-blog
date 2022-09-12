---
title: Hướng dẫn chuẩn bị để phỏng vấn Frontend Dev (React)
date: '2022-09-12'
tags: ['interview', 'react', 'career']
images: ['/static/thumbnails/2022/huong-dan-chuan-bi-de-phong-van-frontend-dev-react.png']
draft: false
summary: Một cuộc phỏng vấn kỹ thuật front-end là cơ hội để nhà tuyển dụng tiềm năng đánh giá kỹ năng và kiến thức của bạn trong việc phát triển web.
---

![React Interview](/static/thumbnails/2022/huong-dan-chuan-bi-de-phong-van-frontend-dev-react.png)

<TOCInline toc={props.toc} asDisclosure />

Một cuộc phỏng vấn kỹ thuật front-end là cơ hội để nhà tuyển dụng tiềm năng đánh giá kỹ năng và kiến thức của bạn trong việc phát triển web.

Người phỏng vấn sẽ hỏi bạn những câu hỏi về kinh nghiệm và kỹ năng của bạn trong HTML, CSS và JavaScript. Họ cũng có thể sẽ hỏi bạn một số câu hỏi cụ thể về các frameworks như React, Angular, Vue hoặc bất kỳ frameworks nào họ sử dụng.

Họ cũng có thể cung cấp cho bạn một thử thách viết mã để kiểm tra khả năng của bạn trong một miền cụ thể.

Hôm nay, chúng ta sẽ xem xét các vấn đề phổ biến nhất được hỏi trong vòng phỏng vấn kỹ thuật front-end, tập trung vào React và JavaScript.

## Người phỏng vấn đang tìm kiếm điều gì?

Khi phỏng vấn cho vị trí phát triển web front-end, hãy chuẩn bị để thảo luận về các kỹ năng và kinh nghiệm của bạn với các ngôn ngữ lập trình, công cụ và khuôn khổ khác nhau.

Người phỏng vấn cũng sẽ muốn thấy rằng bạn có hiểu biết sâu rộng về các xu hướng và công nghệ mới nhất trong phát triển web.

Hãy chuẩn bị để nói về các dự án trước đây của bạn và cách bạn tiếp cận để giải quyết các thách thức khác nhau.

Đảm bảo thể hiện kỹ năng giải quyết vấn đề của bạn bằng cách thảo luận về cách bạn đối mặt với những thách thức khác nhau trong quá trình phát triển của mình.

Cuối cùng, đừng quên nêu bật điểm mạnh của bạn.

## Các câu hỏi thường gặp nhất trong cuộc phỏng vấn kỹ thuật Front-End

Các vấn đề phỏng vấn kỹ thuật front-end khá đơn giản và phổ biến. Nếu bạn đã tích cực viết mã trong ít nhất 6 tháng, bạn sẽ quen thuộc với hầu hết các khái niệm được hỏi về.

Một khi bạn thực hành các câu hỏi phù hợp với cách tiếp cận dựa trên thời gian, bạn sẽ có thể hoàn thành các cuộc phỏng vấn.

Hãy xem xét các câu hỏi phổ biến nhất được hỏi.

### Map, ForEach, Filter và Reduce

Các câu hỏi thường gặp nhất (thường là khi bắt đầu phỏng vấn) là về các phương pháp mảng. Người phỏng vấn muốn đánh giá mức độ thuần thục của bạn với việc thao tác trên mảng.

**1. Phương thức `.map()`** <br/>
Các phương thức `.map()` lặp qua một mảng, tính toán bất kỳ logic nào bạn viết bên trong nội dung bản đồ và trả về một mảng **MỚI**.

```js
let arr = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
]

let names = arr.map((el) => el.name)
console.log(names)
// Output: [ 'Manu', 'Quincy', 'Abbey' ]
```

**2. Phương thức `.forEach()`** <br/>
`.forEach()` tương tự như `.map ()` nhưng nó **KHÔNG** trả về một mảng.

```js
let arr = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
]

arr.forEach((el) => (el.age += 10))
console.log(arr)

// Output: 22 32 44
```

**3. Phương thức `.filter()`** <br/>
Phương pháp bộ lọc, như tên cho thấy, giúp lọc ra các giá trị bên trong một mảng dựa trên điều kiện Boolean.

Nếu điều kiện boolean là true, kết quả sẽ được trả về và được thêm vào mảng cuối cùng. Nếu không, nó sẽ bị bỏ qua. Bộ lọc cũng trả về một mảng, giống như phương thức `.map ()`.

**4. Phương thức `.reduce()`** <br/>
Nói một cách dễ hiểu, phương thức `.reduce ()` tính đến giá trị trước đó, giá trị hiện tại và một bộ tích lũy.

Kiểu trả về của phương thức `.reduce ()` luôn là một giá trị duy nhất. Nó hữu ích khi bạn muốn xử lý tất cả các giá trị của mảng và muốn lấy một số kết quả tích lũy.

```js
// Calculates the total age of all the three persons.
let arr = [
  { id: 1, age: 12, name: 'Manu' },
  { id: 2, age: 24, name: 'Quincy' },
  { id: 3, age: 22, name: 'Abbey' },
]

let totalAge = arr.reduce((acc, currentObj) => acc + currentObj.age, 0)
console.log(totalAge)

// Output: 57
```

Ở đây, `currentObj` là đối tượng đang được lặp lại. Ngoài ra, giá trị acc lưu trữ kết quả và cuối cùng được xuất vào mảng `totalAge`.

### Cách triển khai Polyfills

Một câu hỏi phỏng vấn quan trọng khác là Làm thế nào để triển khai các polyfills của phương thức map và phương pháp filter.

Polyfill là một đoạn mã (về mặt kiến trúc web JavaScript) được sử dụng cho các chức năng của thế giới hiện đại trên các trình duyệt cũ hơn không triển khai nó nguyên bản.

Nói một cách đơn giản, polyfill là một triển khai tùy chỉnh của các hàm JavaScript gốc. Sắp xếp một tạo phương thức `.map ()` hoặc `.filter ()` của riêng bạn.

**1. Cách sử dụng polyfill `.map ()`** <br />

```js
let data = [1, 2, 3, 4, 5]

Array.prototype.myMap = function (cb) {
  let arr = []
  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this))
  }
  return arr
}
const mapLog = data.myMap((el) => el * 2)
console.log(mapLog)
```

Phương thức `myMap` nhận một lệnh gọi lại được thực thi bên trong thân `myMap`. Về cơ bản, chúng ta có một vòng lặp for nguyên bản bên trong phần thân `myMap`, vòng lặp này lặp lại `this.length`. Đây không là gì ngoài độ dài của mảng mà qua đó hàm `myMap` được gọi.

Vì cú pháp của `map()` là `arr.map(currentElement, index, array)` và hàm `myMap()` tính đến chính xác điều đó.

Cũng vì `map()` trả về một mảng mới, chúng ta tạo một mảng trống và đẩy kết quả vào đó. Cuối cùng chúng ta trả lại nó.

**2. Cách sử dụng polyfill `.filter()`** <br />

```js
let data = [1, 2, 3, 4, 5];

Array.prototype.myFilter = function (cb) {
   cho arr = [];
   for (let i = 0; i <this.length; i ++) {
     if (cb (this [i], i, this)) {
       arr.push (this [i]);
     }
   }
   trả về arr;
};
const filterLog = data.myFilter ((el) => el <4);
console.log (filterLog);
```

`.filter()` rất giống với `.map()` về cách triển khai. Nhưng vì bộ lọc lọc ra kết quả dựa trên giá trị boolean, chúng ta có thêm điều kiện `if()` để lọc ra kết quả và đẩy vào bên trong mảng một cách có điều kiện.

### Debouncing là gì?

Đây là một câu hỏi phỏng vấn nổi tiếng với rất nhiều cách sử dụng và triển khai thực tế trong thế giới thực.

`Debouncing` là một phương pháp ngăn một hàm được gọi quá thường xuyên và thay vào đó phải đợi một khoảng thời gian nhất định cho đến khi nó được gọi lần cuối trước khi gọi nó.

Hãy nghĩ đến Amazon trong trường hợp này. Bất cứ khi nào bạn nhập bất cứ thứ gì vào thanh tìm kiếm, khi bạn dừng lại ÍT NHẤT 0,5 giây, thì kết quả sẽ được tìm nạp. Đây chính xác là những gì debouncing là.

Để triển khai gỡ lỗi, hãy lấy một ví dụ: Tạo tên người dùng cho người dùng dựa trên đầu vào của người dùng.

```js
import './styles.css'
let inputEle = document.getElementById('inputElement')
let username = document.getElementById('username')

let generateUsername = (e) => {
  username.innerHTML = e.target.value.split(' ').join('-')
}
let debounce = function (cb, delay) {
  let timer
  return function () {
    let context = this
    clearTimeout(timer)
    timer = setTimeout(() => {
      cb.apply(context, arguments)
    }, delay)
  }
}

inputEle.addEventListener('keyup', debounce(generateUsername, 300))
```

Ở đây, chúng ta đang cố gắng tạo tên người dùng tùy chỉnh dựa trên đầu vào của người dùng. Bây giờ nếu người dùng bắt đầu nhập, chúng tôi không muốn tạo ngay lập tức mà thực sự phải đợi 300 mili giây trước khi tạo tên người dùng. Chúng tôi đang cố gắng bắt chước lệnh gọi API ở đây, vì vậy, giả sử người dùng nhập bất kỳ thứ gì và người dùng phải thực hiện lệnh gọi API tới phần phụ trợ và tìm nạp phản hồi.

Hàm `debounce()` nhận hai giá trị, `cb` và `delay`. `cb` là hàm gọi lại được thực thi khi hết giờ.

Chúng ta sử dụng `setTimeout()` để tạo bộ đếm thời gian chờ, có nghĩa là hàm bên trong phần thân `setTimeout` sẽ được thực thi sau một khoảng thời gian nhất định.

Phương thức áp dụng được sử dụng để gọi hàm gọi lại với đối tượng mà nó được gọi ban đầu, áp dụng các đối số và ngữ cảnh cho nó.

### Closures là gì?

Theo [mdn docs for closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

> A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

Tạm dịch:

> Một closure là sự kết hợp của một hàm được đóng gói cùng nhau (kèm theo) với các tham chiếu đến trạng thái xung quanh của nó (môi trường từ nguyên). Nói cách khác, một bao đóng cho phép bạn truy cập vào phạm vi của một hàm bên ngoài từ một hàm bên trong. Trong JavaScript, các bao đóng được tạo mỗi khi một hàm được tạo, tại thời điểm tạo hàm.

Để đơn giản hóa điều này, chúng ta hãy lấy một ví dụ và hiểu cách hoạt động của các bao đóng.

```js
function start() {
  var name = 'Manu' // name is a local variable created by start()
  function displayName() {
    // displayName() is the inner function, a `closure`
    alert(name) // use variable declared in the parent function
  }
  displayName()
}
start() // "Manu" alert box is displayed
```

Ở đây, một bao đóng được hình thành giữa hàm `start()` và hàm `displayName()`. Hàm `displayName()` có quyền truy cập vào biến tên có trong hàm `start()`.

Nói một cách dễ hiểu, nội hàm sẽ biết được môi trường xung quanh (môi trường từ nguyên).

### React Hooks

Các câu hỏi phổ biến nhất được hỏi trong cuộc phỏng vấn viết mã front-end khi nói đến React hooks là:

- useState()
- useReducer()
- useEffect()
- useRef()
- Custom Hooks và cách triển khai

**1. Cách hoạt động của `useState()`** <br/>

Để quản lý một trạng thái bên trong thành phần của bạn, hook `useState()` là hook cần thiết của bạn.

Hãy lấy một ví dụ và hiểu:

```js
import { useState } from 'react'
import './styles.css'

export default function App() {
  const [title, setTitle] = useState('freeCodeCamp')
  const handleChange = () => {
    setTitle('FCC')
  }
  return (
    <div className="App">
      <h1>{title} useState</h1>
      <button onClick={handleChange}>Change Title</button>
    </div>
  )
}
```

Các phương thức `useState()` cung cấp cho chúng ta hai giá trị, biến trạng thái và một hàm để thay đổi biến trạng thái đó.

Trong đoạn mã trên, chúng ta đang tạo trạng thái tiêu đề để lưu tiêu đề của trang. Trạng thái ban đầu được chuyển dưới dạng `freeCodeCamp`.

Khi nhấp vào nút, chúng ta có thể sử dụng phương thức `setTitle()` để thay đổi biến trạng thái thành `FCC`.

Phương thức `useState()` là tài nguyên truy cập của bạn để quản lý trạng thái trong một thành phần chức năng.

**2. Cách hoạt động của `useReducer()`** <br/>

Nói một cách dễ hiểu, `useReducer()` là một cách hay để quản lý trạng thái trong ứng dụng của bạn. Nó có cấu trúc hơn và giúp bạn duy trì trạng thái phức tạp trong ứng dụng của mình.

Hãy lấy một ví dụ để hiểu hook `useReducer`:

```js
import './styles.css'
import { useReducer } from 'react'

const initialState = { title: 'freeCodeCamp', count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'change-title':
      return { ...state, title: 'FCC' }
    case 'increment-counter':
      return { ...state, count: state.count + 1 }
    default:
      throw new Error()
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <div className="App">
        <h1>{state.title} CodeSandbox</h1>
        <button onClick={() => dispatch({ type: 'change-title' })}>Change Title</button>
        <button onClick={() => dispatch({ type: 'increment-counter' })}>Increment Counter</button>
      </div>
      <p style={{ textAlign: 'center' }}>{state.count}</p>.
    </>
  )
}
```

Hook `useReducer()` nhận hai tham số, hàm giảm thiểu và một giá trị `InitialState`.

Hàm giảm thiểu là một triển khai dựa trên trường hợp chuyển mạch trả về giá trị trạng thái cuối cùng mà `useReduer()` sử dụng bên trong để cung cấp lại cho thành phần.

Các giá trị được trả về từ hàm `useReducer()` là trạng thái và điều phối. Trạng thái là giá trị trạng thái thực tế có thể được sử dụng bên trong thành phần. Trong trường hợp của chúng ta, trạng thái có hai giá trị: tiêu đề và số lượng. Tiêu đề và số lượng này có thể được thao tác bằng cách sử dụng phương thức `send()` được trả về bởi phương thức `useReducer()`.

Trong trường hợp trên, để thay đổi tiêu đề, chúng tôi đã viết một trường hợp thay đổi tiêu đề bên trong hàm giảm thiểu. Điều này có thể được kích hoạt với sự trợ giúp của hàm điều phối `({type: "change-title"})`. Điều này sẽ kích hoạt chức năng thay đổi tiêu đề và nó sẽ thay đổi trạng thái của thuộc tính tiêu đề.

Tương tự, điều tương tự cũng xảy ra đối với phần đếm có trong ứng dụng.

Giống như tôi đã nói trước đó, đó là một cách tuyệt vời để triển khai trạng thái bên trong ứng dụng của bạn. 😉

**3. Cách `useEffect()` hoạt động** <br/>

Hãy nghĩ theo cách này: nếu bạn muốn có một tác dụng phụ đối với một biến trạng thái thay đổi, bạn có thể sử dụng hook `useEffect()` để kích hoạt nó.

Ví dụ: giả sử nếu giá trị đầu vào của hộp nhập liệu của bạn thay đổi và bạn muốn gọi một API sau khi nó đã thay đổi. Bạn có thể viết logic của xử lý API trong khối `useEffect()`.

```js
import React, { useState, useEffect } from 'react'

export const App = () => {
  const [value, setValue] = useState('')
  useEffect(() => {
    console.log('value changed: ', value)
  }, [value])
  return (
    <div>
      <input type="text" name="username" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  )
}
```

Ở đây, chúng ta có một hộp đầu vào có giá trị trạng thái của giá trị gắn liền với nó. Giá trị này sẽ thay đổi khi người dùng cố gắng nhập bất kỳ thứ gì.

Khi giá trị đã được cập nhật và đã được hiển thị, khối `useEffect()` sẽ khởi động và câu lệnh `console` sẽ được kích hoạt, xuất ra giá trị trạng thái mới nhất ở đó.

Ở đây, một trường hợp sử dụng tốt của `useEffect()` có thể là triển khai các lệnh gọi API. Giả sử bạn muốn gọi một API với giá trị trường đầu vào. Khối chức năng `useEffect` sẽ là cách tốt nhất để làm điều đó.

Một phần khác của đây là mảng phụ thuộc là đối số thứ hai của hook `useEffect()`. Trong trường hợp của chúng ta, chúng ta đã đề cập `[value]` như là đối số thứ hai.

Về cơ bản, điều này có nghĩa là **MỖI LÚC `value` THAY ĐỔI**, chức năng bên trong `useEffect` sẽ được kích hoạt. Nếu bạn không chuyển bất kỳ thứ gì vào mảng phụ thuộc, khối chức năng sẽ được kích hoạt một lần.

**4. Cách hoạt động của hook `useRef()`** <br/>

`useRef` cung cấp cho chúng ta khả năng thay đổi `DOM` (nhưng đây không phải là hàm ý duy nhất của `useRef`).

Theo tài liệu:

> useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.

Tạm dịch:

> useRef trả về một đối tượng ref có thể thay đổi có thuộc tính .current được khởi tạo cho đối số được truyền vào (initialValue). Đối tượng trả về sẽ tồn tại trong toàn bộ thời gian tồn tại của thành phần.

Nói một cách dễ hiểu, chúng ta sẽ sử dụng `useRef` nếu chúng ta muốn duy trì giá trị của một thứ gì đó trong toàn bộ `Component Lifecycle`. Việc triển khai cơ bản của `useRef` đi kèm với các phần tử DOM. Hãy lấy một ví dụ:

```js
function TextInputWithFocusButton() {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus()
  }
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}
```

Ở đây, chúng tôi đang gán một thuộc tính `ref` cho khối đầu vào. Điều này sẽ được liên kết với tham chiếu `inputEl` mà chúng tôi đã tạo.

Bây giờ phần tử đầu vào này có thể được thao tác theo cách chúng ta muốn. Chúng ta có thể sửa đổi thuộc tính `style` và làm cho nó đẹp hơn, chúng ta có thể lấy thuộc tính value để xem những gì đang được phần tử đầu vào làm giá trị trợ giúp, v.v.

Trong ví dụ trên, khi chúng ta nhấp vào nút, đầu vào được tập trung và chúng ta có thể bắt đầu nhập ngay lập tức. Chúng ta có thể làm điều này với sự trợ giúp của `inputEl.current.focus()` - về cơ bản là phương thức `focus()` có trên đối tượng hiện tại.

### Custom hooks là gì?

Một trong những câu hỏi thường gặp nhất mà tôi đã gặp trong các vòng phỏng vấn front-end là tạo một custom hook cho các sự kiện bàn phím.

Chúng tôi đã thấy nhiều hook khác nhau, nhưng người phỏng vấn có thể yêu cầu bạn tạo một hook của riêng mình. Điều này có thể khó khăn đối với một số người nhưng với một số thực hành, nó sẽ trở nên dễ dàng hơn nhiều.

Hãy hiểu `Hook` là gì:

Cách sử dụng cơ bản của custom hooks là trích xuất logic của một hàm thành thành phần của chính nó.

Hình ảnh những gì sẽ xảy ra nếu bạn phải nghe một phím `enter` bên trong mỗi thành phần của bạn. Thay vì viết logic để nghe đi nghe lại, chúng ta có thể trích xuất logic thành một thành phần của riêng nó và sử dụng nó ở bất cứ đâu chúng ta muốn (giống như chúng ta sử dụng `useState()` hoặc `useEffect()`).

Có một số điều kiện để một hàm được gọi là `Hook`:

- Nó phải luôn bắt đầu bằng từ khóa `use`
- Chúng ta có thể quyết định xem nó lấy gì làm đối số và nó sẽ trả về cái gì, nếu có.

```js
// Custom Hook: useAvailable
function useAvailabe(resource) {
  const [isAvailable, setIsAvailable] = useState(null)

  // ...

  return isAvailable
}

// Usage:
const isAvailable = useAvailable(cpu)
```

Ở đây, bất kể chúng ta gọi `useState` và `useEffect` bên trong hook tùy chỉnh bao nhiêu lần, chúng sẽ hoàn toàn độc lập với hàm mà chúng ta sử dụng custom hook.

Hãy lấy một ví dụ về việc tạo một hook tùy chỉnh để lưu trữ các giá trị lưu trữ cục bộ.

### Cách tạo một custom hooks - ví dụ useLocalStorage

Custom hooks `useLocalStorage` là một cách để duy trì dữ liệu vào bộ nhớ cục bộ. Nhận và đặt các giá trị bên trong bộ nhớ cục bộ bằng cách sử dụng các cặp khóa và giá trị để bất cứ khi nào người dùng quay lại ứng dụng web của bạn, họ sẽ thấy cùng một kết quả mà họ đã sử dụng trước đó.

Việc triển khai bên dưới là một giá trị thẻ chọn đơn giản, sau khi được thay đổi, dữ liệu sẽ tồn tại trong bộ nhớ cục bộ.

`useLocalStorage.js`

```js
// Use Local Storage Custom Hook
import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue] as const;
}

export default useLocalStorage;
```

`App.js`

```js
import * as React from 'react'
import './style.css'
import useLocalStorage from './useLocalStorate'

export default function App() {
  const [storedValue, setStoredValue] = useLocalStorage('select-value', 'light')

  return (
    <div>
      <select
        className="select"
        value={storedValue}
        onChange={(e) => setStoredValue(e.target.value)}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      <p className="desc">
        Value from local storage: <span>{storedValue}</span>
      </p>
    </div>
  )
}
```

Ở đây, hook `useLocalStorage` nhận vào hai tham số, tên khóa lưu trữ cục bộ để lưu trữ và một giá trị mặc định phải có ở đó.

Hook trả về hai giá trị: giá trị lưu trữ cục bộ của khóa mà bạn đang sử dụng và một cách để thay đổi giá trị khóa đó bằng cách cung cấp cho chúng tôi một phương thức `setter`. Trong trường hợp này, phương thức `setStoredValue`.

Trong tệp `useLocalStorage.js`, trước tiên chúng tôi đang cố gắng **NHẬN** giá trị lưu trữ cục bộ bằng khóa đó bằng phương thức `localStorage.getItem()`. Nếu điều đó tồn tại, chúng tôi đang thiết lập giá trị. Nếu được tìm thấy, chúng ta `JSON.parse()` giá trị và trả về giá trị đó. Nếu không, giá trị ban đầu được cung cấp được đặt làm giá trị mặc định.

Hàm `setLocalStorage()` tính đến giá trị được truyền vào là một hàm hay một giá trị biến đơn giản. Ngoài ra, nó xử lý việc thiết lập giá trị của lưu trữ cục bộ bằng cách sử dụng hàm `localStorage.setItem()`.

## Làm thế nào để trở nên nổi bật với tư cách là một nhà phát triển bằng cách tạo ra các dự án phụ?

Điều luôn làm việc cho tôi và giúp tôi nổi bật là những dự án phụ mà tôi đã xây dựng.

Theo tôi, bạn không cần phải xây dựng 10 dự án phụ cơ bản về cookie. Thay vào đó, hãy thử xây dựng một hoặc hai dự án thực sự tốt, nơi bạn có thể triển khai tất cả các khái niệm về React/HTML/ CSS/JavaScript và mọi thứ mà bạn đã học.

Giả sử người phỏng vấn có 14 cuộc phỏng vấn trong một tuần và phải xem xét lý lịch của 14 ứng viên. Họ có nhiều khả năng sẽ quan tâm đến hồ sơ của bạn hơn vì bạn đã tạo một trang web rút gọn liên kết tính phí $ 1 sau mỗi 1000 lượt truy cập liên kết thay vì bản sao Amazon/Netflix.

Một lần nữa, không có gì sai khi tạo ra các bản sao và thực hành các kỹ năng của bạn. Nhưng luôn luôn tốt khi có ít nhất 1 dự án độc đáo giúp bạn nổi bật giữa đám đông.

Ngoài ra, việc tạo các dự án phụ sẽ giúp bạn nâng cao kỹ năng với tư cách là một nhà phát triển. Không thể biết trước mọi thứ khi tạo một dự án từ đầu. Trên đường đi, bạn sẽ phải học nhiều kỹ năng khác nhau và trở nên giỏi giang.

## Thực hành, thực hành, thực hành.

Có một câu nói nổi tiếng như sau:

> Every interview is a mock interview for you till you get your first front-end job.
> William Shakespeare.
> Tạm dịch:
> Mỗi cuộc phỏng vấn là một cuộc phỏng vấn giả cho bạn cho đến khi bạn nhận được công việc đầu tiên của mình.

và điều này đúng ở một mức độ lớn.

Bản thân tôi đã thất bại 100 lần trước khi nhận được công việc đầu tiên. Đó là phản hồi liên tục và lặp đi lặp lại mà bạn phải thực hiện để đạt được những gì bạn muốn.

Trong trường hợp của chúng ta, nhận được một công việc front-end trở nên dễ dàng khi:

- Bạn có kiến thức chuyên sâu về các kỹ năng của mình - React trong trường hợp này (cùng với HTML, CSS và JS).
- Bạn có một loạt các dự án để giới thiệu, khiến bạn trở nên nổi bật.
- Bạn sẵn sàng bỏ thời gian và nỗ lực để học hỏi thêm và thử thách bản thân.
- Bạn đọc blog freeCodeCamp thường xuyên và thực hành các câu hỏi ở đó (😉)

## Tổng kết

Có rất nhiều câu hỏi để luyện tập cho một vòng viết mã bằng máy. Người phỏng vấn có thể hỏi nhiều bộ câu hỏi khác nhau để kiểm tra kỹ năng của bạn.

Bạn có thể sử dụng `Algochurn` để thực hành các câu hỏi phỏng vấn JavaScript phổ biến nhất, Câu hỏi phỏng vấn React và các câu hỏi thuật toán được hỏi trong vòng phỏng vấn kỹ thuật front-end cùng với các giải pháp và cách tiếp cận của họ.

Chúc may mắn và Happy Coding! 👑

Source: https://www.freecodecamp.org/news/prepare-for-react-technical-interviews
