import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Bed, Bath, Maximize2, CheckCircle, Phone, Mail } from 'lucide-react';
import { properties } from '../data/properties';

export default function PropiedadDetallePage() {
  const { id } = useParams<{ id: string }>();
  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 pt-36">
        <p className="text-2xl font-black text-gray-900">Propiedad no encontrada</p>
        <Link to="/propiedades" className="text-sm font-semibold text-gray-500 hover:text-gray-900 flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Volver a propiedades
        </Link>
      </div>
    );
  }

  const related = properties.filter((p) => p.id !== property.id && p.type === property.type).slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-950 pt-36 pb-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link to="/propiedades" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Volver a propiedades
          </Link>
        </div>
      </div>

      {/* Main image */}
      <div className="bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-0">
          <div className="relative overflow-hidden rounded-t-sm">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-72 lg:h-[480px] object-cover"
            />
            <div className="absolute top-5 left-5 flex gap-2">
              <span className="bg-gray-900 text-white text-xs font-bold px-3 py-1.5">{property.operation}</span>
              <span className="bg-white text-gray-900 text-xs font-bold px-3 py-1.5">{property.type}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-500">{property.location}</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-gray-900 mb-2">{property.title}</h1>
              <p className="text-2xl font-black text-gray-900 mb-8">
                {property.currency} {property.price.toLocaleString()}
                {property.operation === 'Alquiler' && <span className="text-base font-normal text-gray-400"> /mes</span>}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 pb-8 mb-8 border-b border-gray-100">
                {property.beds > 0 && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Bed className="w-5 h-5 text-gray-400" />
                    <span><strong>{property.beds}</strong> Ambientes</span>
                  </div>
                )}
                {property.baths > 0 && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Bath className="w-5 h-5 text-gray-400" />
                    <span><strong>{property.baths}</strong> Baño{property.baths > 1 ? 's' : ''}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Maximize2 className="w-5 h-5 text-gray-400" />
                  <span><strong>{property.area}</strong> m² totales</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="font-bold text-gray-900 mb-3">Descripción</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="font-bold text-gray-900 mb-4">Características</h2>
                <div className="grid grid-cols-2 gap-3">
                  {property.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-gray-900 shrink-0" strokeWidth={1.5} />
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — contact card */}
            <div>
              <div className="bg-gray-50 p-6 rounded-sm sticky top-28">
                <h3 className="font-black text-gray-900 mb-1">¿Te interesa esta propiedad?</h3>
                <p className="text-xs text-gray-400 mb-6">Contactá a un asesor ahora mismo</p>

                <div className="flex items-center gap-3 mb-6">
                  <img
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100"
                    alt="Asesor"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Martín Valdez</p>
                    <p className="text-xs text-gray-400">Asesor Senior</p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mb-6">
                  <a
                    href="tel:+541140000000"
                    className="flex items-center justify-center gap-2 py-3 bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Llamar ahora
                  </a>
                  <Link
                    to="/contacto"
                    className="flex items-center justify-center gap-2 py-3 border border-gray-900 text-gray-900 text-sm font-semibold hover:bg-gray-900 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Enviar consulta
                  </Link>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs text-gray-400 text-center">
                    Referencia: <span className="font-mono font-semibold text-gray-600">MR-{String(property.id).padStart(4, '0')}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-2xl font-black text-gray-900 mb-8">Propiedades similares</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link to={`/propiedades/${p.id}`} key={p.id} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow block">
                  <div className="overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-sm mb-1">{p.title}</h3>
                    <div className="flex items-center gap-1.5 mb-3">
                      <MapPin className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{p.location}</span>
                    </div>
                    <p className="font-black text-gray-900 text-sm">
                      {p.currency} {p.price.toLocaleString()}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
