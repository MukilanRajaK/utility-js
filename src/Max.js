function Maximum(first,beg,end,ans)
{
    console.log(ans);
    var loc=Number.MIN_VALUE;
    var len;
    if(beg==end)
    {
        return ans;
    }
    if(Array.isArray(first[beg]))
    {
        len=first[beg].length;
        loc=Maximum(first[beg],0,len,ans);
    }
    else
    {
        loc=first[beg];
    }
    if(loc>ans)
    {
        ans=loc;
    }
    loc=Maximum(first,beg+1,end,ans);
    if(loc>ans)
    {
        ans=loc;
    }
    return ans;
}

const Max = (first) => {
    var len=first.length;
    var ans=Number.MIN_VALUE;
    if(len==undefined)
    {
        return first;
    }
    return Maximum(first,0,len,ans);   
}
module.exports = Max;