import { StringFloatConverter } from "./stringFloatConverter";

describe('StringFloatConverter Test', () => {

    it('not allowed characters', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1.233,45a');
    });

    it('not allowed characters whitespace', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1.23 3,45');
    });

    it('whitespace wrapped stringFloat', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber(' 1.233,45 ');
    });

    it('empty string', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('');
    });

    it('empty string whitespace', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber(' ');
    });



    it('Test - one comma, no dots (Dutch format)', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1233,45');
    });

    it('Test - no comma, one dots (American format?)', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1233.45');
    });


    it('Test - multiple comma, no dots', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1,2,3345');
    });

    it('Test - no comma, multiple dots', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1.2.33.45');
    });

    it('Test - multiple comma, one dots', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1,2,33.45');
    });

    it('Test - one comma, multiple dots', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1.2.33,45');
    });

    it('Test - multiple comma, multiple dots', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1,2,33..45');
    });

    it('Test - multiple comma, multiple dots', () => {
        const test = StringFloatConverter.convertStringFloatToFloatNumber('1,2,33.4.5');
    });

});