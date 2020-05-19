$(document).ready(function() {
	var select = document.getElementById("year");
    
	var opt = document.createElement('option');
	opt.value = "Năm"
	opt.innerHTML = "Năm";
	select.appendChild(opt);

	var start = 1900;
	var till = new Date().getFullYear();;
	for(var year=start; year<=till; year++){
		var opt = document.createElement('option');
		  opt.value = year;
		  opt.innerHTML = year;
		  select.appendChild(opt);
	};
});

$(document).ready(function() {
	var select = document.getElementById("month");
	var start = 1;
	var till = 12;
	for(var month=start; month<=till; month++){
		var opt = document.createElement('option');
		  opt.value = month;
		  opt.innerHTML = month;
		  select.appendChild(opt);
	};
});

$(document).ready(function() {
	var select = document.getElementById("day");
	var start = 1;
	var till = 31;
	for(var day=start; day<=till; day++){
		var opt = document.createElement('option');
		  opt.value = day;
		  opt.innerHTML = day;
		  select.appendChild(opt);
	};
});





