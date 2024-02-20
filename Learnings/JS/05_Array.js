const age = 19;

if (age >= 21) {
    console.log("Eligible");
}

// Ternary Operator
(age > 18) ? (age >= 21 ? console.log("Allowed to drink"): console.log("Allowed to vote")) : (console.log("Stay home"));

// who are you why are you so smart in the ways of cs.

// Control statements 

for(let i = 0; i < 21; ++i) {
    console.log(i);
}

let num = 21;
while(num > 0) {
    console.log(num);
    --num;
}

do {
    console.log(num);
    num++;
}while(num < 21);

// Fibonacci

// bruteForce: Recursion
let fibo = (n) => {
    if (n < 2) return n;

    return fibo(n-1) + fibo(n-2);
}

console.log(fibo(10));

// Memoization
let fibo1 = (n) => {
    let solve = (n, dp) => {
        if (n < 2) return n;

        if (dp[n] != -1) return dp[n];
        return dp[n] = solve(n-1, dp) + solve(n-2, dp);
    }

    let dp = new Array(n+1);
    dp.fill(-1);
    // for(let i = 0; i <= n; ++i) {
    //     console.log(dp[i]);
    // }
    return solve(n, dp);
}

console.log(fibo1(10));

// Tabulation
let fibo2 = (n) => {
    if (n < 2) return n;
    let dp = new Array(n+1);
    dp[0] = 0, dp[1] = 1;
    for(let i = 2; i <= n; ++i) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];

}
console.log(fibo2(10));

// Tabulation: Space optimisation

let fibo3 = (n) => {
    if (n < 2) return n;
    let prev = 1, prev1 = 0;

    for(let i = 2; i <= n; ++i) {
        let temp = prev + prev1;
        prev1 = prev;
        prev = temp;
    }

    return prev;
}

console.log(fibo3(10));
