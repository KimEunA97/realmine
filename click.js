// 클릭 이벤트
const show = document.getElementsByClassName('hidden');
const tt = document.getElementById('title');

document.getElementById("title").onclick = function () { clickEvent() };

function clickEvent() {
  document.getElementById('detail').classList.remove('hidden')
  document.getElementById('title').removeAttribute( 'cursor');
  console.log('asdasd')

}