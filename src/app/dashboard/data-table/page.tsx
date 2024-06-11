import { payments } from "@/app/data/payments.data"
import { DataTable } from "./data-table";
import { columns } from "./columns";

async function fetchData(){
    return payments;
}


export default async function Page(){

    const data = await fetchData();
    return(
        <div>
            <h1>Hola mundo</h1>
            <div>
                <DataTable columns={columns} data={data} />
            </div>
            {/* <pre>
                {JSON.stringify(data,null,2)}
            </pre> */}
        </div>
    )
}