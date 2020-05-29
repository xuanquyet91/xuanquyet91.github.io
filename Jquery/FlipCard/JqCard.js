var cards = ['f1', 'f2', 'f3', 'f4', 'f5'];
var current = null;
var count = 0;
var isPlaying = false;
var running = null;
var normalTime = 15;
var hardTime = 20;
var maxTime = remainingTime = normalTime;

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

function flip(card) {
  // kiểm tra 
  if (!isPlaying) return;

  // vô hiệu hóa ấn vào thẻ này
  $(card).css('pointer-events', 'none');

  $(card).toggleClass('flipped');

  if (!current) {

    //bắt đầu đoán
    current = $(card);

  } else {
    // vô hiệu hóa tất các thẻ
    $('.card').css('pointer-events', 'none');

    // đoán sai
    if (current.attr('data-name') != $(card).attr('data-name')) {

      // úp thẻ bài không đúng sau 0.7s
      setTimeout(function() {
        $(current).toggleClass('flipped');
        $(card).toggleClass('flipped');
        current = null;

        // kích hoạt bấm tất cả các thẻ
        if (isPlaying) {
          $('.card').css('pointer-events', 'auto');
        }

      }, 700);
      // đoán đúng
    } else {

      // bật nhạc đúng
      document.getElementById('true-sound').play();

      // ẩn thẻ đúng sau 0.8s
      setTimeout(function() {
        $(card).css('opacity', '0');
        current.css('opacity', '0');
        current = null;

        count++;
        //kết thúc game nếu lật đủ 7
        if (count == 5) {

          // tắt nhạc nền
          document.getElementById('sound-game').load();
          //bật nhạc win
          document.getElementById('win-sound').play();

          //dừng chò chơi
          $('.progress').css('display', 'none');
          stopGame();
          openModal('win');
          $('.btn-reset').css('opacity', '1');
          $('.six-sec-ease-in-out').removeClass('animate');
          document.getElementById('10s-sound').load();

        } else {
          // kích hoạt bấm tất cả các thẻ
          $('.card').css('pointer-events', 'auto');

        }
      }, 800);
    }
  }
}

// thiết lập lại
function loadContent() {
  // thanh thời gian
  //$('.progressbar').css('display', 'none');
  $('.progress').css('display', 'none');
  $('.warp').css('display', 'none');
  $(".six-sec-ease-in-out").animate({
    width: "100%"
  }, 1);
  $('.six-sec-ease-in-out').css('background-color', '#32CD32');

  // đổi vị trí các quân bài
  cards = shuffle(cards);

  // thêm thẻ vào class wrap
  var html = '';
  for (var i = 0; i < cards.length; i++) {
	html += '<div class="grid">'+ '<div class="card" data-name="' + cards[i] + '" onclick="flip(this)">' + '<div class="front"><img src="image/card.jpg"></div>' + '<div class="back"><img src="image/'+ cards[i] + '.jpg"></div>' + '</div></div>';
    };
  $('.wrap').html(html);

  //mở modal bắt đầu
  openModal('begin');
}

function startGame(mode) {
  if (mode == 1) {
    // dễ
    maxTime = remainingTime = normalTime;
  } else {
    // khó
    maxTime = remainingTime = hardTime;
  }


  //đóng modal
  closeModal();
  $('.btn-reset').css('opacity', '0');

  // bắt đầu game
  isPlaying = true;
  point = 0;
  var current = null;
  $('.card').css('pointer-events', 'auto');

  //bật nhạc nền
  document.getElementById('sound-game').play();

  //bắt đầu thanh thời gian
  remainingTime = maxTime;
  /*$('.progressbar').css('display', 'block');
  $('progress').val(100);*/
  $('.progress').css('display', 'block');
  $('.six-sec-ease-in-out').css('transition', 'width ' + maxTime + 's ease-in-out');
  $(".six-sec-ease-in-out").animate({
    width: "0%"
  }, 1000);
  // start in under a sec
  running = setInterval(function() {
    remainingTime--;
    //$('progress').val(remainingTime / maxTime * 100);
    //15s chuyển mầu vàng
    if (remainingTime == 18) {

      $('.six-sec-ease-in-out').css('background-color', 'yellow');
    }
    // 10s chạy hiệu ứng animate
    if (remainingTime == 13) {

      $('.six-sec-ease-in-out').addClass('animate');
      document.getElementById('sound-game').load();
      document.getElementById('10s-sound').play();
    }

    // hết giờ kết thúc game
    if (remainingTime == 0) {
      //tắt nhạc nền
      document.getElementById('sound-game').load();


      //nhạc bật nhạc thua
      document.getElementById('lose-sound').play();

      //dừng game
      stopGame();
      openModal('lose');
      $('.btn-reset').css('opacity', '1');

      // bỏ class 10s
      document.getElementById('10s-sound').load();
      $('.six-sec-ease-in-out').removeClass('animate');
    }
  }, 1000);
}

function openModal(type) {
  $('.modal-backdrop').css('display', 'block');
  $('.modal').hide();
  // hiện modal ra 
  $('.modal.' + type).fadeIn();

}

function closeModal() {
  $('.modal-backdrop').css('display', 'none');
  $('.modal').hide();
}

function stopGame() {
  isPlaying = false;

  if (running !== null) {
    clearInterval(running);
  }
  $('card').css('pointer-events', 'none');
}

$(function() {
  running = null;
  cards = cards.concat(cards);

  loadContent();
});
       
