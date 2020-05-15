var cards = ['f1', 'f2', 'f3', 'f4', 'f5'];
var current = null;
var count = 0;
var remainingtime = 20;

function flip(card){
	$(card).toggleClass('flipped');
	if (!current) {
		current = $(card);
	}else{
		if (current.attr('data-name') != $(card).attr('data-name')) {
			console.log('Khac');
			setTimeout(function(){
				$(card).toggleClass('flipped');
				current.toggleClass('flipped');
				current = null;
			},500);
		}else{
			console.log('Giong');
			setTimeout(function(){
				$(card).css('opacity','0');
				current.css('opacity','0');
				current = null;
				count++;
				if (count == 5) {
	        	$(".modal.win").css({"display": "block"});
				}
			},300);
		}
	}
}

function shuffle(array) {
	var cards = array;
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;
	temporaryValue = array[currentIndex];
	array[currentIndex] = array[randomIndex];
	array[randomIndex] = temporaryValue;
  }
  return array;
}	

function startGame() {
	$(".modal").css({"display": "none"});
	$(".btn-reset").css({"opacity": "0"});
	cards = cards.concat(cards);
	cards = shuffle(cards);
	var html = '';
	for (var i = 0; i < cards.length; i++) {
		html += '<div class="grid">'+ 
		'<div class="card" data-name="' + cards[i] + '" onclick="flip(this)">' + 
		'<div class="front"><img src="card.jpg"></div>' + 
		'<div class="back"><img src="'+ cards[i] + '.jpg"></div>' + 
		'</div></div>';
		};
	$('.content').html(html);

    var run = setInterval(function () {
        document.getElementById('down').value = remainingtime;    
        remainingtime--;                 
        if (remainingtime >-1) {      
        	remainingtime;             
        }else if (remainingtime == -1) {
        	clearInterval(run);
        	$(".modal.lose").css({"display": "block"});
        	$(".btn-reset").css({"opacity": "1"});
        }                  
    }, 1000);
}



       
