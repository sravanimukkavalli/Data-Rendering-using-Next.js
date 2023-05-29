import Client from "./clientside";
import Server from "./serverside";

export default function Demo() {
    return (
    <div className="w-screen h-screen bg-white flex flex-col items-center">
        <h1 className="text-lime-950 text-3xl pt-3">
            Client-side and Server-side Rendering
        </h1>
        <div className="flex flex-row w-full h-full pt-10 justify-center">
            <div className="flex flex-col items-center w-3/6 h-3/6">
            <h1 className="text-xl text-red-950 font-serif font-light">Client-Side Rendering</h1>
            <Client />
            </div>
            <div className="flex flex-col items-center w-3/6 h-3/6">
            <h1 className="text-xl text-lime-950 font-serif font-medium">Server-side Rendering</h1>
            <Server />
            </div>
        </div>
    </div>
    )
}