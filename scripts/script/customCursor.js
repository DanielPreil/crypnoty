// Get Cursor Current Position  and USe it
function updateCursorPos(e) {
  let circleCursor = document.querySelector('.circle-cursor');
  circleCursor.style.left = e.clientX + 'px';
  circleCursor.style.top = e.clientY + 'px';
  console.log(circleCursor)
}

document.addEventListener('mousemove', updateCursorPos);
document.addEventListener('scroll', updateCursorPos);