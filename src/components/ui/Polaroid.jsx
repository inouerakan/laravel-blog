export default function Polaroid({title, long, format}) {
    const base = import.meta.env.BASE_URL;
    const bookUrl = title.split(' ').join('').toLowerCase();
    const width = long ? 'lg:w-75 md:w-[230px] w-[160px]' : 'lg:w-35 md:w-[107px] w-[75px]';
    const aspect = long ? 'lg:h-40 md:h-[120px] h-[85px]' : 'aspect-square';

    return (
        <div className="bg-light flex flex-col pl-3 pr-3 pt-3 pb-2 rounded-xl shadow-sm items-center gap-1 font-japan break-all">
            <div style={{backgroundImage: `url(${base}/images/${bookUrl}.${format})`}} className={`${aspect} ${width} bg-center bg-cover rounded-md`}></div>
            <p>{title}</p>
        </div>
    );
}