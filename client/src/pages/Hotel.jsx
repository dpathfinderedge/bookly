import React, { useState } from 'react'
import { Button, Footer, Hero, Navbar, Newsletter } from '../components';
import dummy from '../assets/hero.png';
import dummy2 from '../assets/avatar.png';

const Hotel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (i) => {
    setSlideIndex(i);
    setOpenModal(true);
  }

  const handleMove = (dir) => {
    let newSlideIndex;

    if (dir === 'l') {
      newSlideIndex = slideIndex === 0 ? 5 : slideIndex - 1;
    } else {
      newSlideIndex = slideIndex === 5 ? 1 : slideIndex + 1;
    }

    setSlideIndex(newSlideIndex);
  };

  const photos = [
    {src: dummy},
    {src: dummy2},
    {src: dummy},
    {src: dummy2},
    {src: dummy},
    {src: dummy2}
  ]

  return (
    <>
      <Navbar />
      <Hero type="list" />

        {openModal && <div className="fixed top-8 left-0 w-screen h-screen bg-black/30 z-[99] flex items-center">
          <span className="absolute top-8 right-8 text-3xl cursor-pointer rounded-full w-10 h-10 bg-gray-400 text-center" onClick={() => setOpenModal(false)}>X</span>
          <span className="absolute left-0 m-5 text-3xl cursor-pointer" onClick={() => handleMove('l')}>⬅</span>
          <span className="absolute right-0 m-5 text-3xl cursor-pointer" onClick={() => handleMove('r')}>➡</span>
          <div className="w-full h-full flex justify-center items-center">
            <img src={photos[slideIndex].src} alt="" className="w-[80%] h-[80vh]" />
          </div>
        </div>}
      
      <section className="w-full max-w-[1024px] mx-auto mt-7 md:px-0 px-4">
        <div className="flex flex-col space-y-2 relative">
          <div className="hidden md:block absolute top-2 right-0">
            <Button bg="bg-primary-blue" text="Reserve or book now" />
          </div>
          <h1 className="text-2xl font-bold">Grand Hotel</h1>
          <div className="text-xs flex items-center space-x-2">
            🏠
            <span>Elton St 125 New York</span>
          </div>
          <span className="text-primary-blue font-medium ">Excellent location - 500m from center</span>
          <span className="text-[#008009] font-medium">Book a stay over $114 at this property and a get a free airport taxi</span>
          <div className="grid md:grid-cols-3 grid-cols-2 gap-0.5 justify-between items-center w-full"> {/**flex flex-wrap justify-between */}
            {photos.map((photo, i) => (
              <div className="w-full h-52"> {/**w-[33%] */}
                <img key={i} src={photo.src} onClick={() => handleClick(i)} alt="/" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-4 space-y-4 md:space-y-0 pt-4">
            <div className="flex-[3]">
              <h1 className="font-bold text-lg">Stay in the heart of Krakow</h1>
              <p className="text-sm mt-1">
                Lorem ipsum dolor si amet consectitur adipiscing elit 
                Lorem ipsum dolor si amet consectitur adipiscing elit
                Lorem ipsum dolor si amet consectitur adipiscing elit
                Lorem ipsum dolor si amet consectitur adipiscing elit
                Lorem ipsum dolor si amet consectitur adipiscing elit
                Lorem ipsum dolor si amet consectitur adipiscing elit
                Lorem ipsum dolor si amet consectitur adipiscing elit
                Lorem ipsum dolor si amet consectitur adipiscing elit
                Lorem ipsum dolor si amet consectitur adipiscing elit
                Lorem ipsum dolor si amet consectitur adipiscing elit
              </p>
            </div>
            <div className="flex-[1] bg-[#ebf3ff] p-5 flex flex-col gap-5">
              <h1 className="text-lg text-gray-600 font-bold">Perfect for a 9-night stay!</h1>
              <span className="text-sm">Located in the real heart of Krakow, this property has an excellent location score of 9.8</span>
              <h2 className="font-light">
                <b>$945</b> (9 nights)
              </h2>
                <Button bg="bg-primary-blue" text="Reserve or book now" />
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer />
    </>
  )
}

export default Hotel