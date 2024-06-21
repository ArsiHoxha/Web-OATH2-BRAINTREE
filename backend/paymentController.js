

const braintree = require("braintree");
require('dotenv').config()



const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY
});



exports.generateToken = (req,res)=>{
    gateway.clientToken.generate({}).then(response=>{
        res.status(200).send(response);
    }).catch(err=>{
        res.status(500).send(err);
    })
}

exports.processPayment = (req, res) => {
    const nonceFromTheClient = req.body.payment_method_nonce;
    const { amount, deviceData } = req.body;
  
    gateway.transaction.sale({
      amount: amount,
      paymentMethodNonce: nonceFromTheClient,
      deviceData: deviceData, // Ensure deviceData is passed from the client
      options: {
        submitForSettlement: true
      }
    }).then(response => {
      if (response.success) {
        res.status(200).json(response); // Send JSON response
      } else {
        res.status(500).json({ message: response.message }); // Send JSON response in case of failure
      }
    }).catch(err => {
      res.status(500).json({ error: err.message }); // Send JSON response in case of error
    });
  };