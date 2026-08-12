# Layout Examples

Tipo: exemplo
Autoridade: referencia pratica para evoluir Builder/AppShell

Este arquivo guarda chamadas reais e candidatas para o contrato de Layout no
ServiceOS. Ele complementa [`layout.md`](layout.md).

## Theme Layout Base

Exemplo de malha publicada pela empresa:

```js
theme: {
  layout: {
    columns: {
      desktop: 20,
      tablet: 8,
      mobile: 4,
    },
    container: {
      maxWidth: "100%",
      gutter: {
        desktop: 32,
        tablet: 24,
        mobile: 16,
      },
    },
    gap: {
      desktop: 16,
      tablet: 16,
      mobile: 12,
    },
  },
}
```

## Theme Stroke Da Marca

Exemplo aprendido na Ana Nascimento Page:

```js
theme: {
  strokes: {
    xs: {
      borderToken: "2xs",
      opacityToken: "md",
    },
  },
}
```

Leitura:

```text
stroke xs
  -> largura minima pelo borderToken 2xs
  -> presenca visual media pelo opacityToken md
  -> cor continua vindo do Theme, por exemplo color.accent
```

Esse ajuste evita o salto visual entre `2xs` invisivel e `md` forte demais.

## AppShell Header Atual

Usado na Ana Nascimento Page como laboratorio:

```js
header: {
  surface: "solid.sm",
  tone: "primary",
  borderEdges: "bottom",
  layout: {
    grid: "company",
    container: {
      maxWidth: "100%",
    },
    box: {
      columns: {
        desktop: 20,
        tablet: 8,
        mobile: 4,
      },
    },
    content: {
      columns: {
        desktop: 16,
        tablet: 8,
        mobile: 4,
      },
    },
    spacing: {
      marginX: "none",
      marginY: "none",
      paddingX: "none",
      paddingY: "2xs",
      height: "xl",
    },
    areas: {
      brand: {
        span: { desktop: 5, tablet: 4, mobile: 2 },
      },
      navigation: {
        span: { desktop: 6, tablet: 0, mobile: 0 },
      },
      actions: {
        span: { desktop: 5, tablet: 4, mobile: 2 },
      },
    },
  },
  drawer: {
    surface: "solid.sm",
    tone: "primary",
    borderEdges: "left",
    radiusCorners: "left",
  },
}
```

Surface tambem entra por contrato simples:

```text
surface: "solid.sm"
```

A leitura e `material.level`. O Header usa a mesma resolucao do AppShell que o
Footer: o ServiceOS resolve fundo, borda, raio, elevacao, blur e opacidade a
partir de `theme + semicomposed + UI`. Se a peca precisa de borda, escolha um
nivel/material que tenha stroke na receita, por exemplo `solid.sm` ou
`outline.2xs`.

Na Ana, `solid.sm` aponta para `stroke: "xs"` e o Theme redefine esse `xs`
como borda muito fina, mas visivel.

Leitura visual:

```text
Grade da empresa desktop: 20 colunas
Header box desktop:       20 colunas
Header content desktop:   16 colunas

[ Header box 20 cols ]
[ 2 cols respiro ][ conteudo 16 cols ][ 2 cols respiro ]
```

## Header Compacto No Scroll

Scroll altera estrutura. Surface no scroll fica como capacidade futura do
AppShell/Builder, mas este exemplo mantem o mesmo material durante a rolagem:

```js
header: {
  scroll: {
    behavior: "move",
    transition: "slow",
    startAfter: {
      mode: "immediate",
      offset: "none",
    },
    structure: {
      height: {
        mode: "decrease",
        target: "lg",
      },
      paddingX: {
        mode: "none",
      },
      paddingY: {
        mode: "decrease",
        target: "none",
      },
      marginX: {
        mode: "none",
      },
      marginTop: {
        mode: "none",
      },
    },
  },
}
```

Resultado esperado:

```text
Altura:       XL -> LG
Padding X:    sem alteracao
Padding Y:    2XS -> NONE
Margem X:     sem alteracao
Margem top:   sem alteracao
Transicao:    lenta
Inicio:       imediato
Surface:      solid.sm sem troca
```

## Header Slots

Exemplo candidato para a proxima etapa do AppShell. Areas continuam cuidando de
layout; slots cuidam do conteudo e dos primitives ServiceOS usados:

