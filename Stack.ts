import IStack from './IStack';

class Stack<T> implements IStack<T> {

  private stack: T[];

  constructor() {

    this.stack = [];
  }

  public pop() {

    return this.stack.pop!()  
  }
  
  public push(item: T) {

    this.stack.push(item) 
  }

  public isEmpty() {

    if(this.stack.length === 0) 
    { return true;}

    else 
      return false;
  }

  public get top() {

    return this.stack[this.stack.length-1]
  }
}

export default Stack;