const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const button = document.getElementById("btn");
const color = document.getElementById("color");

function hex_random() {
    return Math.floor(Math.random()*hex.length);
}

button.addEventListener("click", function() {
    let hex_color = "#";
    for(let i=0; i<6; i++){
        hex_color += hex [hex_random()];
    }

    color.innerHTML = hex_color ;
    document.body.style.backgroundColor = hex_color;
})