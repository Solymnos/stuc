import React from 'react'
import TopBar from '../components/TopBar'

function Classement() {
  return (
    <div id="Classement" className='h-screen snap-center flex flex-row'>
      <div className='p-5 flex flex-col w-full h-full justify-center items-center text-center'>
        <TopBar title='Classement'/>
        <div className='w-full flex flex-col flex-grow justify-center items-center text-center gap-8'>
          <p className='text-white font-bold text-6xl'>La compétition n'a pas encore commencée</p>
        </div>
      </div>
    </div>
  )
}

export default Classement