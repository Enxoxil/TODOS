
export class Todo {
  text: string;
  id: string;
  constructor(enteredItem: string) {
      this.text = enteredItem;
      this.id = Math.random().toString();
  }
}
