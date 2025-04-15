import React, { useEffect, useState } from "react";

function LessonComponent(): React.JSX.Element {
    const [name, setName] = useState<string>(function (): string {
        return localStorage.getItem("name") || "";
    });
    useEffect(
        function (): void {
            console.log("running useEffect");
            localStorage.setItem("name", name);
        },
        [name],
    );
    return (
        <>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </>
    );
}

export default LessonComponent;