```js
header: {
  slots: {
    brand: {
      kind: "brand",
      presentation: "image",
      source: "app.brand",
      logoAsHome: true,
      fallback: "monogram-label",
    },
    navigation: {
      kind: "navigation",
      source: "app.navigation",
      item: {
        component: "button",
        appearance: "ghost",
        tone: "secondary",
        size: "sm",
      },
    },
    actions: {
      kind: "actions",
      items: [
        {
          id: "themeToggle",
          kind: "themeToggle",
          component: "button",
          appearance: "outline",
          tone: "secondary",
          iconPosition: "only",
          icon: {
            source: "themeMode",
            appearance: "outline",
            tone: "inverse",
          },
        },
        {
          id: "whatsapp",
          kind: "linkButton",
          component: "button",
          appearance: "solid",
          tone: "primary",
          size: "sm",
          iconPosition: "start",
          icon: {
            source: "MessageCircle",
            appearance: "outline",
          },
          href: "contact.whatsappHref",
          label: "WhatsApp",
        },
      ],
    },
  },
}
```

Nomes reais ja existentes no ServiceOS Web:

```text
Button appearance:
  ghost, gradient, glass, inverted, outline, soft, solid, transparent

Button tone:
  primary, secondary, ghost, danger

Button iconPosition:
  start, end, only

Icon appearance:
  outline, filled
```

## Header Editorial Flutuante

Exemplo futuro, nao usado agora:

```js
header: {
  layout: {
    grid: "company",
    container: {
      maxWidth: "100%",
    },
    box: {
      columns: { desktop: 16, tablet: 8, mobile: 4 },
    },
    content: {
      columns: { desktop: 14, tablet: 8, mobile: 4 },
    },
    spacing: {
      marginX: "none",
      marginY: "2xl",
      paddingX: "none",
      paddingY: "2xs",
      height: "xl",
    },
    areas: {
      brand: { span: { desktop: 4, tablet: 4, mobile: 2 } },
      navigation: { span: { desktop: 6, tablet: 0, mobile: 0 } },
      actions: { span: { desktop: 4, tablet: 4, mobile: 2 } },
    },
  },
}
```

Leitura visual:

```text
[ 2 cols fora ][ Header box 16 cols ][ 2 cols fora ]

Dentro do box:
[ 1 col respiro ][ conteudo 14 cols ][ 1 col respiro ]
```

## AppShell Footer Atual

Usado na Ana Nascimento Page como laboratorio:

```js
footer: {
  surface: "solid.2xs",
  tone: "primary",
  borderEdges: "top",
  layout: {
    grid: "company",
    container: {
      maxWidth: "100%",
    },
    box: {
      columns: {
        desktop: 20,
        tablet: 8,
        mobile: 4,
      },
    },
    content: {
      columns: {
        desktop: 10,
        tablet: 8,
        mobile: 4,
      },
    },
    spacing: {
      marginX: "none",
      marginY: "none",
      paddingX: "none",
      paddingY: "2xl",
      areaGap: "lg",
      height: "auto",
    },
    areas: {
      brand: {
        span: { desktop: 3, tablet: 8, mobile: 4 },
        align: { desktop: "center", tablet: "center", mobile: "start" },
        justify: { desktop: "between", tablet: "start", mobile: "start" },
        direction: "column",
        spacing: {
          stackGap: "md",
          itemGap: "sm",
        },
      },
      navigation: {
        span: { desktop: 3, tablet: 4, mobile: 4 },
        align: "start",
        direction: "column",
        spacing: {
          stackGap: "sm",
        },
      },
      practiceAreas: {
        span: { desktop: 3, tablet: 4, mobile: 4 },
        align: "start",
        direction: "column",
        spacing: {
          stackGap: "sm",
        },
      },
    },
  },
}
```

Na Ana, `solid.2xs` tambem aponta para `stroke: "xs"` para manter o Footer com
linha dourada fina e visivel.

## AppShell Floating Action

O botao flutuante tambem deve consumir a mesma traducao de Surface do
AppShell, em vez de declarar cor/sombra local:

```js
floatingAction: {
  enabled: true,
  action: "whatsapp",
  surface: "transparent.2xs",
  tone: "success",
  borderEdges: "none",
  button: {
    appearance: "solid",
    tone: "success",
    size: "xl",
    iconPosition: "only",
    icon: {
      colorMode: "currentColor",
      size: "2xl",
    },
    geometry: {
      radius: 12,
    },
  },
}
```

