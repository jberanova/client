import "./MainPage.css";
import { Link } from "react-router-dom";
import { Button } from 'primereact/button';


export default function MainPage() {
  return (
    <>

<h1 className="nadpis">Bazoš.cz</h1>
<div className="tlacitka">
    <div className="newinzeratTlacitko">
      <Link to={"/createcat"}>
      <Button label="Přidat inzerát" />
      </Link>
    </div>
    <div className="mojeinzeratyTlacitko">
      <Link to={"/cats"}>
      <Button label="Moje inzeráty" />
      </Link>
    </div>
  </div>    
    </>
  );
}
