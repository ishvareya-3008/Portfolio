import React from 'react'

export default function Contact() {
  return (
    <section className='flex flex-col bg-primary px-5 py-32 text-white' id="contact">
      <div className='flex flex-col items-center max-w-md mx-auto text-center'>
        <h1 className='text-4xl font-bold border-b-4 border-[#5490eb] mb-5 w-[200px]'>
          Contact Us
        </h1>
        <p className='pb-5'>
          If you want to discuss more in details, please contact me!
        </p>
        <p className='py-2'>
          <span className='font-bold'>Email:</span> ishvareyaishu@gmail.com
        </p>
        <p className='py-2'>
          <span className='font-bold'>Phone:</span> +91 7092577401
        </p>
      </div>
    </section>
  )
}
