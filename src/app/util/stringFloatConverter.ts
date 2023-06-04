export class StringFloatConverter {
    static setSpierMassaInPercentage(spierMassaInPercentage: string): number | null {
        throw new Error("Method not implemented.");
    }

    private static unuseableDataMsg = `Number format contains not allowed characters`;
    private static emptyDataMsg = `Parameter may not be empty`;

    public static convertStringFloatToFloatNumber(stringFloat: string): number | null {
        // console.log(`1Running this test now - stringFloat is: ${stringFloat}`);
        stringFloat = stringFloat.trim().replaceAll(" ", "");
        // console.log(`2Running this test now - stringFloat is: ${stringFloat}`);
    
        if(stringFloat.length === 0){
            // if stringFloat is empty
            // return NaN
            // this.showErrorMessage(this.emptyDataMsg, stringFloat);
            return null;
        }

        if(stringFloat.match(/[^,.\d]/)){
            // if contains any other characters than numeric characters AND comma's & dots
            // data unusable, throw error

            this.showErrorMessage(this.unuseableDataMsg, stringFloat);
            return null;
        }

        if(stringFloat.split(",").length > 2){
            // if contains multiple comma;
            // data unusable, throw error

            this.showErrorMessage(this.unuseableDataMsg, stringFloat);
            return null;
        }
        if(this.isCharCommaOrDot(stringFloat.charAt(0)) || this.isCharCommaOrDot(stringFloat.charAt(stringFloat.length))){
            // if string starts OR ends with either , or .
            // data unusable, throw error

            this.showErrorMessage(this.unuseableDataMsg, stringFloat);
            return null;
        }

        if(!stringFloat.includes(",")){
            // if contains multiple dots; remove all dots but last
            const lastIndexOfDot = stringFloat.lastIndexOf(".");
            const replacedDotString = stringFloat.substring(0, lastIndexOfDot) + "," + stringFloat.substring(lastIndexOfDot, stringFloat.length);
            return parseFloat(replacedDotString.replaceAll(".", "").replace(",", "."));
        }

        if(stringFloat.split(".").length > 1){
            // if contains no comma;
            // console.log(`Running this test now - stringFloaty is ${stringFloat}`);

            return parseFloat(stringFloat.replaceAll(".", "").replace(",", "."));
        }

        // console.log(`Simply has one dot ${stringFloat}`);
        return parseFloat(stringFloat.replace(".", "").replace(",", "."));
    }

    private static getErrorMessage(message: string, stringFloat: string): string {
        return message + ";" + stringFloat;
    }

    private static showErrorMessage(message: string, stringFloat: string): void {
        const errorMsg = this.getErrorMessage(message, stringFloat);

        console.error(errorMsg);
        alert(errorMsg);
    }

    private static isCharCommaOrDot(char: string): boolean {
        return char === ',' || char === '.';
    }
}