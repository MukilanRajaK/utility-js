const tail = require('./tail');

describe('Tail', () => {

    it('Tail of [1,2,3,4]', () => {
        expect(tail([1,2,3,4])).toEqual([2,3,4]);
    });

    it('Tail of ["Hi","Mukilan","Raja","K"]', () => {
        expect(tail(["Hi","Mukilan","Raja","K"])).toEqual(["Mukilan","Raja","K"]);
    });

    it('Tail of []', () => {
        expect(tail([])).toEqual([]);
    });

    it('Tail of [3]', () => {
        expect(tail([3])).toEqual([]);
    });

    it('Tail of 7', () => {
        expect(tail(7)).toEqual(undefined);
    });

    it('Tail of [1,2,[3,[[4,5],6]]', () => {
        expect(tail([1,2,[3,[[4,5],6]]])).toEqual([2,[3,[[4,5],6]]]);
    });

    it('Tail of ["Hi",["AA","BB"],["CC",["DD","EE","FF"]]]', () => {
        expect(tail(["Hi",["AA","BB"],["CC",["DD","EE","FF"]]])).toEqual([["AA","BB"],["CC",["DD","EE","FF"]]]);
    });

    it('Tail of ["Hi",["AA","BB"],["CC",["DD","EE","FF",["GG"]]]]', () => {
        expect(tail(["Hi",["AA","BB"],["CC",["DD","EE","FF",["GG"]]]])).toEqual([["AA","BB"],["CC",["DD","EE","FF",["GG"]]]]);
    });

    it('Tail of [[1,2],[3,4,[5,6]],[7,[8,9],[10,11,12]]]', () => {
        expect(tail([[1,2],[3,4,[5,6]],[7,[8,9],[10,11,12]]])).toEqual([[3,4,[5,6]],[7,[8,9],[10,11,12]]]);
    }); 
    

})