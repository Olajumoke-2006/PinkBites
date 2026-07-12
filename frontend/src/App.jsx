import { useEffect, useState } from "react";

import {
    Routes,
    Route
} from "react-router-dom";


import Header from "./components/Header/Header";
import ChatWindow from "./components/ChatWindow/ChatWindow";
import ChatBubble from "./components/ChatBubble/ChatBubble";
import ChatInput from "./components/ChatInput/ChatInput";
import TypingIndicator from "./components/TypingIndicator/TypingIndicator";
import QuickActions from "./components/QuickActions/QuickActions";


import MenuList from "./components/MenuList/MenuList";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";


import PaymentSuccess from "./pages/PaymentSuccess";


import {
    sendMessage
} from "./services/chatService";





function ChatApp(){


const [messages,setMessages] = useState([]);

const [input,setInput] = useState("");

const [loading,setLoading] = useState(false);


const [menu,setMenu] = useState([]);


const [cart,setCart] = useState([]);


const [total,setTotal] = useState(0);






useEffect(()=>{

startChat();

},[]);







async function startChat(){


try{


setLoading(true);


const response =
await sendMessage("start");



setMessages([

{

sender:"bot",

text:response.reply

}

]);



}

catch(error){

console.log(error);

}


finally{

setLoading(false);

}


}








async function sendChatMessage(text){



setMessages(prev=>[

...prev,

{

sender:"user",

text:text

}

]);




setLoading(true);



try{


const response =
await sendMessage(text);




if(response.menu){


setMenu(response.menu);


}




setMessages(prev=>[

...prev,

{

sender:"bot",

text:response.reply

}

]);



}


catch(error){



setMessages(prev=>[

...prev,

{

sender:"bot",

text:"Something went wrong"

}

]);


}



finally{

setLoading(false);

}


}








function handleSend(){


if(!input.trim())
return;



const message=input;



setInput("");



sendChatMessage(message);


}









function addToCart(item){



setCart(prev=>{


const existing =
prev.find(

(food)=>

food.code === item.code

);



if(existing){


return prev.map(food=>

food.code === item.code

?

{

...food,

quantity:food.quantity + 1

}

:

food

);


}



return [

...prev,

{

...item,

quantity:1

}

];


});




setTotal(prev=>

prev + item.price

);



}








return (

<div className="app">


<Header />



<ChatWindow>


{

messages.map((msg,index)=>(


<ChatBubble

key={index}

sender={msg.sender}

message={msg.text}

/>


))

}



{

loading &&

<TypingIndicator />

}


</ChatWindow>





{

menu.length > 0 &&


<MenuList

items={menu}

onSelect={addToCart}

/>


}






<Cart

cart={cart}

/>





{

cart.length > 0 &&

<Checkout

total={total}

/>

}





<QuickActions

onSelect={sendChatMessage}

/>





<ChatInput

value={input}

onChange={(e)=>

setInput(e.target.value)

}

onSend={handleSend}

/>



</div>

);


}








export default function App(){



return (


<Routes>


<Route

path="/"

element={<ChatApp />}

/>




<Route

path="/payment-success"

element={<PaymentSuccess />}

/>



</Routes>


);


}