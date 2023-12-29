import { motion } from 'framer-motion';
import Button from '../ui/Botton';
import pdf from '../../image/saidcv.pdf';
import { Helmet } from 'react-helmet';

import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { CiWarning } from 'react-icons/ci';
import { IoSendSharp } from 'react-icons/io5';
import Spinner from '../ui/Spinner';

function Contact() {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'saidcv';
    link.click();
  };
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function sendEmail(e) {
    setIsLoading(true);
    emailjs
      .sendForm(
        'service_ab8wh6n',
        'template_zl0nxaf',
        form.current,
        'vRG-L1-oKaucK4aFU',
      )
      .then(
        (result) => {
          setIsLoading(true);
          toast.success('messege sent successfully!');
          reset();
          console.log(result.message);
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          toast.error('somthing not good!');
        },
      );
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Said Magdy | Contact</title>
      </Helmet>
      <motion.div
        initial={{ x: '-100vw', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        exit={{ y: '-100vh', opacity: 0 }}
        className="flex h-screen flex-col items-center justify-center text-[#000] max-sm:block max-sm:h-[68vh]"
      >
        <div className="p-16 shadow-xl max-sm:border-0 max-sm:px-5 max-sm:shadow-none">
          <div className=" border-b-2 border-black pb-3 ">
            <div className="flex  items-center justify-between gap-60 max-md:gap-10 max-sm:gap-0 ">
              <span className="text-4xl  max-sm:text-3xl">Say hello</span>
              <Button onClick={downloadPDF}>Download cv</Button>
            </div>
          </div>
          {/* form */}
          <form
            className="grid grid-rows-2 gap-12 pt-16"
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
          >
            <div className="relative flex flex-col ">
              <input
                {...register('from_email', {
                  required: 'Please fill out this field.',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: 'Please provide a valid email address',
                  },
                })}
                type="email"
                name="from_email"
                id="email"
                className="focus:border-b-blac k peer h-12 w-full border-b-2 border-gray-300 bg-transparent py-6 text-black  placeholder-transparent  focus:border-b-black focus:outline-none"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute -top-3.5 left-0 text-sm text-black transition-all duration-0  peer-placeholder-shown:top-2  peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-400"
              >
                Your Email
              </label>
              <p className="flex items-center gap-1 pt-2 text-lg text-[#ff3636]">
                <span>
                  {errors?.user_email?.message ? <CiWarning /> : null}
                </span>
                {errors?.user_email?.message}
              </p>
            </div>

            <div className="relative flex flex-col">
              <input
                {...register('message', {
                  required: 'Please fill out this field.',
                })}
                id="message"
                name="message"
                type="text"
                className="peer h-12 w-full overflow-hidden border-b-2 border-gray-300 bg-transparent py-6 text-black placeholder-transparent   focus:border-b-black focus:outline-none "
                placeholder="Email"
              />
              <label
                htmlFor="message"
                className="peer-placeholder-shown:text-gray-440 absolute -top-3.5 left-0 text-sm text-black transition-all duration-0 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-400"
              >
                Message
              </label>
              <p className="flex items-center gap-1 pt-2 text-lg text-[#ff3636]">
                <span>{errors?.message?.message ? <CiWarning /> : null}</span>
                {errors?.message?.message}
              </p>
            </div>

            <div>
              <button
                className="flex items-center gap-2 rounded-br-2xl bg-black px-6 py-4 text-lg text-white"
                type="submit"
              >
                {!isLoading && <IoSendSharp />}
                {isLoading ? <Spinner /> : 'Send message'}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;
