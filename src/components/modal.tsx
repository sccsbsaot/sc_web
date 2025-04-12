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
                    className="p-4 bg-[#292f46] rounded-lg hover:bg-[#353a52] cursor-pointer transition-colors"
                    onClick={handleFinalClick}
                  >
                    <h4 className="font-semibold">Final Slot</h4>
                    <p>Afternoon Session: 2:30 PM - 4:30 PM</p>
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
              <ModalHeader className="flex flex-col gap-1">"Drive Me There" — A Digital Showroom Experience
              </ModalHeader>
              <ModalBody>
                <div className="space-y-4 text-sm">
                  <p className="font-semibold">Imagine walking into a car showroom — shiny vehicles, helpful staff, smooth experience.
                    Now imagine if that same feeling could happen on a screen.
                  </p>

                  <p className="font-medium">The Problem:</p>
                  <p>But here’s the problem:
                    Most car dealership websites today are boring, confusing, or filled with too much information.
                    Buyers feel lost, can’t compare easily, and often don’t get the wow factor they feel in a real showroom.

                  </p>

                  <p className="font-medium">Your Challenge:
                  </p>
                  <p> Design a modern, easy-to-use, and attractive web page for a car dealership that lets customers:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Landing page. [About showroom, brands etc…]</li>
                    <li>View car features, photos, and prices clearly [Menu]</li>
                    <li>Book a test drive or contact the dealer easily [Contact Us]</li>
                  </ul>

                  <p className="font-medium">Goal:</p>
                  <p> Make buying a car feel exciting and smooth — even before stepping into the showroom.
                    Think bold. Think clean. Think like someone buying their dream ride.
                  </p>

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
              <ModalHeader className="flex flex-col gap-1">Hand in Hand – Help is Just Around the Corner</ModalHeader>
              <ModalBody>
                <div className="space-y-4 text-sm">
                  <p className="font-semibold">Need help moving a couch? Looking for someone to teach your child math? Want a dog-walker in your area?
                    There are people nearby who can help — but finding them is harder than it should be.

                  </p>

                  <p className="font-medium">Your Task:</p>
                  <p> Design a simple and friendly webpage that connects people who need help with people who are ready to help, based on:

                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Landing page a basic walk through over the purpose of the project, about , contact , team and simple user manual</li>
                    <li>Type of help or need & types [Menu] (e.g., tutoring, pet care, errands, household tasks , etc)</li>
                    <li>Interested candidates.</li>
                  </ul>

                  <p className="font-medium">Goal:</p>
                  <p>  Make a platform where your community can come together — where asking for help feels normal, and offering help feels rewarding.Think minimal, trustworthy, and easy-to-use, even for someone who’s not very tech-savvy.
                    Bonus idea: Add filters for urgency, reviews, or skill level!
                  </p>

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
                  <p className="font-semibold">There are amazing people and shops in your area —
                    Like the aunty who makes tasty homemade pickles,
                    The uncle who fixes watches,
                    And the small bookstore with cool old books.
                    But here’s the problem:
                    Most people don’t know about them — because they aren’t online.</p>

                  <p className="font-medium">Your Task:</p>
                  <p> Design a website (from a customer’s point of view) that helps people:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>See what they sell or offer [Menu, if possible a different page altogether]
                    </li>
                    <li>Visit or contact them easily  [payment methods, checkout options]</li>
                    <li>Cart : [Add to cart functionality]</li>
                  </ul>

                  <p className="font-medium">Goal:</p>
                  <p>Support your local heroes by helping more people find them through a simple and helpful  design.</p>

                  <p className="font-medium">Creative Liberty: </p>
                  <p>Add the product catalogue according to your own choices.</p>

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
