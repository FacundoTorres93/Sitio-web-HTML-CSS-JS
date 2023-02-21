(function (){
    const titleQuestions = [...document.querySelectorAll(".questions__title")]; //los ... es para covertir en array

    titleQuestions.forEach (question => { // para obtener las preguntas individualmente
        question.addEventListener("click", ()=>{
            // alert("ouch, me diste click") 
            let height = 0;
            let answer = question.nextElementSibling; //obtener al siguiente hermano de question, el hermano de h3 es el parrafo, la pregunta
            let addPadding = question.parentElement.parentElement; //para obtner los padres de elemtnos de html


            addPadding.classList.toggle("questions_padding--add"); // agregamos clase con toggle
            question.children[0].classList.toggle("questions__arrow--rotate"); //para agregar o quitar y  rotar el elemento

            if(answer.clientHeight == 0){
                height= answer.scrollHeight; //alto minimo para que se muestre el elemento
            }

            answer.style.height = `${height}px`; //templeate liteal 
        });
    });
})();