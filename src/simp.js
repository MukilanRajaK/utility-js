function cube(v)
{
    return v*v*v;
}
arr=a{x:10};
var s="a.x=>cube(a.x)";
console.log(arr.map(eval(s)));