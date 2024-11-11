//https://sujeitoprogramador.com/next-api/?api=game&id=15

import { GamesProps } from "@/utils/types/game";
import { redirect } from "next/navigation";
import Image from "next/image"
import { Container } from "@/components/container";


async function getData(id: string) {

  try {

    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`);
    return res.json();

  } catch (err) {
    throw new Error("Failed to fetch data: " + err);
  }

}


export default async function Game({
  params: { id }                     // trazendo o parametro
}: {
  params: { id: string }            // tipando o parametro
}) {

  const data: GamesProps = await getData(id);     // chamando pelo lado do servidor

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
        <h1 className="font-bold text-xl my-4">
          {data.title}
        </h1>
        <p>
          {data.description}
        </p>
      </Container>

    </main>
  )
}