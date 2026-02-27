const search = document.querySelector("#search");
const divs = document.querySelectorAll(".home");

search.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase();
    divs.forEach(item => {
        const title = item.querySelector(".item").textContent.toLowerCase(); 
        (item.style.display = title.includes(word) ? "block" : "none");
    })
    
})
