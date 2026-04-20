export default function Polaroid({title, long, format}) {
    const base = import.meta.env.BASE_URL;
    const bookUrl = title.split(' ').join('').toLowerCase();
    const width = long ? 'w-75' : 'w-35';
    const aspect = long ? 'h-40' : 'aspect-square';

    return (
        <div className="bg-light flex flex-col pl-3 pr-3 pt-3 pb-2 rounded-xl shadow-sm items-center gap-1 font-japan">
            <div style={{backgroundImage: `url(${base}/images/${bookUrl}.${format})`}} className={`${aspect} ${width} bg-center bg-cover rounded-md`}></div>
            <p>{title}</p>
        </div>
    );
}