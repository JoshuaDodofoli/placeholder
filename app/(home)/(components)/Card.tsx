import React from 'react'

interface Image {
    src: string;
}

interface CardProps {
  name: string;
  slug: string;
  caption: string;
  service: string;
  desc: string;
  image: Image[]
}

const Card = ({ name, slug, caption, service, desc, image }: CardProps) => {
  return (
    <div>Card</div>
  )
}

export default Card