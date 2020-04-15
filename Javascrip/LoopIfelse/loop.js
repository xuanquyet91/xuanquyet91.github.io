console.log("hello")
// Bài 1: Cho 1 chuỗi, hãy viết hàm có tác dụng sao 
// chép chuỗi đó lên 10 lần, ngăn cách nhau bởi ký tự "-". 

function chuoilap(x){
	for (var i = 0; i < x; i= i + 1) {
		if (i == x-1) {
			 document.write("bai tap");
		}else{	
			 document.write("bai tap-");		
		}	 			
	}
}


// Bài 2:Cho 1 số nguyên dương n. Viết hàm tính n giai thừa (n!)


	function withfor(x){
		if ( x != 0) {
			var news = 1;
			for (var i = 1; i <= x; i= i + 1) {
			    news = news * i;
			} 
			return news;
		}else{return 1 }
	}


// with while

function withwhile(num) {
var news = 1;
var i = 1;
while(i <= num) {
   news = news * i;
   i++;
}
   return news;}

//Bài 3: Cho 1 chuỗi, hãy viết hàm đảo ngược chuỗi đó. 
//Ví dụ cho chuỗi "hello" thì kết quả trả về sẽ là "olleh"

function daonguoc(chuoi){
	var tachchuoi = chuoi.split("");
	var daochuoi = tachchuoi.reverse();
	var ghepchuoi = daochuoi.join("");
	return ghepchuoi;}

// Bài 4: Cho 1 mảng tên của n học viên. 
// Viết function sắp xếp lại thứ tự các học viên theo bảng chữ cái và in ra màn hình 
// danh sách học viên kèm theo số thứ tự (sử dụng document.write()).
// //Test: sapxep(["Minh","An","Hoa","Trung","Dong"])

function sapxep(chuoi){
	chuoi.sort();
	for (var i= 0; i < chuoi.length; i = i + 1){
	document.write(i + 1 + " " + chuoi[i]+ "<br>")
	}
}

// Bài 5: Cho 1 mảng các số. Viết function tạo ra 1 mảng mới với các số là số dư 
// tương ứng khi chia các số trong mảng cũ cho 2. 
// Gợi ý: Để lấy số dư của 1 số cho 2 ta dùng toán tử %. Ví dụ: 5 % 2 = 1 (5 chia 2 dư 1).
//Test: sodu([2,3,5,8,9,10])
//

function sodu(arrr){
	for (var i=0; i < arrr.length; i= i + 1){
		document.write(arrr[i] % 2);
	}
}

//- Bài 6. Chỉ dùng vòng lặp for hoặc while, viết function in ra màn hình các số từ 1 đến 100 
//sao cho những giá trị là chẵn sẽ có màu xanh, những giá trị là lẻ có màu đỏ.


function chanle(x){
	for (var i=1; i < 101; i++){
		if(i % 2 ==0){
			document.write('<li style="color:green;">'+i+'</li>'+"<br>");
		}else
			document.write('<li style="color:red;">'+i+'</li>'+"<br>");
	}
}	

// cách 2: nhúng qua css

function lechan(x){

	for (var i=1; i < 101; i++){
		if(i % 2 ==0){
			document.write('<div class="abb">'+i+'</div>');
		}else
			document.write('<div class="abb">'+i+'</div>');
	}
}	

