

// const atTheOldToad = {
//     potions: [
//       { name: "Speed potion", price: 460 },
//       { name: "Dragon breath", price: 780 },
//       { name: "Stone skin", price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         const arrayPotions = [...this.potions]
//       return arrayPotions;
//     },
//     addPotion(newPotion) {
//       const { potions } = atTheOldToad;
//       let message = `Error! Potion ${newPotion.name} is already in your inventory!`;

//       for (let i = 0; i < potions.length; i += 1){
//           if (potions[i].name === newPotion.name){
//           return message; 
//           }
//       }
//       potions.push(newPotion);
      
//     },
//     removePotion(potionName) {
//         const { potions } = atTheOldToad;
        
//         for (let i = 0; i < potions.length; i += 1) {
//             const { name } = potions[i];
           
//             if(potionName === name){
//                 potions.splice(i, 1)
//                 return;
//             }
//         }
//         return `Potion ${potionName} is not in inventory!`;
      
//     },
//     updatePotionName(oldName, newName) {
//         const { potions } = atTheOldToad;
        
//         for (let i = 0; i < potions.length; i += 1) {
//             const { name } = potions[i];
        
//             if(name === oldName){
//                potions[i].name =  newName;              
//                return;
//             }
//         }
//         return `Potion ${newName} is not in inventory!`;



//     },
    
//   };
  

// console.log(atTheOldToad.potions)  
 
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }))
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }))
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 270 }))
 
// console.log(atTheOldToad.potions)  

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"))

// console.log(atTheOldToad.potions) 

// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 270 }))

// console.log(atTheOldToad.potions) 

// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }))

// console.log(atTheOldToad.removePotion("Dragon breath"));

// console.log(atTheOldToad.potions)  

// console.log(atTheOldToad.removePotion("Stone skin"));

// console.log(atTheOldToad.potions)
 
// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))
// console.log(atTheOldToad.potions)  

// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"))
// console.log(atTheOldToad.potions)  




/*
 * Второй вариант
*/



const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
      const arrayPotions = [...this.potions]
      return arrayPotions;
    },
    addPotion(newPotion) {  // АВТОПРОВЕРКА НАЧАЛА ПРИНИМАТЬ
      for (const potion of this.potions){
        if (potion.name === newPotion.name){
          return `Error! Potion ${newPotion.name} is already in your inventory!`;
        }
      }
      this.potions.push(newPotion);
    },
    removePotion(potionName) { // АВТОПРОВЕРКА НАЧАЛА ПРИНИМАТЬ
      const { potions } = this;
          for (let i = 0; i < potions.length; i += 1){
              const {name} = potions[i];
  
              
              if(potionName === name){   
                potions.splice(i, 1);                    
              }
          }      
    },
    updatePotionName(oldName, newName) { // АВТОПРОВЕРКА НАЧАЛА ПРИНИМАТЬ
      const { potions } = this;
      for (let i = 0; i < potions.length; i += 1){
              const {name} = potions[i];
          if(name === oldName){
            potions[i].name =  newName;              
                 
              }
      }
      return `Potion ${oldName} is not in inventory!`;
    }
    // Change code above this line
  };
  

  console.log(atTheOldToad.removePotion("Dragon breath"))
  console.log(atTheOldToad.potions)

//   console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }))
//   console.log(atTheOldToad.getPotions())

// atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
// atTheOldToad.addPotion({ name: "Power potion", price: 270 })
// console.log(atTheOldToad.getPotions())
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }))