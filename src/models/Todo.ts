
export class Todo {
  text: string;
  id: string;
  isDone: boolean;
  constructor(enteredItem: string) {
      this.text = enteredItem;
      this.id = Math.random().toString();
      this.isDone = false;
  }
}
