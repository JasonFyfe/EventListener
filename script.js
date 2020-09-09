var body = document.querySelector("#body");
var button = document.querySelector("#button");
var flipflop = false;

button.addEventListener('click', function()
{
    document.body.classList.toggle("purple");
});