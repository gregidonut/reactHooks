import React, { useReducer, type FormEvent, type ChangeEvent } from "react";

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
    const initialState = {
        name: "",
        email: "",
        age: "",
        favoriteFood: "",
        password: "",
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log("~state:", JSON.stringify(state, null, 4));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {Object.keys(initialState).map(function (
                    k: string,
                    i: number,
                ): React.JSX.Element {
                    return (
                        <p key={i}>
                            <label htmlFor={k}>{k}</label>
                            <input
                                name={k}
                                id={k}
                                type={k === "password" ? "password" : "text"}
                                value={state[k] ?? ""}
                                onChange={function (
                                    e: ChangeEvent<HTMLInputElement>,
                                ) {
                                    dispatch({
                                        type: "updateField",
                                        field: k,
                                        value: e.target.value,
                                    });
                                }}
                            />
                        </p>
                    );
                })}
                <button type="submit">submit</button>
            </form>
        </>
    );
}

export default LessonComponent;
