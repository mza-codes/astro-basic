import { useState } from "react";

export default function Counter() {
    const [num, setNum] = useState(0);
    return (
        <button
            className="py-2 px-6 bg-rose-800 hover:bg-rose-600 text-white font-semibold rounded-lg"
            onClick={() => setNum((c) => c + 1)}
        >
            {num}
        </button>
    );
}
