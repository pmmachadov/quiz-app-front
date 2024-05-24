import React from 'react';
import OctahedronComponent from '../Octahedron/Octahedron';

const Hero = () => {
  return (
    <section className="flex justify-between items-center p-8 w-[80%] mx-auto">
      <div className="flex-1">
        <HeaderText />
        <HeroDescription />
        <HeroButton />
      </div>
      <div className="w-[40%] h-96">
        <OctahedronComponent />
      </div>
    </section>
  );
};

const HeaderText = () => (
  <h1 className="text-7xl font-bold mb-4">Fun way to test your knowledge!</h1>
);

const HeroDescription = () => (
  <p className="font-medium text-2xl w-[30em] mb-8">
    With Brain Rush, tracking student progress and understanding has never been easier or more enjoyable!
  </p>
);

const HeroButton = () => (
  <button className="px-4 py-2 bg-zinc-500 text-white rounded-md">I am a Teacher!</button>
);

export default Hero;
