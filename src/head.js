function firstelement(first)
{
    var ans;
    if(!Array.isArray(first))
    {
        ans = first;
    }
    else
    {
        if(Array.isArray(first[0]))
        {
            ans=firstelement(first[0]);
        }
        else
        {
            ans=first[0];
        }
    }
    return ans;
}

const head = (first) => {
    return firstelement(first);   
}
module.exports = head;