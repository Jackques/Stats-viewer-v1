export class StringFloatConverter {

    private static unuseableDataMsg = `Number format contains not allowed characters`;

    public static convertStringFloatToFloatNumber(stringFloat: string): number | null {
        stringFloat = stringFloat.trim().replaceAll(" ", "");
    
        if(stringFloat.length === 0){
            // if stringFloat is empty
            // return NaN

            return NaN;
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
            // if contains no comma;

            if(stringFloat.split(".").length > 2){
                // if contains multiple dots; remove all dots but last
                const lastIndexOfDot = stringFloat.lastIndexOf(".");
                const replacedDotString = stringFloat.substring(0, lastIndexOfDot) + "," + stringFloat.substring(lastIndexOfDot + stringFloat.length);
                return parseFloat(replacedDotString.replace(".", "").replace(",", "."));
            }
            
            // default; contains single or no dots; simply parse the data
            parseFloat(stringFloat);
        }

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