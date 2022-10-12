
export class Todo {
  text: string;
  id: string;
  checked: boolean;
  edit: boolean;
  constructor(enteredItem: string) {
      this.text = enteredItem;
      this.id = Math.random().toString();
      this.checked = false;
      this.edit = false;
  }
}
