import React, { useRef, useEffect } from 'react';
import NavBar from '../../Home/NavBar/NavBar';
import Connect from '../../Home/Main/Connect';
import transitions from '../../Home/transitions';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();
  const firstnameRef = useRef(null);
  const lastnameRef = useRef(null);
  const emailRef = useRef(null);
  const MessageRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      !firstnameRef.current.value ||
      !lastnameRef.current.value ||
      !emailRef.current.value.includes('@') ||
      !MessageRef.current.value
    ) {
      toast.error('Please fill out all fields correctly.');
      return;
    }

    emailjs
      .sendForm('service_lkgwzem', 'template_e4hse8d', form.current, {
        publicKey: 'YrOhRfVlX9wAQicYi',
      })
      .then((result) => {
        toast.success('Email Successfully Sent');
        console.log('SUCCESS!');

        // Clear form fields after successful submission
        firstnameRef.current.value = '';
        lastnameRef.current.value = '';
        emailRef.current.value = '';
        MessageRef.current.value = '';
      })
      .catch((error) => {
        // Handle network errors separately
        toast.error('Failed to send message. Please try again later.');
        console.log('FAILED...', error.text);
      });
  };

  return (
    <>
      <Toaster position='top-center' reverseOrder={true} />
      <section className='overflow-hidden bg-[#040013] h-[74.625rem] md:h-[95.625rem]'>
        <NavBar />

        <div className='md:max-w-[43rem] max-w-[21.5rem] lg:max-w-[83rem] mx-auto pt-[7.75rem] md:pt-[10.75rem]'>
          <h2 className='text text-white/60 text-center  text-[1.5rem]  font-normal leading-normal tracking-[0.015rem] pb-[1.5rem] md:pb-[2.5rem]'>
            Contact me
          </h2>

          <p className='text-white/90 text-xs md:text-base lg:text-[1.25rem] font-medium text-center leading-normal md:leading-[2rem] tracking-[0.00625rem]'>
            Just to make things simple for you, I added this page so you can
            drop me an email
            <br className='hidden md:block' /> directly. I usually respond
            quickly so you’ll get a response for sure
          </p>
          <div className='pt-[4.75rem] md:pt-[5.75rem] md:pb-[6.35rem] lg:pb-[10.75rem] w-[20.5rem] md:w-[35.5rem] lg:w-[42.5rem] mx-auto'>
            <form className='space-y-[2.5rem]' ref={form} onSubmit={sendEmail}>
              <div className='flex justify-center'>
                <input
                  type='text'
                  ref={firstnameRef}
                  placeholder='First Name'
                  className='md:w-[35.5rem] w-[20.5rem] lg:w-[42.5rem] pl-5 text-white rounded-lg border-[1px] border-[#A57F98] h-[3.2rem] md:h-[4.2rem] form  bg-[#040013]'
                />
              </div>
              <div className='flex justify-center'>
                <input
                  type='text'
                  ref={lastnameRef}
                  placeholder='Last Name'
                  className='md:w-[35.5rem] w-[20.5rem] lg:w-[42.5rem] pl-5 text-white rounded-lg border-[1px] border-[#A57F98] h-[3.2rem] md:h-[4.2rem]  border-opacity-70 bg-[#040013]'
                />
              </div>
              <div className='flex justify-center'>
                <input
                  type='text'
                  ref={emailRef}
                  placeholder='Email'
                  className='md:w-[35.5rem] w-[20.5rem] lg:w-[42.5rem] pl-5 text-white rounded-lg h-[3.2rem] md:h-[4.2rem] border-[1px] border-[#A57F98] bg-[#040013]'
                />
              </div>
              <div className='flex justify-center'>
                <textarea
                  ref={MessageRef}
                  placeholder='Message'
                  className='md:w-[35.5rem] w-[20.5rem] lg:w-[42.5rem] p-5 text-white rounded-lg  h-[12.5rem] border-[1px] border-[#A57F98] bg-[#040013]'
                />
              </div>
              <div className='pb-20 md:pb-0'>
                <button
                  type='submit'
                  className='btn uppercase  text-white border-[1px] border-[#A57F98]'
                >
                  Send
                </button>
              </div>
            </form>
          </div>
          <Connect />
        </div>
      </section>
    </>
  );
};

export default transitions(Contact);
