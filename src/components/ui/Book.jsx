export default function Book({bgColor, title, url}) {
    const base = import.meta.env.BASE_URL;

    return (
        <div style={{backgroundColor: bgColor}} className={`lg:w-37.5 md:w-28.75 w-20 lg:h-56.25 md:h-43 h-30 lg:text-xl md:text-lg text-base flex md:gap-2 gap-1 md:p-2 p-1 text-light rounded-xl shadow-2xl break-all`} onClick={() => window.open(url)} ontouchstart={() => window.open(url)}>
            <div style={{backgroundColor: bgColor}} className={`w-1 h-full brightness-95 self-center`}></div>
            <p>{title}</p>
            <p style={{color: bgColor}} className="absolute md:bottom-2 bottom-1 md:left-5 left-2.5 md:text-sm text-xs brightness-85">Baca lebih lanjut</p>
        </div>
    )
}