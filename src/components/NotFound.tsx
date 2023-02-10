type Props = {};

export default function NotFound({}: Props) {
    return (
        <div
            className={`${center} bg-gradient-to-br from-sky-800 via-indigo-400 to-emerald-800 min-h-screen w-full`}
        >
            <h2 className="text-7xl font-semibold text-center">
                404 <br />
                Not Found!
            </h2>
        </div>
    );
}

var center = `flex flex-col items-center justify-center gap-2`;
