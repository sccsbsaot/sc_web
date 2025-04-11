import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { useState } from "react";

export default function App() {
  const mainModal = useDisclosure();
  const slot1Modal = useDisclosure();
  const slot2Modal = useDisclosure();
  const q1Modal = useDisclosure();
  const q2Modal = useDisclosure();
  const finalModal = useDisclosure();
  const handleSlot1Click = (e: any) => {
    e.stopPropagation();
    mainModal.onClose();
    setTimeout(() => {
      slot1Modal.onOpen();
    }, 100);
  };
  // TODO
  const handleSlot2Click = (e: any) => {
    e.stopPropagation();
    mainModal.onClose();
    setTimeout(() => {
      slot2Modal.onOpen();
    }, 100);
  };
  const handleFinalClick = (e: any) => {
    e.stopPropagation();
    mainModal.onClose();
    setTimeout(() => {
      finalModal.onOpen();
    }, 100);
  };
  const handleQ1Click = (e: any) => {
    e.stopPropagation();
    slot1Modal.onClose();
    setTimeout(() => {
      q1Modal.onOpen();
    }, 100);
  };

  const handleQ2Click = (e: any) => {
    e.stopPropagation();
    slot2Modal.onClose();
    setTimeout(() => {
      q2Modal.onOpen();
    }, 100);
  };


  return (
    <>
      <Button color="secondary" onPress={mainModal.onOpen}>
        View Slots
      </Button>

      {/* Main Modal */}
      <Modal
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isOpen={mainModal.isOpen}
        radius="lg"
        onOpenChange={mainModal.onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Which slot?</ModalHeader>
              <ModalBody>
                <div className="space-y-4">
                  <div
                    className="p-4 bg-[#292f46] rounded-lg hover:bg-[#353a52] cursor-not-allowed opacity-50"
                    /*onClick={handleSlot1Click}*/
                  >
                    <h4 className="font-semibold">Slot 1</h4>
                    <p>Morning Session: 10:00 AM - 11:30 AM</p>
                    <p className="text-red-500">Not Allowed</p>
                  </div>
                  <div
                    className="p-4 bg-[#292f46] rounded-lg hover:bg-[#353a52] cursor-not-allowed opacity-50"
                    /*onClick={handleSlot2Click}*/
                  >
                    <h4 className="font-semibold">Slot 2</h4>
                    <p>Afternoon Session: 12:30 PM - 2:00 PM</p>
                    <p className="text-red-500">Not Allowed</p>
                  </div>
                  <div
                    className="p-4 bg-[#292f46] rounded-lg hover:bg-[#353a52] cursor-not-allowed opacity-50"
                    /*onClick={handleFinalClick}*/
                  >
                    <h4 className="font-semibold">Final Slot</h4>
                    <p>Afternoon Session: 2:30 PM - 4:30 PM</p>
                    <p className="text-red-500">Not Allowed</p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Slot 1 Modal */}
      <Modal
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isOpen={slot1Modal.isOpen}
        radius="lg"
        onOpenChange={slot1Modal.onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Slot 1 Questions</ModalHeader>
              <ModalBody>
                <div className="space-y-4">
                  <div
                    className="p-4 bg-[#292f46] rounded-lg hover:bg-[#353a52] cursor-pointer transition-colors"
                    onClick={handleQ1Click}
                  >
                    <h3 className="font-semibold">Q1</h3>
                    <p>The UX Awakening</p>
                  </div>
                  <div
                    className="p-4 bg-[#292f46] rounded-lg hover:bg-[#353a52] cursor-pointer transition-colors"
                    onClick={handleQ2Click}
                  >
                    <h4 className="font-semibold">Q2</h4>
                    <p>The Campus Mystery Network</p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Back
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Slot 2 Modal */}
      <Modal
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isOpen={slot2Modal.isOpen}
        radius="lg"
        onOpenChange={slot2Modal.onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Slot 2 Questions</ModalHeader>
              <ModalBody>
                <div className="space-y-4">
                  <div
                    className="p-4 bg-[#292f46] rounded-lg hover:bg-[#353a52] cursor-not-allowed opacity-50"
                    onClick={handleQ1Click}
                  >
                    <h4 className="font-semibold">Q1</h4>
                    <p>"Drive Me There" — A Digital Showroom Experience</p>
                  </div>
                  <div
                    className="p-4 bg-[#292f46] rounded-lg hover:bg-[#353a52] cursor-pointer transition-colors"
                    onClick={handleQ2Click}
                  >
                    <h4 className="font-semibold">Q2</h4>
                    <p> Hand in Hand – Help is Just Around the Corner</p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Back
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        backdrop="opaque"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        isOpen={slot2Modal.isOpen}
        radius="lg"
        onOpenChange={slot2Modal.onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Slot 2 Questions</ModalHeader>
              <ModalBody>
                <div className="space-y-4">
                  <div
                    className="p-4 bg-[#292f46] rounded-lg hover:bg-[#353a52] cursor-pointer transition-colors"
                    onClick={handleQ1Click}
                  >
                    <h4 className="font-semibold">Q1</h4>
                    <p>"Drive Me There" — A Digital Showroom Experience</p>
                  </div>
                  <div
                    className="p-4 bg-[#292f46] rounded-lg hover:bg-[#353a52] cursor-pointer transition-colors"
                    onClick={handleQ2Click}
                  >
                    <h4 className="font-semibold">Q2</h4>
                    <p>Hand in Hand – Help is Just Around the Corner</p>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Back
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Q1 Modal */}
      <Modal
        backdrop="opaque"
        classNames={{
          body: "py-6 overflow-y-auto",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3] max-h-[85vh]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        scrollBehavior="inside"
        isOpen={q1Modal.isOpen}
        radius="lg"
        onOpenChange={q1Modal.onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">The UX Awakening</ModalHeader>
              <ModalBody>
                <div className="space-y-4 text-sm">
                  <p className="font-semibold">Your town has amazing things — tasty local food, hidden tourist spots, and interesting stories.
                    But most people don’t know about them.</p>

                  <p className="font-medium">The Problem:</p>
                  <p>The tourism board is calling on visionary designers to create intuitive, bold, and human-centered interfaces that put hometown pride on a global stage.
                  </p>

                  <p className="font-medium">Your Task:</p>
                  <p> Design a website or app that helps tourists and locals explore your town better.
                    It should show:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Local places to visit [Explore Page/Home page]</li>
                    <li>Itinerary Builder Page</li>
                    <li>Unique things about your town [Local Legends Page] etc..</li>
                  </ul>

                  <p className="font-medium">Goal:</p>
                  <p> Make it easy, fun, and attractive — something that makes people proud of their hometown and excited to explore more.</p>

                  <p className="font-medium text-purple-400">Extra Prize [BEST LOGO]:</p>
                  <p>Make a logo for your project - The best logo wins a bonus prize.</p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Back
                </Button>
                <Button color="primary" onPress={() => {
                  window.open('https://forms.gle/67jTzQbECshid13j6', '_blank');
                  onClose();
                }}>
                  Submit Answer
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Q2 Modal */}
      <Modal
        backdrop="opaque"
        classNames={{
          body: "py-6 overflow-y-auto",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3] max-h-[85vh]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        scrollBehavior="inside"
        isOpen={q2Modal.isOpen}
        radius="lg"
        onOpenChange={q2Modal.onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">The Campus Mystery Network</ModalHeader>
              <ModalBody>
                <div className="space-y-4 text-sm">
                  <p className="font-semibold">Students keep losing things on campus — phones, bags, wallets, and even ID cards.
                    They ask around or post in random WhatsApp groups, but it doesn’t always work.
                  </p>

                  <p className="font-medium">Your Task:</p>
                  <p>Design a simple and smart platform where students can:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Report lost or found items [Home Page]</li>
                    <li>Add photos or descriptions. [Explore Items Page]</li>
                    <li>Menu /User Dashboard / My Reports etc…</li>
                  </ul>

                  <p className="font-medium">Goal:</p>
                  <p> Help students find lost items quickly and easily — all in one place.</p>

                  <p className="font-medium text-purple-400">Extra Prize [BEST LOGO]:</p>
                  <p>Make a logo for your project - The best logo wins a bonus prize.</p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Back
                </Button>
                <Button color="primary" onPress={() => {
                  window.open('https://forms.gle/67jTzQbECshid13j6', '_blank');
                  onClose();
                }}>
                  Submit Answer
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {/* Final Question Modal */}
      <Modal
        backdrop="opaque"
        classNames={{
          body: "py-6 overflow-y-auto",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3] max-h-[85vh]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
        scrollBehavior="inside"
        isOpen={finalModal.isOpen}
        radius="lg"
        onOpenChange={finalModal.onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">The Hidden Heroes of Your Street</ModalHeader>
              <ModalBody>
                <div className="space-y-4 text-sm">
                  <p className="font-semibold">Every street has its unsung heroes — the local shopkeeper who remembers everyone's name, the security guard who keeps watch all night, or the elderly neighbor who waters everyone's plants.</p>

                  <p className="font-medium">Your Task:</p>
                  <p>Create a digital storytelling platform that:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Showcases stories of local heroes</li>
                    <li>Allows community members to nominate heroes</li>
                    <li>Shares the impact they make on daily life</li>
                  </ul>

                  <p className="font-medium">Goal:</p>
                  <p>Celebrate the everyday heroes who make our communities special and inspire others to recognize their contributions.</p>

                  <p className="font-medium text-purple-400">Extra Prize [BEST LOGO]:</p>
                  <p>Make a logo for your project - The best logo wins a bonus prize.</p>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Back
                </Button>
                <Button color="primary" onPress={() => {
                  window.open('https://forms.gle/b8kSArUxj76BQrYRA', '_blank');
                  onClose();
                }}>
                  Submit Answer
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
