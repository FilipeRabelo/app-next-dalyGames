
import { Container } from '@/components/container';
import { GameCard } from '@/components/GameCard';
import { Input } from '@/components/input';
import { GameProps } from '@/utils/types/game';

async function getData(title: string) {

  try {
    const decodeTitle = decodeURI(title);

    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`);
    return res.json();
  } catch (err) {
    throw new Error("Failed " + err)
  }

}



export default async function Search({
  params: { title }
}: {
  params: { title: string }
}) {

  // resultado esta dentro da variavel games
  const games: GameProps[] = await getData(title);  // passando a requisicao para a variavel

  return (
    <main className="min-h-screen w-full text-white">
      <Container>
        <Input />

        <h1 className='font-bold text-xl mt-8 mb-5'>
          Veja o que aconteceu na nossa base
        </h1>

        {!games && (
          <p>Esse Jogo não foi Encontrado!...</p>
        )}

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            games && games.map((item) => (
              <GameCard key={item.id} data={item} />
            ))
          }
        </section>



      </Container>
    </main>
  )

}