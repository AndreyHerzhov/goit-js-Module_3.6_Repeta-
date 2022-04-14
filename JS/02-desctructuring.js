/*
 * Деструктуризация 
*/

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// };


// const { name, rating, tracks, trackCount, author } = playlist; // деструктуризация обьекта playlist


// console.log(author) // undefined если такого значения нет у playlist
// console.log(rating)


// --------------- author: 'Mango' -------------- //

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     author: 'Mango '
// };


// const { name, rating, tracks, trackCount, author = 555  } = playlist; // деструктуризация обьекта playlist


// console.log(author) // "Mango" и проигнорирует "555"
// console.log(rating)


// ------------- numberOfTracks ------------- //

// const playlist = {
//     name: 'Мой супер плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     author: 'Mango '
// };


// const { name, rating, tracks, trackCount:numberOfTracks, author = 555  } = playlist; // деструктуризация обьекта playlist

// numberOfTracks это локальная переменная. В нее положили значения свойсвта trackCount из обьекта playlist
// console.log(numberOfTracks) //  "3"
 

/*
 * Глубокая деструктуризация 
*/


// const profile = {
//       firstname: 'Jacques Gluke',
//       tag: 'jgluke',
//       location: 'Ocho Rios, Jamaica',
//       avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
//       stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//       },
//     };




// ---------- деструктуризация в глубину------------ //

// const { firstname, 
//         tag, 
//         location, 
//         avatar, 
//         stats
//     } = profile;

// const { followers, views, likes} = stats;


// ------------- глубокая деструктуризация --------- //

// const { firstname, 
//     tag, location, 
//     avatar, 
//     stats: { followers, views, likes}, // вглубь
// } = profile;

 
// console.log(followers,views,likes)
// console.log(firstname,location,avatar)




/*
 * Деструктуризация массивов
 */

// const rgb = [255, 100, 80];

// const [red, green, blue] = rgb;

// // console.log(red, green, blue);

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
//   };

// const entries = Object.entries(authors);

// // console.log(entries)

// for (const [name, rating] of entries){ // уровень 3 по деструктуризации прямо в скобках

//     // ур2
//     // const [name, rating] = entry;

//     // ур1
//     // const name = entry[0];
//     // const rating = entry[1]
//     console.log(name, rating)
// }

// const ratings = Object.values(authors);

// console.log(Math.max(...ratings))



/*
 * Операция rest (сбор)
 */

const profile = {
  name: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const { name, tag, location, ...qwewq} = profile;

console.table(name, tag, location, qwewq)