import allData from './priceMaster.json';
class dataRepository{   
    static getPriceBySymbol(id){
        const dataItem = parseInt(allData[id]);
        return dataItem;
    }
}

export default dataRepository;