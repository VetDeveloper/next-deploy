import { ImageDescriptionType } from '../imagePlate/ImagePlate'

type GetMainPageImagesDescriptionType = () => Array<ImageDescriptionType>

const getMainPageImagesDescription: GetMainPageImagesDescriptionType = () => [
  { title: 'School', src: '/school.jpg', width: 100, height: 100, alt: 'School diploma with honors' },
  { title: 'University', src: '/diplom.jpg', width: 100, height: 100, alt: 'University diploma with honors' },
  { title: 'App', src: '/json-icon.png', width: 100, height: 100, alt: 'Wedding photo' },
]

export default getMainPageImagesDescription
