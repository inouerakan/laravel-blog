import Polaroid from './ui/Polaroid'
import Book from './ui/Book'
import Description from './ui/Description'

export default function BottomLeft() {
    const base = import.meta.env.BASE_URL;

    return (
        <div className='section-containers w-[80svw] h-[75svh] absolute bottom-0 left-0'>
            <div className='absolute bottom-15 left-20 rotate-3'><Polaroid title={'Linda Linda Linda'} long={true} format={'jpg'} /></div>
            <div className='absolute bottom-25 left-115 -rotate-5'><Book bgColor={'#8B4040'} title={'Controller'} url={'https://medium.com/@rakanshaka3/proyek-laravel-controller-02443ffaca95'} /></div>
            <div className='absolute left-20'><Description numColor={'#8B4040'} number={'5'} title={'Untuk apa Controller?'} description={'sebagai pusat kendali dalam pola arsitektur MVC yang menjembatani request pengguna (routing) dengan view (tampilan) atau model (data).'} numBottom={true} /></div>
            <div className='absolute -right-25 rotate-3'><Polaroid title={'Swing Girls'} long={true} format={'jpg'} /></div>
            <div className='absolute top-25 right-30 scale-75'><Polaroid title={'6期生'} long={false} format={'jpg'} /></div>
            <div className='absolute top-35 right-83 rotate-7'><Book bgColor={'#D4A843'} title={'REST API'} url={'https://medium.com/@rakanshaka3/proyek-laravel-rest-api-3138c06d79b3'} /></div>
            <div className='absolute bottom-15 -right-25'><Description numColor={'#D4A843'} number={'6'} title={'Kenapa harus pakai API?'} description={'API bertindak sebagai perantara yang memungkinkan dua aplikasi atau sistem yang berbeda untuk saling berkomunikasi dan bertukar data.'} /></div>
        </div>
    )
}