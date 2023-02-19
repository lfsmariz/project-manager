import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { PostMedicineRequest } from "../../domain/Medicine";
import { HomeClient, HomeClientV1 } from "../../client/HomeClient";

type Props = {
  setForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const MedicineForm = (props: Props) => {
  const [applicationDate, setApplicationDate] = useState<Date>(new Date());
  const [nextDate, setNextDate] = useState<Date>(new Date());
  const [name, setName] = useState<string>("");
  const [medicine, setMedicine] = useState<string>("");

  const { setForm } = props;

  const handleValueForm = (
    e: React.ChangeEvent<HTMLInputElement>,
    d: React.Dispatch<React.SetStateAction<string>>
  ) => {
    d(e.target.value);
  };

  const addMedicine = () => {
    const homeClient: HomeClient = HomeClientV1.getInstance();

    const req: PostMedicineRequest = {
      animal: name,
      medicineName: medicine,
      applicationDate: applicationDate.toISOString(),
      nextApplicationDate: nextDate.toISOString(),
    };

    homeClient.addMedicine(req).then(() => setForm(false));
  };

  return (
    <form className="form">
      <div className="field">
        <label className="label">Filhote</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Nome do Filhote"
            value={name}
            onChange={(e) => handleValueForm(e, setName)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Medicamento</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Nome do medicamento"
            value={medicine}
            onChange={(e) => handleValueForm(e, setMedicine)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Aplicado em</label>

        <div className="control">
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={applicationDate}
            onChange={(date: Date) => setApplicationDate(date)}
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Proxima Aplicacao</label>
        <div className="control">
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={nextDate}
            onChange={(date: Date) => setNextDate(date)}
          />
        </div>
      </div>
      <button
        type="button"
        className="button is-info changer"
        onClick={addMedicine}
      >
        Adicionar Medicamento
      </button>
      <br />
      <button
        type="button"
        className="button is-warning changer"
        onClick={() => setForm(false)}
      >
        Retornar
      </button>
    </form>
  );
};

export default MedicineForm;
