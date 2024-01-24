import React from 'react';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='md:h-[calc(100vh-284px)] fade-center'>
      <Carousel className="rounded-none shadow-lg">
      <div className="relative h-full w-full">
        <img
          src="https://tomhorgancarpenter.com/img/slider/1.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl opacity-[89%]"
            >
              Custom Homes
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-base md:text-xl"
            >
              <p>
                Elevate your lifestyle with our bespoke custom homes, meticulously designed to reflect your unique vision and built to exceed your expectations. Experience the epitome of luxury living with unparalleled craftsmanship and attention to detail.
              </p>
            </Typography>
            <div className="flex justify-center gap-2">
              <Link to="/contact">
                <Button size="lg" className='bg-[#b8b2a8] text-[#47494a]'>
                  <span className='hidden md:inline-block'>Request Quote</span>
                  <span className='md:hidden'>Quote</span>
                </Button>
              </Link>
              <Link to="/gallery">
                <Button size="lg" className='text-[#e5e5e5]' variant="text">
                  Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://tomhorgancarpenter.com/img/slider/2.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl opacity-[89%]"
            >
              Redesign Your Bathroom
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-base md:text-xl"
            >
              Tiles, Fixtures, Vanities, and More
              <p>
                Elevate your bathroom with our refined redesign services. From exquisite tiles to stylish fixtures and vanities, experience a touch of sophistication in every detail.
              </p>
            </Typography>
            <div className="flex gap-2">
              <Link to="/contact">
                <Button size="lg" className='bg-[#b8b2a8] text-[#47494a]'>
                  <span className='hidden md:inline-block'>Request Quote</span>
                  <span className='md:hidden'>Quote</span>
                </Button>
              </Link>
              <Link to="/gallery">
                <Button size="lg" className='text-[#e5e5e5]' variant="text">
                  Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://tomhorgancarpenter.com/img/slider/3.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl opacity-[89%]"
            >
              Custom Kitchens
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-base md:text-xl"
            >
              REMODELING, CABINETRY AND DESIGN
              <p>
              Revitalize your kitchen with our exceptional remodeling, cabinetry, and design services. Achieve a harmonious blend of sophistication and functionality, tailored to your distinctive style.
              </p>
            </Typography>
            <div className="flex gap-2">
              <Link to="/contact">
                <Button size="lg" className='bg-[#b8b2a8] text-[#47494a]'>
                  <span className='hidden md:inline-block'>Request Quote</span>
                  <span className='md:hidden'>Quote</span>
                </Button>
              </Link>
              <Link to="/gallery">
                <Button size="lg" className='text-[#e5e5e5]' variant="text">
                  Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://tomhorgancarpenter.com/img/slider/4.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl opacity-[89%]"
            >
              Windows & Siding
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 text-base md:text-xl"
            >
              Installation, Replacement, Renovation
              <p>
              Upgrade your home's aesthetics and energy efficiency with our top-notch windows and siding services. Whether it's installing new windows, replacing worn-out siding, or a complete renovation, we offer meticulous craftsmanship and quality materials. Elevate your curb appeal and enjoy enhanced insulation, making your home a stylish and comfortable haven.
              </p>
            </Typography>
            <div className="flex gap-2">
              <Link to="/contact">
                <Button size="lg" className='bg-[#b8b2a8] text-[#47494a]'>
                  <span className='hidden md:inline-block'>Request Quote</span>
                  <span className='md:hidden'>Quote</span>
                </Button>
              </Link>
              <Link to="/gallery">
                <Button size="lg" className='text-[#e5e5e5]' variant="text">
                  Gallery
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Carousel>


    </div>
  );
}

export default Home;
