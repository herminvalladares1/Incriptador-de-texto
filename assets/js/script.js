document.querySelector(".aside__resultado").classList.add("hidden");
document.querySelector(".container__btn__alert__div").classList.add("hidden");
const mensaje = document.querySelector(".mensaje");


window.addEventListener('load', testLayout());
window.addEventListener('resize', testLayout());

testLayout();


function testLayout(){
    const ancho = window.innerWidth;
    if(ancho<769){
        //document.querySelector(".msg__container").classList.remove("hidden");
        document.querySelector(".aside__img").classList.add("hidden");
    }
}

function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

document.querySelector(".form__input").addEventListener("input", function() {
    const texto = this.value;
    const infoText = document.querySelector(".container__btn__alert__div");

    if (!validarTexto(texto)) {
        infoText.classList.remove("hidden");
    } else {
        infoText.classList.add("hidden");
    }
});


function tbnEncriptar(){
    let textArea = document.querySelector(".form__input").value;
    if(textArea.trim().length>0){
        let matrizCodigo = [ ["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

        if(validarTexto(textArea)){
            for(let i=0;i<matrizCodigo.length;i++){
                if(textArea.includes(matrizCodigo[i][0])){
                    textArea = textArea.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
                }
            }
            mensaje.value = textArea;
            document.querySelector(".aside__resultado").classList.remove("hidden");
            document.querySelector(".msg__container").classList.add("hidden");
        }
        else{
            showModalAlerta("Por favor solo letras en minúsculas y sin acentos");
        }
        testLayout();
    }
    else{
        showModalAlerta("Por favor ingresar un texto");
    }
}

function tbnDesencriptar(){
    let textArea = document.querySelector(".form__input").value;
    if(textArea.trim().length>0){

        let matrizCodigo = [ ["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

        if(validarTexto(textArea)){
            for(let i=0;i<matrizCodigo.length;i++){
                if(textArea.includes(matrizCodigo[i][1])){
                    textArea = textArea.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
                }
            }
            mensaje.value = textArea;
            document.querySelector(".aside__resultado").classList.remove("hidden");
            document.querySelector(".msg__container").classList.add("hidden");
        }
        else{
            showModalAlerta("Por favor solo letras en minúsculas y sin acentos");
        }
        testLayout();
    }
    else{
        showModalAlerta("Por favor ingresar un texto");
    }
}

function copiarTexto() {
    let texto = document.querySelector(".mensaje");
    if(texto.value.length == 0){
        showModalAlerta("No se ha copiado ningun texto nuevo al portapapeles");
    }
    else{
        let textoModal = texto.value;
        texto.select();
        texto.setSelectionRange(0, 99999); // Para móviles
        document.execCommand("copy");

        //Vacío los textarea de entrada y texto encriptado
        document.querySelector(".mensaje").value = "";
        document.querySelector(".form__input").value = "";

        //desoculto el div con imagen de muñeco-lupa y mensajes
        //oculto el div con textarea de resultado
        document.querySelector(".aside__resultado").classList.add("hidden");
        document.querySelector(".msg__container").classList.remove("hidden");
        showModal(textoModal);
    }
}

function showModal(texto) {
    document.querySelector(".modal-texto-copy").value=texto;
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.querySelector(".modal-texto-copy").value="";
    document.getElementById('modal').style.display = 'none';
}

function showModalAlerta(texto) {
    document.querySelector(".msgbox").innerHTML=texto;
    document.getElementById('modal2').style.display = 'flex';
}

function closeModal2() {
    document.getElementById('modal2').style.display = 'none';
}