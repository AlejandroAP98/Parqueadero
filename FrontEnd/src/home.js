import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

Modal.setAppElement('#root')

function Home() {
    const [data, setData] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [detalle, setDetalle] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3000/vehiculos/misVehiculos', {
            mode:'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }  
        })
        .then(function (response) {
            setData(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    },[]);

    const mostrarDetalles = (vehiculo) => {
        setDetalle(vehiculo);
        setModalIsOpen(true);
    };

    const cerrarModal = () => {
        setDetalle(null);
        setModalIsOpen(false);
    };

    return (
        <div>
            <h1 className='text-4xl font-bold text-center m-5 '>Lista de vehiculos</h1>
            <ul className="grid gap-4 m-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {data.map((vehiculo) => (
                <li key={vehiculo.id}>
                    <div id="container">
                        <a href="#" onClick={() =>mostrarDetalles(vehiculo)} >
                            <p id="texto">{vehiculo.placa}</p>
                            <img id="placaMisVehiculos" src="/placa.png" alt="placa" /> 
                        </a>
                    </div>
                </li>
                ))}
            </ul>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={cerrarModal}
                className= " fixed top-0 left-0 right-0 z-50 p-4  overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                overlayClassName="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity"
                

                
            >
                {
                    detalle && (
                        <div class="relative w-full  max-w-md max-h-full">
                            <div class="relative bg-gray-900 rounded-lg shadow dark:bg-gray-700">
                                <div class="flex items-center justify-center p-5 border-b rounded-t dark:border-gray-500">
                                    <h3 class="text-4xl font-medium dark:text-white">
                                        {detalle.placa}
                                    </h3>
                                </div>
                                <div class="p-6 space-y-6">
                                    <p class=" leading-relaxed text-lg text-gray-200 dark:text-gray-400">
                                        Tipo: {detalle.tipoVehiculo}
                                    </p>
                                    <p class="leading-relaxed text-lg text-gray-200 dark:text-gray-400">
                                        Marca: {detalle.marca}
                                    </p>
                                    <p class="leading-relaxed text-lg text-gray-200 dark:text-gray-400">
                                        Color: {detalle.color}
                                    </p>
                                    <p class="leading-relaxed text-lg text-gray-200 dark:text-gray-400">
                                        Modelo: {detalle.modelo}
                                    </p>
                                </div>
                                <div class=" flex justify-center md:gap-10 lg:gap-10 ">
                                    <button onClick={cerrarModal} className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white ">
                                        <span className="text-white relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Cerrar
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Modal>
        </div>
        
    );  
}

export default Home;