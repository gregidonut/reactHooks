import React from "react";

function LessonComponent(): React.JSX.Element {
    const [count, setCount] = React.useState(0);
    return (
        <>
            <p>{count}</p>
            <button
                onClick={function () {
                    setCount(count + 1);
                }}
            >
                click me
            </button>
        </>
    );
}

export default LessonComponent;
