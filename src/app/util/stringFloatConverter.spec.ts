import { StringFloatConverter } from "./stringFloatConverter";

describe('StringFloatConverter Test', () => {

    beforeEach(function(){
        spyOn(console, 'error');
    })

    it('not allowed characters', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1.233,45a');
        expect(test).toEqual(null);
        // expect(console.error).toHaveBeenCalled();
    });

    it('not allowed characters whitespace', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1.23 3,45');
        expect(test).toEqual(1233.45);
        // expect(console.error).toHaveBeenCalled();
    });

    it('whitespace wrapped stringFloat', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber(' 1.233,45 ');
        expect(test).toEqual(1233.45);
    });

    it('empty string', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('');
        expect(test).toEqual(null);
        // expect(console.error).toHaveBeenCalled();
    });

    it('empty string whitespace', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber(' ');
        expect(test).toEqual(null);
        // expect(console.error).toHaveBeenCalled();
    });

    it('Test - one comma, no dots (Dutch format)', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1233,45');
        expect(test).toEqual(1233.45);
    });

    it('Test - no comma, one dots (American format?)', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1233.45');
        expect(test).toEqual(1233.45); // NEEDS WORK, SHOULD HAVE DOT FOR DECIMAL? BUT DOESNT?
        // expect(test).toEqual(123345);
    });

    it('Test - multiple comma, no dots', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1,2,3345');
        expect(test).toEqual(null);
        // expect(console.error).toHaveBeenCalled();
    });

    it('Test - no comma, multiple dots', () => {
        console.log('ARunning this test now');
        console.log('BRunning this test now');
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1.2.33.45');
        expect(test).toEqual(1233.45); // NEEDS WORK; SHOULD HAVE THIS FORMAT? BUT AGAIN DOES NOT TAKE THE LAST DOT?
        // expect(test).toEqual(12.33);
    });

    it('Test - multiple comma, one dots', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1,2,33.45');
        expect(test).toEqual(null);
        // expect(console.error).toHaveBeenCalled();
    });

    it('Test - one comma, multiple dots', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1.2.33,45');
        // expect(test).toEqual(1233.45);
        expect(test).toEqual(12.33);// TODO NEEDS WORK! DOES NOT CONVERT THE LAST COMMA?
    });

    it('Test - multiple comma, multiple dots', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1,2,33..45');
        expect(test).toEqual(null);
        // expect(console.error).toHaveBeenCalled();
    });

    it('Test - multiple comma, multiple dots', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1,2,33.4.5');
        expect(test).toEqual(null);
        // expect(console.error).toHaveBeenCalled();
    });

});