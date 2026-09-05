/**
 * Un servicio es un tipo de archivo donde vamos a tener funciones o clases con sus métodos que ejecutan acciones.
 * 
 * ! SUPER IMPORTANTE:
 * ! Todas las funciones asíncronas retornan una promesa. No importa qué pienses tú que está retornando. ES UNA PROMESA
 */

import { API_URL } from "../env.js";

//*GET

export async function getAllProducts() {
    //1. Lanzar la petición
    const response = await fetch(API_URL);
    const data = await response.json()
    return data;//Aunque se tenga este return de un array, lo que vamos a ver si llamamos a la función va a ser una promesa, porque es asíncrona
}
//getAllProducts();

//Get 1 solo producto
export const getSingleProduct = async function (id) {
    try{
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error("Error",error);
    }
};
/**
getSingleProduct(5);
getSingleProduct(6);
getSingleProduct(7);
*/

//*POST

export const createProduct = async (productObject) => {
    try{
        const response = await fetch(API_URL,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(productObject),
        });
        const data = await response.json();
        console.log(data);
    }catch(error) {}
};

createProduct({
title: "crema corporal",
price: 80,
description: "Crema alpura",
category: "Cremas",
image: "http://example.com"
});

//* PUT

export async function modifyProduct(id,productObject) {
    try{
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(productObject)
        });
        const data = await response.json();
        console.log(data);
    }catch(error){}
}

modifyProduct(5,{
"title": "Carteras",
"price": 123456789,
});

//* DELETE
export const deleteProduct = async function (id) {
    try{
        const response = await fetch(`${API_URL}/${id}`,{
            method:"DELETE"
        });
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error("Error",error);
    }
};

deleteProduct(8);