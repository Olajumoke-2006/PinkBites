const Menu = require("../models/Menu");



const menuItems=[


{
code:1,
name:"Jollof Rice",
price:3500,
category:"Rice",
description:"Smoky Nigerian party jollof rice",
image:
 "https://images.unsplash.com/photo-1604908177520-1f3c8e5b6d4e"
},



{
code:2,
name:"Fried Rice",
price:4000,
category:"Rice",
description:"Fried rice with vegetables and chicken",
image:
"https://images.unsplash.com/photo-1512058564366-18510be2db19"
},



{
code:3,
name:"Chicken Burger",
price:3000,
category:"Fast Food",
description:"Fresh chicken burger with cheese",
image:
"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
},



{
code:4,
name:"Pepperoni Pizza",
price:5000,
category:"Fast Food",
description:"Hot cheesy pepperoni pizza",
image:
"https://images.unsplash.com/photo-1513104890138-7c749659a591"
}


];





async function seedMenu(){


await Menu.deleteMany();



await Menu.insertMany(menuItems);



console.log("🍽️ Menu seeded successfully");


}



module.exports=seedMenu;