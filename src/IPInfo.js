import React from "react";
import { useQuery, gql } from "@apollo/client";

const CLIENT_QUERY = gql`
  {
    client {
      ipAddress {
        address
        city {
          name
          population
        }
        country {
          name
          population
        }
      }
    }
  }
`;

const IPInfo = () => {
  const {
    data: {
      client: { ipAddress: { address, city = {}, country = {} } = {} } = {},
    } = {},
    loading,
    error,
  } = useQuery(CLIENT_QUERY);

  if (loading) {
    return (
      <p>
        Hmm...{" "}
        <span role="img" aria-label="thinking emoji">
          🤔
        </span>
      </p>
    );
  }

  if (error) {
    return (
      <p>
        Ruh Roh{" "}
        <span role="img" aria-label="sad emoji">
          😫
        </span>
      </p>
    );
  }

  return (
    <main className="App">
      <h1>Howdy!</h1>
      <p>Your IP Address is {address}</p>
      <p>
        {`Your city, ${city.name}, has a current population of
         ${city.population}`}
      </p>
      <p>
        {`Your Country, ${country.name}, has a current population of
         ${country.population}`}
      </p>
      <p>Cool, huh?</p>
    </main>
  );
};

export default IPInfo;
