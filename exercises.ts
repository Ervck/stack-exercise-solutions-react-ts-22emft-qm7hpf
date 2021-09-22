import Stack from './Stack';

export const countDownFrom = (n: number): string => {
  if (n === 0) {
    return n.toString();
  } else {
    return n + ',' + countDownFrom(n - 1);
  }
};

export const countDownFromStack = (n: number): string => {
  
  const callStack = new Stack<number>();
  let returnValue = null;
  while(n !== 0) {
    callStack.push(n);
    n = n - 1;
  }
  callStack.push(0); // base case input - first row, first column
  n = callStack.pop(); // remove base case input of 0 from stack
  returnValue = n.toString(); // base case output - first row, first column
  while(!callStack.isEmpty()) {
    n = callStack.pop(); // current input
    returnValue = n + "," + returnValue;
  }
  return returnValue;
  
};

export const factorial = (n: number): number => {
  
  if (n === 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
};

export const factorialFromStack = (n: number): number => {

    const callStack = new Stack<number>();
    let returnValue = null;
    while(n !== 1) {
      callStack.push(n);
      n = n-1;}

    callStack.push(1);
    n = callStack.pop();
    returnValue = n;
     while(!callStack.isEmpty()) {
      n = callStack.pop();
      returnValue = n*returnValue
    }

  return returnValue;
};

export const countUpTo = (n: number): string => {
  if(n === 0) { return "0"}
  else {return countUpTo(n-1) + "," + n.toString();}
  
};

export const countUpToFromStack = (n: number): string => {

  const callStack = new Stack<number>();
  let returnValue = null;
  while(n !== 0) {
   callStack.push(n);
   n = n - 1;
 }

 callStack.push(0); // base case input - first row, first column
 n = callStack.pop(); // remove base case input of 0 from stack
 returnValue = n.toString(); // base case output - first row, first column
  while(!callStack.isEmpty()) {
   n = callStack.pop(); // current input
   returnValue = countUpTo(n-1) + "," + n.toString();
 }

 return returnValue;
};

export const reverse = (s: string): string => {
  return 'foo';
};

export const reverseFromStack = (s: string): string => {
  return 'foo';
};

export const toBinaryString = (n: number): string => {
  return 'foo';
};

export const toBinaryStringFromStack = (n: number): string => {
  return 'foo';
};

export const copyStack = <T>(s: Stack<T>): Stack<T> => {
  return s;
};

export const copyStackFromStack = <T>(s: Stack<T>): Stack<T> => {
  return s;
}
