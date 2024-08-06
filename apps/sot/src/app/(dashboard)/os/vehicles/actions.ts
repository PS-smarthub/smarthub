"use server"

import { verifySession } from "@/lib/session";

export async function fetchAllField(
    query: any | undefined,
) {
    const token = await verifySession();

    try {
        const response = await fetch(`http://localhost:3030/`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            method: "GET",
        });

        return await response.json();
    } catch (err) {
        console.error(err);
    }
}