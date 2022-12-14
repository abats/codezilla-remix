import {json} from "@remix-run/node";
import {Outlet, useLoaderData} from "@remix-run/react";
import Search from "~/routes/joke/search";

export const loader = async () => {

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
            <Search />
            <Outlet />
            <hr/>
            <h1 className="text-3xl font-bold underline">
                Joke
            </h1>
            <p>{ joke.joke }</p>
        </div>
    );
}
