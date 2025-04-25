import React, { useReducer } from "react";

function formReducer(state, action) {
    switch (action.type) {
        case "updateField":
            return { ...state, [action.field]: action.value };
        case "reset":
            return action.initialState;
        default:
            throw new Error("Unknown action type");
    }
}

function App() {
    const initialState = { name: "", email: "", password: "" };
    const [state, dispatch] = useReducer(formReducer, initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", state);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={state.name}
                    onChange={(e) =>
                        dispatch({
                            type: "updateField",
                            field: "name",
                            value: e.target.value,
                        })
                    }
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    value={state.email}
                    onChange={(e) =>
                        dispatch({
                            type: "updateField",
                            field: "email",
                            value: e.target.value,
                        })
                    }
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={state.password}
                    onChange={(e) =>
                        dispatch({
                            type: "updateField",
                            field: "password",
                            value: e.target.value,
                        })
                    }
                />
            </label>
            <br />
            <button type="submit">Submit</button>
            <button
                type="button"
                onClick={() => dispatch({ type: "reset", initialState })}
            >
                Reset
            </button>
        </form>
    );
}

export default App;
