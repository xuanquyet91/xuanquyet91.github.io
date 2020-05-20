var qoutes = [{
	qoute: 'aaaaaaaaaaaaaa',
	author: 'abc',
},
{
	qoute: 'bbbbbbbbb',
	author: 'abcd',
},
{
	qoute: 'ccccccc',
	author: 'abcde',
},
{
	qoute: 'ddddđ',
	author: 'abcdef',
},
{
	qoute: 'eeeeeeee',
	author: 'abcdefg',
},
{
	qoute: 'fffffffff',
	author: 'abcdefgh',
},
];

function makeRandomNumber(range){
	return Math.floor(Math.random()*range);
}

function getqoute(){
	return qoutes[makeRandomNumber(qoutes.length)]
}

function makeqoute(){
	var qoute = getqoute();
	var eleQoute = document.getElementById('qoute');
	var eleAuthor = document.getElementById('author');

	eleQoute.innerText = qoute.qoute;
	eleAuthor.innerText = qoute.qoute;
}

window.onload = makeqoute;