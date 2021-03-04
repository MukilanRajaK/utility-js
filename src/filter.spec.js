const filter = require('./filter');

describe('Filter', () => {

    it('Max of [2,1,5,4,3],x=>x>1', () => {
        expect(filter([2,1,5,4,3],"x=>x>1")).toEqual([2,5,4,3]);
    });

    it('Max of [2,1,5,4,3],x=>true', () => {
        expect(filter([2,1,5,4,3],"x=>true")).toEqual([2,1,5,4,3]);
    });

    it('Max of [2,1,5,4,3],x=>false', () => {
        expect(filter([2,1,5,4,3],"x=>false")).toEqual([]);
    });

    it('Max of [],x=>false', () => {
        expect(filter([],"x=>true")).toEqual([]);
    });

    it('Max of [],x=>false', () => {
        expect(filter([],"x=>true")).toEqual([]);
    });

    it("Max of ['A','b','C','D','e'],filterLowerCase", () => {
        expect(filter(["A","b","C","D","e"],"filterLowerCase")).toEqual(["A","C","D"]);
    });

    it("Max of ['A','b','C','D','e'],filterUpperCase", () => {
        expect(filter(["A","b","C","D","e"],"filterUpperCase")).toEqual(["b","e"]);
    });

    it('Max of [3,9],x=>x>500', () => {
        expect(filter([],"x=>true")).toEqual([]);
    });

})