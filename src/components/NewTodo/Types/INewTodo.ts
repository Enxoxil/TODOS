import React from "react";

export interface INewTodo {
    formSubmit: (e: React.FormEvent) => void,
    onKeyDownHandler: (e: React.KeyboardEvent) => void,
    inputValue: string,
    inputHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
}