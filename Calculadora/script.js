document.querySelector("#clear").addEventListener("click", ()=>{
    document.querySelector("#display").value="";
})

const borrar = ()=>{
    const num = document.querySelector("#display").value.slice(0, -1);
    document.querySelector("#display").value = num
}

const cero = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "0"
    } else{
        document.querySelector("#display").value = document.querySelector("#display").value + "0"
    }
}

const uno = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "1"
    } else{
        document.querySelector("#display").value = document.querySelector("#display").value + "1"
    }
}

const dos = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "2"
    } else{
        document.querySelector("#display").value = document.querySelector("#display").value + "2"
    }
}

const tres = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "3"
    } else{
        document.querySelector("#display").value = document.querySelector("#display").value + "3"
    }
}

const cuatro = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "4"
    } else{
        document.querySelector("#display").value = document.querySelector("#display").value + "4"
    }
}

const cinco = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "5"
    } else{
        document.querySelector("#display").value = document.querySelector("#display").value + "5"
    }
}

const seis = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "6"
    } else{
        document.querySelector("#display").value = document.querySelector("#display").value + "6"
    }
}

const siete = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "7"
    } else{
        document.querySelector("#display").value = document.querySelector("#display").value + "7"
    }
}

const ocho = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "8"
    } else{
        document.querySelector("#display").value = document.querySelector("#display").value + "8"
    }
}

const nueve = () =>{
    if(document.querySelector("#display").value == " "){
        document.querySelector("#display").value = "9"
    } else{
        document.querySelector("#display").value = document.querySelector("#display").value + "9"
    }
}


const punto = () => {
    const input = document.querySelector("#display").value;
    if (!input.includes(".")) {
      document.querySelector("#display").value = input + ".";
    }
  }