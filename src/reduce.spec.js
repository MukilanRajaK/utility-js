const reduce = require('./reduce');

describe('Reduce', () => {

    it('reduce of [2,1,5,4,3],(x,y)=>x+y', () => {
        expect(reduce([2,1,5,4,3],"(x,y)=>x+y")).toEqual(15);
    });

    it('reduce of ["A","b","C","D"],v(x,y)=>x+y', () => {
        expect(reduce(["A","b","C","D"],"v(x,y)=>x+y")).toEqual("AbCD");
    });

    it('reduce of ["A","b","C","D",1],(x,y)=>x+y', () => {
        expect(reduce(["A","b","C","D",1],"(x,y)=>x+y")).toEqual("AbCD1");
    });

    it('reduce of [[1,2,[3,4],5],[5,7],9],(x,y)=>x+y', () => {
        expect(reduce([[1,2,[3,4],5],[5,7],9],"(x,y)=>x+y")).toEqual(36);
    });

    it('reduce of [[1,2,[3,4],5],[5,7],9],(x,y)=>x+y,10', () => {
        expect(reduce([[1,2,[3,4],5],[5,7],9],"(x,y)=>x+y",10)).toEqual(46);
    });

    it('reduce of [],(x,y)=>x+y,10', () => {
        expect(reduce([],"(x,y)=>x+y",10)).toEqual(10);
    });

    it('reduce of 9,(x,y)=>x+y,11', () => {
        expect(reduce(9,"(x,y)=>x+y",11)).toEqual(20);
    });

    it('reduce of ["A","b","C","D",1],(x,y)=>x+y,"name"', () => {
        expect(reduce(["A","b","C","D",1],"(x,y)=>x+y","name")).toEqual("AbCD1name");
    });

    it('reduce of [],(x,y)=>x+y,"abcd"', () => {
        expect(reduce([],"(x,y)=>x+y","abcd")).toEqual("abcd");
    });
})