var cards = ['f1', 'f2', 'f3', 'f4', 'f5'];
var arr = [];

function shuffle(array) {
	var cards = array;
	var currentIndex = array.length, temporaryValue, randomIndex;
	
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

	// Pick a remaining element...
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;

	// And swap it with the current element.
	temporaryValue = array[currentIndex];
	array[currentIndex] = array[randomIndex];
	array[randomIndex] = temporaryValue;
  }
  return array;
}	

$(document).ready(function() {
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
});

function flip(str){
  $(str).toggleClass('flipped');
}
