#!/usr/bin/env node 
var fs = require('fs');
var outfile = "part2.txt";
var out = "";

var findPrimes = function(limit) {
	var sieve = new Array();
	var i = 2;
        var j;
	var num = 0;
	//Iteratively mark the non primes multiples of each prime starting with 2
	while (num <= limit) {
		if (!sieve[i]) {
			out += i + ",";
			num++;
			for (j = i << 1; j <= limit; j += i) {
				sieve[j] = true;
			}
		}
		i++;
	}
	out = out.substring(0, out.length - 1);
};

findPrimes(100);

fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + " To: " + outfile);
