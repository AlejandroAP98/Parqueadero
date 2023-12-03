import { useState } from 'react';
import { Input } from  '@nextui-org/react';
import { Button } from '@nextui-org/react';
import {Select, SelectItem} from "@nextui-org/react";
import {Divider} from "@nextui-org/react";
import axios from 'axios';
import {API_BASE_URL, INGRESO, SALIDA, INVITADOSCARRO, INVITADOSMOTO} from './services/apiServices';
import GraficaMotos from './components/GraficaMotos';
import GraficaCarros from './components/GraficaCarros';


function Acceso(){
    const [placa, setInputPlaca] = useState ("");
    const [marca, setInputMarca] = useState ("");
    const [modelo, setInputModelo] = useState ("");
    const [color, setInputColor] = useState ("");
    const [propietario, setInputPropietario] = useState ("");
    const [placaVehiculoReg, setPlacaReg] = useState ("");
    const [motos, setMotos] = useState ({
        mensaje: '',
        cantidadVehiculos: 0
    });
    
    const [carros, setCarros] = useState ({
        mensaje: '',
        cantidadVehiculos: 0
    });

    const[registro, setRegistro] = useState({
        placaVehiculoReg: ''
    });
    const [vehiculos, setVehiculos] = useState({
        tipoVehiculo:'',
        placa: '',
        marca: '',
        color: '',
        modelo: '',
        propietario: ''
    });
    const tiposVehiculo = [
        {label: "Moto", value: 'Moto'},
        {label: "Carro", value: 'Carro'},
    ]

    const handleInputModelo = (e) => {
        const text= e.target.value;
        setInputModelo(text)
    }

    const handleInputPropietario = (e) => {
        const text= e.target.value;
        setInputPropietario(text)
    }

    const handleInputPlaca = (e) => {
        const text = e.target.value.toUpperCase();
        setInputPlaca(text);
    };

    const handleInputMarca = (e) => {
        const text = e.target.value.toUpperCase();
        setInputMarca(text);
    
    };

    const handleInputColor = (e) => {
        const text = e.target.value;
        setInputColor(text);
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "placa" || name === "marca") {
            setVehiculos((prevData) => ({
                ...prevData,
                [name]: value.toUpperCase(),
            
            }));
        } else {
            setVehiculos((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    }

    const handleInputPlacaVehiculoReg = (e) => {
        const text = e.target.value.toUpperCase();
        setPlacaReg(text);
    };

    const handlePlacaRegChange = (e) => {
        const { name, value } = e.target;
        setRegistro((prevData) => ({
            ...prevData,
            [name]: value.toUpperCase(),
        }));
    };

    const [invitados, setInvitados] = useState({
        placaVehiculoReg: '',
        tipoVehiculoReg: ''
    });
    // pendiente de completar ----------------------------------------------------------------------------
    const handleSubmit= async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('jwt');
            console.log(token);
            if(token){
                const config = {
                    headers: { 
                        Authorization: `Bearer ${token}`,
                    },
                };
            setInvitados({
                placaVehiculoReg: vehiculos.placa,
                tipoVehiculoReg: vehiculos.tipoVehiculo
            });
            console.log(invitados);
            if (invitados.tipoVehiculoReg === "Moto") {
                const res = await axios.post(`${API_BASE_URL}${INVITADOSMOTO}` , invitados, config);
                setMotos(res.data);
                setVehiculos({
                    tipoVehiculo:'',
                    placa: '',
                    marca: '',
                    color: '',
                    modelo: ''
                });
                setInvitados({
                    placaVehiculoReg: '',
                    tipoVehiculoReg: ''
                });
                handleClear();
                console.log(res);
            }else{
                const res = await axios.post(`${API_BASE_URL}${INVITADOSCARRO}`, invitados, config);
                setCarros(res.data);
                setVehiculos({
                    tipoVehiculo:'',
                    placa: '',
                    marca: '',
                    color: '',
                    modelo: ''
                });
                setInvitados({
                    placaVehiculoReg: '',
                    tipoVehiculoReg: ''
                });
                handleClear();
                console.log(res);
            }
            }else{
                console.log('No hay token');
            } 
        }catch (error) {
            console.log(error);
        }
    };

    const handleClear = () => {
        setVehiculos({
          tipoVehiculo: '',
          placa: '',
          marca: '',
          color: '',
          modelo: ''
        });
        setInputColor("");
        setInputMarca("");
        setInputModelo("");
        setInputPlaca("");
        setInputPropietario("")

    }

    const handleIngreso = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('jwt');
            if(token){
                const config = {
                    headers: { 
                        Authorization: `Bearer ${token}`,
                    },
                };
            const res = await axios.post(`${API_BASE_URL}${INGRESO}`, registro, config);
                const size = placaVehiculoReg.length;
                if(parseInt(placaVehiculoReg.charAt(size - 1))){
                    setCarros(res.data);
                }
                else{
                    setMotos(res.data);
                }
                setRegistro({
                    placaVehiculoReg: '',
                });
                // limpiar valores del input
                setPlacaReg("");
            }else{
                console.log('No hay token');
            }
            
        }
        catch (error) {
            console.log(error);
        }
    };

    const handleSalida = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('jwt');
            if(token){
                const config = {
                    headers: { 
                        Authorization: `Bearer ${token}`,
                    },
                };
            const res = await axios.post(`${API_BASE_URL}${SALIDA}`, registro, config);
                const size = placaVehiculoReg.length;

                if(parseInt(placaVehiculoReg.charAt(size - 1))){
                    setCarros(res.data);
                }
                else{
                    setMotos(res.data);
                }
                setRegistro({
                    placaVehiculoReg: '',
                });
                setPlacaReg("");

            }else{
                console.log('No hay token');
            }
        }
        catch (error) {
            console.log(error);
        }
    };

    return(
        <div className="flex justify-center lg:flex-row flex-col gap-x-4 ">
            <div className="md:items-center sm:items-center lg:order-1 order-2 h-full  ">
                <h1 className='text-3xl font-bold text-center'> Registrar vehículo</h1>
                <Divider/> 
                <form method="post"  id="htmlForm" name="htmlForm" className='grid gap-y-6 my-5'>
                    <Select 
                        label="Tipo de vehículo"
                        variant='bordered'
                        autoComplete='off'
                        size='lg' 
                        className="max-w-xl"
                        labelPlacement='outside'
                        name='tipoVehiculo'
                        id='tipoVehiculo'
                        isRequired
                        onChange={handleInputChange}  
                    >
                        {tiposVehiculo.map((vehiculos) => (
                        <SelectItem key={vehiculos.value} value={vehiculos.value} className='text-black'>
                            {vehiculos.label}
                        </SelectItem>
                        ))}
                    </Select>
                    <Input
                        type="text"
                        label="Placa"
                        variant='bordered'
                        className="max-w-xl"
                        labelPlacement='outside'
                        isRequired
                        name='placa'
                        id='placa'
                        autoComplete='placa'
                        value={placa}
                        maxLength={6}
                        onInput={handleInputPlaca}
                        onChange={handleInputChange}
                    />
                    <Input
                        type="text"
                        label="Marca"
                        variant='bordered'
                        className="max-w-xl"
                        labelPlacement='outside'
                        isRequired
                        name='marca'
                        id='marca'
                        autoComplete='marca'
                        value={marca}
                        onInput={handleInputMarca}
                        onChange={handleInputChange}
                    />
                    <Input
                        type="text"
                        label="Color"
                        variant='bordered'
                        className="max-w-xl"
                        labelPlacement='outside'
                        isRequired
                        name='color'
                        id='color'
                        autoComplete='color'
                        value={color}
                        onInput={handleInputColor}
                        onChange={handleInputChange}
                    />
                    <Input
                        type="text"
                        label="Modelo"
                        variant='bordered'
                        className="max-w-xl"
                        labelPlacement='outside'
                        isRequired
                        name='modelo'
                        id='modelo'
                        autoComplete='modelo'
                        value={modelo}
                        onInput={handleInputModelo}
                        onChange={handleInputChange}
                    />
                    <Input
                        type="text"
                        label="Propietario"
                        variant='bordered'
                        className="max-w-xl"
                        labelPlacement='outside'
                        isRequired
                        name='propietario'
                        id='propietario'
                        autoComplete='propietario'
                        value={propietario}
                        onInput={handleInputPropietario}
                        onChange={handleInputChange}
                    />
                    <div className='flex justify-between gap-x-10'>    
                        <Button type="submit"
                            color="success"
                            size="large"
                            variant="ghost"
                            className="w-full"
                            onClick={handleSubmit}
                        >
                            Guardar
                        </Button>
                        <Button 
                            color="error"
                            size="large"
                            variant="ghost"
                            className="w-full"
                            onClick={handleClear}
                        >
                            Limpiar
                        </Button>
                    </div>
                </form>
            </div>
            <div className="grid lg:mx-10 justify-items-center content-center order-1 lg:order-2 ">
                <input
                    type="text"
                    name="placaVehiculoReg"
                    id="inputPlaca"
                    autoComplete="off"
                    required
                    maxLength={6}
                    value={placaVehiculoReg}
                    onInput={handleInputPlacaVehiculoReg}
                    className='custom-background w-full max-w-xl md:h-72 h-52 lg:h-72 text-8xl lg:text-9xl text-center'
                    onChange={handlePlacaRegChange}
                />
                <div className="flex my-4 w-full gap-14">
                    <Button type="submit"
                        color="success"
                        size="large"
                        variant="ghost"
                        className="w-full"
                        onClick={handleIngreso}
                    >
                        Ingreso
                    </Button>
                    <Button 
                        color="danger"
                        size="large"
                        variant="ghost"
                        className="w-full"
                        onClick={handleSalida}
                    >
                        Salida
                    </Button>
                </div>
            </div>
            <div className=" order-3 flex text-center flex-col lg:w-72 w-full">
                <h1 className='text-3xl font-bold m-3'> Ocupación</h1>
                <div className='flex lg:flex-col justify-center lg:items-center'>
                    <GraficaMotos dataMotos={motos.cantidadVehiculos}/>
                    <GraficaCarros dataCarros={carros.cantidadVehiculos}/>
                </div>
            </div>
        </div>
    )
}

export default Acceso;