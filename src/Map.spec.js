const Map = require('./Map');

describe('Map', () => {

    it('Map of [2,1,5,4,3],cube', () => {
        expect(Map([2,1,5,4,3],"cube")).toEqual([8,1,125,64,27]);
    });

    it('Map of [2,1,5,4,3],square', () => {
        expect(Map([2,1,5,4,3],"square")).toEqual([4,1,25,16,9]);
    });

    it('Map of [2,1,5,4,3],identity', () => {
        expect(Map([2,1,5,4,3],"identity")).toEqual([2,1,5,4,3]);
    });

    it('Map of [2,1,5,4,3],x=>x+1', () => {
        expect(Map([2,1,5,4,3],"x=>x+1")).toEqual([3,2,6,5,4]);
    });

    it('Map of [[[[2],[1]],[5]],[4],[3]],square', () => {
        expect(Map([[[[2],[1]],[5]],[4],[3]],"square")).toEqual([[[[4],[1]],[25]],[16],[9]]);
    });

    it('Map of [[[[2],[1]],[5]],[4],[3]],x=>x*2', () => {
        expect(Map([[[[2],[1]],[5]],[4],[3]],"x=>x*2")).toEqual([[[[4],[2]],[10]],[8],[6]]);
    });

    it('Map of 3, identity', () => {
        expect(Map(3,"identity")).toEqual(3);
    });

    it('Map of [], identity', () => {
        expect(Map([],"identity")).toEqual([]);
    });

})