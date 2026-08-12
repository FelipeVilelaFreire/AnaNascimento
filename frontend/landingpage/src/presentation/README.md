# Presentation

Camada local de planejamento da landing.

Ela separa tres niveis:

```text
Contracts
  -> AppShell, header, footer e acoes globais
Presentation
  -> organizacao geral das secoes
Sections
  -> configuracao individual de cada section
```

## Arquivos

- `sectionsLayout.presentation.js`: ordem, visibilidade e modo visual de cada
  section.
- `sectionRegistry.jsx`: mapa entre chaves declarativas e componentes reais.

## Regra

Sections continuam sendo componentes React, mas a montagem da tela nao deve
ficar hardcoded dentro de `LandingPage.jsx`. Alterar ordem ou esconder uma
section deve acontecer em `sectionsLayout.presentation.js`.

O AppShell nao fica nesta pasta. A casca e declarada em
`src/contracts/appShell.contract.js` e renderizada por
`@serviceos/app-shell-web/contract-shell`.
