export interface Container {
  id: string;
  name: string;
  t1: number;
  t2: number;
  t: number;
}

export type ContainerStore = {
  containerList: Container[];
  setContainer: (container: Container) => void;
};

export interface Props {
  params: {
    id: string;
  };
}
