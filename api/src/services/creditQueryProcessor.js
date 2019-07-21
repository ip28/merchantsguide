import Calculator from './calculator';
import CreditAssignment from './creditAssignment';
import PriceAssignment from './priceAssignment';
class CreditQueryProcessor{
    Process(query){
        const phrases = query.replace('?','').trim().split(' is ')[1].split(' ');
        const commodity = phrases.pop();
        const creditPerUnit = CreditAssignment.Credits[`${commodity}`];
        const calc = new Calculator();
        const symbols = phrases.map((p)=>PriceAssignment.Prices[`${p}`]);
        const qty = calc.Calculate(symbols);
        const totalCredit = creditPerUnit * qty;
        return `${phrases.join().replace(/,/g,' ')} ${commodity} is ${totalCredit}`;
    }
}

export default CreditQueryProcessor;