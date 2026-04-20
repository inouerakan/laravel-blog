import Polaroid from './ui/Polaroid'
import Book from './ui/Book'
import Description from './ui/Description'

export default function TopRight() {
    const base = import.meta.env.BASE_URL;

    return (
        <div className='section-containers w-[80svw] h-[75svh] absolute top-0 right-0'>
            <div className='absolute top-16 rotate-4'><Polaroid title={'欅'} long={true} format={'jpg'} /></div>
            <div className='absolute top-15 left-90 -rotate-6'><Polaroid title={'Same numbers'} format={'png'} /></div>
            <div className='absolute bottom-10 left-110 -rotate-6'><Book bgColor={'#7C5C3A'} title={'Pengenalan'} url={'https://medium.com/@rakanshaka3/proyek-pengenalan-f47b983e5d2b'} /></div>
            <div className='absolute bottom-5 left-5'><Description numColor={'#7C5C3A'} number={'3'} title={'Proyek apa ini?'} description={'Projek yang saya jelaskan dalam seri Proyek Laravel ini merupakan proyek yang sudah saya kerjakan dan menjadi tugas dari mata pelajaran pemrograman web semenjak pertengahan semester 1 hingga saat ini di semester 2.'} numBottom={true} /></div>
            <div className='absolute bottom-15 right-80 scale-75'><Polaroid title={'歩道橋'} long={false} format={'jpg'} /></div>
            <div className='absolute bottom-0 right-25 rotate-5'><Book bgColor={'#6B3F72'} title={'Model & Database'} url={'https://medium.com/@rakanshaka3/proyek-laravel-model-database-migration-1dce0854934a'} /></div>
            <div className='absolute top-15 right-15'><Description numColor={'#6B3F72'} number={'4'} title={'Model & Database'} description={'Model adalah representasi dari tabel database dalam bentuk class PHP. Laravel menggunakan Eloquent ORM sebagai sistem model bawaannya.'} numBottom={false} numRight={true} /></div>
        </div>
    )
}