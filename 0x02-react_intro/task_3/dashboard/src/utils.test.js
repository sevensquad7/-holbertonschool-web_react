import '@testing-library/jest-dom';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear tests', () => {
    it('expected return the current year', () => {
        expect(getFullYear()).toEqual(new Date().getFullYear());
    });
});

describe("getFooterCopy tests", function () {
    it("expected with true as argument", function () {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    it('expected with false as argument', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
});

describe('getLatestNotification tests', () => {
    it('expected correct string', () => {
        expect(getLatestNotification()).toEqual('<strong>Urgent requirement</strong> - complete by EOD');
    });
});
