#!/usr/bin/env node 
var fs = require('fs');
var outfile = "part2.txt";
var out = "";

var findPrimes = function(limit) {
	var sieve = new Array();
	var i, j;
	//Iteratively mark the non primes multiples of each prime starting with 2
	for (i = 2; i <= limit; i++) {
		if (!sieve[i]) {
			out += i + ",";
			for (j = i << 1; j <= limit; j += i) {
				sieve[j] = true;
			}
		}
	}
	out = out.substring(0, out.length - 1);
};

findPrimes(100);

fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + " To: " + outfile);
