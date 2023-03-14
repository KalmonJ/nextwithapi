export const authService = {
  login: async (
    email: string,
    password: string
  ): Promise<string | undefined> => {
    try {
      const response = await fetch("http://localhost:3000/api/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          query: `
                query {
                    login {
                        token
                    }
                }
            `,
          variables: {
            data: {
              email,
              password,
            },
          },
        }),
      });

      const { data } = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  },
};
