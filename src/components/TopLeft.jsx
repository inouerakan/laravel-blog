import Polaroid from './ui/Polaroid'
import Book from './ui/Book'
import Description from './ui/Description'

export default function TopLeft() {
    const base = import.meta.env.BASE_URL;

    return (
        <div className='section-containers md:w-[80svw] w-svw md:h-[75svh] h-svh absolute top-0 left-0'>
            <div className='absolute md:-right-[3.5%] md:top-[10%] right-[20%] top-[28%] -rotate-6'><Book bgColor={'#5C7A6B'} title={'Framework Laravel'} url={'https://medium.com/@rakanshaka3/framework-laravel-894b3be80a17'} /></div>
            <div className='absolute md:left-[9%] md:top-[21%] md:bottom-auto left-[25%] bottom-[35%] rotate-8'><Book bgColor={'#C0392B'} title={'CRUD'} url={'https://medium.com/@rakanshaka3/project-laravel-b045d96ea2af'} /></div>
            <div className='absolute md:bottom-[4%] md:left-[29%] bottom-[10%] left-[10%] -rotate-4'><Polaroid title={'心に穴が空いた'} long={true} format={'png'} /></div>
            <div className='absolute md:right-[18%] md:top-[14%] md:left-auto left-[10%] top-[22%] rotate-3'><Polaroid title={'エキセントリック'} long={false} format={'jpg'} /></div>
            <div className='absolute md:right-[2.5%] md:bottom-[3%] bottom-[20%] -right-[15%]'><Description numColor={'#5C7A6B'} number={'2'} title={'Kenapa Laravel?'} description={'Laravel adalah salah satu framework PHP yang paling populer dan banyak digunakan dalam pengembangan aplikasi web saat ini. Laravel menawarkan banyak keunggulan bagi kita para pengembang.'} numBottom={true} /></div>
            <div className='absolute md:left-[27%] md:right-auto md:top-[14%] top-[3.5%] right-0'><Description numColor={'#C0392B'} number={'1'} title={'Apa itu CRUD?'} description={'CRUD adalah singkatan dari Create, Read, Update, dan Delete, yaitu operasi dasar dalam pengolahan data di database khususnya pada database yang relasional.'} numBottom={true} /></div>
        </div>
    )
}