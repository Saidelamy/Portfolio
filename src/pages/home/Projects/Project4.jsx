import NumProject from '../../../ui/NumProject';
import Button from '../../../ui/Botton';
import SliderImageLeftToRight from '../../../ui/SliderImageLeftToRight';
import Image from '../../../ui/Image';
import Heading from '../../../ui/Heading';
import Paragraph from '../../../ui/Paragraph';
//
import image1 from '../../../../image/project4/fun1.png';
import image2 from '../../../../image/project4/fun2.png';
import image3 from '../../../../image/project4/fun3.png';
import image4 from '../../../../image/project4/fun4.png';
import image5 from '../../../../image/project4/fun5.png';

function Projects3() {
  return (
    <>
      <div className="text-[#000000] ">
        <NumProject>4</NumProject>
        <Heading>fun moment</Heading>
        <div className="grid gap-0 ">
          <div className="overflow-hidden border-b-4 py-4 shadow-2xl max-sm:shadow-xl">
            <SliderImageLeftToRight>
              <Image src={image1} alt="fun" />
              <Image src={image2} alt="fun" />
              <Image src={image3} alt="fun" />
              <Image src={image4} alt="fun" />
              <Image src={image5} alt="fun" />
            </SliderImageLeftToRight>
          </div>
          <div className="flex flex-col items-start justify-center">
            <Paragraph>
              Wepsite to can users can show movies, stars and tv shows and see
              the details about every tobic and more...
            </Paragraph>
            <Button href="https://day3wa2tk.vercel.app/">View project</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects3;
