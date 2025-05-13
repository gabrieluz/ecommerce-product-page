import { usePersistentState } from "../hooks/usePersistentState";

export function ProductVariants({
  sizes,
  colors,
}: {
  sizes: string[];
  colors: string[];
}) {
  const [size, setSize] = usePersistentState("selectedSize", "");
  const [color, setColor] = usePersistentState("selectedColor", "");

  return (
    <div className="mt-4">
      <div>
        <label className="font-semibold">Tamanho:</label>
        <div className="flex gap-2 mt-1">
          {sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSize(s)}
              className={`px-4 py-2 rounded border ${
                size === s ? "bg-black text-white" : "bg-white"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <label className="font-semibold">Cor:</label>
        <div className="flex gap-2 mt-1">
          {colors.map((c) => (
            <button
              key={c}
              onClick={() => setColor(c)}
              className={`px-4 py-2 rounded border ${
                color === c ? "bg-black text-white" : "bg-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
