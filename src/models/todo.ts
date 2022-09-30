
export class Todo {
  item: string;
  id: string;
  constructor(enteredItem: string) {
      this.item = enteredItem;
      this.id = Math.random().toString();
  }
}
