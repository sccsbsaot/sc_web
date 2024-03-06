import {
  Card,
  CardBody,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
interface Event {
  title: string;
  description: string;
  images:  {url: string}[];
  image: string;
}

export default function EventsCard({
  title,
  description,
  images,
  image,
}: Event) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Card className="py-10">
        <div className="h-10vh flex flex-col items-center justify-center px-3 py-2">
          {image && <Image src={image} alt={title} isBlurred />}
          {!image && (
            <Carousel
              swipeable
              infiniteLoop
              showThumbs={false}
              emulateTouch
              autoPlay
              
            >
              {images.map((image) => (
                <div key={image.url}>
                  <Image src={image.url} alt={title} isBlurred />
                </div>
              ))}
            </Carousel>
          )}
          <div onClick={() => onOpen()}>
            <h1 className="mt-2 text-center font-extrabold text-primary text-xl">
              {title}
            </h1>
            <CardBody className="text-center text-offset text-sm">
              {description}
            </CardBody>
          </div>
        </div>
      </Card>

      <Modal
        backdrop="blur"
        placement="center"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="text-center font-extrabold text-primary text-xl">
                {title}
              </ModalHeader>
              <ModalBody>
                <div className="text-center text-offset text-sm">
                  {description}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
