import { MdMenu } from "react-icons/md";
import routes from "../routes";
import Link from "./Link";
import useModal from "../hooks/useModal";

export default function Header() {
    const modal = useModal();

    const openMenu = () => {
        modal.setContent({
            action: () => {},
            msg: (
                <div className="col gap-4">
                    {routes.map((r) => (
                        <a
                            key={r.name}
                            className="bg-green-600 rounded-lg text-white py-2 px-4 capitalize hover:bg-green-700"
                            href={r.path}
                        >
                            {r.name}
                        </a>
                    ))}
                </div>
            ),
        });
        modal.onOpen();
    };

    return (
        <header
            className={`flex items-center justify-between gap-1 fixed w-full top-0 h-[60px] bg-gradient-to-r from-sky-300 via-violet-400 to-cyan-300 px-4`}
        >
            <a href="/">
                <h2 className="text-4xl font-semibold font-righteous text-zinc-800">UX 7</h2>
            </a>
            <nav className={`hidden md:flex space-x-1 capitalize`}>
                {routes.map((r) => (
                    <Link key={r.name} route={r} />
                ))}
            </nav>
            <button onClick={openMenu} className="block md:hidden">
                <MdMenu size={24} />
            </button>
        </header>
    );
}
