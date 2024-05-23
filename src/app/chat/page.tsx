"use client";

import Chatbox from "@/components/ui/chat/chatbox";
import Contacts from "@/components/ui/contactsAndmessages/contacts";
import Detail from "@/components/ui/detail";

export default function Chat() {
	return (
		<div className="w-full h-screen flex items-center justify-center bg-gray-800">
			<div className="border-black border-4 rounded-lg  w-5/6 max-w-7xl h-5/6 p-2 flex bg-white/0 backdrop-blur-md">
				{/* <div className="w-full border-black border-2 rounded-xl basis-3/12">ashldfh</div>
			<div className="w-full border-black border-2 rounded-xl basis-6/12"></div>
			<div className="w-full border-black border-2 rounded-xl basis-3/12"></div> */}
				<Contacts />
				<Chatbox />
				{/* <Detail /> */}
			</div>
		</div>
	);
}
// [url('/bga.avif')]