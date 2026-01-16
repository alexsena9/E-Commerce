const baseProductos = [
  {
    nombre: "Auriculares Studio",
    precio: 199,
    cat: "Audio",
    img: "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Smartwatch Series",
    precio: 299,
    cat: "Wearables",
    img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Cámara Retro",
    precio: 550,
    cat: "Fotografía",
    img: "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Teclado Mecánico",
    precio: 145,
    cat: "Gaming",
    img: "https://images.pexels.com/photos/230514/pexels-photo-230514.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Monitor Curvo",
    precio: 899,
    cat: "Computación",
    img: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Smartphone Midnight",
    precio: 999,
    cat: "Telefonía",
    img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const productos = Array.from({ length: 100 }, (_, i) => {
  const base = baseProductos[i % baseProductos.length];
  return {
    id: i + 1,
    nombre: `${base.nombre} PRO v${i + 1}`,
    precio: base.precio + i * 3,
    imagen: base.img,
    categoria: base.cat,
  };
});
