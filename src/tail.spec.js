const tail = require('./tail');

describe('Tail', () => {

    it('Tail of [1,2,3,4]', () => {
        expect(tail([1,2,3,4])).toEqual(4);
    });

    it('Tail of ["Hi","Mukilan","Raja","K"]', () => {
        expect(tail(["Hi","Mukilan","Raja","K"])).toEqual("K");
    });

    it('Tail of []', () => {
        expect(tail([])).toEqual(undefined);
    });

    it('Tail of [3]', () => {
        expect(tail([3])).toEqual(3);
    });

    it('Tail of 7', () => {
        expect(tail(7)).toEqual(7);
    });

    it('Tail of [1,2,[3,[[4,5],6]]', () => {
        expect(tail([1,2,[3,[[4,5],6]]])).toEqual(6);
    });

    it('Tail of ["Hi",["AA","BB"],["CC",["DD","EE","FF"]]]', () => {
        expect(tail(["Hi",["AA","BB"],["CC",["DD","EE","FF"]]])).toEqual("FF");
    });

    it('Tail of ["Hi",["AA","BB"],["CC",["DD","EE","FF",["GG"]]]]', () => {
        expect(tail(["Hi",["AA","BB"],["CC",["DD","EE","FF",["GG"]]]])).toEqual("GG");
    });

    it('Tail of [[1,2],[3,4,[5,6]],[7,[8,9],[10,11,12]]]', () => {
        expect(tail([[1,2],[3,4,[5,6]],[7,[8,9],[10,11,12]]])).toEqual(12);
    }); 
    

})