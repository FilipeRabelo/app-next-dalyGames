import { Container } from "@/components/container"
import Image from 'next/image';
import userImg from '../../../public/user.png';
import { FaShareAlt } from 'react-icons/fa'
import { FavoriteCard } from './components/favorite'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meu perfil - Daley Games, sua plataforma de jogos",
  description: "Perfil Programador FullStack | Daley Games, sua plataforma de jogos"
}


export default function Profile() {
  return (
    <main className="w-full min-h-screen text-white">

      <Container>

        <section
          className="mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row"
        >
          <div className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal">
            <Image
              src={userImg}
              alt="image perfil usuário"
              className="rounded-full w-44 h-44 object-cover"
            />

            <h1 className="font-bold text-2xl">Programador FullStack</h1>
          </div>

          <div className="sm:absolute top-0 right-0 gap-3 flex items-center justify-center mt-2">
            <button className="bg-slate-200 px-3 py-2 rounded-lg text-black font-bold hover:scale-105 hover:text-[#DC143C] duration-200 transition-all">
              Configurações
            </button>

            <button className="bg-slate-200 px-3 py-2 rounded-lg hover:scale-110 duration-200 transition-all">
              <FaShareAlt size={24} color="#DC143C" />
            </button>
          </div>
        </section>

        <section className="flex flex-wrap gap-5 flex-col sm:flex-row">
          <div className="flex-grow flex-wrap">
            <FavoriteCard/>
          </div>

          <div className="flex-grow flex-wrap">
            <FavoriteCard/>
          </div>

          <div className="flex-grow flex-wrap">
            <FavoriteCard/>
          </div>        
        </section>

      </Container>

    </main>
  )
}