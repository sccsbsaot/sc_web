import React, { useState } from "react";
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

function Hello({
	slot1APassword,
	slot1BPassword,
	slot2APassword,
	slot2BPassword,
	slotXPassword,
	slot1Alink,
	slot1Blink,
	slot2Alink,
	slot2Blink,
	slotXlink,
	slot1Aform,
	slot1Bform,
	slot2Aform,
	slot2Bform,
	slotXform,
}) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [selectedSlot, setSelectedSlot] = useState(""); // Store the selected slot
	const [isPasswordCorrect, setIsPasswordCorrect] = useState(false); // State to manage password correctness
	const [pptlink, setPptLink] = useState("");
	const [formlink, setFormLink] = useState("");

	const handleSubmit = () => {
		let correctPassword;

		switch (selectedSlot) {
			case "Slot-1 A":
				correctPassword = slot1APassword;
				setPptLink(slot1Alink);
				setFormLink(slot1Aform);
				break;
			case "Slot-1 B":
				correctPassword = slot1BPassword;
				setPptLink(slot1Blink);
				setFormLink(slot1Bform);
				break;
			case "Slot-2 A":
				correctPassword = slot2APassword;
				setPptLink(slot2Alink);
				setFormLink(slot2Aform);
				break;
			case "Slot-2 B":
				correctPassword = slot2BPassword;
				setPptLink(slot2Blink);
				setFormLink(slot2Bform);
				break;
			case "Slot-X":
				correctPassword = slotXPassword;
				setPptLink(slotXlink);
				setFormLink(slotXform);
				break;
			default:
				setErrorMessage("No slot selected.");
				return;
		}
		if (password === correctPassword) {
			// Password matched
			console.log(`Password matched for ${selectedSlot}`);
			setIsPasswordCorrect(true);
			setErrorMessage("");
		} else {
			setErrorMessage(`Incorrect password for ${selectedSlot}.`);
			setIsPasswordCorrect(false);
		}
	};

	const handleClose = () => {
        onClose();
        setIsPasswordCorrect(false);
        setPptLink("");
        setFormLink("");
		setPassword("");
    };

	return (
		<div id="events">
			<div className="max-w-6xl mx-auto">
				<Card className="py-10">
					<div className="h-10vh flex flex-col items-center justify-center px-3 py-2">
						<h1 className="mt-2 text-center font-extrabold text-primary text-xl">
							MOGOJASTRO 2.0
						</h1>
						<br />
						<p className="text-center text-lg mt-4">
							Make sure to enter in your respective slots!
						</p>
						<br />
						<div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3 lg:grid-cols-5 lg:gap-10 justify-items-center">
							<Button
								onClick={() => {
									onOpen();
									setSelectedSlot("Slot-1 A");
								}}
								className="md:w-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
							>
								Slot-1 A
							</Button>
							<Button
								onClick={() => {
									onOpen();
									setSelectedSlot("Slot-1 B");
								}}
								className="md:w-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
							>
								Slot-1 B
							</Button>
							<Button
								onClick={() => {
									onOpen();
									setSelectedSlot("Slot-2 A");
								}}
								className="md:w-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
							>
								Slot-2 A
							</Button>
							<Button
								onClick={() => {
									onOpen();
									setSelectedSlot("Slot-2 B");
								}}
								className="md:w-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
							>
								Slot-2 B
							</Button>
							<Button
								onClick={() => {
									onOpen();
									setSelectedSlot("Slot-X");
								}}
								className="md:w-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
							>
								Slot-X&nbsp;&nbsp;&nbsp;&nbsp;
							</Button>
						</div>
					</div>
				</Card>

				<Modal
					isOpen={isOpen}
					onClose={handleClose}
					placement="center"
					aria-labelledby="modal-title"
					css={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						overflowY: "auto", // Allows the content to scroll if it overflows the viewport
					}}
				>
					<ModalContent
						css={{
							maxWidth: "90vw",
							maxHeight: "80vh",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "center",
							margin: "auto", // Centers the modal
							position: "relative",
							top: "50%",
							transform: "translateY(-50%)",
						}}
					>
						<ModalHeader id="modal-title">{selectedSlot}</ModalHeader>
						<ModalBody className="max-w-md">
							{isPasswordCorrect ? (
								<div className="justify-items-center align-middle flex flex-col gap-5 pb-5">
									<a href={pptlink} target="_blank" rel="noreferrer">
										<Button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
											PPT 🖼️📊
										</Button>
									</a>
									<a href={formlink} target="_blank" rel="noreferrer">
										<Button className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
											Form 📨📫
										</Button>
									</a>
								</div>
							) : (
								<div className="justify-items-center align-middle flex flex-col gap-5 pb-5">
									<Input
										type="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										placeholder="Enter your password"
										onKeyDown={(e) => {
											if (e.key === "Enter") {
												handleSubmit();
											}
										}}
									/>
									<Button
										onClick={handleSubmit}
										color="primary"
										className="w-full"
									>
										Submit
									</Button>
								</div>
							)}

							{errorMessage && <p className="text-red-500">{errorMessage}</p>}
						</ModalBody>
					</ModalContent>
				</Modal>
			</div>
		</div>
	);
}

export default Hello;
