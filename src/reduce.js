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

const reduce = (first,second,third) => {
    ans=undefined;
    var len=first.length;
    if(len==undefined)
    {
        fun(first);
    }
    else
    {
        reducing(first,0,len);
    }
    if(third!=undefined)
    {
        fun(third);
    } 
    return ans; 
}
module.exports = reduce;