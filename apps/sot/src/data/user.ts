import { verifySession } from "@/lib/session"
import { cache } from "react"

export const getUser = cache(async () => {
    try {
        const session = await verifySession();
        return session
    } catch (error) {
        console.log(error)
    }
})