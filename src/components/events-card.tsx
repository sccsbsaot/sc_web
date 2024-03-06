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
import type { Event } from "~/types";

export default function EventsCard({ title, description, image }: Event) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div onClick={() => onOpen()}>
      <Card className="py-10">
        <div className="h-10vh flex flex-col items-center justify-center px-3 py-2">
          <Image
            isBlurred
            alt="Card background"
            className="rounded-4 object-cover"
            src={image}
            width={700} 
            height={300} 
          />
          <h1 className="mt-2 text-center font-extrabold text-primary text-xl">
            {title}
          </h1>
          <CardBody className="text-center text-offset text-sm">
            {description}
          </CardBody>
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
