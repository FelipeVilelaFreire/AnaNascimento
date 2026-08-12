# Feedback: Layout

Tipo: feedback
Autoridade: aprendizado para ServiceOS

Este projeto e o primeiro uso real da Foundation/AppShell fora do ServiceOS.
Tudo aqui deve ser tratado como evidencia pratica para melhorar o core, nao
como contrato definitivo da Ana Nascimento Page.

## Observacao Principal

A montagem de tela precisa nascer do mesmo modelo mental do Builder:

```text
Theme/Layout da empresa
  -> define a malha global
  -> colunas, gutter externo, gap entre colunas, largura/base

AppShell ou Section
  -> define a janela que ocupa dentro da malha
  -> define spans internos para brand, nav, actions, cards ou conteudo

Surface
  -> define apenas material visual
  -> solid, soft, glass, borda, radius, sombra, padding e tom
```

Ou seja: `Surface` nao deve decidir quantas colunas existem nem como os itens
quebram entre desktop, tablet e mobile. Isso pertence a `Layout`.

## Malha E Janela

Um tema poderia publicar:

```text
Desktop -> 20 colunas, gutter 32px, gap 16px
Tablet  -> 8 colunas, gutter 24px, gap 16px
Mobile  -> 4 colunas, gutter 16px, gap 12px
```

Depois AppShell ou Section decide sua janela:

```text
Header
  -> box ocupa 16 das 20 colunas no desktop
  -> content ocupa 14 das 16 colunas do box
  -> o respiro interno nasce da grade, nao de padding solto
```

Se outra empresa quiser o Header full-width, ela pode configurar a janela para
20 colunas sem mudar o componente.

Exemplos completos ficam em [`layout-example.md`](layout-example.md).

## Estrutura No Scroll

Scroll deve ser tratado como uma segunda configuracao de estrutura, nao como
Surface. Ele pode alterar comportamento, dimensoes e geometria do Header
durante a rolagem.

O modelo desejado:

```text
Header em repouso
  -> layout.base

Header durante scroll
  -> layout.scroll
  -> herda layout.base quando um campo nao for declarado
```

Isso permite compactar o Header sem misturar com material visual. A Surface no
scroll deve ser outra etapa:

```text
layout.scroll  -> tamanho, coluna, margem, altura
surface.scroll -> material, blur, transparencia, borda, sombra, raio
```

## Tokens Envolvidos

```text
Theme > Layout
  columns: desktop/tablet/mobile
  container.maxWidth
  container.gutter
  gap

Theme > Spacing
  none, 2xs, xs, sm, md, lg, xl, 2xl, 3xl

Theme > Sizing/Height
  md, lg, xl

Theme > Stroke
  borderToken: largura fisica da borda
  opacityToken: presenca visual da borda

Semi-composed > Surface Recipe
  solid.2xs -> escolhe stroke
  solid.sm  -> escolhe stroke
```

## Feedback De Surface E Stroke

O teste do Header/Footer mostrou que `stroke` nao deve ser tratado como um
unico valor visual simples. Para a marca da Ana, `stroke: "2xs"` ficou fino
demais para aparecer e `stroke: "md"` ficou forte demais, porque o nivel
padrao combina largura e opacidade ao mesmo tempo.

O modelo que parece correto para o ServiceOS e:

```text
Surface recipe escolhe o nivel semantico:
  solid.sm -> stroke: "xs"

Theme define o que esse nivel significa:
  strokes.xs.borderToken  -> "2xs"
  strokes.xs.opacityToken -> "md"
```

Assim a empresa consegue ter uma linha muito fina, mas ainda visivel:

```text
Largura:   minima, pelo borderToken
Presenca:  ajustada, pelo opacityToken
Cor:       sempre pelo Theme, por exemplo color.accent
```

Regra importante: a cor do stroke nao deve ser hardcoded. Quando o Chrome do
AppShell precisa de borda dourada, ele deve apontar para um token de tema
(`color.accent`) e deixar a Surface aplicar opacidade/largura pela receita.

## Feedback De Header Slots

Depois de Layout e Surface, o proximo nivel do AppShell deve ser `slots`.
`areas` definem onde algo fica; `slots` definem o que renderiza naquela area.

```text
areas.brand      -> lugar da marca
slots.brand      -> imagem, monograma, texto ou label composto

areas.navigation -> lugar da navegacao
slots.navigation -> lista de itens e componente visual de cada item

areas.actions    -> lugar dos utilitarios
slots.actions    -> theme toggle, WhatsApp, login, idioma, busca, menu etc.
```

