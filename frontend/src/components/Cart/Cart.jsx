import "./Cart.css";


export default function Cart({ cart }) {


return (

<div className="cart">


<h2>
🛒 Your Order
</h2>



{
cart.length === 0 ?

(
<p>
No items selected
</p>
)

:

(

cart.map((item,index)=>(

<div 
className="cart-item"
key={index}
>


<div>

<h4>
{item.name}
</h4>


<p>
Quantity: {item.quantity}
</p>

</div>


<span>
₦{item.price * item.quantity}
</span>


</div>

))

)

}


</div>

);


}