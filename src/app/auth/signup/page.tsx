"use client";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { AuthNavBar } from "@/components/ui/authNavbar";

const formSchema = z
	.object({
		email: z.string().email(),
		password: z.string(),
		confirmPassword: z.string(),
	})
	.refine(
		(data) => {
			return data.password === data.confirmPassword;
		},
		{
			message: "Passwords do not match",
			path: ["confirmPassword"],
		},
	);

export default function Signup() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}
	return (

			<main className="flex max-h-screen flex-col items-center justify-between p-24">
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="border-2 rounded-md border-black max-w-lg w-full flex flex-col gap-6"
					>
						<h1 className="font-semi-bold text-center">Create your account</h1>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input
												placeholder={`Enter ${field.name}`}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								);
							}}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input
												placeholder={`Enter ${field.name}`}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								);
							}}
						/>
						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => {
								return (
									<FormItem>
										<FormLabel>Confirm Password</FormLabel>
										<FormControl>
											<Input placeholder={`Reenter password`} {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								);
							}}
						/>
						<Button type="submit">Sign Up</Button>
						{/* <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
						Or
					</div> */}
						<div className="flex justify-center items-center">
							<Separator className="w-1/3" />
							<span>OR</span>
							<Separator className="w-1/3" />
						</div>
						<Link href={"/login"} className={buttonVariants({ variant: "outline" })}>
							Login to your existing account
						</Link>
					</form>
				</Form>
			</main>
	
	);
}
