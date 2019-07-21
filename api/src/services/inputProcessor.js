import fs from "fs";
import PriceAssignment from './priceAssignment';
import CreditAssignment from './creditAssignment';
import PriceQueryProcessor from './priceQueryProcessor';
import CreditQueryProcessor from './creditQueryProcessor';
const priceAssignmentRegex= RegExp('^([A-Za-z]+) is ([I|V|X|L|C|D|M])$');
const creditAssignmentRegex = RegExp('^([A-Za-z]+)([A-Za-z\\s]*) is ([0-9]+) ([c|C]redits)$');
const priceQuery_HowMuchRegex =RegExp('^how much is (([A-Za-z\\s])+)\\?$');
const priceQuery_HowManyRegex = RegExp('^how many [c|C]redits is (([A-Za-z\\s])+)\\?$');

class InputProcessor{
	constructor(){
	}
	async Process(){
        const processedInput = this.ReadFile();
        const answers = [];
        PriceAssignment.Prices = processedInput.priceAssignments;
        CreditAssignment.Credits = processedInput.creditAssignments;
        for(const query of processedInput.queries){
            if(query.match(priceQuery_HowMuchRegex)){
                answers.push(new PriceQueryProcessor().Process(query ));
            }
            else if(query.match(priceQuery_HowManyRegex)){
               answers.push(new CreditQueryProcessor().Process(query));
            }
            else{
               answers.push(`I have no idea what you are talking about`);
            }
        }
        return answers;
	}

    ReadFile() {
        const result = {
            priceAssignments: [],
            creditAssignments: [],
            queries: []
        };
        const lines = fs.readFileSync('./src/input/input.txt').toString().split('\n');
        for (let line of lines) {            
            line = line.replace(/(\n|\r)+$/, '');
            if(priceAssignmentRegex.test(line)){
                result.priceAssignments.push(line);
            }
            else if(line.match(creditAssignmentRegex)){
                result.creditAssignments.push(line);
            }
            else{
                result.queries.push(line);
            }
            
        }
        return result;
    }
}

export default InputProcessor;