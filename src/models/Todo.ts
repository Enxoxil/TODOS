
export class Todo {
  text: string;
  id: string;
  checked: boolean;
  edit: boolean;
  currentDate: number;
  constructor(enteredItem: string) {
      this.text = enteredItem;
      this.id = Math.random().toString();
      this.checked = false;
      this.edit = false;
      this.currentDate = Date.now();
  }
}
