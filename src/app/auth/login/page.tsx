"use client";
import { LoginFormValues, loginSchema } from "@/schemas/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";

export default function LoginPage() {
    const {data: session} = useSession()

	const {register, handleSubmit, formState:{errors}} = useForm<LoginFormValues>({
		resolver: zodResolver(loginSchema)
	})
	const onSubmit = (data:LoginFormValues) => {
		console.log(data)
	}

    if(session) {
        redirect("/protected")
    }
	return (
		<div>
			<h1>Login</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input {...register("email")} placeholder="email"/>
				{errors.email && <p>{errors.email.message}</p>}

				<input {...register("password")} placeholder="password"/>
				{errors.password && <p>{errors.password.message}</p>}

				<button type="submit">Login</button>
			</form>

			<button onClick={() => signIn("github")}>Sign-in with github</button>
			
		</div>
	);
}
