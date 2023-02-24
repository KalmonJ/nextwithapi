import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import { Product } from "__generated__/resolvers-types";

const GET_PRODUCTS = gql`
  query getProducts($offset: Int, $limit: Int) {
    products(offset: $offset, limit: $limit) {
      name
    }
  }
`;
export const Teste = () => {
  const { data, fetchMore, loading } = useQuery<{ products: Product[] }>(
    GET_PRODUCTS,
    {
      variables: {
        offset: 10,
        limit: 100,
      },
    }
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {data?.products.map((el) => (
        <div key={el.id}>
          <div>
            <h2>{el.name}</h2>
            <span>{el.description}</span>
            <img src={el.image} alt={el.name} width={100} height={100} />
          </div>
        </div>
      ))}
      <button
        onClick={async () => {
          const result = await fetchMore({
            variables: {
              offset: data?.products.length,
            },
          });

          console.log(result, "resultadoo");
        }}
      >
        fetch more
      </button>
    </div>
  );
};

export default Teste;
