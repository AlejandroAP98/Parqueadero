export default function Redirigir(){
    try{
        const token = localStorage.getItem('jwt');
        if(token){
            window.location.href = '/inicio';
        }else{
            window.location.href = '/login';
        }
    }
    catch(error){
        window.location.href = '/login';
    }

}