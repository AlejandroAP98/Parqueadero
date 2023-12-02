import React, { useState, useEffect } from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input} from "@nextui-org/react";
import axios from 'axios';
import { API_BASE_URL, CRUD, MIS_VEHICULOS } from './services/apiServices';

function Home() {
    const [data, setData] = useState([]);
    const [detalle, setDetalle] = useState(null);
    const {isOpen, onOpen, onClose} = useDisclosure();
    const handleOpen = (vehiculo) => {
        const { tipoVehiculo, placa, marca, color, modelo } = vehiculo;
        const vehiculoEditable = { tipoVehiculo, placa, marca, color, modelo };
        setVehiculos(vehiculoEditable);
        setDetalle(vehiculo);
        onOpen();
    }
    const [isEditing, setIsEditing] = useState(false);

    const [vehiculos, setVehiculos] = useState({
        tipoVehiculo:'',
        placa: '',
        marca: '',
        color: '',
        modelo: ''
    });

    const handleClose = () => {
        setIsEditing(false);
        onClose();
    }


    const handleDeleteSubmit = async () => {
        try {
            const token = localStorage.getItem('jwt');
            if (token) {
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };
                const res = await axios.delete(`${API_BASE_URL}${CRUD}${vehiculos.placa}`, config);
                if (res.status === 200) {
                    alert('Vehiculo eliminado');
                    window.location.reload();
                }
            } else {
                console.log('No hay token');
            }
        } catch (error) {
            console.log(error);
        }
        onClose();
    };


   
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setVehiculos((prevVehiculos) => ({
            ...prevVehiculos,
            [name]: value,
        }));
    };

    useEffect(() => {
        axios.get(`${API_BASE_URL}${MIS_VEHICULOS}`, {
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


    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem('jwt');
            if(token){
                const config = {
                    headers: { 
                        Authorization: `Bearer ${token}`,
                    },
                };
            const res = await axios.patch(`${API_BASE_URL}${CRUD}${vehiculos.placa}`, vehiculos, config);
            if (res.status === 200) {
                alert('Vehiculo actualizado');
                window.location.reload();
            }
            }else{
                console.log('No hay token');
            } 
        }catch (error) {
            console.log(error);
        }
        setIsEditing(false); 
        onClose(); 
    };


    return (
        <div>
            <h1 className='text-4xl font-bold text-center m-5 '>Lista de vehiculos</h1>
            <ul className="grid gap-4 m-4 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {data.map((vehiculo) => (
                <li key={vehiculo.id}>
                    <div id="container">
                        <a href="#" onClick={() =>handleOpen(vehiculo)} >
                            <p id="texto">{vehiculo.placa}</p>
                            <img id="placaMisVehiculos" src="/placa.png" alt="placa" className='rounded-3xl' /> 
                        </a>
                    </div>
                </li>
                ))}
            </ul>   
            <Modal backdrop='blur' classNames={{
                body: "py-6",
                backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                base: "bg-[#19172c] dark:bg-[#19172c] text-white",
                header: "border-b-[1px] border-[#292f46] text-3xl text-center",
                footer: "border-t-[1px] border-[#292f46]",
                closeButton: "hover:bg-white/5 active:bg-white/10",
                }} isOpen={isOpen} onClose={onClose} shadow='md'  placement="center" >
                <ModalContent >
                {(onClose) => ( 
                    <>
                    <ModalHeader className="flex flex-col gap-1">{detalle.placa}</ModalHeader>
                    <ModalBody>
                        {isEditing ? (
                        <form className='flex flex-col gap-2' method="PATCH" >
                            <label className='text-sm'>Tipo de vehículo</label>
                            <Input className='text-black' isDisabled name="tipoVehiculo" value={vehiculos.tipoVehiculo} onChange={handleInputChange} />
                            <label className='text-sm'>Placa</label>
                            <Input className='text-black' isDisabled name="placa" value={vehiculos.placa} onChange={handleInputChange} />
                            <label className='text-sm'>Marca</label>
                            <Input  className='text-black' placeholder="Marca" name="marca" value={vehiculos.marca} onChange={handleInputChange} />
                            <label className='text-sm'>Modelo</label>
                            <Input className='text-black' placeholder="Modelo" name="modelo" value={vehiculos.modelo} onChange={handleInputChange} />
                            <label className='text-sm'>Color</label>
                            <Input className='text-black' placeholder="Color" name="color" value={vehiculos.color} onChange={handleInputChange} />
                        </form>
                        ) : (
                       <ul className='grid gap-y-2'>
                            <li className='flex gap-1'>
                                <svg  className="icon icon-tabler icon-tabler-gauge" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M13.41 10.59l2.59 -2.59"></path>
                                    <path d="M7 12a5 5 0 0 1 5 -5"></path>
                                </svg>
                                TIPO: {detalle.tipoVehiculo}
                            </li>
                            <li className='flex gap-1'>
                                <svg className="icon icon-tabler icon-tabler-gauge" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M13.41 10.59l2.59 -2.59"></path>
                                    <path d="M7 12a5 5 0 0 1 5 -5"></path>
                                </svg>
                                MARCA: {detalle.marca}
                            </li>
                            <li className='flex gap-1'>
                                <svg className="icon icon-tabler icon-tabler-gauge" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M13.41 10.59l2.59 -2.59"></path>
                                    <path d="M7 12a5 5 0 0 1 5 -5"></path>
                                </svg>
                               MODELO: {detalle.modelo}
                            </li>
                            <li className='flex gap-1'>
                                <svg className="icon icon-tabler icon-tabler-gauge" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                                    <path d="M13.41 10.59l2.59 -2.59"></path>
                                    <path d="M7 12a5 5 0 0 1 5 -5"></path>
                                </svg>
                                COLOR: {detalle.color}
                            </li>
                       </ul>
                        )}
                    </ModalBody>
                    <ModalFooter className='flex justify-between'>
                        <div>
                            <Button color="danger" variant="flat" onPress={handleDeleteSubmit}>
                                Eliminar
                            </Button>
                        </div>
                            <Button color="warning" variant="light" onPress={handleClose}>
                                Cerrar
                            </Button>
                        <div>
                            {isEditing ? (
                            <Button color="primary" variant='flat' onPress={handleSubmit} >
                                Guardar
                            </Button>
                            ) : (
                            <Button color="primary" variant='flat' onPress={() => setIsEditing(true)}>
                                Editar
                            </Button>
                            )}
                        </div>
                        
                    </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </div>
        
    );  
}

export default Home;