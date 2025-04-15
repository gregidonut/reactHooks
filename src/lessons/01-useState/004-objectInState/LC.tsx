import React, { useState } from "react";

function LessonComponent(): React.JSX.Element {
    type Profile = {
        name: string;
        age: number;
    };
    const [profile, setProfile] = useState<Profile>({ name: "", age: 0 });

    type InputFieldData = {
        name: string;
        v: string;
        ceHandler: (n: string, v: string) => void;
    };
    const inputFieldsData: InputFieldData[] = [
        {
            name: "name",
            v: profile.name,
            ceHandler: function (n: string, v: string): void {
                setProfile(function (prevProfile) {
                    console.log(JSON.stringify(prevProfile, null, 4));
                    return {
                        ...prevProfile,
                        [n]: v,
                    };
                });
            },
        },
        {
            name: "age",
            v: profile.age.toString(),
            ceHandler: function (n: string, v: string): void {
                setProfile(function (prevProfile) {
                    return {
                        ...prevProfile,
                        [n]: v,
                    };
                });
            },
        },
    ];

    return (
        <>
            <form>
                {inputFieldsData.map(function (ifd: InputFieldData, i: number) {
                    return (
                        <p key={i}>
                            <label htmlFor={ifd.name}>
                                {
                                    // capitalize label
                                    ifd.name.charAt(0).toUpperCase() +
                                        ifd.name.slice(1)
                                }
                                {": "}
                            </label>
                            <input
                                type="text"
                                id={ifd.name}
                                name={ifd.name}
                                value={ifd.v}
                                onChange={function (e) {
                                    ifd.ceHandler(
                                        e.target.name,
                                        e.target.value,
                                    );
                                }}
                            />
                        </p>
                    );
                })}
            </form>
            <p>Name: {profile.name}</p>
            <p>age: {profile.age}</p>
        </>
    );
}

export default LessonComponent;
