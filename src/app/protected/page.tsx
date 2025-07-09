import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import {redirect} from "next/navigation"
import LogoutButton from "@/components/ui/LogoutButton";

export default async function ProtectedPage() {
    const session = await getServerSession(authOptions)

    if(!session) {
        redirect("/auth/login")
    }

    console.log(session, "session")
    

    return (
        <div>
            <h1>Welcome {session?.user?.name}</h1>
            <p>This is Protected page.</p>
            <LogoutButton/>
        </div>
    )
}