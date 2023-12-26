import Button from '../../../ui/Botton';
import Heading from '../../../ui/Heading';
import NumProject from '../../../ui/NumProject';
import Paragraph from '../../../ui/Paragraph';
import SliderImageRightToLeft from '../../../ui/SliderImageRightToLeft';
import Image from '../../../ui/Image';

function Project1() {
  return (
    <>
      <div className="h-screen text-[#000000] ">
        <NumProject>1</NumProject>
        <Heading>The wild oasis</Heading>
        <div className="grid gap-0">
          <div className="overflow-hidden border-b-4 py-10 shadow-2xl">
            <SliderImageRightToLeft>
              <Image src="../../image/project1/wild1.png" alt="" />
              <Image src="../../image/project1/wild2.png" alt="" />
              <Image src="../../image/project1/wild3.png" alt="" />
              <Image src="../../image/project1/wild4.png" alt="" />
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
