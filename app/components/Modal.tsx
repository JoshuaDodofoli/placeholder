interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}
const Modal = ({ isOpen, onClose }: ModalProps) => {
    return (

        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium">Modal</h2>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>

    );
};
export default Modal