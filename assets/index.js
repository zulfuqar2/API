function getLink(base,to){
    return `https://api.exchangerate.host/latest?base=${base}&symbols=${to}`;
}

const left_buttons = document.querySelector(".btn-left").children;
const right_buttons = document.querySelector(".btn-right").children;




function buttonChanger(btns){
    for (let btn of btns) {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
      
          for (let btn of btns) {
           bas= btn.classList.remove("active-button");
          }
      
          e.target.classList.add("active-button");
        });
      }
}



function getData(lButtons,rButtons){
    let base;
    let to;
    for(let btn of lButtons){
        if(btn.classList.contains("active-button")){
            console.log(btn.innerText);
        }
    }
    for(let btn of rButtons){
        if(btn.classList.contains("active-button")){
            console.log(btn.innerText);
            buttonChanger(left_buttons);
buttonChanger(right_buttons);
        }
    }

}



