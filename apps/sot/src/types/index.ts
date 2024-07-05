export type OptionMenu = {
  app_name: string;
  href: string;
  icon: React.ReactNode;
};

export type CreateWorkshopOrderDto = {
  automaker: string;
  project: string;
  isIntern: boolean;
  model: string;
  chassis: string;
  fleet: string;
  vehicleLocation: string;
  keyLocation: string;
  deliveryDate: Date;
};
