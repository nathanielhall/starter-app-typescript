import React, { FC } from 'react'

export type AppProps = {}
export const App: FC<AppProps> = () => {
  return (
    <React.Fragment>
      <header>Header</header>
      <main>Main Content here</main>
    </React.Fragment>
  )
}
