'use client';

import { motion } from "motion/react";
import { Buttonvariants } from "./navbar/Anime";


interface ModalProps {
    onClose: () => void;
}

const Modal = ({ onClose }: ModalProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(5px)", transition: { duration: 0.3 } }}
            exit={{ opacity: 0, transition: { delay: 0.3 } }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <motion.div
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.3, delay: 0.3, type: "spring", bounce: 0.35 } }}
            initial={{ opacity: 0, scale: 0.8 }}
            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.3 } }}
            className="bg-paper w-xs aspect-video p-4 rounded-lg relative">
                <div className="absolute top-2 right-2 flex items-center justify-end">
                    <motion.button
                        onClick={onClose}
                        variants={Buttonvariants}
                        whileHover="hover"
                        whileTap="tap"
                        className="bg-white size-9 shadow-sm relative cursor-pointer rounded-full flex items-center justify-center">
                        <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                            <line x1="1" y1="1" x2="19" y2="19" strokeWidth="2" strokeLinecap="round" className="stroke-dark-grey" />
                            <line x1="19" y1="1" x2="1" y2="19" strokeWidth="2" strokeLinecap="round" className="stroke-dark-grey" />
                        </svg>
                    </motion.button>
                </div>
                <div className="flex items-center justify-center h-full">
                    <p className="text-dark-grey text-lg">This project is just a concenpt.</p>
                </div>
            </motion.div>
        </motion.div>

    );
};
export default Modal