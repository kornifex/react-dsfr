## Lien - Link

Le lien permet la navigation. Pour les actions d’un autre type, comme la soumission d’un formulaire, il faut utiliser le composant boutons.

### Lien contextuel
Le lien contextuel se trouve au sein d’un texte et reprend les caractéristiques typographiques de celui-ci (font, couleur, taille) tout en étant souligné.

```jsx
<Link
    title="titre lien interne"
    href="/">lien contextuel
</Link>
```

```jsx
<Link
    icon="ri-arrow-go-back-line"
    iconPosition="left"
    title="titre lien interne" href="/my-page">
    lien contextuel avec icône
</Link>
```

```jsx
<Link
    icon="ri-arrow-go-back-line"
    title="titre lien interne"
    href="/my-page">
    lien contextuel avec icône
</Link>
```

#### Usage avec react-router-dom

```jsx
import { BrowserRouter as Router, Route, Link as RouterLink } from 'react-router-dom';

<Router>
    <Route
        path="/"
        component={(props) => (
            <Link as={<RouterLink to="/my-page">lien contextuel</RouterLink>} />
        )}
    />
</Router>
```

#### Usage avec react-router-dom

```jsx
import { BrowserRouter as Router, Route, Link as RouterLink } from 'react-router-dom';

<Router>
    <Route
        path="/"
        component={(props) => (
            <Link icon="ri-search-line"
                  title="titre lien interne"
                  as={<RouterLink to="/my-page">lien contextuel avec icône</RouterLink>}
            />
        )}
    />
</Router>
```

### Lien externe
Le lien ‘externe’ doit être utilisé pour les liens pointant vers un autre site et ouvrant un nouvel onglet (via l’attribut target=”blank”).

```jsx
<Link
    title="titre lien externe - nouvelle fenêtre"
    href="/"
    target="_blank">lien externe - nouvelle fenêtre
</Link>
```

#### Lien simple

```jsx
<Link
    href="/my-page"
    isSimple>lien simple
</Link>
```

#### Usage avec react-router-dom

```jsx
import { BrowserRouter as Router, Route, Link as RouterLink } from 'react-router-dom';

<Router>
    <Route
        path="/"
        component={(props) => (
            <Link
                isSimple
                as={<RouterLink to="/my-page">lien simple</RouterLink>}
            />
        )}
    />
</Router>
```
