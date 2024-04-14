import { ApolloProvider } from "@apollo/client";
import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";
import { initApollo } from "./context/apollo";

function Client() {
  const client = initApollo(false);

  return (
    <ApolloProvider client={client}>
      <RemixBrowser />
    </ApolloProvider>
  );
}

hydrateRoot(document, <Client />);
