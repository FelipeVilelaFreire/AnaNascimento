# AnaNascimentoPage - comandos locais

Scripts Windows relativos ao projeto.

## Setup

Execute:

```bat
bats\setup.bat
```

Instala as dependencias da landing em `frontend\landingpage`.

Depois de mudar versoes de Next/React no `package.json`, rode este script para
atualizar `node_modules` e `package-lock.json`.

## Desenvolvimento

Execute:

```bat
bats\dev.bat
```

Sobe a landing Next.js com Webpack em:

```txt
http://localhost:3017
```

Se existir cache antigo do Next com `pages/_document`, o script remove `.next`
antes de subir o servidor. Essa pasta e gerada pelo Next e nao guarda codigo da
landing.

## Build

Execute:

```bat
bats\build.bat
```

Roda `npm run build` na landing.

## Observacao

A V1 importa a Foundation do ServiceOS por dependencia local `file:`. Por isso,
mantenha `ServiceOS/` no mesmo nivel de `AnaNascimentoPage/` dentro da pasta de
programacao enquanto estivermos em localhost.
