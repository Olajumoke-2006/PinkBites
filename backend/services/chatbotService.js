const Menu = require("../models/Menu");
const Order = require("../models/Order");



const welcomeMessage = `
Welcome to 🍽️ PinkBites Restaurant

Please select an option:

1 - Place an order
99 - Checkout order
98 - Order history
97 - Current order
0 - Cancel order
`;




// Main chatbot function

const processMessage = async(deviceId,message)=>{


const option = message.trim();



// =====================
// SHOW MENU
// =====================

if(option==="1"){


const menu = await Menu.find();



return {


reply:"🍴 Choose your preferred meal",


menu:menu.map(item=>(

{

code:item.code,

name:item.name,

price:item.price,

description:item.description,

image:item.image

}

))


};


}




// =====================
// CURRENT ORDER
// =====================


if(option==="97"){


const order = await Order.findOne({

deviceId,

status:"current"

});



if(!order || order.items.length===0){

return "Your order is empty";

}



let response="🛒 Current Order\n\n";



order.items.forEach(item=>{

response += 
`${item.name} x${item.quantity} - ₦${item.price}\n`;

});



response += `\nTotal: ₦${order.total}`;


return response;


}




// =====================
// ORDER HISTORY
// =====================


if(option==="98"){



const orders = await Order.find({

deviceId,

status:"placed"

});



if(orders.length===0){

return "You have no previous orders";

}



let response="📜 Order History\n\n";



orders.forEach((order,index)=>{


response +=

`Order ${index+1}
Total: ₦${order.total}
Status: ${order.status}

`;


});



return response;


}




// =====================
// CHECKOUT
// =====================


if(option==="99"){


const order = await Order.findOne({

deviceId,

status:"current"

});



if(!order || order.items.length===0){

return "No order to place";

}



order.status="placed";


await order.save();



return `

✅ Order placed successfully


Total: ₦${order.total}


Proceed to payment.

`;

}




// =====================
// CANCEL ORDER
// =====================


if(option==="0"){


const order = await Order.findOne({

deviceId,

status:"current"

});



if(!order){

return "No current order to cancel";

}



order.status="cancelled";


await order.save();



return "❌ Your order has been cancelled";


}





// =====================
// ADD ITEM TO ORDER
// =====================


const item = await Menu.findOne({

code:Number(option)

});




if(item){



let order = await Order.findOne({

deviceId,

status:"current"

});




if(!order){


order = await Order.create({

deviceId,

items:[],

total:0

});


}




order.items.push({

code:item.code,

name:item.name,

price:item.price,

quantity:1

});



order.total += item.price;



await order.save();




return `

✅ ${item.name} added to your order


Current total: ₦${order.total}


Choose another item or select 99 to checkout.

`;

}





return "Invalid option. Please select a valid number.";


};




module.exports={

welcomeMessage,

processMessage

};