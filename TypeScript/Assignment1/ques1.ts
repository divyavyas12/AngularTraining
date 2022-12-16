let strarray:string[];
strarray=['akshat','divya','oman','barde']

let display = (strarray) =>
{
    strarray.forEach(function (value) {
        console.log(value, value.length);
      }); 
};

display(strarray);