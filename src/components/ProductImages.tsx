import { useState } from "react";

export function ProductImages({ images }: { images: string[] }) {
  const [main, setMain] = useState(images[0]);

  return (
    <div className="w-full md:w-1/3 p-4">
      <img src={main} className="w-full rounded-xl border" />
      <div className="flex gap-2 mt-2">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="w-16 h-16 rounded cursor-pointer border"
            onClick={() => setMain(img)}
          />
        ))}
      </div>
    </div>
  );
}
