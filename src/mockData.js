// Asegúrate de que el directorio Assets está dentro de src, y ajusta las rutas de importación:
import conectividadImg from '../src/assets/img/conectividad.png';
import iluminacionImg from './Assets/iluminacion.png';
import seguridadImg from './Assets/seguridad.png';
import Home from './Assets/home.png';
import logo from './Assets/logo.PNG';
export const mockProducts = [
  {
    id: 1,
    name: "Producto 1",
    price: 19.99,
    category: "Electrónica",
    imageUrl: conectividadImg,
    description: "Descripción del Producto 1."
  },
  {
    id: 2,
    name: "Producto 2",
    price: 29.99,
    category: "Hogar",
    imageUrl: iluminacionImg,
    description: "Descripción del Producto 2."
  },
  {
    id: 3,
    name: "Producto 3",
    price: 39.99,
    category: "Jardinería",
    imageUrl: seguridadImg,
    description: "Descripción del Producto 3."
  },
  {
    id: 4,
    name: "Producto 1",
    price: 19.99,
    category: "Electrónica",
    imageUrl:logo ,
    description: "Descripción del Producto 1."
  },
  {
    id: 5,
    name: "Producto 2",
    price: 29.99,
    category: "Hogar",
    imageUrl: Home,
    description: "Descripción del Producto 2."
  },
  {
    id: 6,
    name: "Producto 3",
    price: 39.99,
    category: "Jardinería",
    imageUrl: Home,
    description: "Descripción del Producto 3."
  },
  // ...otros productos...
];
