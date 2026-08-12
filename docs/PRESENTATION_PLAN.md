# Presentation Plan

Tipo: guia
Autoridade: complementar

Este documento registra a separacao de apresentacao da landing para facilitar a
V1 local e preparar uma futura migracao para ServiceOS Builder/AppShell.

## Ordem De Trabalho

```text
1. AppShell
   -> header, navegacao, footer, CTA flutuante, modo claro/escuro
   -> cada parte chamada separadamente por config

2. Organizacao geral das sections
   -> ordem, visibilidade, anchors, modo visual de cada bloco

3. Cada section
   -> renderer, dados consumidos, icones, layout interno e variacoes
```

## Arquivos Da V1

```text
frontend/landingpage/src/contracts/appShell.contract.js
ServiceOS/frontend/foundation/app-shell-web/src/ContractShell
frontend/landingpage/src/presentation/sectionsLayout.presentation.js
frontend/landingpage/src/presentation/sectionRegistry.jsx
```

## Como Mexer

Para mudar a casca:

```text
src/contracts/appShell.contract.js
```

Para mudar o runtime da casca:

```text
ServiceOS/frontend/foundation/app-shell-web/src/ContractShell
```

Para mudar ordem ou esconder uma section:

```text
src/presentation/sectionsLayout.presentation.js
```

Para criar uma section nova:

```text
src/sections/NovaSection.jsx
src/sections/index.js
src/presentation/sectionRegistry.jsx
src/presentation/sectionsLayout.presentation.js
```

## Futuro ServiceOS

Esta organizacao deve virar aprendizado para:

- AppShell como dono do chrome reutilizavel.
- Header, Footer e acoes globais ativados separadamente por config.
- Surface/Theme/UI como donos de visual reutilizavel.
- Sections como blocos conhecidos, configurados por dados.
- Builder editando ordem, visibilidade e configs sem JSX artesanal.

## Fronteira Atual

AnaNascimentoPage deve chamar a casca por contrato. A pagina nao monta Header,
Footer ou CTA flutuante diretamente.

```text
AnaNascimentoPage
  -> contracts/appShell.contract.js
  -> content/*
  -> presentation/sections*

ServiceOS/frontend/foundation/app-shell-web/src/ContractShell
  -> runtime do AppShell por contrato
```
