export default function Book({bgColor, title, url}) {
    const base = import.meta.env.BASE_URL;

    return (
        <div style={{backgroundColor: bgColor}} className={`w-37.5 h-56.25 text-xl flex gap-2 p-2 text-light rounded-xl shadow-2xl`} onClick={() => window.open(url)}>
            <div style={{backgroundColor: bgColor}} className={`w-1 h-full brightness-95 self-center`}></div>
            <p>{title}</p>
            <p style={{color: bgColor}} className="absolute bottom-2 left-5 text-sm brightness-85">Baca lebih lanjut</p>
        </div>
    )
}