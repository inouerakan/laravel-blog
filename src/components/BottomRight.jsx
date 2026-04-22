import Polaroid from './ui/Polaroid'
import Book from './ui/Book'
import Description from './ui/Description'

export default function BottomRight() {
    const base = import.meta.env.BASE_URL;

    return (
        <div className='section-containers md:w-[80svw] w-svw md:h-[75svh] h-svh absolute bottom-0 right-0'>
            <div className='absolute md:bottom-[10%] md:left-[2%] md:top-auto top-[5%] left-[10%] rotate-5'><Book bgColor={'#7BAFC4'} title={'Blade Views'} url={'https://medium.com/@rakanshaka3/proyek-laravel-blade-views-0a72c2b0dac2'} /></div>
            <div className='absolute md:top-0 md:right-[10.5%] md:bottom-auto right-[10%] bottom-[5%] -rotate-7'><Book bgColor={'#1A2F4A'} title={'Routes'} url={'https://medium.com/@rakanshaka3/proyek-laravel-routes-a36ff6b78bbc'} /></div>
            <div className='absolute md:top-[4%] md:bottom-auto md:left-0 md:right-auto right-[10%] top-[5%] rotate-3'><Polaroid title={'井上和'} long={true} format={'jpg'} /></div>
            <div className='absolute md:bottom-[15%] md:left-[21.5%] md:top-auto md:right-auto top-[27.5%] right-[9%] -rotate-4'><Polaroid title={'インディゴ地平線'} format={'jpg'} /></div>
            <div className='absolute md:bottom-[11%] md:right-[7%] md:left-auto left-[10%] bottom-[30%] rotate-4'><Polaroid title={'ハチミツ'} long={false} format={'jpg'} /></div>
            <div className='absolute md:top-[7%] md:left-[33%] top-[26%] left-[5%]'><Description numColor={'#7BAFC4'} number={'7'} title={'Proyek apa ini?'} description={'template engine bawaan Laravel yang kuat dan sederhana, digunakan untuk merancang tampilan (view) HTML secara dinamis, rapi, dan efisien.'} numBottom={true} /></div>
            <div className='absolute md:bottom-[24%] md:right-[25%] bottom-[24%] right-[5%]'><Description numColor={'#1A2F4A'} number={'8'} title={'Bagaimana mengatur URL?'} description={'Untuk mengarahkan URL yang akan digunakan dalam sebuah proyek laravel, kita mengaturnya menggunakan routes.'} numBottom={true} numRight={true} /></div>
        </div>
    )
}