import { Card, CardBody, CardHeader , Image } from "@nextui-org/react";
import type { FeatureItem } from "~/types";

export default function NextCard({ title, description, image }: FeatureItem) {
  return (
    <>
      <Card className="py-10 hover:rotate-card  place-self-strech ">
        {/* <div className="flex align-items-center justify-center relative lg:h-[18vw] lg:w-[18vw] md:h-[22vw] md:w-[22vw] h-[30vw] w-[30vw]  overflow-hidden rounded-full mx-12"> */}
          
        {/* </div> */}
        <div className="h-10vh flex flex-col items-center justify-center px-3 py-2">
          <Image
              isBlurred
              loading="lazy"
              alt="Card background"
              className="object-cover rounded-4 rounded-full lg:h-[18vw] lg:w-[18vw] md:h-[22vw] md:w-[22vw] h-[30vw] w-[30vw]"  
              src={image}
              width={270}
          />
          <CardHeader className="text-primary text-center font-extrabold text-xl">{title}</CardHeader>
          <CardBody className="text-center text-offset text-sm">{description}</CardBody>
        </div>
      </Card>
    </>
  );
}
