function lastelement(last)
{
    var ans;
    if(!Array.isArray(last))
    {
        ans = last;
    }
    else
    {
        var len=last.length-1;
        if(len>=0)
        {
            if(Array.isArray(last[len]))
            {
                ans=lastelement(last[len]);
            }
            else
            {
                ans=last[len];
            }
        }
        else
        {
            ans=last[0];
        }
    }
    return ans;
}

const tail = (last) => {
    return lastelement(last);   
}
module.exports = tail;