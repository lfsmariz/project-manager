export interface Medicine {
  getAnimal: () => string;
  getMedicine: () => string;
  getApplicationDate: () => Date;
  getNextApplication: () => Date;
}

export type GetMedicineResponse = {
  animal: string;
  medicineName: string;
  applicationDate: string;
  nextApplicationDate: string;
};

export type PostMedicineRequest = {
  animal: string;
  medicineName: string;
  applicationDate: string;
  nextApplicationDate: string;
};

export class MedicineDefault implements Medicine {
  private animal: string;
  private medicine: string;
  private applicationDate: Date;
  private nextApplicationDate: Date;

  public constructor(data: {
    animal: string;
    medicineName: string;
    applicationDate: string;
    nextApplicationDate: string;
  }) {
    this.animal = data.animal;
    this.medicine = data.medicineName;
    this.applicationDate = new Date(data.applicationDate);
    this.nextApplicationDate = new Date(data.nextApplicationDate);
  }
  public getAnimal(): string {
    return this.animal;
  }
  public getMedicine(): string {
    return this.medicine;
  }
  public getApplicationDate(): Date {
    return this.applicationDate;
  }
  public getNextApplication(): Date {
    return this.nextApplicationDate;
  }
}
