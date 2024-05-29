// import { DeleteSchedulingProps, CreateSchedulingProps } from "@/types";

// export const deleteScheduling = async (props: DeleteSchedulingProps) => {
//   return await api.delete(`/schedules/${props.id}`, {
//     headers: {
//       token: props.token,
//     },
//   });
// };

// export const getMySchedulings = async (token: string | undefined) => {
//   const response = await api.get("/schedules", {
//     headers: {
//       token: token,
//     },
//     params: { my_schedulings: true },
//   });

//   return response.data;
// };

// export const createNewScheduling = async (props: CreateSchedulingProps) => {
//   return await api.post(`/schedules`, props.newSheduling, {
//     headers: {
//       token: props.token,
//     },
//   });
// };

// export const alocateCar = async ({
//   position_1,
//   position_2,
//   scheduling_id,
//   token,
// }: {
//   position_1: boolean;
//   position_2: boolean;
//   scheduling_id: number | undefined;
//   token: string | undefined;
// }) => {
//   const response = await api.patch(
//     `/schedules/loan/${scheduling_id}/`,
//     {
//       position_1: position_1,
//       position_2: position_2,
//     },
//     {
//       headers: {
//         token: token,
//       },
//     },
//   );

//   return response.data;
// };

// export const updateSetpoint = async ({
//   set_point,
//   token,
//   container_id,
// }: {
//   set_point: number | undefined;
//   token: string | undefined;
//   container_id: number | undefined;
// }) => {
//   return await api.patch(
//     `/containers/setpoint/${container_id}`,
//     { set_point: set_point },
//     {
//       headers: {
//         token: token,
//       },
//     },
//   );
// };

// export const validation = async ({
//   container_id,
//   token,
//   in_validation,
// }: {
//   container_id: number | undefined;
//   token: string | undefined;
//   in_validation: boolean;
// }) => {
//   return await api.patch(
//     `/containers/validation/${container_id}`,
//     {
//       in_validation: in_validation,
//     },
//     {
//       headers: {
//         token: token,
//       },
//     },
//   );
// };
