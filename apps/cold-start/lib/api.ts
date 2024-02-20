import axios from "axios";

export const handleSetPoint = async ({
  container_id,
  set_point_1,
  set_point_2,
}: {
  container_id: number;
  set_point_1: number;
  set_point_2: number;
}) => {
  const response = await axios.patch(
    `${process.env.API_URI}/containers/setpoint/${container_id}`,
    {
      set_point_1,
      set_point_2,
    }
  );
};

export const getContainerList = () => {
  
};
