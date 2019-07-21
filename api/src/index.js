
//importing dependencies
import express from 'express';
import '@babel/polyfill';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import config from './config';
import inputProcessor from './services/inputProcessor';

dotenv.config();
const app = express();
app.use(cors({
	exposedHeaders: ["Link"]
}));
app.use(bodyParser.urlencoded({ extended: false }));  

const InputProcessor = new inputProcessor();
app.get('/',async (req,res)=> {
		try{
			const response = await InputProcessor.Process();
			res.json(response);
		}
		catch(err){
			console.log(err);
			res.status(500).send({message:'Internal error has occurred'});
		}
});


app.listen(config.port, () => console.log(`App listening on port ${config.port}!`));


