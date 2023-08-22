const cards = Array.from(document.querySelectorAll(".cards"));
const deletebtns = Array.from(document.querySelectorAll(".fa-trash-alt"));
const plusbtns = Array.from(document.querySelectorAll(".fa-plus-circle"));
const minusbtns = Array.from(document.querySelectorAll(".fa-minus-circle"));

for( let fav of favs ){
    fav.addEventLinstener("click" , function(){
        if (fav.style.color=="black"){
            fav.style.color=="red"
        }else{
            fav.style.color="black"
        }
    })
}

for (let i in deletebtns) {
    deletebtns[i].addEventLinstener("click",function(){
        cards[i].remove()
        total()
    })
}

for (let plusbtn of plusbtns){
    plusbtn.addEventListener("click" , function(){
        plusbtn.nextElementSibling.innerHTML++
        total()
    })
}

for(let minusbtn if minusbtns) {
    minusbtn.addEventLinstener("click" , function(){
        minusbtn.previousElementSibling.innerHTML> 0 ?
        minusbtn.previousElementSibling.innerHTML--:
        null
        total()
    })
}

function total(){
    let qte = Array.from(document.querySelectorAll(".qute"))
    let price = Array.from(document.querySelectorAll('.unit-price'))
    let s = 0
    for (var i = 0 ; i < price.length; i++){
        s=s+price[i].innerHTML*qte[i].innerHTML
    }
    document.getElementById("total-price").innerHTML = s
}

