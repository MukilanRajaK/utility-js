function Minimum(first,beg,end,ans)
{
    console.log(ans);
    var loc=Number.MAX_VALUE;
    var len;
    if(beg==end)
    {
        return ans;
    }
    if(Array.isArray(first[beg]))
    {
        len=first[beg].length;
        loc=Minimum(first[beg],0,len,ans);
    }
    else
    {
        loc=first[beg];
    }
    if(loc<ans)
    {
        ans=loc;
    }
    loc=Minimum(first,beg+1,end,ans);
    if(loc<ans)
    {
        ans=loc;
    }
    return ans;
}

const Min = (first) => {
    var len=first.length;
    var ans=Number.MAX_VALUE;
    if(len==undefined)
    {
        return first;
    }
    return Minimum(first,0,len,ans);   
}
module.exports = Min;