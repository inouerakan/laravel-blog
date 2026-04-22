import Polaroid from './ui/Polaroid'
import Book from './ui/Book'
import Description from './ui/Description'

export default function BottomLeft() {
    const base = import.meta.env.BASE_URL;

    return (
        <div className='section-containers md:w-[80svw] w-svw md:h-[75svh] h-svh absolute bottom-0 left-0'>
            <div className='absolute md:bottom-[17%] md:left-[40.5%] md:top-auto md:right-auto top-[22%] right-[25%] -rotate-5'><Book bgColor={'#8B4040'} title={'Controller'} url={'https://medium.com/@rakanshaka3/proyek-laravel-controller-02443ffaca95'} /></div>
            <div className='absolute md:top-[25%] md:right-[29%] md:bottom-auto bottom-[12%] right-[15%] rotate-7'><Book bgColor={'#D4A843'} title={'REST API'} url={'https://medium.com/@rakanshaka3/proyek-laravel-rest-api-3138c06d79b3'} /></div>
            <div className='absolute md:bottom-[11%] md:left-[7%] md:right-auto bottom-[35%] right-[5%] rotate-3'><Polaroid title={'Linda Linda Linda'} long={true} format={'webp'} /></div>
            <div className='absolute md:-right-[8.5%] md:left-auto md:top-0 md:bottom-auto bottom-[40%] left-[7%] rotate-3'><Polaroid title={'Swing Girls'} long={true} format={'webp'} /></div>
            <div className='absolute md:top-[18%] md:right-[11%] md:left-auto top-[32%] left-[3%] scale-75'><Polaroid title={'6期生'} long={false} format={'webp'} /></div>
            <div className='absolute md:left-[7%] md:top-0 top-[3%] left-[5%]'><Description numColor={'#8B4040'} number={'5'} title={'Untuk apa Controller?'} description={'sebagai pusat kendali dalam pola arsitektur MVC yang menjembatani request pengguna (routing) dengan view (tampilan) atau model (data).'} numBottom={true} /></div>
            <div className='absolute md:bottom-[11%] md:-right-[9%] md:left-auto bottom-[10%] left-[5%]'><Description numColor={'#D4A843'} number={'6'} title={'Kenapa harus pakai API?'} description={'API bertindak sebagai perantara yang memungkinkan dua aplikasi atau sistem yang berbeda untuk saling berkomunikasi dan bertukar data.'} /></div>
        </div>
    )
}