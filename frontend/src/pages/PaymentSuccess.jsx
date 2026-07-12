import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import axios from "axios";

import "./PaymentSuccess.css";



export default function PaymentSuccess(){


const [searchParams] = useSearchParams();

const navigate = useNavigate();


const [status,setStatus] = useState(
"Verifying payment..."
);





useEffect(()=>{


verifyPayment();


},[]);





async function verifyPayment(){


try{


const reference =
searchParams.get("reference");



if(!reference){

setStatus(
"Payment reference missing"
);

return;

}





const response =
await axios.get(

`http://localhost:5000/api/payment/verify/${reference}`

);





if(
response.data.success
&&
response.data.data.status === "success"
){


setStatus(

"🎉 Payment Successful! Your PinkBites order has been confirmed."

);



}

else{


setStatus(
"Payment failed. Please try again."
);


}



}



catch(error){


console.log(error);


setStatus(
"Unable to verify payment"
);


}


}







return (

<div className="payment-page">


<div className="payment-card">


<h1>
🍽️ PinkBites
</h1>



<h2>
{status}
</h2>




<button

onClick={()=>navigate("/")}

>

Return to Chatbot

</button>



</div>


</div>

);


}