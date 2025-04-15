import React from "react";

function LessonComponent(): React.JSX.Element {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        alert(`Name: ${name}\nEmail: ${email} `);
    }
    type FormDetails = {
        name: string;
        v: string;
        ceHandler: (v: string) => void;
    };
    const formDetails: FormDetails[] = [
        {
            name: "name",
            v: name,
            ceHandler: (v: string) => setName(v),
        },
        {
            v: email,
            name: "email",
            ceHandler: (v: string) => setEmail(v),
        },
    ];
    return (
        <>
            <form onSubmit={handleSubmit}>
                {formDetails.map(function (fd, i): React.ReactElement {
                    return (
                        <>
                            <label htmlFor={fd.name} key={i}>
                                {
                                    // capitalize label
                                    fd.name.charAt(0).toUpperCase() +
                                        fd.name.slice(1)
                                }
                                {": "}
                            </label>
                            <input
                                type="text"
                                id={fd.name}
                                name={fd.name}
                                value={fd.v}
                                onChange={(e) => fd.ceHandler(e.target.value)}
                                key={i}
                            />
                        </>
                    );
                })}
                <button type="submit">submit</button>
            </form>
        </>
    );
}

export default LessonComponent;
