
import { InfoSection } from '../../components/info-section/InfoSection'
import { homeObjTwo, homeObjOne } from './Data'

export const Featured = () => {
  return (
    <>
        <InfoSection {...homeObjOne} />
        <InfoSection {...homeObjTwo} />
    </>
  )
}
