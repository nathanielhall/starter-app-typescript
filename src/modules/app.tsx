import React, { FC } from 'react'

// props exist for testing linting rules
type AppProps = {
  showHeader?: boolean
  showButton?: boolean
}
// type AppProps = {
//   NotPascalCase: boolean
// }
export const App: FC<AppProps> = ({ showHeader = true, showButton = true }) => {
  // const test = () => {
  //   const [show] = React.useState(false)
  //   console.log(show)
  // }

  return (
    <React.Fragment>
      {showHeader && <header>Header</header>}
      {showButton && <button disabled></button>}
      <main>Main Content here</main>
    </React.Fragment>
  )
}
