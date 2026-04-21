import Navbar from './components/Navbar';
import Main from './components/Main';
import gsap from 'gsap';
import { useState } from 'react';
import { BsArrowsMove } from 'react-icons/bs';
import { Draggable, InertiaPlugin } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(Draggable, InertiaPlugin, useGSAP);

function App() {
  useGSAP(() => {
    const path = document.querySelector('.path-ref');
    const length = path.getTotalLength();
    const el = document.querySelector('#main-container');
    let firstDrag = true;

    gsap.to('#white-screen', {opacity: 0, delay: .25, duration: 1.5, ease: 'power2.inOut'})
    gsap.set('#main-container', {x: -(el.offsetWidth / 2 - window.innerWidth / 2), y: -(el.offsetHeight / 2 - window.innerHeight / 2)});
    gsap.set('.path-ref', {strokeDasharray: length, strokeDashoffset: length})
    gsap.set('.section-containers', {opacity: 0})
    const tl = gsap.timeline({ repeat: -1 });

    tl.to('.path-ref', { 
        strokeDashoffset: 0,
        duration: 7.5, 
        ease: 'none' 
    })
    .to('.path-ref', { 
        strokeDashoffset: -length,
        duration: 7.5, 
        ease: 'none' 
    });

    Draggable.create('#main-container', {
      bounds: 'body',
      onDragStart: () => {
        gsap.to('.instruction-text', {scale: 0.95});
        if (firstDrag) {
          firstDrag = false;
          gsap.to('.section-containers', {opacity: 1, delay: .5, ease: 'power1.inOut'});
        }
        },
      onDragEnd: () => {gsap.to('.instruction-text', {scale: 1})}
    });
  }, [])
  
  return (
    <div className='w-full h-svh lg:text-lg md:text-base text-xs overflow-hidden text-dark'>
      <div id='white-screen' className='w-full h-full fixed z-100 bg-light pointer-events-none'></div>
      <p className='instruction-text fixed z-10 bottom-10 left-1/2 -translate-x-1/2 pl-3 pr-3 pt-1 pb-1 rounded-2xl font-serif text-center text-dark-100 bg-light/20 backdrop-blur-lg shadow-sm outline-1 outline-light-100 flex justify-center items-center gap-2'><BsArrowsMove />Tarik & Pindah</p>
      {/* <Navbar /> */}
      <Main />
    </div>
  );
}

export default App;