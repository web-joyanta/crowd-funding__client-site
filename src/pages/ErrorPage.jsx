import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    const is404 = error?.status === 404;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-100">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md">
                <h1 className="text-6xl font-bold text-indigo-500 m-0">
                    {is404 ? "404" : "Oops!"}
                </h1>
                <p className="text-xl text-slate-700 mt-2">
                    {is404
                        ? "Page Not Found"
                        : "Sorry, an unexpected error has occurred."
                    }
                </p>
                <p className="text-slate-500 italic mt-2">
                    <i>{error?.statusText || error?.message}</i>
                </p>
                <a
                    href="/"
                    className="mt-6 inline-block px-6 py-3 bg-indigo-500 text-white rounded-lg font-bold shadow transition hover:bg-indigo-600"
                >
                    Go Home
                </a>
            </div>
        </div>
    );
}