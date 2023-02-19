import { useEffect, useState } from "react";
import { Medicine } from "../../domain/Medicine";
import { HomeClient, HomeClientV1 } from "../../client/HomeClient";
import "./MedicineTable.css";

type Props = {
  setForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const MedicineTable = (props: Props) => {
  const { setForm } = props;

  const [medicineList, setMedicineList] = useState<Medicine[] | undefined>(
    undefined
  );

  useEffect(() => {
    const homeClient: HomeClient = HomeClientV1.getInstance();

    homeClient.getAllMedicineList().then((data) => setMedicineList(data));
  }, []);

  const listHead = () => {
    if (medicineList) {
      return (
        <>
          <thead>
            <tr>
              <th className="medicine-head">Filhote</th>
              <th className="medicine-head">Remédio</th>
              <th className="medicine-head">Aplicado</th>
              <th className="medicine-head">Proxima Dose</th>
            </tr>
          </thead>
          {listContent(medicineList)}
        </>
      );
    }
    return <div>Lista nao pode ser carregada</div>;
  };

  const listContent = (medicineList: Medicine[] | undefined) => {
    if (medicineList) {
      return (
        <tbody className="table-content-vaccine">
          {medicineList.map((e, i) => (
            <tr key={"medicine-item" + i} className={"td-content"}>
              <td>{e.getAnimal()}</td>
              <td>{e.getMedicine()}</td>
              <td>{e.getApplicationDate().toLocaleDateString("en-GB")}</td>
              <td>{e.getApplicationDate().toLocaleDateString("en-GB")}</td>
            </tr>
          ))}
        </tbody>
      );
    }
  };

  return (
    <div className="table-container">
      <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
        {listHead()}
      </table>
      <button className="button is-info changer" onClick={() => setForm(true)}>
        Adicionar Medicamento
      </button>
    </div>
  );
};

export default MedicineTable;
