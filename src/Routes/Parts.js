// Parts.js
import { useState } from 'react';

const usePcParts = () => {
    const [pcParts] = useState([
        {
            name: 'Gabinete Gamer Mid Tower RGB BOLT',
            image: 'https://m.media-amazon.com/images/I/91oZikIEYkL._AC_SY450_.jpg',
            description: 'Un gabinete espacioso con iluminación RGB que alberga y protege todos los componentes del PC. Permite una buena circulación de aire y facilita la instalación de hardware.'
        },
        {
            name: 'Procesador AMD Ryzen 7 5700X, 3.4GHz',
            image: 'https://imgs.search.brave.com/AZGWfInbCA1fj3fIgd43mJTrXyas-A9tTuYuPfN-RoU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWRyZW5hbGluZS5j/b20uYnIvd3AtY29u/dGVudC91cGxvYWRz/LzIwMjMvMDYvcHJv/Y2Vzc2Fkb3ItYW1k/LXJ5emVuLTctNTcw/MHgtMy00Z2h6LTQt/Nmdoei1tYXgtdHVy/Ym8tYW00LWNhcGEt/MzEweDMxMC5qcGc',
            description: 'Un procesador de alto rendimiento ideal para juegos y tareas exigentes. Ofrece múltiples núcleos que permiten un rendimiento fluido en multitarea y juegos.'
        },
        {
            name: 'GIGABYTE B550M AORUS Elite AX',
            image: 'https://m.media-amazon.com/images/I/81AI1ZaUrML._AC_SX355_.jpg',
            description: 'Una placa base diseñada para gamers, que soporta los últimos procesadores AMD y ofrece opciones de conectividad avanzadas, como Wi-Fi integrado y soporte para múltiples tarjetas gráficas.'
        },
        {
            name: 'Thermalright Assassin King 120 SE ARGB',
            image: 'https://m.media-amazon.com/images/I/61-uhI9dPnL._SX342_.jpg',
            description: 'Un enfriador de CPU que asegura temperaturas óptimas, evitando el sobrecalentamiento durante sesiones intensivas de juego o trabajo.'
        },
        {
            name: 'Corsair RM850x 80 Plus Gold',
            image: 'https://m.media-amazon.com/images/I/812GLY781vL._AC_SY355_.jpg',
            description: 'Una fuente de alimentación confiable y eficiente que proporciona energía estable y suficiente para todos los componentes de la PC.'
        },
        {
            name: 'RTX 3070',
            image: 'https://imgs.search.brave.com/Gd1H-Vj7JK3ztqRMkhwYUG-EVfHLYjfBz-fyIDVwUTQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudmVyc3VzLmlv/L29iamVjdHMvbnZp/ZGlhLWdlZm9yY2Ut/cnR4LTMwNzAuZnJv/bnQubWFzdGVyLjE2/MDEzOTczOTgyNDgu/anBn',
            description: 'Una potente tarjeta gráfica que permite jugar en alta resolución y con tasas de cuadros elevadas. Ideal para gamers y creadores de contenido.'
        },
        {
            name: 'WD_BLACK SN850X NVMe SSD de 2 TB',
            image: 'https://m.media-amazon.com/images/I/41b07XJOpVL._AC_SX355_.jpg',
            description: 'Un SSD rápido que proporciona tiempos de carga rápidos para juegos y aplicaciones, mejorando significativamente la velocidad general del sistema.'
        },
        {
            name: 'Kingston Fury Beast Black 16GB 3200Mhz DDR4',
            image: 'https://m.media-amazon.com/images/I/51DoQLJEZbL._AC_SX450_.jpg',
            description: 'Memoria RAM de alto rendimiento que permite una mejor multitarea y una experiencia de juego más fluida.'
        }
    ]);

    return pcParts; // Asegúrate de que esto sea un array
};

export default usePcParts;
