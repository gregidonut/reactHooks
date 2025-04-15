import React, { useEffect, useState } from "react";

function LessonComponent(): React.JSX.Element {
    type Data = {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    };

    const [data, setData] = useState<Data[] | null>(null);
    useEffect(function () {
        (async function () {
            const resp = await fetch(
                "https://jsonplaceholder.typicode.com/todos",
            );

            const d = (await resp.json()) as Data[];
            setData(d);
        })();
    }, []);
    return (
        <>
            <ul>
                {data?.map(function (v, i): React.JSX.Element {
                    return (
                        <li key={i}>
                            <article>
                                <header>
                                    <h4>{v.title}</h4>
                                </header>
                                <footer>
                                    <p>userID: {v.userId}</p>
                                </footer>
                            </article>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}

export default LessonComponent;
