import { ProductImages } from "./components/ProductImages";
import { ProductInfo } from "./components/ProductInfo";
import { ProductVariants } from "./components/ProductVariants";
import { DeliveryChecker } from "./components/DeliveryChecker";
import { product } from "./data/product";

function App() {
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <ProductImages images={product.images} />
      <div>
        <ProductInfo title={product.title} price={product.price} />
        <ProductVariants
          sizes={product.variants.sizes}
          colors={product.variants.colors}
        />
        <DeliveryChecker />
      </div>
    </div>
  );
}

export default App;
