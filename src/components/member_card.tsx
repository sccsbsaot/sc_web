import { Avatar, Tooltip } from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, useDisclosure} from "@nextui-org/react";


interface MemberCardProps {
  key: number;
  username: string;
  img: string;
  type: string;
  url: string;
  pos: string;
}
export default function MemberCard({ key, username, img, type, pos }: MemberCardProps) {
    const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
    <div  className="m-4 flex flex-col items-center" onClick={() => onOpen()}>
      <Tooltip showArrow={true} color="foreground" content={username} >
        <Avatar
          key={key}
          isBordered
          showFallback
          size={type==="member" ? "lg" : undefined}
          src={img}
          name={username}
          alt={username}
          className={`text-large ${type==="member" ? "" : "sm:h-[10vw] sm:w-[10vw] h-[30vw] w-[30vw]"}`}
        />
      </Tooltip>
    </div>

<Modal backdrop='blur' placement="center" isOpen={isOpen} onClose={onClose}>
<ModalContent>
  {(onClose) => (
    <>
      <ModalHeader className="flex flex-col gap-1 items-center">{username}</ModalHeader>
      <ModalBody>
        <h2 className="text-center">{pos}</h2>
      </ModalBody>
    </>
  )}
</ModalContent>
</Modal>
</>
  );
}
