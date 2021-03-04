function fun(x,val2)
{
    if (val2=="filterUpperCase")
    {
        if(x.charCodeAt(0)>=97 && x.charCodeAt(0)<=122)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else if (val2=="filterLowerCase")
    {
        if(x.charCodeAt(0)>=65 && x.charCodeAt(0)<=90)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        return eval(val2.substring(3));
    }
}


function filtering(first,beg,end,second)
{
    //console.log(first[beg]);
    var len;
    if(beg==end)
    {
        return first;
    }
    if(Array.isArray(first[beg]))
    {
        len=first[beg].length;
        first[beg]=filtering(first[beg],0,len,second);
    }
    else
    {
        if(!fun(first[beg],second))
        {
            first[beg]=undefined;
        }
    }
    first=filtering(first,beg+1,end,second);
    return first;
}

const filter = (first,second) => {
    var len=first.length;
    if(len==undefined)
    {
        return fun(first,second);
    }
    var out=filtering(first,0,len,second);
    out = out.filter(function( element ) {
        return element !== undefined;
     });
    return out;  
}
module.exports = filter;