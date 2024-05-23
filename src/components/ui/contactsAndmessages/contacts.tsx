import React from "react";
import ContactItem from "./contactItem";
import { ScrollArea } from "@/components/ui/scroll-area";
import SearchContacts from "./searchContacts";

const Contacts = () => {
	return (
		<div className="flex flex-col basis-3/12 overflow-auto border-r-2">
      <SearchContacts />
			<ScrollArea className="h-full w-full p-2">
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
				<ContactItem />
			</ScrollArea>
		</div>
	);
};

export default Contacts;
