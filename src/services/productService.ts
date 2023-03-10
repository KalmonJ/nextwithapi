import { Products } from "components/Hero";

export const productService = {
  featuredProducts: async (): Promise<Products | undefined> => {
    try {
      const response = await fetch("http://localhost:3000/api/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
              query {
                products {
                    id
                    name
                    description
                }
              }
            `,
        }),
        cache: "force-cache",
      });

      const { data } = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
