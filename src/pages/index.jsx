import { useEffect } from 'react'
import { navigate } from 'gatsby'

import UseHeaderQuery from '../components/header/UseHeaderQuery'

export default () => {
  const data = UseHeaderQuery()
  const { pages } = data.file.childDataYaml
 
  useEffect(() => {
    navigate(`/${pages[0].file}`)
  }, [pages])
  return null
}