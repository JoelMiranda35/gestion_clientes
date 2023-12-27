import React, { useEffect, useState } from 'react'
import ClienteServices from '../services/ClienteServices';

export const ListClientesComponents = () => {
    const [clientes,setClientes] = useState([]);

    useEffect(() => {
        ClienteServices.getALLClientes().then(response => {
            setClientes(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    },[])

  return (
    <div className='container'>
        <h2 className='text-center'>Lista de clientes</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
            </thead>
            <tbody>
                {
                    clientes.map(cliente =>
                        <tr key={cliente.id}>
                            <td>cliente.id</td>
                            <td>cliente.Nombre</td>
                            <td>cliente.Apellido</td>
                            <td>cliente.Email</td>
                        </tr>
                    )
                }
            </tbody>
        </table>    
    </div>
  )
}

export default ListClientesComponents;