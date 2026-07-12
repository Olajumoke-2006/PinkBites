const express=require("express");

const router=express.Router();


const {

paymentController,

verifyController

}=require("../controllers/paymentController");



router.post(
"/initialize",
paymentController
);



router.get(
"/verify/:reference",
verifyController
);



module.exports=router;