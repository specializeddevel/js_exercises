// Ejercicio de reduce: Análisis de Ventas
// Dado un array de objetos que representan ventas, deberás:
// 1. Calcular el total de ventas por categoría
// 2. Encontrar el producto más vendido
// 3. Calcular el promedio de ventas por día

const ventas = [
    { producto: "Laptop", categoria: "Electrónica", precio: 999, cantidad: 2, dia: "Lunes" },
    { producto: "Mouse", categoria: "Electrónica", precio: 25, cantidad: 10, dia: "Lunes" },
    { producto: "Libro", categoria: "Libros", precio: 20, cantidad: 5, dia: "Martes" },
    { producto: "Tablet", categoria: "Electrónica", precio: 199, cantidad: 3, dia: "Martes" },
    { producto: "Cuaderno", categoria: "Papelería", precio: 5, cantidad: 20, dia: "Miércoles" },
    { producto: "Teclado", categoria: "Electrónica", precio: 50, cantidad: 4, dia: "Miércoles" }
];

// TODO: 1. Calcula el total de ventas por categoría
// Resultado esperado: { Electrónica: 3271, Libros: 100, Papelería: 100 }
const ventasPorCategoria = ventas.reduce((acumulador, venta) => {
    // Tu código aquí
}, {});

// TODO: 2. Encuentra el producto más vendido (por cantidad)
// Resultado esperado: { producto: "Cuaderno", cantidad: 20 }
const productoMasVendido = ventas.reduce((maxVenta, venta) => {
    // Tu código aquí
}, { producto: "", cantidad: 0 });

// TODO: 3. Calcula el promedio de ventas por día
// Resultado esperado: { Lunes: 1049, Martes: 697, Miércoles: 300 }
const promedioVentasPorDia = ventas.reduce((acumulador, venta) => {
    // Tu código aquí
}, {});

// Descomentar para verificar resultados:
// console.log("Ventas por categoría:", ventasPorCategoria);
// console.log("Producto más vendido:", productoMasVendido);
// console.log("Promedio de ventas por día:", promedioVentasPorDia);
