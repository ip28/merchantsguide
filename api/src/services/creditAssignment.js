import PriceAssignment from './priceAssignment';
import Calculator from './calculator';
const _credits = {};
class CreditAssignment{
    static set Credits(lines){
        const calc = new Calculator();
        for(let line of lines){
            const credits = parseInt(line.split(' is ')[1].split(/([c|C]redits)$/)[0].trim());
            const commodity_price = line.split(' is ')[0].split(' ');
            const commidity = commodity_price.pop().trim();
            const priceSymbols = [];
            const pricePhrases = commodity_price;
            for(let p of pricePhrases){
                priceSymbols.push(PriceAssignment.Prices[p]);
            }
            const totalQuantity = calc.Calculate(priceSymbols);
            const creditPerQuantity = credits/totalQuantity;
            _credits[`${commidity}`] = creditPerQuantity;
        }
    }

    static get Credits(){
        return _credits;
    }
}

export default CreditAssignment;