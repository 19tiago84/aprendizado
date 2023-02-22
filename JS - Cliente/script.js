document.getElementById("btnNovoInput").addEventListener("click",function(){
    let divInputs = document.querySelector("#inputs");
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Insira seu texto aqui";
    input.required = true;

    divInputs.append(input);
},)

document.querySelector("#btnDeleteInput").addEventListener("click", function(){
    let divInputs = document.querySelector("#inputs");
    let input = divInputs.firstChild;
    if(!input) return window.alert("Não tem nenhum input para remover");//encerro aqui a função
    divInputs.removeChild(input);
},)

document.querySelector("#btnAdicionarEstilo").addEventListener("click",function(){
    let divContent = document.querySelector("#content");

    if(divContent.classList.contains("estilo")){
        divContent.classList.remove("estilo");
    }else{
        divContent.classList.add("estilo");
    }
})

document.querySelector("#btnAlteraCor").addEventListener("click", function(){
    let divContent = document.querySelector("#content");
    let cor = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substring(1,6);
    divContent.style.backgroundColor = cor;
})