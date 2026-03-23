
import { Link } from "react-router";

function Card({data}) {
 
  return (
      <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

        {/* Image Section */}
        <Link to={`/product/${data.id}`} className="relative bg-stone-50 h-60 flex items-center justify-center p-6 overflow-hidden">
          {/* Product Image */}
          <img
            src={data?.image}
            alt="Fjallraven Foldsack No. 1 Backpack"
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </Link>

        {/* Content */}
        <div className="p-4 border-t border-stone-100">

          {/* Category */}
          <p className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-1">
            {data?.title}
          </p>

          {/* Title */}
          <h2 className="text-sm font-semibold text-stone-800 leading-snug line-clamp-1 mb-2">
            {data?.category}
          </h2>

          {/* Stars */}
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex text-amber-400 text-xs">
              {"★★★★★".split("").map((s, i) => (
                <span key={i}>{s}</span>
              ))}
            </div>
            <span className="text-xs text-stone-400">{data.rating.rate}</span>
          </div>

          {/* Price Row */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-base font-bold text-stone-900">{data?.price}</span>
            <span className="text-sm text-stone-400 line-through">$60.00</span>
            <span className="text-xs font-semibold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">
              25% off
            </span>
          </div>

        </div>
      </div>
  );
}

export default Card