import React, { useState} from 'react';
import axios from 'axios';
import { Input } from  '@nextui-org/react';
import { Button } from '@nextui-org/react';



function CrearCuenta(){
    const [user, setUser] = useState({
        name:'',
        email: '',
        password: ''
    });
    
    const handleSubmit= async (e) => {
        e.preventDefault();
        
        try {
            const res = await axios.post('http://localhost:3000/auth/register', user);
                console.log(res);
                setUser({
                    name:'',
                    email: '',
                    password: ''
                });
                
                window.location.href = '/login';

            } catch (error) {
                alert(console.log(error));
            }
    };
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleTouchEvent = (e) => {
        handleInputChange(e);
        handleSubmit(e);
   
    }
    return(
        <div className="flex h-full flex-col justify-center px-6 py-12 lg:px-8'">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-10 w-auto" id="logoLogin" src="/icono.png" alt="logo easyparking"/>
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">Crear cuenta</h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Input
                            type="text"
                            label="Nombre"
                            variant='bordered'
                            className="max-w-xl"
                            labelPlacement='outside'
                            isRequired
                            name='name'
                            id='name'
                            autoComplete='name'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Input
                            type="email" 
                            label="Correo electrónico"	
                            variant='bordered'
                            className="max-w-xl"
                            labelPlacement='outside'
                            required 
                            name='email'
                            id='email'
                            autoComplete='email' 
                            isRequired
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                        <Input
                            type="password"
                            label="Contraseña"
                            variant='bordered'
                            className="max-w-xl"
                            labelPlacement='outside'
                            isRequired
                            name='password'
                            id='password'
                            autoComplete='current-password'
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <Button 
                            type="submit" 
                            color="success" 
                            size="large" 
                            variant="ghost"
                            className="w-full"
                            onTouchStart={handleTouchEvent}
                            >
                            Crear cuenta
                        </Button>
                    </div>
                </form>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Ya tienes cuenta?
                    <a href="/login" className="font-semibold leading-6 text-indigo-400 hover:text-indigo-500">Iniciar sesión</a>
                </p>
            </div>
        </div>
    )
}

export default CrearCuenta;