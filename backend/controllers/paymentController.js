const {
    initializePayment,
    verifyPayment
} = require("../services/paystackService");




// Initialize Paystack transaction

const paymentController = async (req, res) => {

    try {


        const deviceId = req.session.deviceId;


        const {
            email,
            amount
        } = req.body;



        // Validate input

        if (!email || !amount) {

            return res.status(400).json({

                success:false,

                message:"Email and amount are required"

            });

        }




        const payment = await initializePayment({

            email,

            // Paystack accepts amount in kobo
            amount: Number(amount) * 100,


            callback_url:
            "http://localhost:5173/payment-success",



            metadata:{

                deviceId

            }


        });





        return res.json({

            success:true,

            message:"Payment initialized successfully",

            data:payment.data

        });



    }


    catch(error){


        console.error(
            "Payment initialization error:",
            error.message
        );



        return res.status(500).json({

            success:false,

            message:"Unable to initialize payment"

        });


    }

};







// Verify Paystack payment

const verifyController = async (req,res)=>{


    try {


        const {
            reference
        } = req.params;




        const payment =
        await verifyPayment(reference);




        return res.json({

            success:true,

            message:"Payment verified successfully",

            data:payment.data

        });



    }


    catch(error){


        console.error(
            "Payment verification error:",
            error.message
        );



        return res.status(500).json({

            success:false,

            message:"Unable to verify payment"

        });


    }


};






module.exports = {

    paymentController,

    verifyController

};