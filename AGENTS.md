# AnaNascimentoPage Agents

Este projeto e uma landing page independente que consome a Foundation do
ServiceOS como biblioteca local durante a V1.

## Estrutura

```text
AnaNascimentoPage/
  frontend/
    landingpage/
      public/assets/
  bats/
  docs/
  AGENTS.md
```

`backend/` nao existe nesta fase. A pagina e frontend-only e deve rodar em
localhost antes de qualquer decisao de publicacao da biblioteca.

## Regra ServiceOS-first

- Reutilizar `@serviceos/ui-web` e `@serviceos/ui-core` para UI, tokens,
  provider e primitives.
- Manter identidade visual local em `frontend/landingpage/src/foundation`.
- Manter copy, areas de atuacao, FAQ e contatos em `src/content`.
- Manter imagens publicas em `frontend/landingpage/public/assets`.
- Manter a composicao de tela em `frontend/landingpage/src/presentation`.
- Nao criar design system paralelo. Se faltar uma capacidade generica, registrar
  como candidata para amadurecer no ServiceOS depois.
- AppShell V1 pode ser uma casca local fina quando o AppShell publicado atrasar
  a entrega, mas deve ficar configurado em `foundation/appShell.js`.

## Conteudo e idiomas

Copy publica deve vir de `src/content/<locale>.js`. A V1 usa `pt-BR`, mas o
shape ja permite outros idiomas sem mexer nas secoes.
