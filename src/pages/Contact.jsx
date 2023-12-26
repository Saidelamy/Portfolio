import { motion } from 'framer-motion';
import {
  MdPhonelinkRing,
  MdAttachEmail,
  MdOutlinePhoneInTalk,
} from 'react-icons/md';
import Button from '../ui/Botton';
import ContactIcon from '../ui/ContactIcon';
import pdf from '../../image/saidcv.pdf';
import { Helmet } from 'react-helmet';

function Contact() {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = pdf;
    link.download = 'saidcv';
    link.click();
  };

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
        className="flex h-screen flex-col items-center justify-center text-[#000] max-sm:block"
      >
        <div className="border-l-2  border-black p-12 shadow-xl max-sm:border-0 max-sm:shadow-none">
          <div className="flex w-[100%] flex-col border-b-2 border-black pb-3 max-sm:w-full">
            <div className="flex items-center justify-between">
              <span className="text-4xl uppercase max-sm:text-2xl">
                say hello
              </span>
              <Button onClick={downloadPDF} className="max-sm:p">
                Download cv
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-3 max-sm:grid-cols-1 ">
            <div className="flex flex-col items-center p-12">
              <ContactIcon>
                <MdPhonelinkRing />
              </ContactIcon>
              <p className="py-4 uppercase ">whatsapp</p>
              <p className="">+20 106 035 0330</p>
            </div>
            <div className="flex flex-col items-center p-12">
              <ContactIcon>
                <MdOutlinePhoneInTalk />
              </ContactIcon>
              <p className="py-4 uppercase">let's talk</p>
              <p>+20 106 035 0330</p>
              <p>+20 155 328 6274</p>
            </div>
            <div className="flex flex-col items-center p-12">
              <ContactIcon>
                <MdAttachEmail />
              </ContactIcon>
              <p className="py-4 uppercase">E-Mail Me</p>
              <p>saidmagdypro@gmail.com</p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Contact;
