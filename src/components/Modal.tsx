import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import useModal from "../hooks/useModal";
import { MdClose } from "react-icons/md";

type Props = {};

const nameKey = "mflux-name";
const dummyName = "Kosinski";

export default function Modal({}: Props) {
    const nameRef = useRef<HTMLInputElement | null>(null);
    const modal = useModal();

    const handleClose = () => {
        localStorage.setItem(nameKey, nameRef.current?.value?.slice(0, 12) ?? dummyName);
        modal.onClose();
    };

    return (
        <AnimatePresence key={"modal"}>
            {modal.isOpen ? (
                <section className={`fixed bg-slate-800/40 inset-0 col items-center justify-center`}>
                    <motion.main
                        initial={{ opacity: 0, translateY: "-100%" }}
                        whileInView={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: "-100%" }}
                        transition={{ duration: 0.36 }}
                        className="bg-white px-6 py-8 sm:rounded-md shadow-md flex flex-col gap-4 min-w-full sm:min-w-[440px] min-h-[100dvh] sm:min-h-[80vh] relative"
                    >
                        <h2 className="text-2xl font-semibold">
                            Welcome{" "}
                            <i className="font-black">
                                <input
                                    type="text"
                                    className="outline-none border-none p-2 max-w-[190px] w-fit overflow-hidden"
                                    placeholder={dummyName}
                                    defaultValue={localStorage.getItem(nameKey) ?? dummyName}
                                    ref={nameRef}
                                />
                            </i>
                        </h2>
                        <button
                            type="button"
                            onClick={handleClose}
                            className="close absolute right-3 top-3 text-rose-600 hover:text-rose-800/80"
                        >
                            <MdClose size={22} />
                        </button>

                        {modal.content.msg}
                    </motion.main>
                </section>
            ) : null}
        </AnimatePresence>
    );
}
