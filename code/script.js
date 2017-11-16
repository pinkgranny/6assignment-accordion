// A function that adds and remove the class "active" on the section you click on.
// function toggle() {
//   this.classList.toggle("active")
// }

// function toggle() {
//   this.classList.toggle("hidden")
// }

// Selects and HTML element, and calls a function which will be executed when the element is clicked.
// document.getElementById("title").onclick = toggle

var acc = document.getElementsByClassName("title");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
      this.classList.toggle ("active");
      var panel =this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
}
