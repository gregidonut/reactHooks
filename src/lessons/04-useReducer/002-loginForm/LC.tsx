import React, { useReducer } from "react";

type Form = { [fieldName: string]: string };

type UpdateFieldAction = {
    type: "updateField";
    field: string;
    value: string;
};

type ResetAction = {
    type: "reset";
    initialState: Form;
};
type Action = UpdateFieldAction | ResetAction;

function reducer(state: Form, action: Action): Form {
    switch (action.type) {
        case "updateField":
            return { ...state, [action.field]: action.value };
        case "reset":
            return action.initialState;
        default:
            throw new Error("Unsupported action type");
    }
}

function LessonComponent(): React.JSX.Element {
    const initialState = { name: "", email: "", password: "" };
    const [state, dispatch] = useReducer(reducer, initialState);
    return <></>;
}

export default LessonComponent;
