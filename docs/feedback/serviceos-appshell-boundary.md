# ServiceOS AppShell Boundary

Tipo: feedback
Autoridade: aprendizado da Ana Nascimento Page

## Decisao

AnaNascimentoPage deve consumir AppShell por contrato, nao montando Header,
Footer ou CTA flutuante diretamente em `LandingPage.jsx`.

## Estrutura Local Atual

```text
frontend/landingpage/src/contracts/appShell.contract.js
  -> contrato editavel da empresa
  -> header, footer, floatingAction, layout, scroll, areas e slots

ServiceOS/frontend/foundation/app-shell-web/src/ContractShell
  -> runtime do AppShell por contrato
  -> renderiza Header, Footer e FloatingAction a partir do contrato

frontend/landingpage/src/LandingPage.jsx
  -> importa ContractAppShell de @serviceos/app-shell-web/contract-shell
  -> passa contract, brand, navigation, content e children
```

## Direcao Para O ServiceOS

O runtime em `ServiceOS/frontend/foundation/app-shell-web/src/ContractShell` e
o laboratorio real do pacote. Quando o contrato estiver maduro, ele pode ser
fundido ao AppShellRuntime principal ou promovido como contrato V2 estavel.

```text
ServiceOS AppShell
  -> possui as capacidades genericas
  -> Header/Footer/CTA/slots/layout/surface/scroll

Produto
  -> declara contrato
  -> fornece conteudo e rotas
  -> nao recria componentes genericos da casca
```

## Regra

Se uma nova necessidade de Header ou Footer for generica para outras empresas,
ela deve nascer no runtime candidato e depois migrar para ServiceOS. Se for
conteudo especifico da Ana Nascimento, fica em `content` ou no contrato da
empresa.

## Aprendizado Recente

O Footer mostrou que a fronteira nao e apenas "componente local vs componente
ServiceOS". Tambem existe fronteira entre:

```text
AppShell runtime
  -> sabe renderizar areas e slots genericos

Contrato da aplicacao
  -> diz qual area existe, qual span ocupa, qual Button usa e qual BrandIcon
     aparece

Theme da aplicacao
  -> define cores como success e successText
```

Exemplo correto:

```js
floatingAction: {
  action: "whatsapp",
  button: {
    appearance: "solid",
    tone: "success",
    iconPosition: "only",
    icon: {
      colorMode: "currentColor",
      size: "2xl",
    },
  },
}
```

O runtime nao deve conhecer "WhatsApp verde com icone branco" como estilo
especial. Ele deve apenas montar Button + BrandIcon usando os tokens e slots
declarados.
