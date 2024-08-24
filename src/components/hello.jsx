import React, { useState } from 'react';
import {
  Card,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
  Button,
  Input,
} from "@nextui-org/react";

function MyComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Define passwords for each slot
  const slot1APassword = '1';
  const slot1BPassword = '2';
  const slot2APassword = '3';
  const slot2BPassword = '4';

  const [selectedSlot, setSelectedSlot] = useState(''); // Store the selected slot

  const handleSubmit = () => {
    let correctPassword;

    switch (selectedSlot) {
      case 'Slot-1 A':
        correctPassword = slot1APassword;
        break;
      case 'Slot-1 B':
        correctPassword = slot1BPassword;
        break;
      case 'Slot-2 A':
        correctPassword = slot2APassword;
        break;
      case 'Slot-2 B':
        correctPassword = slot2BPassword;
        break;
      default:
        setErrorMessage('No slot selected.');
        return;
    }

    if (password === correctPassword) {
      // Password matched
      console.log(`Password matched for ${selectedSlot}`);
      // Redirect or perform other actions
      window.location.href = 'your-redirect-url';
    } else {
      setErrorMessage(`Incorrect password for ${selectedSlot}.`);
    }
  };

  return (
    <div id="events">
      <div className="max-w-6xl mx-auto">
        <Card className="py-10">
          <div className="h-10vh flex flex-col items-center justify-center px-3 py-2">
            <h1 className="mt-2 text-center font-extrabold text-primary text-xl">MOGOJASTRO 2.0</h1>
            <br />
            <p className="text-center text-lg mt-4">Make sure to enter in your respective slots!</p>
            <br />
            <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-4 lg:gap-10">
              <button 
                onClick={() => {
                  onOpen();
                  setSelectedSlot('Slot-1 A');
                }}
                className="md:w-40  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
              >
                Slot-1 A
              </button>
              <button
                onClick={() => {
                  onOpen();
                  setSelectedSlot('Slot-1 B');
                }}
                className="md:w-40  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
              >
                Slot-1 B
              </button>
              <button
                onClick={() => {
                  onOpen();
                  setSelectedSlot('Slot-2 A');
                }}
                className="md:w-40  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
              >
                Slot-2 A
              </button>
              <button
                onClick={() => {
                  onOpen();
                  setSelectedSlot('Slot-2 B');
                }}
                className="md:w-40  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
              >
                Slot-2 B
              </button>
            </div>
          </div>
        </Card>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
          placement='center'
          aria-labelledby="modal-title"
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflowY: 'auto', // Allows the content to scroll if it overflows the viewport
          }}
        >
          <ModalContent
            css={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 'auto', // Centers the modal
              position: 'relative',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <ModalHeader id="modal-title">Enter Password</ModalHeader>
            <ModalBody className="max-w-md">
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSubmit();
                  }
                }}
              />
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <Button onClick={handleSubmit} color="primary">Submit</Button>
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

export default MyComponent;
