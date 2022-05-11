function setStyle(el, color="blue", fontSize="1.5em", backgroundColor="red") {
    return (function() {
        this.style.color = color;
        this.style.fontSize = fontSize; 
        this.style.backgroundColor = backgroundColor;
    }.bind(el))();
}

let h1 = document.getElementById("title");

setStyle(h1, "green");