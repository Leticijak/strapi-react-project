import React from "react"
import {
  AvatarInfo,
  CardBody,
  CardTitles,
  CardWrapper,
  Avatar,
} from "./PlaceStyled"

const index = () => {
  return (
    <CardWrapper>
      <CardTitles>
        <h3>This is it</h3>
        <p>date</p>
      </CardTitles>
      <CardBody>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          molestias optio beatae, odio porro eligendi fugiat omnis ullam vitae
          id quo ipsa et minus dolorem unde reprehenderit ab laboriosam. Illum
          molestiae nihil autem suscipit aspernatur, earum vel, necessitatibus
          optio corrupti nostrum ut commodi veritatis itaque ipsam sed soluta
          nobis tenetur.
        </p>
      </CardBody>
      <AvatarInfo>
        <Avatar src='/Me.png' alt='' />
        <p>Name</p>
      </AvatarInfo>
    </CardWrapper>
  )
}

export default index
