import Polaroid from './ui/Polaroid'
import Book from './ui/Book'
import Description from './ui/Description'

export default function TopRight() {
    const base = import.meta.env.BASE_URL;

    return (
        <div className='section-containers md:w-[80svw] w-svw md:h-[75svh] h-svh absolute top-0 right-0'>
            <div className='absolute md:bottom-[7%] md:left-[40%] left-[10%] bottom-[18%] -rotate-3'><Book bgColor={'#7C5C3A'} title={'Pengenalan'} url={'https://medium.com/@rakanshaka3/proyek-pengenalan-f47b983e5d2b'} /></div>
            <div className='absolute md:bottom-0 md:right-[9%] md:top-auto top-[7%] right-[11%] rotate-5'><Book bgColor={'#6B3F72'} title={'Model & Database'} url={'https://medium.com/@rakanshaka3/proyek-laravel-model-database-migration-1dce0854934a'} /></div>
            <div className='absolute md:top-[12%] md:left-0 top-[30%] left-[5%] rotate-4'><Polaroid title={'欅'} long={true} format={'webp'} /></div>
            <div className='absolute md:top-[11%] md:left-[33.5%] top-[42%] left-[37%] -rotate-6'><Polaroid title={'Same numbers'} format={'webp'} /></div>
            <div className='absolute md:bottom-[10%] md:right-[28%] md:top-auto top-[30%] right-[10%] scale-75'><Polaroid title={'歩道橋'} long={false} format={'webp'} /></div>
            <div className='absolute md:bottom-[3.5%] md:left-[1.5%] md:right-auto bottom-[5%] right-[10%]'><Description numColor={'#7C5C3A'} number={'3'} title={'Proyek apa ini?'} description={'Projek yang saya jelaskan dalam seri Proyek Laravel ini merupakan proyek yang sudah saya kerjakan dan menjadi tugas dari mata pelajaran pemrograman web semenjak pertengahan semester 1 hingga saat ini di semester 2.'} numBottom={true} /></div>
            <div className='absolute md:top-[11%] md:right-[5.5%] md:left-auto top-[5%] left-[10%]'><Description numColor={'#6B3F72'} number={'4'} title={'Model & Database'} description={'Model adalah representasi dari tabel database dalam bentuk class PHP. Laravel menggunakan Eloquent ORM sebagai sistem model bawaannya.'} numBottom={false} numRight={true} /></div>
        </div>
    )
}