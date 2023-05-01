import { atom, useAtom } from "jotai";
import { ReactNode } from "react";

type ModalProps = {
    msg: ReactNode;
    action: Function;
};

const modalAtom = atom(false);
const modalContents = atom<ModalProps>({ msg: "Are You Sure ?", action: () => {} });

export default function useModal() {
    const [isOpen, setIsOpen] = useAtom(modalAtom);
    const [content, setContent] = useAtom(modalContents);

    return {
        isOpen,
        setIsOpen,
        onOpen: () => setIsOpen(true),
        onClose: () => setIsOpen(false),
        content,
        setContent,
    };
}
