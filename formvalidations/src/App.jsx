import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ShowData from "./components/ShowData";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    startDate: "",
    endDate: "",
    phoneNumber: "",
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = () => {
    setSubmittedData([...submittedData, formData]);
    setFormData({
      name: "",
      email: "",
      password: "",
      startDate: "",
      endDate: "",
      phoneNumber: "",
    });
  };


  return (
    <div className="app-container">
      <Form formData={formData} setFormData={setFormData} onSubmit={handleSubmit} />
      <ShowData  submittedData={submittedData} />
    </div>
  );
}

export default App;
