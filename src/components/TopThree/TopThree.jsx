
import React from 'react';
import CylindeComponent from '../3dComponents/CylinderComponent';
import TorusComponent from '../3dComponents/TorusComponent';
import DodecahedronComponent from '../3dComponents/DodecahedronComponent';

const TopThree = () => {
  return (
    <article className="bg-white p-8 m-10 rounded-lg w-full h-auto ">
      <h2 className="text-3xl font-bold mb-4">Top 3</h2>
      <div className='flex gap-6'>
      <div id='player-1' className='flex flex-col'>
        <div className=' '> 
          <CylindeComponent></CylindeComponent>
          
        </div>
        <h2 className='text-3xl text-center font-bold '>
          Ali
        </h2>

      </div>
      <div id='player-2' className='flex flex-col'>
        <div> 
        <TorusComponent></TorusComponent>
        </div>
        <h2 className='mt-2 text-3xl text-center font-bold '>
          Pablo
        </h2>

      </div>
      <div id='player-3' className='flex flex-col'>
        <div> 
          <DodecahedronComponent></DodecahedronComponent>
        </div>
        <h2 className='text-3xl text-center font-bold '>
          Sasha
        </h2>

      </div>
      </div>
      
    </article>
  );
};

export default TopThree;
