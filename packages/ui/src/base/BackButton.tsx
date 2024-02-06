'use client'

import { SparkIcon } from "@bosch-web-dds/spark-ui-react"
import {useRouter} from 'next/navigation'

export const BackButton = ({page_name}: {page_name?: string}) => {
  const {back} = useRouter()
  return (
    <button onClick={()=> back()} className="bg-white flex items-center">
      <SparkIcon icName="back-left"/> 
      {page_name}
    </button>
  )
}
