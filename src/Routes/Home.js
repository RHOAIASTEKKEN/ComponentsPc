import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

function Home() {
    return (
        <div className='Home'>
            <h1>ARQUITECTURA DE COMPUTADORAS Y SIST DIG</h1>

            <section>
                {DataComponents.map((data, index) => (
                    <ComponentPrimary
                        key={index}
                        icono={data.icono}
                        titulo={data.title}
                        descripcion={data.descripcion}
                    />
                ))}
            </section>
        </div>
    )
}


function ComponentPrimary(props) {
    return (
        <article>
            <img className='iconHome' src={require(`../img/${props.icono}.svg`)} alt='iconos' />
            <h2>{props.titulo}</h2>
            <p>{props.descripcion}</p>
        </article>
    );
}


const DataComponents = [
    {
        icono: 'cpu',
        title: 'Procesador (CPU)',
        descripcion: 'El cerebro de tu PC. Se ubica en el socket de la placa base y determina la velocidad de procesamiento de datos.'
    },
    {
        icono: 'motherboard',
        title: 'Placa Base',
        descripcion: 'La columna vertebral que conecta todos los componentes. Determina la compatibilidad y capacidad de expansión.'
    },
    {
        icono: 'ram',
        title: 'Memoria RAM',
        descripcion: 'Almacenamiento temporal de datos para acceso rápido. Se inserta en los slots de la placa base y afecta la multitarea y rendimiento general.'
    },
    {
        icono: 'grafica',
        title: 'Tarjeta Gráfica',
        descripcion: 'Procesa los gráficos de tus juegos. Se instala en el slot PCIe de la placa base y es crucial para el rendimiento visual.'
    },
    {
        icono: 'disk',
        title: 'Almacenamiento',
        descripcion: 'Guarda tus juegos y archivos. Los SSD ofrecen mayor velocidad y se conectan a la placa base o bahías del gabinete.'
    },
    {
        icono: 'power',
        title: 'Fuente de Poder',
        descripcion: 'Suministra energía a todos los componentes. Se instala en la parte trasera del gabinete y debe tener la potencia adecuada.'
    }
    // ,
    // {
    //     icono:'<></>,
    //     title: 'Procesador',
    //     descripcion:''
    // }
]
export default Home