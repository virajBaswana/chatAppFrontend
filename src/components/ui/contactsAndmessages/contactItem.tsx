import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ContactItem = () => {
	return (
		<div className="flex max-w-full gap-2 p-2 border-blue-500 border-2 rounded-lg items-center justify-center">
			<Avatar>
				<AvatarImage src="/bg.jpg" />
				<AvatarFallback>CN</AvatarFallback>
			</Avatar>
			<div className="flex flex-col">
				<h2>John Doe</h2>
				<p className="line-clamp-1">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde consequatur eveniet ipsam
					voluptatum? Nemo beatae, ad modi cum omnis dicta consectetur, voluptatibus iure nam
					commodi quasi quibusdam quaerat unde. Ratione!
				</p>
			</div>
		</div>
	);
};

export default ContactItem;
