let coinContainer = document.querySelector(".coin")

let scoreTag = document.querySelector(".score")

let point = document.querySelector(".point")
let score = 0
coinContainer.addEventListener("click",function (){
    score += 1
    scoreTag.innerHTML = score
    
})

