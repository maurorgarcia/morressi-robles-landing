export default function Hero() {
  return (
    <section className="relative bg-[#E8EFF6] min-h-[90vh] pt-20 overflow-hidden flex items-center">
      {/* Background building image */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[55%]">
        <img
          src="https://images.pexels.com/photos/280220/pexels-photo-280220.jpeg?auto=compress&cs=tinysrgb&w=1260"
          alt="Propiedad de lujo"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#E8EFF6] via-[#E8EFF6]/30 md:via-[#E8EFF6]/40 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 z-10">
        <div className="max-w-xl">
          <p className="text-xs font-bold tracking-[0.25em] text-gray-500 uppercase mb-6 flex items-center gap-2">
            <span className="w-6 h-px bg-gray-400" /> Tu hogar, nuestra misión
          </p>
          <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05] mb-6">
            Encontrá la<br />
            Propiedad<br />
            <span className="text-gray-500 underline decoration-gray-300 decoration-wavy underline-offset-8">que Buscás</span>
          </h1>
          <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-sm">
            En Morressi Robles te ayudamos a encontrar el inmueble ideal que se adapte a tu estilo de vida y necesidades.
          </p>
          <a
            href="#propiedades"
            className="inline-block px-8 py-4 bg-gray-900 text-white text-sm font-bold tracking-wide hover:bg-gray-800 hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-gray-900/10 hover:shadow-xl hover:shadow-gray-900/20"
          >
            Ver Propiedades
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 flex flex-wrap gap-8 md:gap-12 bg-white/40 backdrop-blur-sm p-6 rounded-sm max-w-2xl border border-white/40">
          {[
            { value: '350+', label: 'Propiedades Listadas' },
            { value: '1200+', label: 'Clientes Satisfechos' },
            { value: '15+', label: 'Años de Experiencia' },
          ].map(({ value, label }, i) => (
            <div key={label} className={`flex flex-col ${i > 0 ? 'md:border-l md:border-gray-300/40 md:pl-8' : ''}`}>
              <p className="text-3xl font-black text-gray-900 tracking-tight">
                {value}
              </p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
