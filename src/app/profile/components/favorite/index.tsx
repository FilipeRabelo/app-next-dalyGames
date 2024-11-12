"use client"

import { useState } from 'react';
import { FiEdit, FiX } from 'react-icons/fi';

export function FavoriteCard() {

  const [input, setInput] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [gameName, setGameName] = useState('');

  function handleButton() {

    setShowInput(!showInput);  // toda vez q clicar no button alterna o valor da variavel - true/ false - false/true

    if (input !== "") {
      setGameName(input);
    }

    setInput('');
  }

  return (
    <>
      {/* <p className='my-4 mx-auto flex items-center justify-center font-bold text-white'>Adicionar Jogo</p> */}
      <div className="w-full flex bg-[#0f0f0f] p-4 h-44 text-white rounded-lg justify-between flex-col">

        {showInput ? (           // se showInput tiver true mostra o input

          <div className='flex items-center justify-center gap-3'>
            <input
              type='text'
              className='w-full rounded-md h-8 px-2 text-black'

              value={input}
              onChange={(event) => setInput(event.target.value)}
            />

            <button onClick={handleButton}>
              <FiX size={24} color='#DC143C' />
            </button>
          </div>

        ) : (                   // se tiver false abre o button

          <button
            className='self-start hover:scale-110 duration-200 transition-all'
            onClick={handleButton}
          >
            <FiEdit size={24} color='#DC143C' />
          </button>

        )}

        {gameName && (    // se tiver alguma coisa digitada no input
          <div>
            <span className='text-white font-bold'>Jogo Favorito: </span>
            <p className='text-white font-bold'>{gameName}</p>
          </div>
        )}

        {!gameName && (
          <p className='font-bold text-white'>Adicionar Jogo</p>
        )}

      </div>
    </>
  )
}


