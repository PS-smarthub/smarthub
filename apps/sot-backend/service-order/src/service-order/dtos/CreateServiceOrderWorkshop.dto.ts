export class CreateServiceOrderWorkshopDto {
    montadora: string;
    project: string;
    isIntern: boolean
    model: string;
    chassis: string;
    fleet: string;
    vehicleLocation: string;
    keyLocation: string;
    serviceInformations?: string
    deliveryDate: Date;
}