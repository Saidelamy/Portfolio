import Button from '../../../ui/Botton';
import Heading from '../../../ui/Heading';
import NumProject from '../../../ui/NumProject';
import Paragraph from '../../../ui/Paragraph';
import SliderImageRightToLeft from '../../../ui/SliderImageRightToLeft';
import Image from '../../../ui/Image';

function Project3() {
  return (
    <>
      <div className="h-screen text-[#000000] ">
        <NumProject>3</NumProject>
        <Heading>Pizza menu</Heading>{' '}
        <div className="grid gap-0 ">
          <div className="overflow-hidden border-b-4 py-10 shadow-2xl">
            <SliderImageRightToLeft>
              <Image src="../../image/project3/pizza1.png" alt="" />
              <Image src="../../image/project3/pizza2.png" alt="" />
              <Image src="../../image/project3/pizza3.png" alt="" />
              <Image src="../../image/project3/pizza4.png" alt="" />
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
