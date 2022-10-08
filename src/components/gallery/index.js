import { useState } from 'react'

import mini1 from '../../styles/img/mini1.jpg'
import mini2 from '../../styles/img/mini2.jpg'
import mini3 from '../../styles/img/mini3.jpg'
import photoA from '../../styles/img/personal-photo1.jpg'
import photoB from '../../styles/img/personal-photo2.jpg'
import photoC from '../../styles/img/personal-photo3.jpg'
import { GalleryBar } from './bar'

const photos = [
  { photo: photoA, mini: mini1 },
  { photo: photoB, mini: mini2 },
  { photo: photoC, mini: mini3 },
  { photo: photoA, mini: mini1 },
  { photo: photoB, mini: mini3 },
]

export const Gallery = () => {
  const [currentPhoto, setCurrentPhoto] = useState(photoA)

  return (
    <section className="gallery">
      <p>
        <img id="largeImg" src={ currentPhoto } alt="Honey owner"/>
      </p>
      <GalleryBar onChange={ setCurrentPhoto } photos={ photos }/>
    </section>
  )
}
