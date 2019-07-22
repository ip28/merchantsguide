/* eslint-disable no-undef */
//imports for test
import "@babel/polyfill";
import InputProcecssor from '../services/inputProcessor';
import PriceQueryProcessor from '../services/priceQueryProcessor';
import CreditQueryProcessor from '../services/creditQueryProcessor';

jest.mock('../services/priceQueryProcessor');
jest.mock('../services/creditQueryProcessor');
// mock data is used for testing 
beforeEach(()=>{
	PriceQueryProcessor.mockClear();
	PriceQueryProcessor.mockImplementation(()=>({
			Process: () => []
        }));
    CreditQueryProcessor.mockClear();
    CreditQueryProcessor.mockImplementation(()=>({
        Process: () => []
    }));
});
describe('Input Processor Tests', () => {
	it('Test input processor happy path', async () => {
        const mockedFileData = {
            priceAssignments: [
                'glob is I'
            ],
            creditAssignments: [
                'glob glob Silver is 34 Credits'
            ],
            queries: [
                'how much is pish tegj glob glob ?',
                'how many Credits is glob prok Silver ?',
                'how much wood could a woodchuck chuck if a woodchuck could chuck wood ?'
            ]
        };
        const inputProcecssor = new InputProcecssor();
        inputProcecssor.ReadFile = jest.fn(()=> mockedFileData);
        const response = await inputProcecssor.Process();
        console.log(response);
        expect(response).not.toBeNull();
        const expectedResponse = [[],[], 'I have no idea what you are talking about'];
        expect(response).toEqual(expectedResponse);
    });
    it('Test input processor REadFile happy path', async () => {
        const expectedData = {
            priceAssignments: [
                'glob is I'
            ],
            creditAssignments: [
                'glob glob Silver is 34 Credits'
            ],
            queries: [
                'how much is pish tegj glob glob ?'
            ]
        };
        const inputProcecssor = new InputProcecssor();
        const response = await inputProcecssor.ReadFile('./src/tests/testInput.txt');
        console.log(response);
        expect(response).not.toBeNull();
        expect(response).toEqual(expectedData);
	});

});