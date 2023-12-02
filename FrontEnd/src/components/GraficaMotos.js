import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function GraficaMotos (datos) {
    const motos = datos.dataMotos;
    const options = {
        plugins: {
            legend: {
                position: "bottom",
            },
        },
    
    };
    

    const dataMotos = {
        labels: ["Motos","Libre" ],
        datasets: [
            {
            data: [ motos, 100],
            label: "Motos",
            backgroundColor: ["purple","black"],
            borderColor: ["white", "white"],
            hoverBackgroundColor: ["gray"],
            borderWidth: 2,
            },
        ],
    };
    return (
        <section className=" lg:w-60 lg:h-60 w-48 h-48">
            <Pie data={dataMotos} options={options} />
        </section>
    );
}
