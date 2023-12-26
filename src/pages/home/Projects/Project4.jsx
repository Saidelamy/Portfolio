import NumProject from '../../../ui/NumProject';
import Button from '../../../ui/Botton';
import SliderImageLeftToRight from '../../../ui/SliderImageLeftToRight';
import Image from '../../../ui/Image';
import Heading from '../../../ui/Heading';
import Paragraph from '../../../ui/Paragraph';

function Projects3() {
  return (
    <>
      <div className="h-screen text-[#000000] ">
        <NumProject>4</NumProject>
        <Heading>fun moment</Heading>{' '}
        <div className="grid gap-0 ">
          <div className="overflow-hidden border-b-4 py-10 shadow-2xl">
            <SliderImageLeftToRight>
              <Image src="../image/project4/fun1.png" alt="" />
              <Image src="../../image/project4/fun2.png" alt="" />
              <Image src="../../image/project4/fun3.png" alt="" />
              <Image src="../../image/project4/fun4.png" alt="" />
              <Image src="../../image/project4/fun5.png" alt="" />
            </SliderImageLeftToRight>
          </div>
          <div className="flex flex-col items-start justify-center">
            <Paragraph>
              Wepsite to can users can show movies, stars and tv shows and see
              the details about every tobic and more...
            </Paragraph>
            <Button>View project</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects3;