Leitura visual:

```text
FloatingAction surface
  -> wrapper transparente, sem borda

Button
  -> solid success
  -> frame clicavel xl
  -> radius custom 12 via contrato

BrandIcon
  -> whatsapp
  -> currentColor
  -> size 2xl

Theme
  -> success define o verde
  -> successText define o branco do icone
```

## Footer Grid Reading

```text
Grade da empresa desktop: 20 colunas
Footer box desktop:       20 colunas
Footer content desktop:   10 colunas

[ Footer box 20 cols ]
[ 5 cols respiro ][ conteudo 10 cols ][ 5 cols respiro ]

Dentro do content:
[ brand 3 ][ navigation 3 ][ practiceAreas 3 ][ 1 col respiro ]
```

O ponto importante e que o Footer nao declara `columnCount`. Ele declara areas
nomeadas e cada area informa quanto ocupa dentro do content.

Spacing fica em dois niveis:

```text
layout.spacing.areaGap
  -> espaco entre areas grandes

areas.*.spacing.stackGap
  -> espaco entre itens empilhados dentro da area

areas.*.spacing.itemGap
  -> espaco entre itens lado a lado dentro da area
```

## Section Cards

Exemplo para uma section de cards:

```js
practiceAreas: {
  layout: {
    grid: "company",
    box: {
      columns: { desktop: 16, tablet: 8, mobile: 4 },
    },
    content: {
      columns: { desktop: 15, tablet: 8, mobile: 4 },
    },
    item: {
      span: { desktop: 5, tablet: 4, mobile: 4 },
    },
    spacing: {
      marginX: "none",
      marginY: "none",
      paddingX: "none",
      paddingY: "none",
    },
  },
  surfaces: {
    card: "legal.primaryCard",
  },
}
```

## Builder Notes

Controles desejados:

```text
Layout
  Largura da caixa na grade
  Ocupacao interna na grade
  Margem lateral externa
  Margem vertical externa
  Padding lateral interno
  Padding vertical interno
  Altura

Estrutura no Scroll
  Comportamento no scroll
  Transicao visual
  Iniciar apos
  Altura
  Padding lateral interno
  Padding vertical interno
  Margem lateral externa
  Margem superior externa
```

Valores devem vir de tokens semanticos:

```text
none, 2xs, xs, sm, md, lg, xl, 2xl, 3xl, pageGutter
```

## Runtime Protection

O runtime deve proteger a tela quando os spans configurados nao cabem em
`content.columns`.

Exemplo:

```js
content: {
  columns: { desktop: 16 },
},
areas: {
  brand: { span: { desktop: 8 } },
  navigation: { span: { desktop: 8 } },
  actions: { span: { desktop: 6 } },
}
```

Pedido total:

```text
8 + 8 + 6 = 22
```

Disponivel:

```text
16 colunas
```

Resultado normalizado:

```text
brand      6
navigation 6
actions    4
```

Regra:

```text
span = 0
  -> area oculta nesse breakpoint

soma <= content.columns
  -> usa como configurado

soma > content.columns
  -> normaliza proporcionalmente entre areas visiveis

mais areas visiveis do que colunas
  -> mantem as primeiras areas que cabem com 1 coluna
  -> oculta o restante naquele breakpoint
```

## AppShell Slots

Exemplo de contrato que uma nova Landing pode declarar sem criar AppShell
local:

```js
slots: {
  header: {
    brand: {
      kind: "brand",
      source: "app.brand",
      presentation: "image",
      logoAsHome: true,
      fallback: "monogram-label",
    },
    navigation: {
      kind: "navigation",
      source: "app.navigation",
      item: {
        component: "button",
        appearance: "transparent",
        tone: "secondary",
        size: "sm",
        width: "content",
      },
    },
    actions: {
      kind: "actions",
      items: [
        { id: "theme-toggle", kind: "themeToggle", appearance: "outline", iconPosition: "only" },
      ],
    },
  },
  footer: {
    brand: {
      kind: "brand",
      source: "app.brand",
      presentation: "mark-label",
    },
    navigation: {
      kind: "navigation",
      source: "app.navigation",
      item: {
        component: "button",
        appearance: "transparent",
        tone: "secondary",
        size: "sm",
      },
    },
  },
}
```

O Builder futuro deve editar esse contrato, nao uma copia visual de Header ou
Footer dentro da aplicacao.
