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

export interface Temperatures {
  id: number;
  date_time: string;
  room_temperature: number;
  temperature_1: number;
  temperature_2: number;
  container_id: number;
}
export interface Scheduling {
  allDay: boolean;
  title: string;
  duration?: string;
  date: string;
}
export interface SchedulingResponse {
  initial_date_time: string;
  ending_date_time: string;
  user_id?: string;
  container_id: number;
}
export interface Props {
  params: {
    id: number;
  };
}

export type AuthStore = {
  token: string;
  setToken: (access: string) => void;
};
