function CalculatorService() {

    const SUM = '+';
    const SUB = '-';
    const DIV = '/';
    const MUL = '*';

    function calculate(num1, num2, operation) {
        let result;

        switch(operation) {
            case SUM:
                result = num1 + num2;
            break;

            case SUB:
                result = num1 - num2;
            break;

            case DIV:
                result = num1 / num2;
            break;

            case MUL:
                result = num1 * num2;
            break;

            default:
                result = 0;
        }
        return result;
    }

    function concatanate(currentNum, concatNum) {
        //just '0' or null, the value is restarted
        if (currentNum === '0' || currentNum === null) {
            currentNum = '';
        }

        //first digit is '.', 0 is concatanated before the dot
        if (concatNum === '.' && currentNum === '') {
            return '0.';
        }

        //if '.' already exists, just return it
        if (concatNum === '.' && currentNum.indexOf('.') > -1) {
            return currentNum;
        }

        return currentNum + concatNum;
    }
    
    return [
        calculate,
        concatanate,
        SUM,
        SUB,
        DIV,
        MUL
    ];
}

export default CalculatorService;