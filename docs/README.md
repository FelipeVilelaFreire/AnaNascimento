# Ana Nascimento Page

Tipo: guia
Autoridade: complementar

Landing page institucional da Dra. Ana Nascimento, criada como projeto separado
para validar consumo direto da biblioteca visual do ServiceOS.

## Decisao da V1

O projeto roda localmente em Next e importa a Foundation por dependencias
`file:`. A publicacao da biblioteca em registry privado/publico fica para uma
etapa posterior.

A V1 acompanha a linha atual do Next/React para projetos novos:

```text
Next.js 16
React 19
```

## Arquitetura

```text
frontend/landingpage
  app/                 -> entrada Next
  public/assets        -> imagens e arquivos publicos da landing
  src/foundation       -> fachada local do ServiceOS
  src/content          -> conteudo por idioma
  src/presentation     -> AppShell, ordem geral e registry das sections
  src/sections         -> secoes da landing
```

## Boundary

- Local: copy, SEO, imagens, contatos, secoes e composicao da Ana.
- ServiceOS: `FoundationUiProvider`, tokens, Button, Card, Surface, Text,
  Heading e demais primitives.
- Futuro: trocar a casca local por AppShell runtime completo quando a publicacao
  da biblioteca estiver definida.

## Comandos Locais

```bat
bats\setup.bat
bats\dev.bat
bats\build.bat
```

A URL padrao de desenvolvimento e:

```text
http://localhost:3017
```

## Planejamento De Apresentacao

Leia [PRESENTATION_PLAN.md](PRESENTATION_PLAN.md) antes de mudar a casca,
ordem das sections ou criar uma section nova.

## Feedback Para ServiceOS

Aprendizados deste primeiro projeto consumindo ServiceOS ficam em
[`feedback/`](feedback/). Comece por
[`feedback/layout.md`](feedback/layout.md) para decisoes sobre malha, janelas
de layout, spans e fronteira com Surface.
