import Button from '../../../ui/Botton';
import Heading from '../../../ui/Heading';
import NumProject from '../../../ui/NumProject';
import Paragraph from '../../../ui/Paragraph';
import SliderImageRightToLeft from '../../../ui/SliderImageRightToLeft';
import Image from '../../../ui/Image';
//
import image1 from '../../../../image/project3/pizza1.png';
import image2 from '../../../../image/project3/pizza2.png';
import image3 from '../../../../image/project3/pizza3.png';
import image4 from '../../../../image/project3/pizza4.png';

function Project3() {
  return (
    <>
      <div className=" text-[#000000] ">
        <NumProject>3</NumProject>
        <Heading>Pizza menu</Heading>{' '}
        <div className="grid gap-0 ">
          <div className="overflow-hidden border-b-4 py-4 shadow-2xl max-sm:shadow-xl">
            <SliderImageRightToLeft>
              <Image src={image1} alt="pizza" />
              <Image src={image2} alt="pizza" />
              <Image src={image3} alt="pizza" />
              <Image src={image4} alt="pizza" />
            </SliderImageRightToLeft>
          </div>
          <div className="flex flex-col items-start justify-center  ">
            <Paragraph>
              Wepsite for Pizza menu users can select pizzas and make order and
              more...
            </Paragraph>
            <Button href="https://fast-pizza-eight.vercel.app/">
              View project
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project3;
