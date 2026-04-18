import { useState } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import gsap from 'gsap';
import { Draggable } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(Draggable, useGSAP);

function App() {
  useGSAP(() => {
    gsap.to('#white-screen', {opacity: 0, delay: .5, duration: 1.5, ease: 'power2.inOut'})
    gsap.set('#main-container', {x: -window.innerWidth / 2, y: -window.innerHeight / 2});
    Draggable.create('#main-container', {bounds: 'body'});
    Draggable.create('#navbar-container', {
      bounds: 'body',
      onDragStart: () => {gsap.to('#navbar-container', {scale: 1.1})},
      onDragEnd: () => {gsap.to('#navbar-container', {scale: 1})}
    });
  }, [])
  
  return (
    <div className='w-full h-svh text-xl overflow-hidden text-dark'>
      <div id='white-screen' className='w-full h-full fixed z-100 bg-light pointer-events-none'></div>
      <p className='w-full fixed z-10 bottom-10 text-center text-md text-dark-100'>Drag to Move</p>
      <Navbar />
      <Main />
    </div>
  );
}

export default App;