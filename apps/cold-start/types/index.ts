export interface Container {
  id: number;
  device: string;
  set_point_1: number;
  set_point_2: number;
  temperatures: Temperatures[];
}

export type ContainerStore = {
  containerList: Container[];
  setContainer: (container: Container[]) => void;
};

export type ContainerResponse = {
  id: number;
  device: string;
  set_point_1: number;
  set_point_2: number;
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
  id: any
}
export interface SchedulingResponse {
  id: number;
  initial_date_time: string;
  ending_date_time: string;
  user_id?: string;
  user_name?: string;
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
