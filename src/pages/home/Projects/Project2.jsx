import Button from '../../../ui/Botton';
import Heading from '../../../ui/Heading';
import NumProject from '../../../ui/NumProject';
import Paragraph from '../../../ui/Paragraph';
import SliderImageLeftToRight from '../../../ui/SliderImageLeftToRight';
import Image from '../../../ui/image';

function Project2() {
  return (
    <>
      <div className="h-screen text-[#000000] ">
        <NumProject>2</NumProject>
        <Heading>worldwise</Heading>
        <div className="grid gap-0 ">
          <div className="overflow-hidden border-b-4 py-10 shadow-2xl">
            <SliderImageLeftToRight>
              <Image src="../../image/project2/world1.png" alt="" />
              <Image src="../../image/project2/world2.png" alt="" />
              <Image src="../../image/project2/world3.png" alt="" />
              {/* <Image src="../../image/project2/world4.png" alt="" /> */}
            </SliderImageLeftToRight>
          </div>
          <div className="flex flex-col items-start justify-center  ">
            <Paragraph>
              Wepsite for map, users can select any city they visited and
              more...
            </Paragraph>
            <Button>View project</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project2;
