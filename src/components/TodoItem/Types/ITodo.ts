
import React from "react";
import { Todo } from "../../../models/Todo";

export interface ITodo extends Todo {
    onEditHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlurHandler: (e: React.FocusEvent<HTMLInputElement>) => void,
    onSubmitHandler: (e: React.FormEvent) => void,
    onRemoveHandler: () => void;
    onActivateEditHandler: () => void,
    onIsDoneHandler: () => void;
    editMode: boolean,
    todoText: string,
}