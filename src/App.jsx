import React, { useState } from "react";
import { clients } from "./Data";
import "./App.css";

function App() {
  const [filteredClients, setFilteredClients] = useState(clients);
  const [ paisFilter, setpaisFilter] = useState("");
  const [nombreFilter, setnombreFilter] = useState("");


  const filterByTitular = (nombre) => {
    const filtered = clients.filter(client => client.nombre.toLowerCase().includes(nombre.toLowerCase()));
    setFilteredClients(filtered);
  };

  const filterByDestino = (destino) => {
    const filtered = clients.filter(client => client.destino.toLowerCase().includes(destino.toLowerCase()));
    setFilteredClients(filtered);
  };

  const filterBycantidadmayorquecincomillones= () => {
    const filtered = clients.filter(client => client.monto > 5000000);
    setFilteredClients(filtered);
  };

  const filterByCantidadMenorQueCincomillones = () => {
    const filtered = clients.filter(client => client.monto < 5000000);
    setFilteredClients(filtered);
  };
  const handlepaisChange = (event) => {
    setpaisFilter(event.target.value);
  };
  const filterBypais = () => {
    const filtered = clients.filter(client => client.destino.toLowerCase().includes(paisFilter.toLowerCase()));
    setFilteredClients(filtered);
  };
  const handlenombreChange = (event) => {
    setnombreFilter(event.target.value);
  };

  const filterBynombre = () => {
    const filtered = clients.filter(client => client.nombre.toLowerCase().includes(nombreFilter.toLowerCase()));
    setFilteredClients(filtered);
  };




  return (
    <div className="container">
      <h1>Clientes de Nos Fuimos</h1>
      <div className="filters">
        <button onClick={filterBycantidadmayorquecincomillones}>Filtrar por pago mayor a 5 millones</button>
        <button onClick={filterByCantidadMenorQueCincomillones}>Filtrar por pago menor a 5 millones</button>
        <input type="text" placeholder="País" value={paisFilter} onChange={handlepaisChange} />
        <button onClick={filterBypais}>Filtrar por país</button>
        <input type="text" placeholder="Nombre" value={nombreFilter} onChange={handlenombreChange} />
        <button onClick={filterBynombre}>Filtrar por nombre</button>
      </div>
      <ul className="client-list">
        {filteredClients.map((client, index) => (
          <li key={index}>
            <strong>{client.nombre}</strong> - Destino: {client.destino}, Pago: ${client.monto.toLocaleString()}, Viajeros: {client.travelers}
          </li>
        ))}
      </ul>
    </div>
  );
}




export default App;
