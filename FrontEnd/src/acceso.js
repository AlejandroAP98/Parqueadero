import { useState } from 'react';
function Acceso(){
    const [placa, setPlaca] = useState('');

    const handlePlacaChange =(e) => {
        setPlaca(e.target.value);
    }
    return(
        <div className="flex lg:flex-row flex-col  ">
            <div className="lg:order-1 order-2" >
                <h1 className='text-4xl font-bold text-center m-3'> Registrar vehículo</h1>
                <form method="post"  id="htmlForm" name="htmlForm">
                    <div className=" mx-4 my-4">
                        <div className="w-full">
                            <div className="grid w-full grid-cols-1 ">
                                <div className="Form-group my-2">
                                    <label htmlFor="tipoVehiculo">Tipo</label>
                                    <select className="htmlForm-control block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset" defaultValue="Automovil" id="tipoVehiculo" required name="tipoVehiculo">
                                        <option>Seleccione un tipo</option>
                                        <option value="Automovil">Automovil</option>
                                        <option value="Motocicleta">Motocicleta</option>
                                        <option value="Bicicleta">Bicicleta</option>
                                    </select>
                                </div>
                                <div className="Form-group">
                                    <label htmlFor="placa">Placa</label>
                                    <input type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"  name="placa" required placeholder="Placa del vehículo"/>
                                </div>
                                <div className="Form-group">
                                    <label htmlFor="marca">Marca</label>
                                    <input type="text"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"  name="marca" required placeholder="Marca del vehículo"/>
                                </div>
                                <div className="Form-group">
                                    <label htmlFor="color">Color</label>
                                    <input type="text"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"  name="color" required placeholder="Color del vehículo"/>
                                </div>
                                <div className="Form-group">
                                    <label htmlFor="modelo">Modelo</label>
                                    <input type="text"  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"  name="modelo" required placeholder="Modelo del vehículo"/>
                                </div>
                            </div>
                            <div className="flex justify-center md:gap-10 lg:gap-10">
                                <button type="submit" id="guardar" value="enviar" className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white ">
                                    <span className="text-white relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Guardar
                                    </span>
                                </button>
                                <button className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white">
                                    <span className=" text-white relative px-5 py-2.5 transition-all ease-in duration-75  bg-gray-900 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Cancelar
                                    </span>
                                </button>
                            </div>
                        </div> 
                    </div>
                </form>
            </div>    
            <div className="flex flex-col order-1 lg:order-2 justify-items-center mx-5">
                <img src="/placa.png" alt="placa" id="imgAcceso"/>
                <input
                    type="text"
                    name="placa"
                    id="inputPlaca"
                    placeholder="Ingrese placa"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset"
                    required
                    value={placa}
                    onChange={handlePlacaChange}
                    />
                <div className="flex justify-center my-2 md:gap-10 lg:gap-10">
                  <button type="submit" id="guardar" value="enviar" className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white ">
                        <span className="text-white relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-900 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Guardar
                        </span>
                    </button>
                    <button className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white">
                        <span className=" text-white relative px-5 py-2.5 transition-all ease-in duration-75  bg-gray-900 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Cancelar
                        </span>
                    </button>
                </div>
            </div>
            <div className="order-3 text-center bg-white">
                <h1 className='text-4xl font-bold text-center m-3'> Ocupación</h1>
            </div>
            
           
        </div>
    )
}

export default Acceso;