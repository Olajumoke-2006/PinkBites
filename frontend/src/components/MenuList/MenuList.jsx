import "./MenuList.css";

import MenuCard from "../MenuCard/MenuCard";


export default function MenuList({
    items,
    onSelect
}){


return (

<div className="menu-list">

{

items.map(item=>(


<MenuCard

key={item.code}

item={item}

onSelect={()=>onSelect(item)}

/>


))

}


</div>

);


}