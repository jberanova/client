import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createCat } from "../../models/Cat";
import "./CreatedCat.css";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';

export default function CatCreateForm() {
  //useState - vytvoreni promenne v reactu
  // nazev promenne, setter       useState(default_hodnota)
  const [formData, setFormData] = useState();
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const postForm = async () => {
    const cat = await createCat(formData);
    if (cat.status === 201) {
      redirectToSuccessPage(cat.payload._id);
    } else {
      setInfo(cat.msg);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePost = (e) => {
    e.preventDefault();
    postForm();
  };

  const redirectToSuccessPage = (id) => {
    return navigate(`/createdcat/${id}`);
  };

  return (
    <>
      <h1 className="newNadpis">Vytvořit nový inzerát</h1>

      <form className="projekt">
      <div className="nazev"><InputText placeholder="Nadpis" name="nadpis" onChange={e => handleChange(e)}/></div><br />
      <div className="text"><InputText placeholder="Text" name="text" onChange={e => handleChange(e)}/></div><br />
      <div className="newName"><InputText placeholder="Cena" name="cena" onChange={e => handleChange(e)}/></div><br />
      <h3 className="osobniudaje">Osobní údaje</h3>
      <div className="jmeno"><InputText placeholder="Jméno" name="jmeno" onChange={e => handleChange(e)}/></div><br />
      <div className="telefon"><InputText placeholder="Telefon" name="telefon" onChange={e => handleChange(e)}/></div><br />
      <div className="email"><InputText placeholder="E-mail" name="email" onChange={e => handleChange(e)}/></div><br />
      <button className="create" onClick={handlePost}>Vytvořít inzerát</button>
      <Link to={"/"}>
      <Button className="newBack" label="Go Back" /></Link>
        
      </form>
      
    </>
  );
}
