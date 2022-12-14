import {json} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";

export function links() {
    return [
        {
            rel: "stylesheet",
            href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css",
        },
    ];
}

export const loader = async () => {
    // return json([
    //     { id: "1", name: "Pants" },
    //     { id: "2", name: "Jacket" },
    // ]);

    const res = await fetch("https://icanhazdadjoke.com/",{
        headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }});
    return json(await res.json());
};

export default function Joke() {
    const joke = useLoaderData();
    return (
        <div>
            <h1>Joke</h1>
            <p>{ joke.joke }</p>
        </div>
    );
}
