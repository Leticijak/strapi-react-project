import React from "react"
import {
  AvatarInfo,
  CardBody,
  CardTitles,
  CardWrapper,
  Avatar,
} from "../components/Place/PlaceStyled"
import { useQuery, gql } from "@apollo/client"

const PLACES = gql`
  query newQuery {
    places {
      title
      author
      id
      body
    }
  }
`

export const PlacePage = () => {
  const { loading, error, data } = useQuery(PLACES)

  if (loading) return <p>Loading</p>
  if (error) return <p>ERROR</p>
  console.log(data)

  return (
    <>
      {data.places.map((p) => (
        <CardWrapper key={p.id}>
          <CardTitles>
            <h3>{p.title}</h3>
            <p>{p.date}</p>
          </CardTitles>
          <CardBody>
            <p>{p.body}</p>
          </CardBody>
          <AvatarInfo>
            <Avatar src='/Me.png' alt='' />
            <p>{p.author}</p>
          </AvatarInfo>
        </CardWrapper>
      ))}
    </>
  )
}
