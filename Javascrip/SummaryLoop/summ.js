// Bài 1. Viết funciton printTriangle(height), với height là số integer > 2,
//  in ra màn hình 1 hình tam giác vuông cân có chiều cao height. 

function printSquare(n) {
  for (var cha = 0; cha < n; cha ++) {
    var str = '';
    for (var con = 0; con < (cha + 1); con++) {
      console.log('str:'+ (str += ' * '));
    }
    document.write(str += '<br/>' )
  }
}

// Bài 2. Viết function printEmptyRectangle(width, height), 
// với width và height là 2 số integer > 3
// In ra một hình chữ nhật rỗng có kích thước width x height

function printEmptyRectangle(a, b){	
	for (var cao = 0; cao < b; cao++) {
		var str = '';
		if ((cao == 0) | (cao == b-1)) {	
			for (var dai = 0; dai < a; dai++) {
				var strrr = '&nbsp;';
				var strr = '';
				document.write( (str = '* '));			
			}
		}else	
			for (var i = 0; i < a; i++) {
				if ((i == 0)|(i == (a-1))) {
					document.write(' * ');
				}else if (i == (a-2)) {
					console.log(strrr +='');
					document.write(strrr);
				}else 
					console.log(strr += ' &ensp;');
					document.write(strr);
			}
				document.write('<br/>');	
		}
	}

// Bài 3. Viết function printSpecialTriangle(height), với height là số integer > 1
// In ra hình tam giác cân ngược với chiều cao bằng height.


 function printSpecialTriangle(x){
 	var str = '';
 	 for(var i = x; i > 0; i = i - 1){
 	 	var a = (x+x-1);
 	 	var b = i -1;
 	 	document.write(str += '&ensp;');
 	 	if (b == i- 1) {
	 	 	for(var j = a; j > 0; j = j - 1){
	 			document.write('*');
	 			document.write('<br>');}
	 	}else if (b == i - 1) {
	 		for(var j = a; j > 0; j = j - 1)
	 			document.write('*');}
		//document.write(<br>');	
 			/*if (j == a) {	

 			}else{
 				document.write('*');
 			}
 			document.write('str:'+'<br>')*/
 		document.write('<br>')
 	}
}	



