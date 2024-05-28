'use client';
import { FaSun, FaMoon } from "react-icons/fa6";
//import { FiSun, FiMoon } from "react-icons/fi"
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return (

      <svg width="95" height="44" xmlns="http://www.w3.org/2000/svg">
        <rect width="85" height="36" x="5" y="4" fill="hsla(65, 89%, 36%, 0.02)" />
      </svg>

    )
    if (resolvedTheme === 'dark') {
        return (
          <>
          <span onClick={() => setTheme('light')} className="cursor-pointer flex flex-row items-center py-2 px-3 rounded-lg hover:bg-secondary hover:text-background text-secondary w-full">
            <FaSun className="flex flex-row space-x-3 items-center font-bold" />
            <span className="font-semibold text-lg flex pl-1">Mode</span>
          </span>
          </>
        )
      }
    
      if (resolvedTheme === 'light') {
        return (
          <span onClick={() => setTheme('dark')} className="cursor-pointer flex flex-row items-center py-2 px-3 rounded-lg hover:bg-secondary hover:text-foreground text-secondary w-full">
            <FaMoon className="flex flex-row space-x-3 items-center font-bold" /> 
            <span className="font-semibold text-lg flex pl-1">Mode</span>
          </span>
        )

      }
}