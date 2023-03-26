// if (true){
//     console.log('Vas a ver este mensaje')
// }

let tiempo = 'soleado';

if(tiempo == 'lluvioso'){
    console.warn('llevar paraguas');
}else{
    console.log('Ir con remera');
}

let edadMinima = 18;

if (edadMinima>18){
    console.log('Puede entrar a la disco');
} else if (edadMinima == 18){
    console.warn('Disfruta tu primera vez en la disco');
} else {
    console.warn('Vete a tu casa');
}

let lenguajeRequerido = 'javascript';
let idiomaRequerido = 'frances';

if ((lenguajeRequerido== 'javascript') && (idiomaRequerido == 'frances')){
    console.log('Puede acceder al puesto');
} else {
    console.warn( 'Debe cumplir con las dos condiciones para poder acceder');
}

if ((lenguajeRequerido== 'javascript') || (idiomaRequerido == 'frances')){
    console.log('Puede acceder al puesto');
} else {
    console.warn( 'Debe cumplir con al menos una de las condiciones para poder acceder');
}