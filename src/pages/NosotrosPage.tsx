import { Award, Users, TrendingUp, Shield } from 'lucide-react';

const team = [
  {
    name: 'Ricardo Morressi',
    role: 'Fundador y Director',
    bio: 'Más de 20 años en el sector inmobiliario. Especialista en inversión y desarrollo de proyectos residenciales premium.',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Sofía Robles',
    role: 'Co-Fundadora – Ventas',
    bio: 'Licenciada en Administración de Empresas. Lideró más de 400 operaciones de compraventa en los últimos 10 años.',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Martín Valdez',
    role: 'Gerente Comercial',
    bio: 'Experto en tasaciones y análisis de mercado. Certified Real Estate Specialist con diploma internacional.',
    avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Laura Giménez',
    role: 'Asesora Senior',
    bio: 'Especializada en propiedades comerciales y oficinas corporativas en CABA y GBA.',
    avatar: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Pablo Herrera',
    role: 'Asesor de Inversiones',
    bio: 'Economista con posgrado en finanzas. Ayuda a inversores a identificar oportunidades de alta rentabilidad.',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    name: 'Camila Torres',
    role: 'Responsable de Alquileres',
    bio: 'Gestiona más de 150 contratos de alquiler activos con atención personalizada a propietarios e inquilinos.',
    avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const values = [
  { icon: Shield, title: 'Transparencia', desc: 'Operamos con total honestidad en cada transacción, sin costos ocultos ni sorpresas.' },
  { icon: Award, title: 'Excelencia', desc: 'Más de 15 años avalando el más alto estándar de calidad en cada operación.' },
  { icon: Users, title: 'Compromiso', desc: 'Nos involucramos personalmente con cada cliente para entender sus necesidades reales.' },
  { icon: TrendingUp, title: 'Resultados', desc: 'Resultados concretos y medibles. Nuestro éxito se mide en el de nuestros clientes.' },
];

const milestones = [
  { year: '2009', event: 'Fundación de Morressi Robles en Buenos Aires.' },
  { year: '2013', event: 'Apertura de la oficina en GBA Norte y expansión al mercado de alquileres.' },
  { year: '2016', event: 'Premio al mejor broker inmobiliario de CABA otorgado por la Cámara de la Propiedad.' },
  { year: '2019', event: 'Incorporación del equipo de inversiones y llegada a 1.000 operaciones cerradas.' },
  { year: '2022', event: 'Expansión a Rosario y Córdoba. Lanzamiento del portal digital propio.' },
  { year: '2024', event: 'Superamos los 1.200 clientes satisfechos y 350 propiedades en cartera activa.' },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gray-950 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1260"
            alt="Oficina Morressi Robles"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-gray-500" />
            <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">Nosotros</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white max-w-2xl leading-tight mb-6">
            Más de 15 años construyendo confianza
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Somos una inmobiliaria familiar que nació en Buenos Aires con una sola misión: acompañar a las personas en cada decisión inmobiliaria de su vida.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '350+', label: 'Propiedades activas' },
              { value: '1.200+', label: 'Clientes satisfechos' },
              { value: '15+', label: 'Años en el mercado' },
              { value: '6', label: 'Profesionales del equipo' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-4xl font-black text-gray-900 mb-1">{value}</p>
                <p className="text-sm text-gray-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#E8EFF6] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-0.5 bg-gray-400" />
                <span className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">Nuestra historia</span>
              </div>
              <h2 className="text-4xl font-black text-gray-900 mb-6">Una empresa nacida de la pasión por los bienes raíces</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                En 2009, Ricardo Morressi y Sofía Robles decidieron unir sus trayectorias para crear una inmobiliaria diferente: una donde el cliente no sea un número, sino una persona con sueños, metas e historia propia.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Comenzamos con una pequeña oficina en Palermo y hoy contamos con un equipo de seis profesionales especializados, más de 350 propiedades en cartera y presencia en las principales ciudades del país.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Cada operación que cerramos es el resultado de escuchar, entender y trabajar incansablemente para que el resultado sea exactamente el que nuestro cliente necesita.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-full aspect-[3/4] object-cover rounded-sm" />
              <div className="flex flex-col gap-4 mt-8">
                <img src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-full aspect-square object-cover rounded-sm" />
                <img src="https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-full aspect-square object-cover rounded-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-gray-300" />
              <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">Valores</span>
              <span className="w-8 h-0.5 bg-gray-300" />
            </div>
            <h2 className="text-4xl font-black text-gray-900">Lo que nos define</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border border-gray-100 p-8 rounded-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gray-900 flex items-center justify-center rounded-sm mb-5">
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-950 py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-gray-600" />
              <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">Trayectoria</span>
              <span className="w-8 h-0.5 bg-gray-600" />
            </div>
            <h2 className="text-4xl font-black text-white">Nuestra historia</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-px bg-gray-800" />
            {milestones.map(({ year, event }, i) => (
              <div key={year} className={`relative flex items-start gap-8 mb-10 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${i % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'}`}>
                  <span className="text-2xl font-black text-white block mb-1">{year}</span>
                  <p className="text-sm text-gray-400 leading-relaxed">{event}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-gray-950 top-1" />
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="w-8 h-0.5 bg-gray-300" />
              <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">Equipo</span>
              <span className="w-8 h-0.5 bg-gray-300" />
            </div>
            <h2 className="text-4xl font-black text-gray-900">Conocé a nuestro equipo</h2>
            <p className="mt-4 text-gray-500 max-w-md mx-auto text-sm leading-relaxed">
              Profesionales apasionados, comprometidos con cada operación y con el éxito de cada cliente.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map(({ name, role, bio, avatar }) => (
              <div key={name} className="group">
                <div className="overflow-hidden rounded-sm mb-4">
                  <img
                    src={avatar}
                    alt={name}
                    className="w-full aspect-[4/3] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-bold text-gray-900 mb-0.5">{name}</h3>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
