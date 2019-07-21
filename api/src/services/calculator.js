import dataRepository from '../repository/dataRepository';
class Calculator{
    Calculate(symbols){
        this.Validate(symbols);
        const valArray = [];
        for(let s=0; s < symbols.length; s++){
            let val = dataRepository.getPriceBySymbol(symbols[s]);
            const canBeSubtracted = (s < symbols.length - 1)? this.CanBeSubtracted(symbols[s], symbols[s+1]): false;
            val = canBeSubtracted? -val:val;
            valArray.push(val);
        }
        let sum =0;
        for(let v of valArray){
            sum += v;
        }
        return sum;
    }

    Validate(symbols){
        const symbolRegex = RegExp('^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$');
        const symbolStr = symbols.join().replace(/,/g,'');
        if(!symbolRegex.test(symbolStr)){
            throw new Error(`Invalid price symbols below are the rules:- The symbols "I", "X", "C", and "M" can be repeated three times in succession, but no more.
            (They may appear four times if the third and fourth are separated by a smaller value, such as
            XXXIX.) "D", "L", and "V" can never be repeated.`);
        }
    }

    CanBeSubtracted(symbol, nextSymbol){
        const symbolValue = dataRepository.getPriceBySymbol(symbol);
        const nextSymbolValue = dataRepository.getPriceBySymbol(nextSymbol);
        return ((symbol === 'I' && (nextSymbol === 'V' || nextSymbol === 'X'))
        || (symbol === 'X' && (nextSymbol === 'L' || nextSymbol === 'C'))
        || (symbol === 'C' && (nextSymbol === 'D' || nextSymbol === 'M')
        || ((symbol !== 'V' || symbol !== 'D' || symbol !== 'L') && nextSymbolValue > symbolValue)));
    }
}

export default Calculator;