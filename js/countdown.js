
var marriageDate = new Date('Mar 2, 2019 11:00:00').getTime();
var countDownStartTime = new Date().getTime();
var oneDay = 1000 * 60 * 60 * 24;
var oneHour = 1000 * 60 * 60;
var oneMinute = 1000 * 60;

printCountDown()

var interval = setInterval(function() {
  if (!printCountDown()) {
    clearInterval(interval);
  }
}, 1000);

function printCountDown() {
  var now = new Date().getTime();
  var diff = Math.abs(marriageDate - now);
  var married = marriageDate - now <= 0

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(diff / oneDay);
  var hours = Math.floor((diff % oneDay) / oneHour);
  var minutes = Math.floor((diff % oneHour) / oneMinute);
  var seconds = Math.floor((diff % oneMinute) / 1000);

  if (married) {
    document.getElementById('countdown-message').innerHTML = '우리가 결혼한 지<br>' + days + '일 ' + hours + '시간 ' + minutes + '분 ' + seconds + '초';
  } else {
    document.getElementById('countdown-message').innerHTML = '우리의 결혼까지<br>' + days + '일 ' + hours + '시간 ' + minutes + '분 ' + seconds + '초';
  }
  // 1시간 동안만 실행되도록
  return now - countDownStartTime < oneHour;
}