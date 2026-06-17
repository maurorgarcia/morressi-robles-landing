import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Bed, Maximize2, Quote } from 'lucide-react';
import { properties } from '../data/properties';

const featured = properties.filter((p) => p.featured);

const stats = [
  { value: '350+', label: 'Propiedades Listadas' },
  { value: '1.200+', label: 'Clientes Satisfechos' },
  { value: '15+', label: 'Años de Experiencia' },
];

const testimonials = [
  {
    quote: 'Gracias a Morressi Robles encontramos el departamento ideal en tiempo récord. Profesionales, atentos y siempre disponibles.',
    name: 'Valentina Herrera',
    role: 'Compradora en Palermo',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    quote: 'Vendimos nuestra casa en menos de 30 días al precio que esperábamos. El acompañamiento fue excelente en todo momento.',
    name: 'Rodrigo Molteni',
    role: 'Vendedor en Córdoba',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
  {
    quote: 'La gestión de mis propiedades en alquiler es impecable. Transparencia total y siempre al tanto de todo.',
    name: 'Carolina Bustos',
    role: 'Inversora inmobiliaria',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
  },
];

export default function InicioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#E8EFF6] min-h-[88vh] pt-18 overflow-hidden flex items-center">
        <div className="absolute inset-y-0 right-0 w-1/2 md:w-[55%]">
          <img
            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Edificio moderno"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#E8EFF6] via-[#E8EFF6]/40 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-24">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase mb-6">Tu hogar, nuestra misión</p>
            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05] mb-6">
              Encontrá la<br />
              Propiedad<br />
              <span className="text-gray-500">que Buscás</span>
            </h1>
            <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-sm">
              En Morressi Robles te ayudamos a encontrar el inmueble ideal que se adapte a tu estilo de vida y necesidades.
            </p>
            <Link
              to="/propiedades"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition-colors group"
            >
              Ver Propiedades
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="mt-16 flex flex-wrap gap-10">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl font-black text-gray-900">{value}</p>
                <p className="text-sm text-gray-500 mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick search */}
      <section className="relative z-10 -mt-8 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="bg-white shadow-2xl shadow-gray-200/80 rounded-sm p-6 lg:p-8">
          <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-4">Buscar propiedades disponibles</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <select className="border border-gray-200 px-4 py-3 text-sm text-gray-600 outline-none hover:border-gray-400 rounded-sm cursor-pointer">
              <option value="">Ubicación</option>
              <option>CABA</option>
              <option>GBA Norte</option>
              <option>GBA Oeste</option>
              <option>GBA Sur</option>
              <option>Interior</option>
            </select>
            <select className="border border-gray-200 px-4 py-3 text-sm text-gray-600 outline-none hover:border-gray-400 rounded-sm cursor-pointer">
              <option value="">Tipo</option>
              <option>Casa</option>
              <option>Departamento</option>
              <option>Oficina</option>
              <option>Local Comercial</option>
              <option>Terreno</option>
            </select>
            <select className="border border-gray-200 px-4 py-3 text-sm text-gray-600 outline-none hover:border-gray-400 rounded-sm cursor-pointer">
              <option value="">Operación</option>
              <option>Comprar</option>
              <option>Alquilar</option>
            </select>
            <Link
              to="/propiedades"
              className="flex items-center justify-center bg-gray-900 text-white text-sm font-semibold px-6 py-3 rounded-sm hover:bg-gray-700 transition-colors"
            >
              Buscar
            </Link>
          </div>
        </div>
      </section>

      {/* Featured properties */}
      <section className="bg-gray-950 py-20 lg:py-28 mt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-0.5 bg-gray-600" />
                <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">Destacados</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-black text-white">Nuestras Mejores<br />Propiedades</h2>
            </div>
            <Link
              to="/propiedades"
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors group"
            >
              Ver todo <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((p) => (
              <Link to={`/propiedades/${p.id}`} key={p.id} className="group cursor-pointer block">
                <div className="relative overflow-hidden rounded-sm mb-4">
                  <img src={p.image} alt={p.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-4 left-4 bg-white text-gray-900 text-xs font-bold px-2.5 py-1">{p.operation}</span>
                </div>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-sm text-gray-300 font-medium">{p.location}</span>
                    </div>
                    <p className="text-xs text-gray-500">{p.type}</p>
                  </div>
                  <span className="text-base font-black text-white">
                    {p.currency} {p.price.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-5 mb-4">
                  {p.beds > 0 && (
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                      <Bed className="w-3.5 h-3.5" /><span>{p.beds} Amb.</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <Maximize2 className="w-3.5 h-3.5" /><span>{p.area} m²</span>
                  </div>
                </div>
                <div className="w-full py-2.5 border border-gray-700 text-gray-300 text-sm font-semibold text-center hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-200">
                  Ver Detalle
                </div>
              </Link>
            ))}
          </div>

          <div className="md:hidden mt-8 text-center">
            <Link to="/propiedades" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400">
              Ver todo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#E8EFF6] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Founder quote */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-20 pb-20 border-b border-gray-300/60">
            <div className="md:w-1/3">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Equipo Morressi Robles"
                className="w-full aspect-[4/3] object-cover rounded-sm"
              />
            </div>
            <div className="md:w-2/3">
              <Quote className="w-12 h-12 text-gray-400 mb-4" strokeWidth={1} />
              <p className="text-xl lg:text-2xl font-light text-gray-700 leading-relaxed mb-8">
                Nuestro negocio se construye sobre relaciones de confianza. Estamos orgullosos de acompañar a cada cliente en uno de los momentos más importantes de su vida.
              </p>
              <div>
                <p className="font-bold text-gray-900">Ricardo Morressi</p>
                <p className="text-sm text-gray-500">Fundador, Morressi Robles Bienes Raíces</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, role, avatar }) => (
              <div key={name} className="bg-white p-6 rounded-sm shadow-sm">
                <p className="text-gray-600 text-sm leading-relaxed mb-6">"{quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{name}</p>
                    <p className="text-xs text-gray-400">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
