const productos = [
  { nombre: "Laptop", precio: "$99999", categoria: "Computación", modelo : "2015" },
  { nombre: "Cámara", precio: "$49999", categoria: "Fotografía", modelo : "2016" },
  { nombre: "Smartphone", precio: "$79999", categoria: "Telefonía", modelo : "2022" },
  { nombre: "Auriculares", precio: "$19999", categoria: "Audio", modelo : "2023" },
  { nombre: "Reloj inteligente", precio: "$29999", categoria: "Relojes", modelo : "2024" },
  { nombre: "Tablet", precio: "$59999", categoria: "Telefonía", modelo : "2010" },
  { nombre: "Impresora", precio: "$14999", categoria: "Oficina", modelo : "2005" },
  { nombre: "Monitor", precio: "$24999", categoria: "Computación", modelo : "2017" },
  { nombre: "Teclado mecánico", precio: "$12999", categoria: "Perifericos", modelo : "2025" }
];

const contenedor = document.getElementById('productos-contendor');

productos.map(producto => {
  const tarjeta = document.createElement('div');
  tarjeta.className = 'tarjeta';

  tarjeta.innerHTML = `
    <h3>${producto.nombre}</h3>
    <p><strong>Precio:</strong> ${producto.precio}</p>
    <p><strong>Categoría:</strong> ${producto.categoria}</p>
    <p><strong>Modelo:</strong> ${producto.modelo}</p>
  `;

  contenedor.appendChild(tarjeta);
});
