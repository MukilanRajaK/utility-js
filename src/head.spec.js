const head = require('./head');

describe('Head', () => {

    it('Head of [1,2,3,4]', () => {
        expect(head([1,2,3,4])).toEqual(1);
    });

    it('Head of ["Hi","Mukilan","Raja","K"]', () => {
        expect(head(["Hi","Mukilan","Raja","K"])).toEqual("Hi");
    });

    it('Head of [[1,2],[2,3],[4]]', () => {
        expect(head([[1,2],[2,3],[4]])).toEqual(1);
    });

    it('Head of [["Hi","Hello"],"Mukilan","Raja","K"]', () => {
        expect(head(["Hi","Mukilan","Raja","K"])).toEqual("Hi");
    });

    it('Head of [,[2,3],4,5]', () => {
        expect(head([,[2,3],4,5])).toEqual(undefined);
    });

    it('Head of [[1],[2,3],4,5]', () => {
        expect(head([[1],[2,3],4,5])).toEqual(1);
    });

    it('Head of []', () => {
        expect(head([])).toEqual(undefined);
    });

    it('Head of 3', () => {
        expect(head(3)).toEqual(3);
    });

    it('Head of [[[1,2],3],4]', () => {
        expect(head([[[[[11,2],4],5],8,9]])).toEqual(11);
    });

})