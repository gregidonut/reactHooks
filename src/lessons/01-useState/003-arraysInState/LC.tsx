import React, { useState } from "react";

function LessonComponent(): React.JSX.Element {
    const [todos, setTodos] = useState<Array<string>>([]);
    const [newTodo, setNewTodo] = useState<string>("");

    function addTodo() {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addTodo();
                }}
            >
                <label htmlFor="todo">add new todo: </label>
                <input
                    type="text"
                    id="todo"
                    name="todo"
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type="submit">submit</button>
            </form>
            <ul>
                {todos.map(function (t: string, i: number) {
                    return <li key={i}>{t}</li>;
                })}
            </ul>
        </>
    );
}

export default LessonComponent;
