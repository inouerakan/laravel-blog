import Polaroid from './ui/Polaroid'
import Book from './ui/Book'
import Description from './ui/Description'

export default function BottomRight() {
    const base = import.meta.env.BASE_URL;

    return (
        <div className='section-containers w-[80svw] h-[75svh] absolute bottom-0 right-0'>
            <div className='absolute top-5 rotate-3'><Polaroid title={'井上和'} long={true} format={'jpg'} /></div>
            <div className='absolute bottom-20 left-60 -rotate-4'><Polaroid title={'インディゴ地平線'} format={'jpg'} /></div>
            <div className='absolute bottom-15 left-5 rotate-5'><Book bgColor={'#7BAFC4'} title={'Blade Views'} url={'https://medium.com/@rakanshaka3/proyek-laravel-blade-views-0a72c2b0dac2'} /></div>
            <div className='absolute top-10 left-95'><Description numColor={'#7BAFC4'} number={'7'} title={'Proyek apa ini?'} description={'template engine bawaan Laravel yang kuat dan sederhana, digunakan untuk merancang tampilan (view) HTML secara dinamis, rapi, dan efisien.'} numBottom={true} /></div>
            <div className='absolute bottom-15 right-20 rotate-4'><Polaroid title={'ハチミツ'} long={false} format={'jpg'} /></div>
            <div className='absolute top-0 right-30 -rotate-7'><Book bgColor={'#1A2F4A'} title={'Routes'} url={''} /></div>
            <div className='absolute bottom-35 right-72'><Description numColor={'#1A2F4A'} number={'8'} title={'Bagaimana mengatur URL?'} description={'Untuk mengarahkan URL yang akan digunakan dalam sebuah proyek laravel, kita mengaturnya menggunakan routes.'} numBottom={true} numRight={true} /></div>
        </div>
    )
}