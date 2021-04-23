var counter=0;
function moveBy10(x){
  var width =10;
  var bar = document.getElementById('bar');
  counter++;
  if(counter*x < 101){
    bar.style.width = counter*x +'%';
  }
}
