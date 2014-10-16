// Exercise 1

var sum = 0;
for (var n=0; n<1000; n++)
    {
    if ((n % 3 === 0) || (n % 5 === 0))
    {
        sum += n;
    }}
console.log(sum);



// Exercise 2
function filter(list)
{
    var list_even = [];
    for(var n=0; n<list.length; n++)
    {
        if (list[n] % 2 === 0)
        {
            list_even.push(list[n]);
        }
    }

    return list_even;
}
   

function sum(list)
{
    var total = 0;
    
    for (var n=0; n<list.length; n++)
    {
        total = total + list[n];
    }
    
    return total;
}

function fibonacci_set(max)
{
    
    if (max > 1)
    {
        var fib_list = [1];
        var current_fib = 1;
        
        while (current_fib < max)
        {
            fib_list.push(current_fib);
            current_fib = fib_list[fib_list.length-1] + fib_list[fib_list.length-2];
        }
        
        return fib_list;
    }
    
    else
    {
        return [1,1];
    }
}

sum(filter(fibonacci_set(400)));

//Exercise 3

function duplicates(list)
{
    var d = {}
    for (var n=0; n<list.length; n++)
    {
        if (d[list[n]])
        {
            d[list[n]] = d[list[n]] + 1;
        }
        else
        {
            d[list[n]] = 1;
        }
        
    }
    console.log(d)
    return d 
}

function list_dups(d)
{   
    var list_of_dups = [];
    var list_keys = Object.keys(d);
    for(var n=0; n<list_keys.length; n++)
    {
        if (d[list_keys[n]] > 1)
        {
            list_of_dups.push(list_keys[n])
        }     
    }
    return list_of_dups
}



list_dups(duplicates([1,2,3,1,2,3,2,4]))


// ALTERNATIVE VERSION OF EXERCISE 3 duplicates function THAT DOES NOT WORK
// IS SUPPOSED TO CHECK FOR STRICT EQUALITY.... DOES NOT. BREAKS on "TRUE" and TRUE
function duplicates(listt)
{
    var d = {}
    for (var n=0; n<listt.length; n++)
    {
        if (d[listt[n]])
        {
            // console.log(d[listt[n]])
            // console.log("This key is in the dictionary!" + listt[n])
            // console.log("KEYs " + Object.keys(d))
            for(var i=0; i<Object.keys(d).length; i++)
            {
                console.log("Right now, at i, " + Object.keys(d)[i])
                console.log("Compare to " + listt[n])
            //     if (listt[n] === Object.keys(d)[i])
            //     {
                    
                    // d[listt[n]] += 1;
            //         console.log(d[i])
            //     }
            //     else
            //     {
            //         d[listt[n]] = 1;
            //     }
                
            }
            console.log("end of for var i")
        }
        else
        {
            d[listt[n]] = 1;
        }
        
    }
    // console.log(d)
    return d 
}



var hackbrightStudents = ["katie", "amy", "jenny", "katie", "kelley", "katie", "amy"]

var randomJunkIFound = ["katie", "true", true, "gargoyles", "!", 2 + 3, "2 + 3", 19, "19", 19 === "19", 6, false, false]