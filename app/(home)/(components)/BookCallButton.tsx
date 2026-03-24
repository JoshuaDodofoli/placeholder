
const BookCallButton = () => {
    return (
        <div className="flex items-center justify-between gap-3 bg-white p-2">
            <div className="flex items-center mr-8 gap-3">
                <div className="size-17 bg-pink-400"></div>
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
    )
}

export default BookCallButton