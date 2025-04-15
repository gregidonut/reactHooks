import React, { useReducer, useState } from "react";

type Todo = {
    id: number;
    body: string;
    completed: boolean;
};

type AddAction = {
    type: "add";
    body: string;
};

type ToggleAction = {
    type: "toggle";
    id: number;
};

type DeleteAction = {
    type: "delete";
    id: number;
};

type Action = AddAction | ToggleAction | DeleteAction;

function reducer(state: Todo[], action: Action): Todo[] {
    switch (action.type) {
        case "add":
            return [
                ...state,
                {
                    id: Date.now(),
                    body: action.body,
                    completed: false,
                },
            ];
        case "toggle":
            return state.map((todo) =>
                todo.id === action.id
                    ? { ...todo, completed: !todo.completed }
                    : todo,
            );
        case "delete":
            return state.filter((todo) => todo.id !== action.id);
        default:
            throw new Error("Unsupported action type");
    }
}

function LessonComponent(): React.JSX.Element {
    const [todos, dispatch] = useReducer(reducer, []);
    const [text, setText] = useState("");

    return (
        <>
            <input
                data-cy="input-field"
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                data-cy="add-button"
                onClick={() => dispatch({ type: "add", body: text })}
            >
                add
            </button>
            {todos && (
                <ul data-cy="todo-list">
                    {todos.map((t) => {
                        return (
                            <li
                                key={t.id}
                                style={{
                                    textDecoration: t.completed
                                        ? "line-through"
                                        : "none",
                                }}
                            >
                                {t.body}
                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: "toggle",
                                            id: t.id,
                                        })
                                    }
                                >
                                    toggle completed
                                </button>
                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: "delete",
                                            id: t.id,
                                        })
                                    }
                                >
                                    delete
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </>
    );
}

export default LessonComponent;
