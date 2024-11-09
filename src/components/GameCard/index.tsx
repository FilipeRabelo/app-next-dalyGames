
import Link from "next/link";
import Image from "next/image";
import { BiRightArrowCircle } from 'react-icons/bi';
import { GamesProps } from '@/utils/types/game';

interface GameCardProps {
  data: GamesProps
}

export function GameCard({ data }: GameCardProps) {
  return (

    <Link href={`/game/${data.id}`}>

      <section className="w-full bg-[#0f0f0f] rounded-lg p-4 mb-5 ">
        <div className="relative w-full h-56 ">
          <Image
            className="rounded-lg object-cover transform transition-transform duration-500 hover:scale-105"
            src={data.image_url}
            alt={data.title}
            priority={true}
            quality={100}

            fill={true} // preenchimento total
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
          />
        </div>

        <div className="flex mt-4 justify-between items-center">
          <p className="text-sm font-bold px-2 text-white text-ellipsis truncate whitespace-nowrap overflow-hidden">
            {data.title}
          </p>
          <BiRightArrowCircle size={24} color="#FFF" />
        </div>

      </section>

    </Link>

  )
}