O AppShell nao deve inventar estilos paralelos para esses slots. Ele deve
consumir os primitives reais do ServiceOS.

Button web existente:

```text
appearance:
  ghost, gradient, glass, inverted, outline, soft, solid, transparent

tone:
  primary, secondary, ghost, danger

iconPosition:
  start, end, only

width:
  content, full
```

Icon web existente:

```text
appearance:
  outline, filled

tone:
  neutral, muted, inverse, primary, info, success, warning, danger
```

Contrato desejado:

```text
Header layout
  -> area span, align, direction, gap

Header slots
  -> brand usa Image/label
  -> navigation usa Button/TextLink conforme config
  -> actions usa Button/Icon/Button icon-only conforme config
```

Isso permite que a Ana Nascimento Page declare somente composicao:

```js
header: {
  slots: {
    brand: {
      kind: "brand",
      presentation: "image",
      source: "app.brand",
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
          iconPosition: "only",
          icon: { name: "Moon", appearance: "outline" },
        },
        {
          id: "whatsapp",
          kind: "linkButton",
          component: "button",
          appearance: "solid",
          tone: "primary",
          iconPosition: "start",
          icon: { name: "MessageCircle", appearance: "outline" },
        },
      ],
    },
  },
}
```

No Builder, isso deve virar uma edicao de slot, nao um CSS local do Header.

Status implementado no laboratorio:

- `ServiceOS app-shell-core` agora possui `AppShellSlots` com `header` e
  `footer`.
- Header Web recebe `slots.header.brand`, `slots.header.navigation` e
  `slots.header.actions`.
- Footer Web recebe `slots.footer.brand` e `slots.footer.navigation`.
- Web isMobile recebe os mesmos slots pelo `AppShellRuntime`.
- React Native recebe o mesmo contrato; aplica brand e tom/aparencia de icone
  de navegacao onde ja existe equivalencia segura.
- A Ana Nascimento Page declara `contract.slots` e nao cria Header/Footer
  locais para essa variacao.

## Feedback Para ServiceOS

- `Theme > Layout` deve conter a malha publicada por empresa.
- `AppShell` deve consumir essa malha para Header, Footer, Sidebar,
  BottomNavigation e acoes globais.
- Cada tela ou section deve ter uma janela de layout, com spans por breakpoint.
- Product Components devem escolher seus slots de `Surface`, sem criar CSS de
  material local.
- O Builder deve expor primeiro Layout da pagina/section, depois Surface dos
  blocos.
- O runtime deve normalizar spans quando a soma das areas passar do total de
  colunas. O Builder avisa, mas o AppShell nao quebra a tela publicada.
- `Theme > Stroke` precisa permitir separar largura e opacidade. Isso evita o
  salto visual em que um nivel fica invisivel e o proximo fica forte demais.
- `Surface` deve aplicar cor por token de Theme e preservar a opacidade da
  receita. Evitar sobrescrever `resolved-border-color` sem recolocar a
  opacidade do stroke.
- `Header slots` devem consumir diretamente primitives do ServiceOS (`Button`,
  `Icon`, `Text`, `Image/Brand`) usando os nomes reais de contrato, como
  `appearance`, `tone`, `size`, `iconPosition` e `width`.
- `areas.*` precisam suportar alinhamento no eixo transversal e no eixo
  principal. O footer mostrou a necessidade de `justify`, por exemplo
  `areas.brand.justify: "between"` para manter a marca no topo da coluna e os
  BrandIcons sociais no rodape visual da mesma area.
- `Button` nao pode atravessar a fronteira interna de `BrandIcon`. Seletores
  como `.icon svg` quebram o tamanho declarado pelo componente composto; usar
  `.icon > svg` para afetar apenas SVG direto.
- `BrandIcon` deve herdar `currentColor` por padrao. Cor oficial de marca deve
  ser opcional via `colorMode: "brand"`.
- Para Button solid success, o icone branco deve vir de `Theme.successText`,
  nao de CSS local.
- A Ana Nascimento Page e laboratorio local: quando o contrato estabilizar,
  migrar `layout.box`, `layout.content`, `layout.spacing`, `layout.areas` e
  `scroll.structure` para o AppShell real do ServiceOS.
- Manter exemplos praticos em [`layout-example.md`](layout-example.md) para
  orientar melhorias futuras nos Builders.

## Regra De Fronteira

```text
Theme define valores.
Layout define estrutura.
Surface define receita visual.
Section/ProductComponent define conteudo e composicao.
```
