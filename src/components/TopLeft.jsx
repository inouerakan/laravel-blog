import Polaroid from './ui/Polaroid'
import Book from './ui/Book'
import Description from './ui/Description'

export default function TopLeft() {
    const base = import.meta.env.BASE_URL;

    return (
        <div className='section-containers w-[80svw] h-[75svh] absolute top-0 left-0'>
            <div className='absolute bottom-8 left-80 -rotate-4'><Polaroid title={'心に穴が空いた'} long={true} format={'png'} /></div>
            <div className='absolute left-25 top-30 rotate-8'><Book bgColor={'#C0392B'} title={'CRUD'} url={'https://medium.com/@rakanshaka3/project-laravel-b045d96ea2af'} /></div>
            <div className='absolute left-76 top-20'><Description numColor={'#C0392B'} number={'1'} title={'Apa itu CRUD?'} description={'CRUD adalah singkatan dari Create, Read, Update, dan Delete, yaitu operasi dasar dalam pengolahan data di database khususnya pada database yang relasional.'} numBottom={true} /></div>
            <div className='absolute right-50 top-20 rotate-3'><Polaroid title={'エキセントリック'} long={false} format={'jpg'} /></div>
            <div className='absolute -right-10 top-15 -rotate-6'><Book bgColor={'#5C7A6B'} title={'Framework Laravel'} url={'https://medium.com/@rakanshaka3/framework-laravel-894b3be80a17'} /></div>
            <div className='absolute right-7 bottom-5'><Description numColor={'#5C7A6B'} number={'2'} title={'Kenapa Laravel?'} description={'Laravel adalah salah satu framework PHP yang paling populer dan banyak digunakan dalam pengembangan aplikasi web saat ini. Laravel menawarkan banyak keunggulan bagi kita para pengembang.'} numBottom={true} /></div>
        </div>
    )
}