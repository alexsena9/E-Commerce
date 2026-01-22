const baseProductos = [
  {
    nombre: "Auriculares Studio Z",
    precio: 199,
    cat: "Audio",
    img: "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Smartwatch Elite",
    precio: 299,
    cat: "Wearables",
    img: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Cámara Vintage 35mm",
    precio: 550,
    cat: "Fotografía",
    img: "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Teclado RGB Mecánico",
    precio: 145,
    cat: "Gaming",
    img: "https://images.pexels.com/photos/230514/pexels-photo-230514.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Monitor Ultra Wide 34",
    precio: 899,
    cat: "Computación",
    img: "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Smartphone Midnight G1",
    precio: 999,
    cat: "Telefonía",
    img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Mouse Ergonómico Pro",
    precio: 85,
    cat: "Gaming",
    img: "https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Lente Prime 50mm",
    precio: 420,
    cat: "Fotografía",
    img: "https://images.pexels.com/photos/279470/pexels-photo-279470.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Tablet Air Pro",
    precio: 650,
    cat: "Computación",
    img: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Micrófono Podcast",
    precio: 120,
    cat: "Audio",
    img: "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Laptop ZenBook",
    precio: 1200,
    cat: "Computación",
    img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "GoPro Action Cam",
    precio: 350,
    cat: "Fotografía",
    img: "https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Setup Speakers 2.1",
    precio: 250,
    cat: "Audio",
    img: "https://images.pexels.com/photos/1034653/pexels-photo-1034653.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Joystick Wireless",
    precio: 70,
    cat: "Gaming",
    img: "https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Dron Explorer Pro",
    precio: 799,
    cat: "Fotografía",
    img: "https://images.pexels.com/photos/1034812/pexels-photo-1034812.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Smart TV 4K 55",
    precio: 599,
    cat: "Hogar",
    img: "https://images.pexels.com/photos/5202925/pexels-photo-5202925.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Anillo de Luz LED",
    precio: 45,
    cat: "Fotografía",
    img: "https://images.pexels.com/photos/7005474/pexels-photo-7005474.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Powerbank 20k mAh",
    precio: 55,
    cat: "Accesorios",
    img: "https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Router WiFi 6",
    precio: 130,
    cat: "Computación",
    img: "https://images.pexels.com/photos/4218546/pexels-photo-4218546.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    nombre: "Silla Gamer King",
    precio: 280,
    cat: "Gaming",
    img: "https://images.pexels.com/photos/7915227/pexels-photo-7915227.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const productos = Array.from({ length: 130 }, (_, i) => {
  const base = baseProductos[i % baseProductos.length];
  return {
    id: i + 1,
    nombre: i >= baseProductos.length ? `${base.nombre} Plus` : base.nombre,
    precio: base.precio,
    imagen: base.img,
    categoria: base.cat,
  };
});
