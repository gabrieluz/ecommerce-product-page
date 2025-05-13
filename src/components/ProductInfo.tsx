export function ProductInfo({
  title,
  price,
}: {
  title: string;
  price: number;
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-xl text-green-600 font-semibold mt-2">
        R$ {price.toFixed(2)}
      </p>
    </div>
  );
}
