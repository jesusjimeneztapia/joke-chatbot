'use client'

import { useSession } from 'next-auth/react'
import GitHubSignIn from './GitHubSignIn'
import { Avatar } from './Avatar'
import SignOutButton from './SignOutButton'

export default function Header() {
  const { data, status } = useSession()

  return (
    <header className='py-4 bg-slate-950 border-b border-slate-400/50'>
      <div className='px-4 container flex justify-between items-center mx-auto'>
        <h1 className='text-4xl font-bold text-white'>
          <span className='text-rose-500'>J</span>C
        </h1>
        {status === 'unauthenticated' && <GitHubSignIn />}
        {status === 'authenticated' && (
          <div className='flex gap-3 items-center'>
            <Avatar image={data.user!.image!} />
            <SignOutButton />
          </div>
        )}
      </div>
    </header>
  )
}
