import clsx from 'clsx'
import Image from 'next/image'
import { Dispatch, MutableRefObject, SetStateAction } from 'react'

export type ImageDescriptionType = { title: string; src: string; width: number; height: number; alt: string }
type ImagePlatePropsType = {
  setSelected: Dispatch<SetStateAction<string>>
  selected: string
  refer: MutableRefObject<HTMLInputElement | null>
} & ImageDescriptionType

const ImagePlate = ({ title, src, width, height, alt, selected, setSelected, refer }: ImagePlatePropsType) => {
  const isActive = selected === title
  return (
    <div
      onClick={() => {
        setSelected(title)
        setTimeout(() =>
          window.scrollTo({
            top: refer.current?.offsetTop,
            left: 0,
            behavior: 'smooth',
          }), 0
        )
      }}
      className={clsx(
        isActive && 'border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30',
        'flex flex-col items-center group rounded-lg border border-transparent px-5 py-4 transition-colors cursor-pointer',
      )}>
      <h2 className={`mb-3 text-2xl font-semibold`}>
        <span className="relative inline-block transition-transform group-hover:translate-y-1 group-hover:underline">
          {title}
          <span className="animate-ping absolute h-1 w-1 rounded-full bg-sky-400 opacity-75 top-1 -right-2"></span>
        </span>
      </h2>
      <Image width={width} height={height} alt={alt} src={src} className="rounded-lg"></Image>
    </div>
  )
}

export default ImagePlate
