import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Maximize2, SlidersHorizontal, X } from 'lucide-react';
import { properties, zonas, tipos, presupuestos } from '../data/properties';

type Op = 'Todas' | 'Venta' | 'Alquiler';

export default function PropiedadesPage() {
  const [operation, setOperation] = useState<Op>('Todas');
  const [zona, setZona] = useState('Todas');
  const [tipo, setTipo] = useState('Todos');
  const [presupuesto, setPresupuesto] = useState(0);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    const budget = presupuestos[presupuesto];
    return properties.filter((p) => {
      if (operation !== 'Todas' && p.operation !== operation) return false;
      if (zona !== 'Todas' && p.zona !== zona) return false;
      if (tipo !== 'Todos' && p.type !== tipo) return false;
      if (p.price < budget.min || p.price > budget.max) return false;
      return true;
    });
  }, [operation, zona, tipo, presupuesto]);

  const hasFilters = operation !== 'Todas' || zona !== 'Todas' || tipo !== 'Todos' || presupuesto !== 0;

  const clearFilters = () => {
    setOperation('Todas');
    setZona('Todas');
    setTipo('Todos');
    setPresupuesto(0);
  };

  return (
    <>
      {/* Header */}
      <section className="relative bg-gray-950 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260"
            alt="Propiedades Morressi Robles"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-gray-500" />
            <span className="text-xs font-semibold tracking-[0.2em] text-gray-400 uppercase">Propiedades</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-white leading-tight mb-6">Todas las Propiedades</h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
            Encontrá el hogar de tus sueños o la inversión ideal con nuestro buscador inteligente de propiedades premium.
          </p>
        </div>
      </section>

      <section className="bg-white sticky top-[72px] z-30 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          {/* Desktop filters */}
          <div className="hidden md:flex items-center gap-3 flex-wrap">
            {/* Operation tabs */}
            <div className="flex border border-gray-200 rounded-sm overflow-hidden">
              {(['Todas', 'Venta', 'Alquiler'] as Op[]).map((op) => (
                <button
                  key={op}
                  onClick={() => setOperation(op)}
                  className={`px-4 py-2 text-sm font-semibold transition-colors ${
                    operation === op ? 'bg-gray-900 text-white' : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {op}
                </button>
              ))}
            </div>

            <select
              value={zona}
              onChange={(e) => setZona(e.target.value)}
              className="border border-gray-200 px-4 py-2 text-sm text-gray-600 outline-none focus:border-gray-900 rounded-sm cursor-pointer"
            >
              {zonas.map((z) => <option key={z}>{z}</option>)}
            </select>

            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="border border-gray-200 px-4 py-2 text-sm text-gray-600 outline-none focus:border-gray-900 rounded-sm cursor-pointer"
            >
              {tipos.map((t) => <option key={t}>{t}</option>)}
            </select>

            <select
              value={presupuesto}
              onChange={(e) => setPresupuesto(Number(e.target.value))}
              className="border border-gray-200 px-4 py-2 text-sm text-gray-600 outline-none focus:border-gray-900 rounded-sm cursor-pointer"
            >
              {presupuestos.map((p, i) => <option key={i} value={i}>{p.label}</option>)}
            </select>

            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-900 transition-colors"
              >
                <X className="w-3.5 h-3.5" /> Limpiar filtros
              </button>
            )}

            <span className="ml-auto text-sm text-gray-400 font-medium">
              {filtered.length} resultado{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center justify-between">
            <span className="text-sm text-gray-500">{filtered.length} resultados</span>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-sm font-semibold text-gray-700"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filtros {hasFilters && <span className="w-1.5 h-1.5 rounded-full bg-gray-900 inline-block" />}
            </button>
          </div>

          {showFilters && (
            <div className="md:hidden pt-4 flex flex-col gap-3 border-t border-gray-100 mt-4">
              <div className="flex border border-gray-200 rounded-sm overflow-hidden">
                {(['Todas', 'Venta', 'Alquiler'] as Op[]).map((op) => (
                  <button
                    key={op}
                    onClick={() => setOperation(op)}
                    className={`flex-1 py-2 text-sm font-semibold ${operation === op ? 'bg-gray-900 text-white' : 'text-gray-500'}`}
                  >
                    {op}
                  </button>
                ))}
              </div>
              <select value={zona} onChange={(e) => setZona(e.target.value)} className="border border-gray-200 px-4 py-2 text-sm text-gray-600 outline-none rounded-sm">
                {zonas.map((z) => <option key={z}>{z}</option>)}
              </select>
              <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="border border-gray-200 px-4 py-2 text-sm text-gray-600 outline-none rounded-sm">
                {tipos.map((t) => <option key={t}>{t}</option>)}
              </select>
              <select value={presupuesto} onChange={(e) => setPresupuesto(Number(e.target.value))} className="border border-gray-200 px-4 py-2 text-sm text-gray-600 outline-none rounded-sm">
                {presupuestos.map((p, i) => <option key={i} value={i}>{p.label}</option>)}
              </select>
              {hasFilters && (
                <button onClick={clearFilters} className="text-sm text-gray-400 flex items-center gap-1.5">
                  <X className="w-3.5 h-3.5" /> Limpiar filtros
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Grid */}
      <section className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {filtered.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-4xl mb-4">🏠</p>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sin resultados</h3>
              <p className="text-gray-500 text-sm mb-6">No encontramos propiedades con esos filtros.</p>
              <button onClick={clearFilters} className="px-6 py-3 bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition-colors">
                Ver todas las propiedades
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <Link to={`/propiedades/${p.id}`} key={p.id} className="group bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow block">
                  <div className="relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-gray-900 text-white text-xs font-bold px-2.5 py-1">
                      {p.operation}
                    </span>
                    <span className="absolute top-4 right-4 bg-white text-gray-700 text-xs font-semibold px-2.5 py-1">
                      {p.type}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-gray-600 transition-colors">{p.title}</h3>
                    <div className="flex items-center gap-1.5 mb-4">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span className="text-xs text-gray-500">{p.location}</span>
                    </div>
                    <div className="flex items-center gap-4 mb-5 text-xs text-gray-400">
                      {p.beds > 0 && (
                        <div className="flex items-center gap-1.5">
                          <Bed className="w-3.5 h-3.5" />{p.beds} amb.
                        </div>
                      )}
                      {p.baths > 0 && (
                        <div className="flex items-center gap-1.5">
                          <Bath className="w-3.5 h-3.5" />{p.baths} baño{p.baths > 1 ? 's' : ''}
                        </div>
                      )}
                      <div className="flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5" />{p.area} m²
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-black text-gray-900">
                        {p.currency} {p.price.toLocaleString()}
                        {p.operation === 'Alquiler' && <span className="text-xs font-normal text-gray-400">/mes</span>}
                      </span>
                      <span className="text-xs font-semibold text-gray-400 group-hover:text-gray-900 transition-colors">
                        Ver detalle →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
