console.log("hello")
// Bài 1: Cho 1 chuỗi, hãy viết hàm có tác dụng sao 
// chép chuỗi đó lên 10 lần, ngăn cách nhau bởi ký tự "-". 

function copy(x){
	for (var i = 0; i < x; i= i + 1) {
		if (i == x-1) {
			 document.write("bai tap");
		}else{	
			 document.write("bai tap-");		
			}	 			
	}
}


// Bài 2:Cho 1 số nguyên dương n. Viết hàm tính n giai thừa (n!)


function factorialFor(x){
	if ( x != 0) {
		var total = 1;
		for (var i = 1; i <= x; i= i + 1) {
		    total = total * i;
		}
		return total;
	}
	else{return 1}
}


// with while

function factorialWhile(x){
	var total = 1;
	var i = 1;
	while(i <= x) {
	   total = total * i;
	   i++;
	}
	   return total;
}

//Bài 3: Cho 1 chuỗi, hãy viết hàm đảo ngược chuỗi đó. 
//Ví dụ cho chuỗi "hello" thì kết quả trả về sẽ là "olleh"

function reverse(str){
	var splitSTR = str.split("");
	var reverseSTR = splitSTR.reverse();
	var strFinal = reverseSTR.join("");
	return strFinal;
}

// Bài 4: Cho 1 mảng tên của n học viên. 
// Viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái và in ra màn hình 
// danh sách học viên kèm theo số thứ tự (sử dụng document.write()).
// //Test: sortArr(["Minh","An","Hoa","Trung","Dong"])

function sortArr(arr){
	arr.sort();
	for (var i= 0; i < arr.length; i = i + 1){
		document.write(i + 1 + " " + arr[i]+ "<br>")
	}
}

// Bài 5: Cho 1 mảng các số. Viết function tạo ra 1 mảng mới với các số là số dư 
// tương ứng khi chia các số trong mảng cũ cho 2. 
// Gợi ý: Để lấy số dư của 1 số cho 2 ta dùng toán tử %. Ví dụ: 5 % 2 = 1 (5 chia 2 dư 1).
//Test: surplus([2,3,5,8,9,10])
//


function surplus(arr){
	var final = [];
	for (var i=0; i < arr.length; i= i + 1){
		console.log(final.push(arr[i]%2))
	}return final;
}

//- Bài 6. Chỉ dùng vòng lặp for hoặc while, viết function in ra màn hình các số từ 1 đến 100 
//sao cho những giá trị là chẵn sẽ có màu xanh, những giá trị là lẻ có màu đỏ.


function loopFor(x){
	for (var i=0; i < 100; i++){
		if(i % 2 ==0){
			document.write('<li style="color:green;">'+i+'</li>'+"<br>");
		}else
			document.write('<li style="color:red;">'+i+'</li>'+"<br>");
	}
}	

// cách 2: nhúng qua css

function loopFor1(x){

	for (var i=0; i < 100; i++){
		if(i % 2 ==0){
			document.write('<div class="colorG">'+i+'</div>');
		}else
			document.write('<div class="colorR">'+i+'</div>');
	}
}	

