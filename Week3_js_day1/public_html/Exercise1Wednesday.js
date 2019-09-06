/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var all = boys.concat(girls)
console.log(all)
console.log(all.join(" , "))
console.log(all.join(" - "))
console.log(all.push("Lone", "Gitte"))
console.log(all)
console.log(all.unshift("Hans", "Kurt"))
console.log(all)
console.log(all.shift())
console.log(all)
console.log(all.pop())
console.log(all)
console.log(all.splice(3,2))
console.log(all)
var reversed = all.reverse();
console.log(reversed)
var sort = all.sort();
console.log(all)
all.sort(
    function(a, b){
        if (a.toLowerCase() < b.toLowerCase()) return -1;
        if (a.toLowerCase() > b.toLowerCase()) return 1;
        return 0;
    }
);
var upperNames = sort.map(function(x) { return x.toUpperCase(); });
console.log(upperNames);

const startsWithL = upperNames.filter((name) => name.startsWith("L"));
console.log(startsWithL);



