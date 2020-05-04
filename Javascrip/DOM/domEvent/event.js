
function press(str) {
	var a = document.getElementById("result");
	var x = str.innerHTML;
	a.value += x;
}

function final(str){
	var a = document.getElementById("result");
	var content = eval(result.value);
	a.value = content;
}
function dele(str){
	var a = document.getElementById("result");
	a.value = '';
}