
export class Todo {
  text: string;
  id: string;
  checked: boolean;
  currentDate: string;
  constructor(enteredItem: string) {
      this.text = enteredItem;
      this.id = Math.random().toString();
      this.checked = false;
      this.currentDate = new Date().toLocaleString().slice(0,-3);
  }
}
