"use server";

import { verifySession } from "@/lib/session";
import { formSchema } from "@/schemas/CreateWorkshopOrderSchema";

const url = "http://localhost:3030";

export async function createNewWorkshopServiceOrder(formSchema: formSchema) {
  const token = await verifySession();

  try {
    const response = await fetch(`${url}/service-order/workshop`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify(formSchema),
    });

    if (!response.ok) {
      throw new Error(`Erro ao criar ordem, código ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function fetchAllField(
  query: any | undefined,
): Promise<string[] | undefined> {
  const token = await verifySession();

  try {
    const response = await fetch(`${url}/service-order${query}`, {
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
