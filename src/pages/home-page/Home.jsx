
import { InfoSection } from '../../components/info-section/InfoSection'
import { homeObjOne, homeObjTwo } from './Data'

export const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </>
  )
}
