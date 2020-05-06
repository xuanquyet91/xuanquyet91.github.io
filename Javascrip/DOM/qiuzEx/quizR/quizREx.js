function press(str) {
	var element = document.getElementsByClassName('tick');
	for (var i = 0; i < 14; i++) {
		console.log(element[i].checked = false);
	}	
}

function check(str) {
	var question_01 = document.allqs.question_01.value;
    var question_02 = document.allqs.question_02.value;
    var question_03 = document.allqs.question_03.value;
    var question_04 = document.allqs.question_04.value;
    var question_05 = document.allqs.question_05.value;
    var count = 0;
    if(question_01 == "a"){
            count++;
    }
    if(question_02 == "b"){
            count++;
    }
    if(question_03 == "a"){
            count++;
    }
    if(question_04 == "a"){
            count++;
    }
    if(question_05 == "c"){
            count++;
    }
    if (count == 5) {
    	window.location.assign('verygood.html');
    }else if (count !== 5){ 
    	alert("Bạn đúng " + count + " câu và sai " + (5- count) + " câu");
    	}
}
	