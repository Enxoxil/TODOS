import {ITodoContainer} from "./ITodoContainer";
import React from "react";

export interface ITodo extends ITodoContainer {
    onEditHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onEditActivateHandler: () => void,
    onSubmitHandler: (e: React.FormEvent) => void,
    editMode: boolean,
    todoText: string,
}