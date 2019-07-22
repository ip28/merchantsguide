import Calculator from './calculator';
import CreditAssignment from './creditAssignment';
import PriceAssignment from './priceAssignment';
class CreditQueryProcessor{
    Process(query){
        try {
            const phrases = query.replace('?','').trim().split(' is ')[1].split(' ');
            const commodity = phrases.pop();
            const creditPerUnit = CreditAssignment.GetCreditByCommodity(commodity);
            const calc = new Calculator();
            const symbols = phrases.map((p)=>PriceAssignment.GetPriceByPhrase(p));
            const qty = calc.Calculate(symbols);
            const totalCredit = creditPerUnit * qty;
            return `${phrases.join().replace(/,/g,' ')} ${commodity} is ${totalCredit}`;
        } catch (error) {
            return `I have no idea what you are talking about`;
        }
        
    }
}

export default CreditQueryProcessor;