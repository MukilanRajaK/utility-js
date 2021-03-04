var ans;

function fun(val1)
{
    if(ans==undefined)
    {
        ans=val1;
    }
    else
    {
        ans+=val1;
    }
}


function reducing(first,beg,end)
{
    var len;
    if(beg==end)
    {
        return first;
    }
    if(Array.isArray(first[beg]))
    {
        len=first[beg].length;
        first[beg]=reducing(first[beg],0,len);
    }
    else
    {
        fun(first[beg]);
    }
    first=reducing(first,beg+1,end);
}

const reduce = (first) => {
    ans=undefined;
    var len=first.length;
    if(len==undefined)
    {
        return fun(first);
    }
    reducing(first,0,len); 
    return ans; 
}
module.exports = reduce;