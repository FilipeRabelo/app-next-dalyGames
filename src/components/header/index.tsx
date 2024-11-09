import Image from 'next/image';
import Link from 'next/link';
import logoImg from '../../../public/logo.svg';

import { LiaGamepadSolid } from 'react-icons/lia';
import { FaGithub } from 'react-icons/fa'


export function Header() {
  return (
    <header className="w-full h-24 bg-slate-200 text-black px-2">

      <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between">
        
        <nav className="flex justify-center items-center gap-4 font-semibold">
          <Link href='/'>
            <Image
              src={logoImg}
              alt='Logo Site DalyGames'
              quality={100}
              priority={true}
            />
          </Link>

          <Link href={'/'}>
            Games
          </Link>

          <Link href={'/profile'}>
            Perfil
          </Link>
        </nav>

        <div className="hidden sm:flex justify-center items-center gap-5">
          <Link href={'/profile'}>
            <LiaGamepadSolid size={40} color='#DC143C' />
          </Link>

          <Link href={'https://github.com/FilipeRabelo'} target="_blank">
            <FaGithub size={30} color='#DC143C' />
          </Link>
        </div>
      </div>

    </header>
  )
}