import { AppRoute } from "../routes";

export default function Link({ route }: { route: AppRoute }) {
    return (
        <a
            className={`bg-black text-white py-2 text-sm px-3 rounded-md hover:bg-white hover:text-black`}
            href={route.path}
        >
            {route.name}
        </a>
    );
}
