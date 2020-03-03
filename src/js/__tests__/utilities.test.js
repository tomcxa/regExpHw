import Validator from '../Utilities/Validator';

describe('Test validator', () => {
    const validator = new Validator();
    test('username validation', () => {
        expect(validator.validateUsername('tomcxa')).toBeTruthy();
        expect(() => {
            validator.validateUsername('1tomcxa');
        }).toThrow();
        expect(() => {
            validator.validateUsername('tomcxa-');
        }).toThrow();
        expect(() => {
            validator.validateUsername('tom1111cxa');
        }).toThrow();
        expect(() => {
            validator.validateUsername('tom&cxa');
        }).toThrow();
    });
});
