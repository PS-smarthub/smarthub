// import { BaseButton } from '@smarthub/ui'
'use client'

import { SparkIcon } from '@bosch-web-dds/spark-ui-react';

export default function Page(): JSX.Element {
  return (
    <div>
      <h1 className="text-red-400">Cold-Start</h1>
      <SparkIcon icName='add'/>
    </div>
  );
}
