let fruit=[" 🍏 "," 🍊 "," 🍏 "," 🍏 "," 🍊 "]
let appleEl=document.getElementById("apple-el")
let orangeEl=document.getElementById("orange-el")
function shelf(){
    for (let i = 0; i<fruit.length;i++){
        if(fruit[i]=== " 🍏 "){
            appleEl.textContent +=" 🍏 "
        }else{
            orangeEl.textContent+= " 🍊 "
        }

    }
}
shelf()