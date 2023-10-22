import axios from 'axios';
import React, { useState} from 'react';
import './Login.css'
import { Button } from '@nextui-org/react';
import { Input } from '@nextui-org/react';

function Login(){
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    
    const handleSubmit= async (e) => {
        console.log(user);
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3000/auth/login', user);
                setUser({
                    email: '',
                    password: ''
                });
                localStorage.setItem('jwt', res.data.token); 
                window.location.href = '/';
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

    const handleTouchStart = (e) => {
        e.preventDefault();
    }

    return(
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto" id="logoLogin" src="/icono.png" alt="logo easyparking" />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">Iniciar sesión en tú cuenta</h2>
                </div>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
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
                    <div className="flex items-center justify-end">
                        <div className="text-sm">
                            <a href="/" className="font-semibold text-indigo-400 hover:text-indigo-500">Olvidé mi contraseña</a>
                        </div>
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
                        <Button type="submit" 
                            color="primary" 
                            size="large" 
                            variant="ghost"
                            className="w-full"
                            onTouchStart={handleTouchStart}
                            >
                            Iniciar sesión
                        </Button>
                    </div>
                </form>
            </div>
            <p className="mt-10 text-center text-sm text-gray-500">
                No tienes una cuenta?
                <a href="/nuevaCuenta" className="font-semibold leading-6 text-indigo-400 hover:text-indigo-500">Crear cuenta</a>
            </p>
        </div>
    )
}

export default Login;