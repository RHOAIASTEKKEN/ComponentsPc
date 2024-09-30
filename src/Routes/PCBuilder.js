import React, { useState } from 'react';
import { useDrag, useDrop, DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import '../css/pcbuilder.css';

// Definir el tipo de arrastre
const ItemType = 'PC_PART';

// Componente que representa una parte del PC
const PcPart = ({ part }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemType,
        item: { name: part.name, image: part.image },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            className="p-2 border rounded shadow"
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                textAlign: 'center',
            }}
        >
            <img src={part.image} alt={part.name} />
            <p>{part.name}</p>
        </div>
    );
};

// Componente del área de ensamblaje
const DropZone = ({ onDrop, droppedPart, partName, customClass }) => {
    const [{ isOver }, drop] = useDrop({
        accept: ItemType,
        drop: (item) => onDrop(item, partName),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <div
            ref={drop}
            className={`w-40 h-40 p-4 border-2 border-dashed rounded ${customClass}`}
            style={{
                backgroundColor: isOver ? 'lightgreen' : 'white',
            }}
        >
            {droppedPart ? (
                <img src={droppedPart.image} alt={droppedPart.name} />
            ) : (
                <p>{partName}</p>
            )}
        </div>
    );
};

// Componente principal
const PCBuilder = () => {
    const [pcParts] = useState([
        { name: 'Gabinete Gamer Mid Tower RGB BOLT', image: 'https://m.media-amazon.com/images/I/91oZikIEYkL._AC_SY450_.jpg' },
        { name: 'Processador AMD Ryzen 7 5700X, 3.4GHz', image: 'https://imgs.search.brave.com/AZGWfInbCA1fj3fIgd43mJTrXyas-A9tTuYuPfN-RoU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWRyZW5hbGluZS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDYvcHJv/Y2Vzc2Fkb3ItYW1k/LXJ5emVuLTctNTcw/MHgtMy00Z2h6LTQt/Nmdoei1tYXgtdHVy/Ym8tYW00LWNhcGEt/MzEweDMxMC5qcGc' },
        { name: 'GIGABYTE B550M AORUS Elite AX ', image: 'https://m.media-amazon.com/images/I/81AI1ZaUrML._AC_SX355_.jpg' },
        { name: 'WD_BLACK SN850X NVMe SSD de 2 TB', image: 'https://m.media-amazon.com/images/I/41b07XJOpVL._AC_SX355_.jpg' },
        { name: 'Kingston Fury Beast Black 16GB 3200Mhz DDR4', image: 'https://m.media-amazon.com/images/I/51DoQLJEZbL._AC_SX450_.jpg' },
        { name: 'Thermalright Assassin King 120 SE ARGB', image: 'https://m.media-amazon.com/images/I/61-uhI9dPnL._SX342_.jpg' },
        { name: 'RTX 3070', image: 'https://imgs.search.brave.com/Gd1H-Vj7JK3ztqRMkhwYUG-EVfHLYjfBz-fyIDVwUTQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudmVyc3VzLmlv/L29iamVjdHMvbnZp/ZGlhLWdlZm9yY2Ut/cnR4LTMwNzAuZnJv/bnQubWFzdGVyLjE2/MDEzOTczOTgyNDgu/anBn' },
        { name: 'Corsair RM850x 80 Plus Gold', image: 'https://m.media-amazon.com/images/I/812GLY781vL._AC_SY355_.jpg' },
    ]);
    const [assembledParts, setAssembledParts] = useState({});

    // Función para manejar la colocación de una parte en una zona de ensamblaje
    const handleDrop = (part, partName) => {
        setAssembledParts((prev) => ({
            ...prev,
            [partName]: part, // Asigna la parte arrastrada
        }));
    };

    return (
        <DndProvider backend={HTML5Backend}>
                <h1 className="text-2xl font-bold mb-4">Ensamblador de PC Gamer</h1>

            <div className="container mx-auto p-4">

                <div className='todo'>
                    <div className="partes">
                        {pcParts.map((part) => (
                            <PcPart key={part.name} part={part} />
                        ))}
                    </div>

                    <div className="ensamble">
                        <h1 className='titleensamble'>Area de ensamble</h1>
                        <section>
                            <DropZone
                                onDrop={handleDrop}
                                droppedPart={assembledParts.gabinete}
                                partName="gabinete"
                                customClass="gabinete" // Puedes usar cualquier clase aquí
                            />

                            <DropZone
                                onDrop={handleDrop}
                                droppedPart={assembledParts.tarjetamadre}
                                partName="tarjetamadre"
                                customClass="tarjeta"
                            />
                            <DropZone
                                onDrop={handleDrop}
                                droppedPart={assembledParts.procesador}
                                partName="procesador"
                                customClass="procesador"
                            />
                            <DropZone
                                onDrop={handleDrop}
                                droppedPart={assembledParts.discoSSD}
                                partName="discoSSD"
                                customClass="disco"
                            />
                            <DropZone
                                onDrop={handleDrop}
                                droppedPart={assembledParts.memoriaRAM}
                                partName="memoriaRAM"
                                customClass="ram"
                            />
                            <DropZone
                                onDrop={handleDrop}
                                droppedPart={assembledParts.culer}
                                partName="culer"
                                customClass="culer"
                            />
                            <DropZone
                                onDrop={handleDrop}
                                droppedPart={assembledParts.grafica}
                                partName="grafica"
                                customClass="grafica"
                            />
                            <DropZone
                                onDrop={handleDrop}
                                droppedPart={assembledParts.fuente}
                                partName="fuente"
                                customClass="fuente"
                            />
                        </section>
                    </div>
                </div>
            </div>
        </DndProvider>
    );
};

export default PCBuilder;
