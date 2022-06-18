# fdr-my-storybook-components

Este paquete sirvio para practicar React Components + storybook + github actions + Automatic NPM deploy

```
npm i fdr-my-storybook-components
```
```
yarn add fdr-my-storybook-components
```

### Demo:
[Storybook Components](https://fededelrincon.github.io/storyBooks-components/?path=/story/example-introduction--page)

### How to use it:

```
import './App.css'

import { MyLabel, Button } from 'fdr-my-storybook-components';

function App() {

  return (
    <div className="App App-header">
      <MyLabel label={'Hola Mundo'} size={'h1'} />
      <Button label={'Click Me'} primary />
    </div>
  )
}

export default App
```