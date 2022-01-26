// every: verifica que todos los elementos del array
//cumplan con la misma condicion. Si todos los elementos cumplen con la condicion
//verdadero; si uno de ellos no la cumple devuelve falso
const numeros = [10, 20, 30, 40, 50];

//Determinar si todos los elementos del array de numeros son positivos

const soloPositivos = numeros.every(data =>{
    return data >0;
});

const soloPositivosv2 = numeros.every(data => data>0);
console.log (soloPositivos);

//forEach-every-filter
//verificar si los elementos de una matriz son positivos

const matriz = [[1,2,3],[4,5,6],[7,8,9], [10,20,40]];
function matrizSoloPositivos(array){
   var res = [];
    array.forEach(element => {
        res.push (element.every(item =>{
            return item>0;
        }));
    });
    //console.log(res);
    return res.every(data => data==true);
}
const x = matrizSoloPositivos(matriz);
if(x)
console.log ("La matriz tiene valores positivos: ", x);
else
console.log ("La matriz tiene valores negativos: ", x);



