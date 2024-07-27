import data from "./dibujos.json";

export const buscarDatos = () => {

    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(data);
        }, 500)    
    })
}

export const buscarItemPorId = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((el) => el.id === id);
        if (item) {
            resolve(item)
        } else {
            reject({
                error: "item no encontrado"
            })
        }
    })
}