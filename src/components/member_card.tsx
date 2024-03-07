import { Avatar, Tooltip } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Image,
  AvatarIcon,
} from "@nextui-org/react";
import Github from "../assets/github_icon.svg";
import LinkedIn from "../assets/LinkedIn_icon.svg";
import user from "../assets/user.png";

interface MemberCardProps {
  key?: number;
  username: string;
  img: string;
  type: string;
  pos?: string;
  linkedIn?: string;
  gitHub?: string;
}
export default function MemberCard({
  key,
  username,
  img,
  type,
  pos,
  linkedIn,
  gitHub,
}: MemberCardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="m-4 flex flex-col items-center" onClick={() => onOpen()}>
        <Tooltip showArrow={true} color="foreground" content={username}>
          <Avatar
            key={key}
            isBordered
            showFallback
            size={type === "member" ? "lg" : undefined}
            src={img}
            name={username}
            alt={username}
            className={`text-large ${
              type === "member"
                ? ""
                : "h-[30vw] w-[30vw] sm:h-[10vw] sm:w-[10vw]"
            }`}
          />
        </Tooltip>
      </div>

      <Modal
        backdrop="blur"
        placement="center"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center gap-1">
                {username}
              </ModalHeader>
              <ModalBody>
                <div className="flex flex-col items-center justify-center text-center">
                  <Image
                    isBlurred
                    src={img}
                    loading="lazy"
                    fallbackSrc={user.src}
                    alt={username}
                    className="text-large mx-auto max-h-[50vh]"
                  />
                  <div className="h-2" />
                  {pos && <h2 className="text-center">{pos}</h2>}
                  <div className="flex gap-10 p-2">
                    {gitHub && 
                    <a href={gitHub} target="_blank">
                      <img
                        src={Github.src}
                        alt="Github"
                        width={50}
                        height={50}
                      />
                    </a>
                    }
                    {linkedIn &&
                    <a href={linkedIn} target="_blank">
                    <img
                      src={LinkedIn.src}
                      alt="LinkedIn"
                      width={50}
                      height={50}
                    />
                  </a>
                    }
                    
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
