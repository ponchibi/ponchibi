/*
1. Array.prototype.at(): nhận 1 số index dương hoặc âm và trả về giá trị(value) tại vị trí index. với số nguyên âm là duyệt từ cuối mảng đến đầu mảng.

2.Array.prototype.concat(): nối 2 hoặc nhiều mảng với nhau và trả về mảng mới đã nối.

3.Array.prototype.copyWithin():  hàm dùng để sao chép các phần tử trong mảng với vị trí bắt đầu và kết thúc việc sao chép được xác định.
cú pháp: array.copyWithin(target, start, end)
trong đó: 
o	target là vị trí mà hàm sẽ bắt đầu ghi đè các phần tử sao chép được.
o	start là vị trí bắt đầu sao chép, giá trị mặc định là 0.
o	end là vị trí kết thúc sao chép, nếu không nhập vào thì mặc định là vị trí cuối cùng của mảng.
4. Array.prototype.entries(): tra về một danh sách lần lượt là index_value
var a = ['a', 'b', 'c'];
var iterator = a.entries();
for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']

5. Array.prototype.every(): kiểm tra các phần tử có trong mảng với một điều kiện cho trước. trả về giá trị Boolean.
function isSubset(array1, array2) {
  // returns true if array2 is a subset of array1
  return array2.every(function (element) {
    return array1.includes(element);
  });
}
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false


6. array.fill: thay đổi giá trị trong mảng từ vị trí bắt đầu đến vị trí kết thúc được xác định sẵn.
Cú pháp: array.fill(số muốn thay, start, end)

7. array.filter(): lấy ra một hoặc nhiều giá trí trong mảng theo điều kiện cho trước.

8.array.find(): trả về giá trị đầu tiên thỏa mãn điều kiện cho trước. nếu ko có giá trị nào thỏa mãn thì trả về undefined.

9.array.findIndex(): trả về index của giá trị đầu tiên trong mảng thỏa đk. Nếu ko có trả về -1

10.array.flat(): trả về 1 mạng phẳng với kết hợp 2 hoặc nhiều mảng với độ sâu được chỉ định trước

11.array.flatMap(): cũng tương tự như flat và có thêm phương thức map() dùng để ảnh xạ mỗi giá trị thành giá trị mới

12.array.forEach(): lặp lại các items(element) trong mảng

13.array.from(): tạo ra array từ một kiểu dữ liệu khác

14.array.includes(): này giúp các bạn check sự tồn tại của item nào trong mảng, trả về true hoặc false..

15.array.indexOf(): trả về index đầu tiên thỏa mãn điều kiện. nếu không có tra về -1

16.array.isArray(): kiểm tra một tham số truyền vào có phải là mảng ko.

17.array.join(): tạo ra một chuỗi mới với một mảng cho trước

18.array.keys(): tạo ra một array iterator object chứa những key tương ứng với từng index trong mảng.

19. array.lastIndexOf(): giống array.indexOf nhưng duyệt từ cuối mảng đến đầu mảng.

20. array.map(): tạo ra một mảng mới với phương thức được cài đặt trước

21.array.of(): tạo ra một mảng mới với những giá trị cho trước.

22.array.pop(): lấy ra giá trị cuối cùng của mảng

23.array.push(): thêm một hoăc nhiều element vào cuối mảng và trả về độ dài mảng

24.array.reduce(): dựa vào hàm reducer(tính toán, hoặc làm công việc nào đó) để trả về duy nhất 1 kết quả cuối cùng

25.array.shift(): remove phần tử đầu tiên và trả về element phần tử đó

26.array.slide(): trích xuất(sao chép) mảng mới từ vị trí start đến vị trí end-1.

27.array.some(): Hàm some trong js có nhiệm vụ lặp qua tất cả các phần tử của mảng, mỗi lần lặp nó sẽ truyền giá trị của phần tử đang lặp vào hàm callback. Chỉ cần hàm callback return true là hàm some sẽ return true. Ngược lại, nếu duyệt hết mảng mà không có return true nào thì hàm some sẽ return false. Nói đơn giản, nếu một phần tử nào đó thỏa với chương trình trong hàm callback thì hàm some sẽ return true. Ngược lại nếu tất cả các phần tử đều không thỏa thì nó sẽ return false.

28.array.sort(): Hàm sort là một method thuộc đối tượng array trong javascript, được đùng dể sắp xếp các phần tử trong mảng tăng dần hoặc giảm dần theo số thứ tự trong bảng mã ascii, hoặc theo quy tắc trong callback function.

29.array.splice(): Splice javascript là hàm dùng để xóa các phần tử trong mảng, hoặc thay thế một phần tử trong mảng thành một hoặc nhiều phần tử khác. Nói cách khác:  Bạn có thể dùng hàm array splice để xóa phần tử. Hoặc dùng để bổ sung phần tử vào một vị trí nào đó trong mảng.

30.array.toString(): Phương thức toLocaleString () trả về một chuỗi đại diện cho các phần tử của mảng. Phương thức Date.toLocaleString() sẽ chuyển đổi một đối tượng thời gian thành một chuỗi thời gian dựa theo quy tắc thời gian của địa phương. Chuỗi trả về sẽ bao gồm các thông tin giờ, phút, giây, ngày, tháng, năm.

31.array.toSource(): Phương thức array toSource() trong JavaScript trả về một chuỗi biểu diễn code nguồn của mảng. Phương thức này được hỗ trợ bởi Mozilla.

32.array.toString(): trả về chuỗi tương ứng với từng phần tử của mảng.

33.array.unshift(): phương thức thêm một hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng.

34.array.value(): return array iterator obeject với từng value trong object.
*/
