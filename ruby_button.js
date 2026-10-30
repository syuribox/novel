// ruby_button.js
const STORAGE_KEY = 'ruby-type';
const classes = ['ruby-off', 'ruby-on', 'ruby-inline'];
const body = document.body;
const saved = localStorage.getItem(STORAGE_KEY);
let index = 0;
if (saved === classes[0]) {
  index = 0;
} else if (saved === classes[1]) {
  index = 1;
} else if (saved === classes[2]) {
  index = 2;
}
if(index){
  body.classList.remove(...classes);
  body.classList.add(classes[index]);
}
const btn = document.getElementById('toggle-ruby');
function updateButton() {
  const classes_text = ['ルビON', 'ルビIN', 'ルビOFF'];
  btn.textContent = classes_text[index];
}
updateButton();
btn.addEventListener('click', () => {
  body.classList.remove(...classes);
  index = (index + 1) % classes.length;
  body.classList.add(classes[index]);
  localStorage.setItem(STORAGE_KEY, classes[index]);
  updateButton();
});
