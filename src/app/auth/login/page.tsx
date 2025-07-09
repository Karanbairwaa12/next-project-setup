"use client";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function LoginPage() {
    const {data: session} = useSession()

    if(session) {
        redirect("/protected")
    }
	return (
		<div>
			<h1>Login</h1>
			<button onClick={() => signIn("github")}>Sign-in with github</button>
			
		</div>
	);
}
