/*
 * ... распыление не деструктивный метод. Создаеться копия при распылении пимитивов.
*/


// const temps = [18, 14, 12, 21, 17, 29, 24];

// console.log(Math.min(...temps));


// const a = [1, 2, 3]

// const b = [...a]

// console.log(a);
// console.log(b);

/* 
 * При распылении сложных типов кладеться ссылка, а не копия. 
*/

// const a = [{x: 1}, {y: 2}, {z: 3}]

// const b = [...a]

// console.log(a[0] === b[0]) // true. Это ссылки на один и тот же обьект.
// console.log(a === b ) // false. Два разных массива.
// console.log(a);
// console.log(b);



/*
 * Сшиваем несколько массивов через concat and spread
*/

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

// const allTemps = lastWeekTemps.concat(currentTemps,nextWeekTemps);
const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

console.log(allTemps)



/*
 * Распыление обьектов 
*/


const a = {x: 1, y: 2};
const b = {x: 0, z: 3};

// const c = Object.assign({}, a, b) // {x: 0, y: 2, z: 3}

const c = {
      ...a,
      ...b,
   }
console.log(c)



const defaultSettings = {
    theme: 'light',
    showNotifications: true,
    hideSidebar: false,
}

const userSettings = {
    showNotifications: false,
    hideSidebar: true,
}


const finalSettings = {
    ...defaultSettings,
    ...userSettings,
}

console.log(finalSettings)