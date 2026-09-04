/**
 * Primer orden de actividades 04/09/2026
 * 1. Crear una promesa
 * 2. Manejar esa promesa con then y catch
 * 3. Hacer peticiones al servidor (consumir promesas)
 * 4. async/await
 * 5. Renderizar la info en pantalla
 * 7. Cómo importar y exportar cosas
 * 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises
 * 
 * todo: Se utilizará la fakestoreAPI
 * https://fakestoreapi.com/docs#tag/Products 
 */

/**
 * !PROMESAS ESCRITAS:
 * 1. resolve, el caso de éxito (caso en el que la promesa se resuelve de manera favorable)
 * 2. reject, el caso de fracaso (caso en el que la promesa se resuelve de manera no favorable)
 * ! Importante: Al crear una promesa esta debe ser retornada de una función
 * 
 * Este lo vamos a usar para simular un delay en la conexión retrasando la respuesta.
 * https://developer.mozilla.org/es/docs/Web/API/Window/setTimeout
 * 
 */

function waitNSeconds(seconds){
    console.log("Primer console log dentro de la función");
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            //Depende de cómo asignemos el valor de const la respuesta que nos va a dar en el if, si resolve o reject.
            const state = false;
            if (state) {
                resolve("La petición fue exitosa");
            } else {
                reject("La petición fracasó");
            }
        }, seconds*1000);
    });
};

//Aquí es donde se resuelve lo de las promesas, esto se ejecuta después del delay.
waitNSeconds(3)
    .then((response)=>{
        console.log("Caso resolve");
        console.log(response);
    })
    .catch((error)=>{
        console.log("Caso reject");
        console.log(error)
    });

//Esto se ejecuta primero que la parte de la promesa a pesar de estar después en el código, porque precisamente el punto de las promesas es no retrasar la ejecución de lo demás mientras esperan su respuesta.
console.log("Segundo console log");
console.log("Tercer console log");
console.log("Cuarto console log");