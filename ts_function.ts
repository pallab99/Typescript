function add(a: number, b: number): number {
    return a + b;
}

let sum: number = add(2, 3);
console.log(sum);

function echo(message: string): string {
    return message.toUpperCase();
}

let ans: string = echo("pallab");

console.log(ans);

//Arrow Function

let mul: (a: number, b: number) => number =
    function (x: number, y: number): number {
        return x * y;
    }

let res: number = mul(2, 3);
console.log(res);

//Optional Parameters

let mul1: (a: number, b: number, c?: number) => number =
    function (x: number, y: number, z?: number): number {
        if (typeof z != "undefined")
            return x * y * z;
        return x * y;
    }

let xx: number = mul1(2, 3, 2);
console.log(xx)

let xy: number = mul1(2, 3);
console.log(xy)

//rst parameter

function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}

console.log(getTotal()); // 0
console.log(getTotal(10, 20)); // 30
console.log(getTotal(10, 20, 30)); // 60

function func(...args: string[]) {
    let ans: string = "";
    ans += args;
    return ans;
}

console.log(func("pallab"));
console.log(func("pallab", "majumdar"));




