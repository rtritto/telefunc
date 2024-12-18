export { Page }

import React from 'react'
import { Header } from './Header'
import { CodePreview } from './CodePreview'
import { Features } from './features/Features'

function Page() {
  return (
    <>
      <div
        style={{
          background: 'var(--bg-color)',
          paddingTop: 50,
          paddingBottom: 80,
        }}
      >
        <Header />
        <CodePreview />
      </div>
      <div
        style={{
          background: 'var(--bg-color)',
          marginTop: 'var(--block-margin)',
          paddingTop: 60,
          paddingBottom: 120,
        }}
      >
        <Features />
      </div>
    </>
  )
}
