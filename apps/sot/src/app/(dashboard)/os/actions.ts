"use server"

import { verifySession } from "@/lib/session"
import { formSchema } from "@/schemas/CreateWorkshopOrderSchema"

export async function createNewWorkshopServiceOrder(formSchema: formSchema) {
    const token = await verifySession()
    console.log(token)
    try {
        const response = await fetch("http://localhost:3030/service-order/workshop", {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            method: 'POST',
            body: JSON.stringify(formSchema)
        })

        if (!response.ok) {
            throw new Error(`Erro ao criar ordem, código ${response.status}`)
        }
        
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
    }

}