//https://sujeitoprogramador.com/next-api/?api=game&id=15

// jogo aleatório:
// https://sujeitoprogramador.com/next-api/?api=game_day

import { GamesProps } from "@/utils/types/game";
import { redirect } from "next/navigation";
import { Container } from "@/components/container";
import { Label } from "./components/label";
import { GameCard } from "@/components/GameCard";
import Image from "next/image";
import { Metadata } from 'next'

interface PropsParams {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: PropsParams): Promise<Metadata> {

  try {
    const response: GamesProps = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${params.id}`, {
      next: { revalidate: 60 }
    })
      .then((res) => res.json())
      .catch(() => {
        return {
          title: 'Descubra Jogos incríveis para se divertir!' // caso de erro na api, retorna um texto genérico
        }
      })

    return{
      title: response.title,       // caso der tudo certo, texto personalizado
      description: `${response.description}`
    }

  } catch (err) {
    return {
      title: 'Descubra Jogos incríveis para se divertir!' // caso de erro na api, retorna um texto genérico
    }
  }
}

// detalhes do jogo
async function getData(id: string) {

  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, {
      next: { revalidate: 60 }
    });
    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data: " + err);
  }
}

// jogo aleatório
async function getGameSorted() {

  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, {
      cache: "no-store"
    });
    return res.json();

  } catch (err) {
    throw new Error("Failed to fetch data: " + err);
  }
}


export default async function Game({
  params: { id }                     // trazendo o parâmetro
}: {

  params: { id: string }           // tipando o parâmetro
}) {

  const data: GamesProps = await getData(id);     // chamando pelo lado do servidor
  const sortedGame: GamesProps = await getGameSorted();

  console.log(sortedGame)

  if (!data) {
    redirect('/');
  }

  return (
    <main className="w-full min-h-screen text-white">

      <div className="bg-black h-80 sm:h-96 w-full relative mt-5">
        <Image
          className="object-cover w-full h-80 sm:h-96 opacity-80"
          src={data.image_url}
          alt={data.title}
          priority={true}
          quality={100}
          fill={true} // preenchimento total
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
        />
      </div>

      <Container>
        <h1 className="font-bold text-xl my-4">{data.title}</h1>
        <p>{data.description}</p>

        <h2 className="font-bold text-lg mt-7 mb-2">Plataformas:</h2>
        <div className="flex gap-2 flex-wrap">
          {data.platforms.map((item) => (
            <Label
              key={item}
              name={item}
            />
          ))}
        </div>

        <h2 className="font-bold text-lg mt-7 mb-2">Categorias:</h2>
        <div className="flex gap-2 flex-wrap">
          {data.categories.map((item) => (
            <Label
              key={item}
              name={item}
            />
          ))}
        </div>

        <p className="mt-7 mb-2">
          <strong>Data de Lançamento: </strong>{data.release}
        </p>

        <h2 className="font-bold text-lg mt-7 mb-2">Jogo Recomendado:</h2>
        <div className="flex">
          <div className="flex-grow">
            <GameCard
              data={sortedGame}
            />
          </div>
        </div>

      </Container>

    </main>
  )
}