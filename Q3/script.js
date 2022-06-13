function setStyle(color = "blue", fontSize = "1.5em", backgroundColor = "red") {
  this.style.color = color;
  this.style.fontSize = fontSize;
  this.style.backgroundColor = backgroundColor;
}

let h1 = document.getElementById("title");

setStyle.call(h1, "green");
