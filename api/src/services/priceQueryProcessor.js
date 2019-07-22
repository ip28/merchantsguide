import Calculator from './calculator';
import PriceAssignment from './priceAssignment';
class PriceQueryProcessor{
    Process(query){
        try {
            const calc = new Calculator();
            const priceSymbols = [];
            const phrases = query.replace('?','').trim().split(' is ')[1].split(' ');
            for(let p of phrases){
                const s = PriceAssignment.GetPriceByPhrase(p);
                priceSymbols.push(s);
            }
            const price = calc.Calculate(priceSymbols);
            return `${phrases.join().replace(/,/g,' ')} is ${price}`;
        } catch (error) {
            return `I have no idea what you are talking about`;
        }
        
    }
}

export default PriceQueryProcessor;