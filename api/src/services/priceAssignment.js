const _prices = {};
class PriceAssignment{
    static set Prices(lines){
        for(let line of lines){
            const p = line.split(' is ');
            _prices[`${p[0].trim()}`] =p[1].trim();
        }
    }

    static get Prices(){
        return _prices;
    }

    static GetPriceByPhrase(p){
        if(this.Prices[`${p}`]){
            return this.Prices[`${p}`];
        }
        throw new Error(`Phrase - ${p} does not exist`);
    }
}

export default PriceAssignment;