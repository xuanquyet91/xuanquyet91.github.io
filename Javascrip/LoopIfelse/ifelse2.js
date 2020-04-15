console.log('hello')

// Bài 1: Bài 1. In ra màn hình ngày, tháng năm hiện tại và xác định đó là mùa nào trong năm. 
// Ví dụ lấy ngày tháng năm hiện tại bằng đối tượng Date của javascript:
 
var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();
var arr = [];
switch (new Date().getMonth() + 1){
	case 1:
	case 2:
	case 3:
		document.write(arr= 'Đây là mùa Xuân' +' '+ date +'/' + month +'/' + year + '.');
		break;
	case 4:
	case 5:
	case 6:
	arr.push('Đây là mùa Hạ')
		document.write(arr +' '+ (new Date().getDate()) +'/' + (new Date().getMonth() + 1) +'/' + (new Date().getFullYear())+ '.');
		break;
	case 7:
	case 8:
	case 9:
		document.write(arr= 'Đây là mùa Thu' +' '+ (new Date().getDate()) +'/' + (new Date().getMonth() + 1) +'/' + (new Date().getFullYear())+ '.');
		break;
	case 10:
	case 11:
	case 12:
		document.write(arr= 'Đây là mùa Đông' +' '+ (new Date().getDate()) +'/' + (new Date().getMonth() + 1) +'/' + (new Date().getFullYear())+ '.');
		break;
	default:
    	document.write(arr= 'Đây là Lỗi');
    	break;
}	



// Bài 2. Một sinh viên có điểm kiểm tra môn lập trình web là x dưới dạng số (0 <= x <= 10).
//  Hãy chuyển điểm số sang dạng chữ với điều kiện sau:

function diemthi(x){
	if (x < 4) {
		console.log("Điểm F");
		//dk 1 đúng
	}else if(x >= 4 && x < 5.5){
		console.log("Điểm D");
		//dk 2 đúng và dk 1 sai
	}else if(x >= 5.5 && x < 7){
		console.log("Điểm C");
		// dk 3 đúng và dk 1&2 sai
	}else if(x >= 7 && x < 8.5){
		console.log("Điểm B");
		// 4 đúng và 1-2-3 sai
	}else if(x >= 8.5 && x <= 10){
		console.log("Điểm A");
		// 1-2-3-4 sai
	}else
		console.log("Kết quả lỗi")
}	

//- Bài 3. Viết hàm translate() có tác dụng dịch từ "Hello" sang 5 thứ tiếng khác nhau (tự chọn)
//với tham số truyền vào là mã quốc gia, sử dụng switch và mặc định dịch sang tiếng Việt.

function translate(maQG) {
switch (maQG) {
  case "VN": 
  case "JP":
  case "UK":
  case "US":
  case "UZ":
    document.write("Xin Chào")
  break;
  default:
    document.write("Lỗi")
  break;
 }
}

// Bài 4: - Bài 4. Cho 1 mảng chỉ gồm các giá trị true và false. 
// Hãy kiểm tra xem giá trị true xuất hiện lần đầu trong mảng ở vị trí nào.
// Booleann(["false","false","false","true","true"])

function Booleann(arr){
	for (var i = 0; i < arr.length; i++) {
		(i);
		if (arr[i] == "true") {
			break;
		}
	}	return (i);
}
