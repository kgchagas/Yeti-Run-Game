const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    checkinputnome();
 })

function checkinputnome(){
    const nomeValue = nome.value;

    if(nomeValue === "") {
        setError(nome, "O nome é obrigatório");
    }

}   


function errorinput(input, message) {
    const formControl = input.parentElement;


}