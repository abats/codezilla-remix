import { Form } from "@remix-run/react";

export default function Search() {
    return (
        <div>
            <p>Search</p>
            <h1 className="text-3xl font-bold underline">
                <Form method="post" action="/joke">
                    <input type="text" name="term" />
                </Form>
            </h1>
        </div>
    );
}
