import Link from 'next/link';
import React from 'react';
import { TailwindSearch } from '../search/tailwind';

type typeProps = {
  children?: JSX.Element;
};

export default function Navbar({ children }: typeProps) {
  return (
    <>
      <div className='w-full'>
        <div className='w-full py-2 sm:py-6 text-center text-4xl font-bold'>
          AR x React Tester
        </div>
      </div>
    </>
  );
}
