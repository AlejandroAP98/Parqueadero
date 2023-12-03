import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function GraficaCarros (datos) {
    const carros = datos.dataCarros;
    const options = {
        plugins: {
            legend: {
                position: "bottom",
            },
        },
    
    };
    
    const dataCarros = {
        labels: ["Carros","Libre" ],
        datasets: [
            {
            data: [ carros, 30],
            label: "Carros",
            backgroundColor: ["orange","black"],
            borderColor: ["white", "white"],
            hoverBackgroundColor: ["gray"],
            borderWidth: 2,
            },
        ],
    };
    return (
        <section className=" lg:w-60 lg:h-60 w-48 h-48">
            <Pie data={dataCarros} options={options} />
        </section>
    );
}
