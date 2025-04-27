import React from "react";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import type { AnyFieldApi } from "@tanstack/react-form";

function FieldInfo({ field }: { field: AnyFieldApi }) {
    return (
        <>
            {field.state.meta.isTouched && field.state.meta.errors.length ? (
                <em>
                    {field.state.meta.errors
                        .map((err: Error): string => err.message)
                        .join(",")}
                </em>
            ) : null}
            {field.state.meta.isValidating ? <em>"Validating..."</em> : null}
        </>
    );
}

const userSchema = z.object({
    age: z
        .number()
        .gte(13, "You must be 13 to make an account")
        .lte(60, "you too old"),
});

function LessonComponent(): React.JSX.Element {
    const form = useForm({
        defaultValues: {
            age: 0,
        },
        validators: {
            onChange: userSchema,
        },
    });
    return (
        <div>
            <form.Field
                name="age"
                children={(field) => (
                    <>
                        <label htmlFor={field.name}>Age</label>
                        <input
                            id={field.name}
                            name={field.name}
                            value={field.state.value ? field.state.value : 0}
                            onBlur={field.handleBlur}
                            onChange={(e) =>
                                field.handleChange(parseInt(e.target.value))
                            }
                        />

                        <FieldInfo field={field} />
                    </>
                )}
            />
        </div>
    );
}

export default LessonComponent;
