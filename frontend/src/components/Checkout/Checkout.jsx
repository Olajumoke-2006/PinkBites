import "./Checkout.css";
import {createPayment}
from "../../services/paymentService";


export default function Checkout({total}){


async function pay(){


const response =
await createPayment({

email:"customer@gmail.com",

amount:total

});



window.location.href =
response.data.authorization_url;


}



return (

<button
className="checkout-btn"
onClick={pay}
>

💳 Pay Now ₦{total}

</button>

);


}