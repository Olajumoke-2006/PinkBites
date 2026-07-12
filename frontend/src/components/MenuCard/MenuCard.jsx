import "./MenuCard.css";


export default function MenuCard({
    item,
    onSelect
}){


return (

<div className="menu-card">


{/* Food Image */}

<div className="food-image">

<img

src={
    item.image ||
    "https://images.unsplash.com/photo-1547592180-85f173990554"
}

alt={item.name}

/>

</div>





<div className="food-details">


<h3>

{item.name}

</h3>



<p className="category">

{item.category}

</p>



<p className="price">

₦{item.price}

</p>





<button

onClick={()=>onSelect(item)}

>

Add To Order 🍽️

</button>



</div>


</div>

);


}