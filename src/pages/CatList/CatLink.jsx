import { Link } from "react-router-dom"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function CatLink(props) {
 
    return (
        <>
<DataTable tableStyle={{ minWidth: '50rem' }}>
    <Column className="nazev" field="name" header="Name">{props.name} </Column>
    <Column field="category" header="Category"></Column>
    <Column field="quantity" header="Quantity"></Column>
</DataTable><br></br>

            <div className="nazev">Název: {props.name} </div>
            <Link className="odkaz" to={`/cat/${props.id}`}>
                <p>View cat</p>
            </Link>
           
        </>
    )
}