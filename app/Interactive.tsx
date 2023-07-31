'use client'

import { useRef, useState } from 'react'
import getMainPageImagesDescription from './data/getMainPageImagesDescription'
import ImagePlate, { ImageDescriptionType } from './imagePlate/ImagePlate'
import InteractiveContent from './interactiveContent/InteractiveContent'

const Interactive = () => {
  const [selected, setSelected] = useState<string>('')
  const ref = useRef<HTMLInputElement | null>(null)
  
  return (
    <>
      <div className="mb-0 flex flex-wrap justify-around text-center w-[65%]">
        {getMainPageImagesDescription().map((imageDescription: ImageDescriptionType) => (
          <ImagePlate
            key={imageDescription.title}
            {...imageDescription}
            selected={selected}
            setSelected={setSelected}
            refer={ref}
          />
        ))}
      </div>
      <InteractiveContent refer={ref} title={selected} />
    </>
  )
}

export default Interactive
