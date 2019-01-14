
var marriageDate = new Date('Mar 2, 2019 11:00:00').getTime();

printCountDown()

var x = setInterval(function() {
  if (!printCountDown()) {
    clearInterval(x);
  }
}, 1000);

function printCountDown() {
  var now = new Date().getTime();
  var diff = marriageDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('countdown-message').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

  if (diff < 0) {
    document.getElementById('countdown-message').innerHTML = 'We are merried!';
  }
  return diff >= 0;
}