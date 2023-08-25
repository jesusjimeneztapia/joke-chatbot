import { Session, getServerSession } from 'next-auth'

export default async function WelcomeCard() {
  const { user } = (await getServerSession()) as Session

  return (
    <section className='w-full max-w-lg mx-auto bg-slate-950 py-3 px-4 rounded-md'>
      <h3 className='text-lg text-white font-medium'>
        Hola {user?.name}, bienvenido a Joke Chatbot!
      </h3>
      <p className='text-slate-400'>
        Soy un chatbot 🤖 que cuenta chistes, pero no tan buenos...
      </p>
    </section>
  )
}
