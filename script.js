let mainCount = 0;
const button = document.getElementById("increment");
const textHolder = document.getElementById("mainCount");
textHolder.innerHTML = mainCount;

button.addEventListener("click", function() {
  textHolder.innerHTML = ++mainCount;
});
