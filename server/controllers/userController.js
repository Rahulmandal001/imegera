import userModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import Razorpay from "razorpay";
import transactionModel from "../models/transactionModel.js";
import dotenv from "dotenv";
dotenv.config();





const registerUser = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        if(!name || !email || !password){
            return res.json({ success:false, message: "Missing Details" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const userData = {
            name, email, password: hashedPassword
        }

        const newUser = new userModel(userData);
        const user = await newUser.save();

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

        res.json({ success:true, user:{name: user.name}, token });

    }catch (error){
        // console.log(error);
        res.json({ success:false, message: error.message });

    }
}

const loginUser = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await userModel.findOne({ email })

        if(!user){
            return res.json({ success:false, message: "User does not exist" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch){
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

        res.json({ success:true, user:{name: user.name}, token });

    
        }else{
            return res.json({ success:false, message: "Invalid credentials" });
        }

        }catch (error){
        // console.log(error);
        res.json({ success:false, message: error.message });

        }
    }

const userCredits = async (req, res) => {
  try {
    const userId = req.userId || req.body.userId;
    if (!userId) {
      return res.json({ success: false, message: "Missing user details" });
    }

    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    res.json({ success: true, credits: user.creditBalance, user: { name: user.name } });
  } catch (error) {
    // console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});


const paymentRazorpay = async (req, res) => {
  try {
    
    const userId = req.userId;     
    const { planId } = req.body; 

    const userData = await userModel.findById(userId);

    if(!userData || !planId){
      return res.json({success: false, message: "Missing Details"})
    }
    let credits, plan, amount, date
    switch (planId) {
      case 'Basic':
        plan = 'Basic'
        credits = 100;
        amount = 10;
        break;

        case 'Advanced':
        plan = 'Basic'
        credits = 500;
        amount = 50;
        break;

        case 'Business':
        plan = 'Business'
        credits = 5000;
        amount = 250;
        break;
    
      default:
        return res.json({success: false, message: "Plan Not Found"})
    }

    date = Date.now();

    const transactionData = {
      userId, plan, amount,credits, date
    }

    const newTrasaction = await transactionModel.create(transactionData);

    const options = {
      amount: amount * 100,
      currency: process.env.CURRENCY,
      receipt: newTrasaction._id,
    }

    const order = await razorpayInstance.orders.create(options, (error, order)=>{
      if(error){
        // console.log(error);
        return res.json({success: false, message: error})
      }
      res.json({success: true, order })
      
    })

  } catch (error) {
    // console.log(error);
    res.json({ success: false, message: error.message });
  }
}


const verifyRazorpay = async (req, res) => {
  try {
    const { razorpay_order_id } = req.body;

    // Fetch order info from Razorpay
    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);

    if (orderInfo.status === 'paid') {
      const transactionData = await transactionModel.findById(orderInfo.receipt);

      if (!transactionData) {
        return res.json({ success: false, message: "Transaction not found" });
      }

      // Update transaction as paid
      if (!transactionData.payment) {
        await transactionModel.findByIdAndUpdate(transactionData._id, { payment: true });
      }

      // Add credits to user
      const userData = await userModel.findById(transactionData.userId);
      const newCreditBalance = (userData.creditBalance || 0) + transactionData.credits;

      await userModel.findByIdAndUpdate(userData._id, { creditBalance: newCreditBalance });

      // Respond success
      return res.json({ success: true, message: "Credits Added", credits: newCreditBalance });
    } else {
      return res.json({ success: false, message: "Payment Failed" });
    }
  } catch (error) {
    // console.log(error);
    res.json({ success: false, message: error.message });
  }
};



    export {registerUser, loginUser, userCredits, paymentRazorpay, verifyRazorpay}