import { StringFloatConverter } from "./stringFloatConverter";

describe('StringFloatConverter Test', () => {

    beforeEach(function(){
        spyOn(console, 'error');
    })

    it('Test - not allowed characters', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1.233,45a');
        expect(test).toEqual(null);
        expect(console.error).toHaveBeenCalled();
    });

    it('Test - not allowed characters whitespace', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1.23 3,45');
        expect(test).toEqual(1233.45);
    });

    it('Test - whitespace wrapped stringFloat', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber(' 1.233,45 ');
        expect(test).toEqual(1233.45);
    });

    it('Test - empty string', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('');
        expect(test).toEqual(null);
        expect(console.error).toHaveBeenCalled();
    });

    it('Test - empty string whitespace', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber(' ');
        expect(test).toEqual(null);
        expect(console.error).toHaveBeenCalled();
    });

    it('Test - one comma, no dots (Dutch format)', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1233,45');
        expect(test).toEqual(1233.45);
    });

    it('Test - no comma, one dots (American format?)', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1233.45');
        expect(test).toEqual(1233.45);
    });

    it('Test - multiple comma, no dots', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1,2,3345');
        expect(test).toEqual(null);
        expect(console.error).toHaveBeenCalled();
    });

    it('Test - no comma, multiple dots', () => {
        console.log('ARunning this test now');
        console.log('BRunning this test now');
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1.2.33.45');
        expect(test).toEqual(1233.45);
    });

    it('Test - multiple comma, one dots', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1,2,33.45');
        expect(test).toEqual(null);
        expect(console.error).toHaveBeenCalled();
    });

    it('Test - one comma, multiple dots', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1.2.33,45');
        expect(test).toEqual(1233.45);
    });

    it('Test - multiple comma, multiple dots', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1,2,33..45');
        expect(test).toEqual(null);
        expect(console.error).toHaveBeenCalled();
    });

    it('Test - multiple comma, multiple dots', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1,2,33.4.5');
        expect(test).toEqual(null);
        expect(console.error).toHaveBeenCalled();
    });

});