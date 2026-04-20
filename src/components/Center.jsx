import Polaroid from './ui/Polaroid'
import Book from './ui/Book'
import Description from './ui/Description'

export default function Center() {
    const base = import.meta.env.BASE_URL;

    return (
        <div className="w-[75svw] h-[75svh] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex">
            <div className="flex-1 flex flex-col gap-3 justify-center">
                <h1 className="text-8xl uppercase">Blog Laravel</h1>
                <p className="font-serif text-dark-100">Halaman ini adalah portal yang akan mengarahkan anda ke koleksi blog mengenai proyek laravel yang saya miliki.</p>
            </div>
            <div className="flex-1 relative">
                <div style={{backgroundImage: `url(${base}/images/Laravel-Logo.wine.svg)`}} className="w-70 h-70 absolute left-5 top-30 bg-cover bg-center"></div>
                <div className="absolute bottom-30 left-20 rotate-6 bg-light pl-3 pr-3 pt-1 pb-1 rounded-2xl flex gap-2 items-center shadow-sm">
                    <p>SMK Student</p>
                    <div style={{backgroundImage: `url(${base}/images/smkn4.png)`}} className="w-6 h-6 bg-cover bg-center"></div>
                </div>
                <div className="absolute bottom-25 right-17 -rotate-4"><Polaroid title={'呼んでいる'} long={false} format={'png'} /></div>
            </div>
        </div>
    );
}