'use client';
import React, { useState } from 'react';

const images = [
  { src: 'https://onfra.io/wp-content/uploads/2023/11/Portrait-pass1.png', category: 'one' },
  { src: 'https://onfra.io/wp-content/uploads/2023/11/Portrait-pass2.png', category: 'one' },
  { src: 'https://onfra.io/wp-content/uploads/2023/11/Portrait-pass4.png', category: 'one' },
  { src: 'https://onfra.io/wp-content/uploads/2023/11/Portrait-pass3.png', category: 'one' },
  { src: 'https://onfra.io/wp-content/uploads/2023/11/Portrait-pass5.png', category: 'one' },
  { src: 'https://onfra.io/wp-content/uploads/2023/11/landscape-pass1.png', category: 'two' },
  { src: 'https://onfra.io/wp-content/uploads/2023/11/landscape-pass2.png', category: 'two' },
  { src: 'https://onfra.io/wp-content/uploads/2023/11/landscape-pass3.png', category: 'two' },
  { src: 'https://onfra.io/wp-content/uploads/2023/11/square-pass.png', category: 'three' },
];

const FilterableGallery = () => {
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' ? images : images.filter(image => image.category === filter);

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-8">
        <button
          className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-full ${filter === 'one' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('one')}
        >
          Portrait
        </button>
        <button
          className={`px-4 py-2 rounded-full ${filter === 'two' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('two')}
        >
          Landscape
        </button>
        <button
          className={`px-4 py-2 rounded-full ${filter === 'three' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('three')}
        >
          Square
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img src={image.src} alt={`Pass template ${index + 1}`} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterableGallery;
