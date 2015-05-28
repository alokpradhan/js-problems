/* The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143 ? */

var highest_prime = function(max) {
	var num = max;
	var x = 2;
	var prime = 0;
	while (x < num+1) {
		while( num % x == 0) {
				num = num/x;
				prime = x;
			};
		x++;	
		};
	return prime;
};

var solution = highest_prime(prompt("What is the number whose highest prime you need to know?"));
confirm(solution);
