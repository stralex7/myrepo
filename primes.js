#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";
var primes = new Array();
var i=3,d,d1,c;
primes.push(2,3);
while(primes.length<100) {
            d=Math.ceil(Math.sqrt(i)); c=3;
            while(c<=d) {
                d1=i/c;c+=2;
                if(Math.floor(d1)==Math.ceil(d1)) {
                        break;
                } else {if(c>d) {primes.push(i)}}
                
            } i+=2;
}
fs.writeFileSync(outfile, primes.join(','));
//console.log(primes.join(','));
console.log("The number of records: "+primes.length); 
