'use client'

import { useChat } from 'ai/react'

export default function TextArea() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div className='relative w-full max-w-lg mx-auto pb-16 pt-5'>
      <section className='flex flex-col gap-3'>
        {messages.map(({ id, content, role }) => (
          <div
            className={`max-w-[calc(100%-24px)] bg-slate-800 p-3 rounded-lg ${
              role === 'user' ? 'ml-auto text-yellow-500' : 'text-white'
            }`}
            key={id}
          >
            <p>{content}</p>
          </div>
        ))}
      </section>
      <form
        className='fixed w-[calc(100vw-32px)] max-w-lg bottom-5'
        onSubmit={handleSubmit}
      >
        <input
          className='border text-sm rounded-full block w-full py-2.5 px-4 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 resize-none'
          name='content'
          value={input}
          placeholder='Chiste sobre chatbots'
          onChange={handleInputChange}
          required
        />
      </form>
    </div>
  )
}
