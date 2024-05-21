export interface Container {
  id: number;
  device: string;
  set_point: number;
  in_validation: boolean;
}

export type ContainerResponse = {
  id: number;
  device: string;
  set_point: number;
  in_validation: boolean;
  temperatures: Temperatures[];
  scheduling_container: SchedulingResponse[];
};

export interface Temperatures {
  id: number;
  date_time: string;
  room_temperature: number;
  temperature_1: number;
  temperature_2: number;
  container_id: number;
}
export interface Scheduling {
  title: string;
  start: string;
  end: string;
  id: any;
}
export interface SchedulingResponse {
  id: number;
  initial_date_time: string;
  ending_date_time: string;
  user_id_position_1?: string;
  user_id_position_2?: string;
  user_name_1?: string;
  user_name_2?: string;
  container_id: number;
  position_1: boolean;
  position_2: boolean;
}

export interface SchedulingDTO {
  initial_date_time: string;
  ending_date_time: string;
  container_id: number;
  position_1?: boolean;
  position_2?: boolean;
}
export interface Props {
  params: {
    id: number;
  };
}

export interface DeleteSchedulingProps {
  id: number | string | undefined;
  token: string | undefined;
}

export interface CreateSchedulingProps {
  newSheduling: SchedulingDTO;
  token: string | undefined;
}
