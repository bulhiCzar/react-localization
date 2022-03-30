<p align="center">
  <a href="https://www.npmjs.com/package/@bulhi/react-localization">
    <img src="https://img.shields.io/npm/dm/@bulhi/react-localization.svg?style=flat-square">
  </a>
</p>

---

Localization library for handling translations in [React](https://facebook.github.io/react).

## Installation

```
yarn add @bulhi/react-localization
or
npm i @bulhi/react-localization
```

## Documentation

#### Set Provider 
```
import { ProviderLocalization } from '@bulhi/react-localization'

<ProviderLocalization>
    <AppInit />
</ProviderLocalization>
```

#### Init Localize 
```
import { initLocalization } from '@bulhi/react-localization'

const translations = {
    en: {
        hello: 'hi',
        auth.title: 'welcome to site',
        auth_button: 'next ${numebr}'
        },
    ru: {
        hellow: 'привет',
        auth.title: 'спс за регу',
        auth_button: 'далее ${number}'
    }
}

initLocalization({
    languages: [
        { code: 'en', name: 'English' },
        { code: 'ru', name: 'Руский' },
    ],
    translations,
    options: {
      defaultLanguage: 'en',
      onMissingTranslation: data => console.log(data),
    },
})
```

#### Using 
```
import { Translate } from '@bulhi/react-localization'

<Translate id='auth.title' />
getTranslate('auth.title')

// get castom value 
<Translate id='auth_button' data={{ numebr: 5 }}/> // -> next 5
getTranslate('auth_button', { data: { number: 5 } } })
```

#### Change language 
```
import { withLocalization } from '@bulhi/react-localization'

const App = withLocalization((props) => {
    const { setActiveLanguage } = props

    const handlerLanguage = () => {
        setActiveLanguage('en')
    }

    return <div onClick={handlerLanguage}>set en</div>  
})
```
