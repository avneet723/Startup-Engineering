#!/usr/bin/env node 
var fs = require('fs');
var outfile = "part2.txt";
var out = "";

var findPrimes = function(limit) {
	var i = 3, j, k;
	out +=  "2,";
	for (j = 2; j <= limit; )
	{
		for (k = 2; k <= i - 1; k++) {
			if (i%k == 0)
				break;
		}
		if (k == i)
		{
			out += i + ",";
			j++;
		}
		i++;
	}
	out = out.substring(0, out.length - 1);
};

findPrimes(100);

fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + " To: " + outfile);
