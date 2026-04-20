'use client'
import Modal from "@/app/components/Modal";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

const BookCallButton = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <div onClick={() => setIsOpen(true)} className="flex items-center justify-between gap-3 cursor-pointer bg-white p-2">
                <div className="flex items-center mr-8 gap-3">
                    <div className="size-15 rounded-lg bg-black flex items-center justify-center">
                        <div className="size-8 bg-paper rounded-lg" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm text-dark-grey">Project discovery</span>
                        <p className="text-sm font-medium">Book a call</p>
                    </div>
                </div>
                <div className="size-10 bg-paper flex items-center justify-center rounded-full">
                    <svg width="20" height="12" viewBox="0 0 20 12" fill="none">
                        <line x1="0" y1="6" x2="18" y2="6" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        <line x1="12" y1="1" x2="19" y2="6" stroke="black" strokeWidth="2" strokeLinecap="round" />
                        <line x1="12" y1="11" x2="19" y2="6" stroke="black" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <Modal onClose={() => setIsOpen(false)} />
                )}
            </AnimatePresence>
        </>
    );
};

export default BookCallButton;