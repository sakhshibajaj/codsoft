
var image = document.getElementById('favourite-image');
var images = ['babar2.png', 'hasnain2.png', 'rizwan.png', 'shadab 3.png','shanmasood.png','signed.png'];

var imageIndex = 0;

setInterval(function() {
  if (imageIndex >= images.length) {
    imageIndex = 0;
  }

  image.src = images[imageIndex];
  imageIndex++;
}, 1000);
var text = document.querySelector('.favourites p');
var texts = ['Cricket Bats', 'Cricket Balls', 'Cricket Helmets', 'Jerseys','Cricket Gloves','Signed Items'];

var textIndex = 0;

setInterval(function() {
  if (textIndex >= texts.length) {
    textIndex = 0;
  }

  text.textContent = texts[textIndex];
  textIndex++;
}, 1000);

