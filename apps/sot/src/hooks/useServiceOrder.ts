import { api } from "@/lib/axios";
import { CreateWorkshopOrderDto } from "@/types";
import { useQuery } from "@tanstack/react-query";

const createWorkshopOrder = async (workshopOrder: CreateWorkshopOrderDto) => {
  try {
    const response = api.post("/service-order/workshop", {
      workshopOrder,
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

// const useServiceOrder = () => {

//     useQuery({
//         queryKey: [""],
//         queryFn: createWorkshopOrder
//     })

//     return { useQuery }
// }
