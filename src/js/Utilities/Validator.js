/* eslint-disable class-methods-use-this */
export default class Validator {
    validateUsername(username) {
        const charStart = (/^[a-z]/gi.test(username)); // начинается на букву - true
        const charEnd = (/[a-z]$/gi.test(username)); // кончается на букву - true
        const threeNumInRow = (/\d{4,}/g.test(username)); // нет более 3 символов подряд - true
        const invalidSymbols = (/[^\w-]/g.test(username)); // латинские, цифры, _, -
        const isCorrect = charStart && charEnd && !threeNumInRow && !invalidSymbols;

        if (!isCorrect) {
            throw new Error('Введите корректный нэйм');
        }
        return isCorrect;
    }
}
