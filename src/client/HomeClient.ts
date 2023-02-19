import Axios, { AxiosInstance } from "axios";
import {
  GetMedicineResponse,
  Medicine,
  MedicineDefault,
  PostMedicineRequest,
} from "../domain/Medicine";

export interface HomeClient {
  getAllMedicineList(): Promise<Medicine[] | undefined>;
  addMedicine(medicine: PostMedicineRequest): Promise<Medicine | undefined>;
}

export class HomeClientV1 implements HomeClient {
  private static instance: HomeClientV1;
  private axios: AxiosInstance;

  private constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  private static initAxios(): AxiosInstance {
    return Axios.create({
      baseURL: "http://100.111.188.78:8080/home",
      timeout: 3000,
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  public static getInstance(): HomeClientV1 {
    if (!HomeClientV1.instance) {
      HomeClientV1.instance = new HomeClientV1(HomeClientV1.initAxios());
    }

    return HomeClientV1.instance;
  }

  public async getAllMedicineList(): Promise<Medicine[] | undefined> {
    try {
      const { data } = await this.axios.get<GetMedicineResponse[]>(
        "/medicine/"
      );

      const resp = data.map((e) => new MedicineDefault({ ...e }));

      return resp;
    } catch (error) {
      if (Axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
      } else {
        console.log("unexpected error: ", error);
      }
    }
  }

  public async addMedicine(
    medicine: PostMedicineRequest
  ): Promise<Medicine | undefined> {
    try {
      console.log(medicine);

      const { data } = await this.axios.post<GetMedicineResponse>(
        "/medicine/",
        medicine
      );

      const resp = new MedicineDefault({ ...data });

      return resp;
    } catch (error) {
      if (Axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
      } else {
        console.log("unexpected error: ", error);
      }
    }
  }
}
