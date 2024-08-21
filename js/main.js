window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    const hello = sayHello();
    const number = addNum();
    console.log(hello + number);
}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
export function sayHello() {
    return 'hello';
}

export function addNum() {
    var num = 1;
    var numTwo = 2;
    var add = num + numTwo;

    return add;
}
