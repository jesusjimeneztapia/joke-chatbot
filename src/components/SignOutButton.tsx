'use client'

import { signOut } from 'next-auth/react'

export default function SignOutButton() {
  return (
    <button
      type='button'
      className='text-white bg-rose-500 hover:bg-rose-500/90 focus:ring-4 focus:outline-none focus:ring-rose-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center'
      onClick={() => signOut()}
    >
      Cerrar Sesión
    </button>
  )
}
