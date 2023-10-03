let afazer = []
let text = "";

const input = document.querySelector("#input")


function add(){
    tarefa=input.value
    tarefa=tarefa.toUpperCase()



if(tarefa){
    const itemDaLista=document.createElement("li")
    const lista=document.querySelector("#listaafazer")


text=document.createTextNode(tarefa)
itemDaLista.appendChild(text)
lista.appendChild(itemDaLista)

itemDaLista.addEventListener("click",
    function(){
    text=this.innerHTML;
    text_inProgress();
    lista.removeChild(itemDaLista)
})

input.value="";
}}




function text_inProgress(){

    const itemDaLista=document.createElement("li")
    const lista=document.querySelector("#listaemandamento")


text=document.createTextNode(text)
itemDaLista.appendChild(text)
lista.appendChild(itemDaLista)

itemDaLista.addEventListener("click",
    function(){
    text=this.innerHTML;
    text_Completed();
    lista.removeChild(itemDaLista)
   

    })}



function text_Completed(){
   
    const itemDaLista=document.createElement("li")
    const lista=document.querySelector("#listaconcluido")


text=document.createTextNode(text)
itemDaLista.appendChild(text)
lista.appendChild(itemDaLista)

itemDaLista.addEventListener("click",
    function(){
    text=this.innerHTML;
    lista.removeChild(itemDaLista)
   

    })}
