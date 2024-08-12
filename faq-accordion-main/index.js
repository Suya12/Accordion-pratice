//+ 버튼 토글
/*
window.addEventListener("load", function() {
    var content = this.document.querySelector(".content");
    var button = this.document.querySelector(".img-button");


    button.onclick = function() {
       content.classList.toggle('expand');
    }; 
});
*/

// window.addEventListener("load", function() {
//     var buttons = document.querySelectorAll(".img-button");
//     var contents = document.querySelectorAll(".content");
//     console.log("hi");
//     var i = 0;
//     buttons.forEach(function (button) {
//         button.addEventListener('click' ,function(event) {
//             contents
//         })
//     })
        
// })

window.addEventListener("load", function() {
    document.querySelectorAll('.img-button').forEach((button, index) => {
        button.addEventListener('click', () => {
            button.classList.toggle('expand')
            const content = document.querySelectorAll('.content')[index];
            content.classList.toggle('expand');
        });
      });
});

