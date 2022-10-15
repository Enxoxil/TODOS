import {Todo} from "../../../models/Todo";

export interface ITodoContainer extends Todo {
    onRemoveHandler: () => void;
    onIsDoneHandler: () => void;
}