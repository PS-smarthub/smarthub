import axios from "axios";

export const handleSetPoint = async ({
  container_id,
  set_point_1,
  set_point_2,
}: {
  container_id: number | undefined;
  set_point_1: number | undefined;
  set_point_2: number | undefined;
}) => {
  // const response = await axios.patch(
  //   `http://10.234.84.66:8000/api/v1/containers/setpoint/${container_id}`,
  //   {
  //     set_point_1,
  //     set_point_2,
  //   }
  // );
  console.log(set_point_1, set_point_2, container_id)
};
