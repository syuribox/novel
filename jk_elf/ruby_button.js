// ruby_button.js
const STORAGE_KEY = 'ruby-onoff';
const body = document.body;
const saved = localStorage.getItem(STORAGE_KEY);
if (saved === 'true') {
  body.classList.add('ruby-off');
} else if (saved === 'false') {
  body.classList.remove('ruby-off');
}
const btn = document.getElementById('toggle-ruby');
function updateButton() {
  btn.textContent = body.classList.contains('ruby-off') ? 'ルビON' : 'ルビOFF';
}
updateButton();
btn.addEventListener('click', () => {
  body.classList.toggle('ruby-off');
  localStorage.setItem(STORAGE_KEY, body.classList.contains('ruby-off'));
  updateButton();
});
