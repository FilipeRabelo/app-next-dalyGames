import Link from 'next/link';

import { LiaGamepadSolid } from 'react-icons/lia';
import { FaGithub } from 'react-icons/fa'



export function Footer() {
  return (
    <footer className="w-full bg-[#101026] py-6 mt-auto">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center">
        <p className="text-center text-white font-bold">
          Desenvolvido em Next.js | Tailwind
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto flex justify-center items-center gap-5 mt-2">
        <div className="justify-center items-center">
          <Link href={'/profile'}>
            <LiaGamepadSolid size={40} color='#DC143C' />
          </Link>
        </div>

        <div>
          <p className="text-center text-white font-bold">
            © {new Date().getFullYear()} | Filipe FullStack
          </p>
        </div>

        <div className="justify-center items-center">
          <Link href={'https://github.com/FilipeRabelo'} target="_blank">
            <FaGithub size={30} color='#DC143C' />
          </Link>
        </div>
      </div>
    </footer>
  );
}

// export function Footer() {
//   return (
//     <footer className="w-full h-24 bg-[#101026] mt-10 justify-center items-center">

//       <div className="max-w-screen-xl mx-auto flex justify-center items-center">
//         <p className="text-center text-white font-bold flex justify-center items-center">
//           Desenvolvido em Next.js | Tailwind
//         </p>
//       </div>

//       <div className="max-w-screen-xl mx-auto flex justify-center items-center gap-5 mt-2">

//         <div className="justify-center items-center">
//           <Link href={'/profile'}>
//             <LiaGamepadSolid size={40} color='#DC143C' />
//           </Link>
//         </div>

//         <div>
//           <p className="text-center text-white font-bold">
//             © {new Date().getFullYear()} | Filipe FullStack
//           </p>
//         </div>

//         <div className="justify-center items-center">
//           <Link href={'https://github.com/FilipeRabelo'} target="_blank">
//             <FaGithub size={30} color='#DC143C' />
//           </Link>
//         </div>

//       </div>
//     </footer>
//   )
// }