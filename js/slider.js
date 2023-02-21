(function(){
    
    const sliders = [...document.querySelectorAll(".testimony__body")]; //array
    const buttonNext = document.querySelector("#next"); // id next
    const buttonBefore = document.querySelector("#before"); // id befores atras
    let value;

    buttonNext.addEventListener("click", ()=> {
        changePosition(1);
    })

    buttonBefore.addEventListener("click", ()=> {
        changePosition(-1);

    })

    const changePosition = (add) => {
        const currentTestimomy = document.querySelector(".testimony__body--show").dataset.id;  // para obtener el slider actual, con dataSET ID

        value = Number (currentTestimomy);
        value += add;

        sliders [Number (currentTestimomy)-1].classList.remove("testimony__body--show");
        if (value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }
        
        sliders[value-1].classList.add("testimony__body--show" )
    }


})();