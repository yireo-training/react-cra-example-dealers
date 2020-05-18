import React from "react";
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const DEALERS_QUERY = gql`
{
    dealers {
      items {
        id
        name
        address
      }
    }
  }
  
`

const Dealers = () => {
    const { loading, error, data } = useQuery(DEALERS_QUERY);

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <ul>
            {data.dealers.items.map(item => (
                <li key={item.id}>{item.name} {item.address}</li>
            ))}
        </ul>
    )
}

export default Dealers