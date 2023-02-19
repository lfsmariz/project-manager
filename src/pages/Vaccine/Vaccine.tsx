import MedicineTable from "../../component/MedicineTable/MedicineTable";
import "./Vaccine.css";
import { Navbar } from "../../component/Navbar/Navbar";
import MedicineForm from "../../component/MedicineForm/MedicineForm";
import { useState } from "react";

const Vaccine = () => {
  const [form, setForm] = useState(false);

  return (
    <>
      <Navbar />
      <div className="container content-medicine">
        {form ? (
          <MedicineForm setForm={setForm} />
        ) : (
          <MedicineTable setForm={setForm} />
        )}
      </div>
    </>
  );
};

export default Vaccine;
