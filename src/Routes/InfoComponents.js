import React from 'react';
import usePcParts from './Parts';

function InfoComponents() {
    const pcParts = usePcParts(); // Invocamos la función

    return (
        <div className='Components'>
            {pcParts.map((component, index) => (
                <SectParts
                    key={index}
                    title={component.name}
                    image={component.image}
                    description={component.description} // Corrige "descriptio" a "descripcion"
                />
            ))}
        </div>
    );
}

function SectParts(props) {
    return ( // Añadido el return
        <section>
            <h2>{props.title}</h2>
            <img src={props.image} alt={props.title} /> {/* Cambié alt a props.title */}
            <p>{props.description}</p>
        </section>
    );
}

export default InfoComponents;
