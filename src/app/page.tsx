import { Hero } from "components/Hero";
import { Product } from "__generated__/resolvers-types";
import { productService } from "./../services/productService";

export const Home = async () => {
  const result = await productService.featuredProducts();

  return (
    <main>
      <Hero products={result?.products as Product[]} />
    </main>
  );
};

export default Home;
