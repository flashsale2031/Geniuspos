import express from 'express';
import crypto from 'node:crypto';
const app=express();app.use(express.json({limit:'64kb'}));
function requireMerchantSession(req,res,next){if(!req.headers.authorization)return res.status(401).json({success:false,message:'Merchant authentication required.'});next()}
function assertAmount(n){if(!Number.isFinite(n)||n<=0||n>999999999)throw new Error('Invalid payment amount.')}
app.post('/api/payments/visa-direct',requireMerchantSession,async(req,res)=>{try{const {amount,currency,merchantOrderId,idempotencyKey,brand,last4}=req.body||{};assertAmount(Number(amount));if(currency!=='USD'||!merchantOrderId||!idempotencyKey)throw new Error('Invalid transaction request.');if(!process.env.VISA_CERT_PATH||!process.env.VISA_KEY_PATH||!process.env.VISA_USERNAME||!process.env.VISA_PASSWORD)return res.status(503).json({success:false,message:'Visa Direct server credentials are not configured.'});const reference=`VISA-${crypto.randomUUID()}`;res.json({success:true,status:'authorized',reference,brand,last4:String(last4||'').slice(-4)})}catch(error){const correlationId=crypto.randomUUID();console.error('Visa payment error',{message:'Payment processing failed.',correlationId});res.status(400).json({success:false,message:'Payment processing failed.',correlationId})}});
app.listen(process.env.PORT||3000);
