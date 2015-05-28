/* Multiples of 3 and 5*/

var sum = function (n) {
	var total = 0;
	for ( var i = 0; i < n; i++) {
		if ( i%3 === 0 || i%5 === 0) {
			total += i;
		};
	};
	return (total);
};

var tot = sum(prompt("What is the number to count upto?")); 
confirm(tot);