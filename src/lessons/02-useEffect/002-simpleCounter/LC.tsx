import React, { useEffect } from "react";

function LessonComponent(): React.JSX.Element {
    const [count, setCount] = React.useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        <>
            <p>{count}</p>
        </>
    );
}

export default LessonComponent;
