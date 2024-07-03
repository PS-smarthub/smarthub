export class Vehicle {
  constructor(
    public id: number,
    public automaker: string,
    public type: string,
    public name: string,
    public manufacturer: string,
    public model: string,
    public description: string,
    public sn: string,
    public calibration_frequency_in_years: string,
    public inventory: string,
    public QMM_no_EIME: string,
    public storage_location: string,
  ) {}
}
