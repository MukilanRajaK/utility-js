function fun(x,val2)
{
    if (val2=="identity")
    {
        return x;
    }
    else if (val2=="square")
    {
        return x*x;
    }
    else if (val2=="cube")
    {
        return x*x*x;
    } 
    else
    {
        return eval(val2.substring(3));
    }

}

function Mapping(first,beg,end,second)
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
        first[beg]=Mapping(first[beg],0,len,second);
    }
    else
    {
        first[beg]=fun(first[beg],second);
    }
    first=Mapping(first,beg+1,end,second);
    return first;
}

const Map = (first,second) => {
    var len=first.length;
    if(len==undefined)
    {
        return fun(first,second);
    }
    return Mapping(first,0,len,second);  
}
module.exports = Map;