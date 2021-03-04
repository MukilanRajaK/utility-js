const reduce = require('./reduce');

describe('Reduce', () => {

    it('reduce of [2,1,5,4,3]', () => {
        expect(reduce([2,1,5,4,3])).toEqual(15);
    });

    it('reduce of ["A","b","C","D"]', () => {
        expect(reduce(["A","b","C","D"])).toEqual("AbCD");
    });

    it('reduce of ["A","b","C","D",1]', () => {
        expect(reduce(["A","b","C","D",1])).toEqual("AbCD1");
    });

    it('reduce of [[1,2,[3,4],5],[5,7],9]', () => {
        expect(reduce([[1,2,[3,4],5],[5,7],9])).toEqual(36);
    });
})