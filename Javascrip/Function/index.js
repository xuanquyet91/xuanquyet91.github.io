console.log("Xin chao cac ban!");

//Bai 1: Viết 1 function tính bình phương của 1 số.

function square(x){
	alert(x * x)
}
//bai 2: Viết function tính thế kỷ của 1 năm. Biết thế kỷ thứ nhất tính từ năm 1 đến 100.

var century = function(z){
	return Math.ceil(z / 100);
}
/*bai 3: Cho 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, 
lấy ra 10 ký tự đầu tiên và thêm vào dấu "..." ở cuối chuỗi. 
test: cutandGet("abcdefghiklmnopasca")*/
function cutandGet1(strs){
	return (strs.slice(0,10) + "...");
}

/*Cho 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, 
lấy từ ký tự thứ 6 đến hết và thêm vào dấu "..." ở cuối chuỗi.*/
function cutandGet(strs){
	return (strs.slice(5) + "...");
}

/*bai 4: Viết 1 function có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên.
\s = kí tự trắng (dấu cách, tab, dòng mới,...)
\S = kí tự không phải kí tự trắng
// = Tìm kiếm ký tự trong ngoặc
^ = bắt đầu chuỗi
g = so khớp toàn bộ chuỗi
(^|\s) =(x|y)
*/

function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, function(l) {
    return l.toUpperCase();
  });
}

//bai 5: Viết 1 function lấy ra 1 số nhỏ nhất trong 1 mảng các số.

 function myFunction(points) {
  points.sort(function(a, b){return a-b});
  return points[0]
}

	
//bài 6:

//Test: fillter(["Minh","An","Hoa","Trung","Dong"])
function fillter(students) {
	 students.sort();
	 return document.write(students.join("<br>"));
}
