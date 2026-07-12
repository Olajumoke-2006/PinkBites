const {
    welcomeMessage,
    processMessage
} = require("../services/chatbotService");



const chatController = async (req, res) => {

    try {


        const deviceId = req.session.deviceId;


        const { message } = req.body;



        // Validate input

        if (!message) {

            return res.status(400).json({

                success:false,

                message:"Message is required"

            });

        }




        let reply;



        // Initial chatbot message

        if (message === "start") {


            reply = welcomeMessage;


        } 
        
        else {


            reply = await processMessage(

                deviceId,

                message

            );


        }






        // When chatbot returns menu object

        // Example:
        // {
        //   reply:"Choose your meal",
        //   menu:[]
        // }

        if (typeof reply === "object") {


            return res.json({

                success:true,

                ...reply

            });


        }





        // Normal text response

        return res.json({

            success:true,

            reply

        });



    } 
    
    
    catch(error) {


        console.error(
            "Chat Controller Error:",
            error.message
        );



        return res.status(500).json({

            success:false,

            message:"Internal server error"

        });


    }


};





module.exports = {

    chatController

};