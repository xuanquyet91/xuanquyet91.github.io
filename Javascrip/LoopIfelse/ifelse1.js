console.log("hello")

// bài 1: rẽ nhánh, Sử dụng câu lệnh if để viết 1 hàm với 2 tham số bất kỳ, 
// kiểm tra xem 2 tham số có phải là number không và tìm ra số lớn nhất 
// trong 2 số đó.

function nubmax(x,y){
	if (typeof x == "number" & typeof y == "number") {
		return Math.max(x,y);
	}else
		return "False";
}

// Bài 2: làm ở phần loop nâng cao của giai thừa rồi

// Bài 3: Cho 1 mảng các số bất kỳ. 
// Tạo ra 1 mảng mới chỉ chứa các số chẵn lấy ra từ mảng trên 
// và sắp xếp theo thứ tự giảm dần.
// if (dk[i] % 2. TEST: even([2,3,11,8,9,10])

function even(arr){
	console.log(arr.sort(function(a, b){return b - a}));
		for (var i = 0; i < arr.length; i++) {
			var final = 1;
			if (arr[i] % 2 !== 0) { continue;
			} document.write('[' + (final= arr[i] * final) + ']');
		}
	}

//Bài 4: 	Một trang web cho phép người dùng tạo tài khoản. 
//Hãy viết hàm kiểm tra tính hợp lệ của thông tin người dùng nhập vào.
//Nếu hợp lệ trả về "Pass", nếu không hợp lệ trả về "Fail".
//Hãy kiểm tra username phải khác rỗng và không được vượt quá 20 ký tự, 
//password phải có độ dài từ 6 đến 32 ký tự, confirm phải giống password.
 

//tham số truyền vào func là 1 object
//trong func thì check các đối tượng ở trong object xem có thỏa mãn điều kiện không
//	- nếu thỏa mãm thì push pass vào trong mảng
//	- nếu không thỏa mãn thì push fail vào trong mảng
//cuối func thì return hoặc console.log hoặc write ra mảng có giá trị đã check
// obj.username = a;
//	var b = obj.password;
//	var c = obj.confirm;
//	var obj= {};
//	obj.username = a;


function douCheck(a,b,c){
	var obj = { username: "username", password: "secret", confirm: "secret"};
	obj.username = a;
	obj.password = b;
	obj.confirm = c;
	var arr = [];
	if (obj.username !== null && obj.username.length <20) {
			arr.push('pass')
		}else 
			arr.push('fail')
	
	if (obj.password.length >= 6 && obj.password.length <= 32) {
			arr.push('pass')
		}else 
			arr.push('fail')

	if (obj.confirm.length >= 6 && obj.confirm.length <= 32) {
			arr.push('pass')
		}else 
			arr.push('fail')
		document.write(arr);
} 
