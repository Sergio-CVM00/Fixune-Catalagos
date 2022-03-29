import Link from 'next/link'
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'


export default function Footer_final (){
    return (
<footer class="text-gray-600 body-font ">
  <div class="container py-4 mt-8 mx-auto flex items-center sm:flex-row flex-col px-4 max-w-7xl sm:px-6">
    <Link href="/">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-orange-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Fixune</span>
      </a>
    </Link>
    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 Fixune —
      <a href="" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank"></a>
    </p>
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="https://es-la.facebook.com/people/Fixune-SL/100041475437669/" class="text-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">    
        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z"></path></svg>
      </a>
      <a href="mailto:fixune-contacto@gmail.com" class="text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 32 32">
          <path d="M 6 7.03125 C 5.691406 7.03125 5.402344 7.089844 5.125 7.175781 L 8.039063 9.03125 L 23.960938 9.03125 L 26.875 7.175781 C 26.597656 7.089844 26.308594 7.03125 26 7.03125 Z M 4.113281 7.71875 C 3.4375 8.269531 3 9.097656 3 10.03125 L 3 23.03125 C 3 24.683594 4.347656 26.03125 6 26.03125 L 26 26.03125 C 27.652344 26.03125 29 24.683594 29 23.03125 L 29 10.03125 C 29 9.097656 28.5625 8.269531 27.886719 7.71875 L 16 15.28125 Z M 6 12.445313 L 16 18.8125 L 26 12.445313 L 26 24.03125 L 6 24.03125 Z"></path>
        </svg>
      </a>
    </span>
  </div>
</footer>
    );
  };