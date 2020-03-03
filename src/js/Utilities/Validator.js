/* eslint-disable class-methods-use-this */
export default class Validator {
    validateUsername(username) {
        const charStart = !!(username.match(/^[a-z]/gi)); // начинается на букву - true
        const charEnd = !!(username.match(/[a-z]$/gi)); // кончается на букву - true
        const notThreeNumInRow = !(username.match(/\d{4,}/g)); // нет более 3 символов подряд - true
        const validSymbols = !(username.match(/[^\w-]/g)); // латинские, цифры, _, -
        const isCorrect = charStart && charEnd && notThreeNumInRow && validSymbols;

        if (!isCorrect) {
            throw new Error('Введите корректный нэйм');
        }
        return isCorrect;
    }
}
