import React from "react";
import "./App.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import IPInfo from "./IPInfo";

const client = new ApolloClient({
  uri:
    "https://api.everbase.co/graphql?apikey=4dfa844d-8ffc-41f6-93fe-d761e339c18b",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <IPInfo />
      </div>
    </ApolloProvider>
  );
}

export default App;
