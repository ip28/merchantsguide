/* eslint-disable no-undef */
//imports for test
import "@babel/polyfill";
import PriceQueryProcessor from '../services/priceQueryProcessor';
import PriceAssinments from '../services/priceAssignment';
import CreditAssignments from '../services/creditAssignment';
describe('Price Query Processor Tests', () => {
	it('Test price query processor happy path', () => {
        PriceAssinments.Prices = [
          'glob is I',
          'prok is V'
        ];
        const priceQueryProcessor = new PriceQueryProcessor();
        const response = priceQueryProcessor.Process('how much is prok glob glob ?');
        expect(response).not.toBeNull();
        expect(response).toEqual('prok glob glob is 7');
    });
    it('Test credit query processor invalid question', () => {
       
        PriceAssinments.Prices = [
            'glob is I',
            'prok is V'
          ];
          const priceQueryProcessor = new PriceQueryProcessor();
          const response = priceQueryProcessor.Process('how much wood could a woodchuck chuck if a woodchuck could chuck wood ?');
          expect(response).not.toBeNull();
          expect(response).toEqual('I have no idea what you are talking about');
    });
});