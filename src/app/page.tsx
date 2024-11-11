import Image from "next/image";
import Link from 'next/link';

import { Container } from "@/components/container";
import { GamesProps } from '@/utils/types/game';

import { BsArrowRightSquare } from 'react-icons/bs';
import { Input } from '@/components/input/index';
import { GameCard } from "@/components/GameCard";

async function getDalyGames() {
  try {
    const response = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, {
      next: { revalidate: 320 }
    });

    return response.json();

  } catch (err) {
    throw new Error('Failed to fetch data...' + err);
  }
}

async function getGamesData() {
  try {

    const response = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {
      next: { revalidate: 300 }
    })

    return response.json()

  } catch (error) {
    throw new Error('Failed to fetch' + error);
  }
}


export default async function Home() {

  const dalyGame: GamesProps = await getDalyGames();
  const data: GamesProps[] = await getGamesData();

  // console.log(dalyGame);

  return (
    <main className="w-full flex flex-col min-h-screen flex-grow">
    {/* <main className="w-full flex flex-col min-h-screen"> Ajustado */}
      <Container>

        <h1 className="text-center font-bold text-xl mt-8 mb-5">
          Separamos um jogo exclusivo para você
        </h1>

        <Link href={`/game/${dalyGame.id}`}>

          <section className="w-full bg-black rounded-lg mb-7">

            <div className="w-full max-h-96 h-96 relative rounded-lg">

              <div className="absolute z-20 bottom-0 p-3 flex justify-center items-center gap-2">
                <p className="font-bold text-xl text-white">
                  {dalyGame.title}
                </p>
                <BsArrowRightSquare size={24} color="#FFF" />
              </div>

              <Image
                src={dalyGame.image_url}
                alt={dalyGame.title}
                priority={true}
                quality={100}

                fill={true} // preenchimento total
                className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
              />
            </div>

          </section>
        </Link>

        <Input/>    {/* component input */}

        <h2 className="text-lg font-bold mt-8 mb-5">
          Jogos para Conhecer!
        </h2>

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            data.map((item) => (
              <GameCard key={item.id} data={item}/>
            ))
          }
        </section>

      </Container>
    </main>
  );
}
