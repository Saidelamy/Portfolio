import Button from '../../../ui/Botton';
import Heading from '../../../ui/Heading';
import NumProject from '../../../ui/NumProject';
import Paragraph from '../../../ui/Paragraph';
import SliderImageRightToLeft from '../../../ui/SliderImageRightToLeft';
import Image from '../../../ui/Image';
//
import image1 from '../../../../image/project1/wild1.png';
import image2 from '../../../../image/project1/wild2.png';
import image3 from '../../../../image/project1/wild3.png';
import image4 from '../../../../image/project1/wild4.png';

function Project1() {
  return (
    <>
      <div className="text-[#000000] ">
        <NumProject>1</NumProject>
        <Heading>The wild oasis</Heading>
        <div className="grid gap-0">
          <div className="overflow-hidden border-b-4 py-10 shadow-2xl">
            <SliderImageRightToLeft>
              <Image src={image1} alt="wild1" />
              <Image src={image2} alt="wild2" />
              <Image src={image3} alt="wild3" />
              <Image src={image4} alt="wild4" />
            </SliderImageRightToLeft>
          </div>
          <div className="flex flex-col items-start justify-center  ">
            <Paragraph>
              Wepsite for hotel reseption, allow the reseptionist to book use
              guest, make booking, check in guests, check out guests and more...
            </Paragraph>
            <Button href="https://thewild-oasis-virid.vercel.app/">
              View project
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project1;
