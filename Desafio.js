let max = 10;
let numeroSecreto = Math.floor(Math.random()*max)+1;
console.log(numeroSecreto);
let numeroUsuario; //Declarar la variable antes del while aunque no se le ponga valor
let intentos = 1;
//let palabraVeces = "vez";//codigo optimizado
let maximosIntentos= 3;

//Codigo
alert("Hola! Soy Aaron. Bienvenido a mi juego \n Adivina el numero! Una pista...va del 1-10!");//1er contacto
while (numeroUsuario != numeroSecreto) //Mientras que esto se cumple se sigue repitiendo
{
    numeroUsuario = parseInt(prompt(`Dime un numero del 1-${max}`));//pide interacción con usuario quitar el let pues ya se declaro
    console.log(typeof(numeroUsuario))
    if(numeroUsuario == numeroSecreto)//condición
    {
        alert(`Felicidades! \n Adivinaste el numero el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`);//Operador ternario
    }
    else //anidar el if
    {
        if (numeroUsuario > numeroSecreto ) //condición 2
        {
            alert("Error! :c \n El numero secreto es mas pequeño");
        }
        else // si no se cumple ninguna condición
        {
            alert("ERROR! \n Numero equivocado el numero secreto es mas grande :("); //No se cumple la condición
        }
        intentos ++;
        //palabraVeces = "veces";//codigo optimizado
        if (intentos > 3)
        {
            alert(`Llegaste al máximo de ${maximosIntentos} intentos!`);
            break ;
        }
    }
    const reload = document.getElementById("reload");

reload.addEventListener("click", (_) => {
  // el _ es para indicar la ausencia de parametros
  location.reload();
});

}