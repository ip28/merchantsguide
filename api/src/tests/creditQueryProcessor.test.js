/* eslint-disable no-undef */
//imports for test
import "@babel/polyfill";
import CreditQueryProcessor from '../services/creditQueryProcessor';
import PriceAssinments from '../services/priceAssignment';
import CreditAssignments from '../services/creditAssignment';
describe('Credit Query Processor Tests', () => {
	it('Test credit query processor happy path', () => {
        PriceAssinments.Prices = [
          'glob is I',
          'prok is V'
        ];
        CreditAssignments.Credits = ['glob glob Silver is 34 Credits'];
        const creditQueryProcessor = new CreditQueryProcessor();
        const response = creditQueryProcessor.Process('how many Credits is glob prok Silver ?');
        expect(response).not.toBeNull();
        expect(response).toEqual('glob prok Silver is 68');
    });
    it('Test credit query processor invalid question', () => {
       
        PriceAssinments.Prices = [
            'glob is I',
            'prok is V'
          ];
          CreditAssignments.Credits = ['glob glob Silver is 34 Credits'];
          const creditQueryProcessor = new CreditQueryProcessor();
          const response = creditQueryProcessor.Process('how much wood could a woodchuck chuck if a woodchuck could chuck wood ?');
          expect(response).not.toBeNull();
          expect(response).toEqual('I have no idea what you are talking about');
    });
    it('Test credit query processor valid question invalid symbol', () => {
       
        PriceAssinments.Prices = [
            'glob is I'
          ];
          CreditAssignments.Credits = ['glob glob Silver is 34 Credits'];
          const creditQueryProcessor = new CreditQueryProcessor();
          const response = creditQueryProcessor.Process('how many Credits is glob pish Silver ?');
          expect(response).not.toBeNull();
          expect(response).toEqual('I have no idea what you are talking about');
    });
    it('Test credit query processor valid question invalid commodity', () => {
       
        PriceAssinments.Prices = [
            'glob is I'
          ];
          CreditAssignments.Credits = ['glob glob Silver is 34 Credits'];
          const creditQueryProcessor = new CreditQueryProcessor();
          const response = creditQueryProcessor.Process('how many Credits is glob glob Iron ?');
          expect(response).not.toBeNull();
          expect(response).toEqual('I have no idea what you are talking about');
    });
    it('Test credit query processor valid question invalid symbol combination', () => {
       
        PriceAssinments.Prices = [
            'glob is I',
            'dee is D'
          ];
          CreditAssignments.Credits = ['glob glob Silver is 34 Credits'];
          const creditQueryProcessor = new CreditQueryProcessor();
          const response = creditQueryProcessor.Process('how many Credits is dee dee Silver ?');
          expect(response).not.toBeNull();
          expect(response).toEqual('I have no idea what you are talking about');
	});

});