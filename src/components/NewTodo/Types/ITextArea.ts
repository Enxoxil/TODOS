import React from "react";

export interface ITextArea {
    onKeyDownHandler: (e: React.KeyboardEvent) => void,
    inputValue: string,
    inputEvent: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
}