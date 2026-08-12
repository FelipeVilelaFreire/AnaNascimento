# Continuacao: Ana Nascimento Page Como Laboratorio ServiceOS

Tipo: continuidade
Autoridade: orientacao de retomada

Este projeto nao e apenas uma landing page. Ele esta sendo usado como o
primeiro laboratorio real para validar como uma aplicacao nova deve nascer
consumindo o ServiceOS por contrato, sem recriar Header, Footer, Button,
Surface, Icon, BrandIcon ou AppShell localmente.

O objetivo pratico e construir a landing da Ana Nascimento com qualidade visual,
mas o objetivo maior e usar cada atrito encontrado aqui para melhorar o
ServiceOS, os Builders e o futuro manifest.

## Visao Do Projeto

Estrutura desejada:

```text
AnaNascimentoPage
  frontend
    landingpage
  bats
  docs
    feedback
  AGENTS.md
  continuacao.md
```

O produto AnaNascimentoPage deve guardar:

- conteudo da advogada;
- imagens e assets da marca;
- contrato da landing;
- configuracao local do tema;
- docs de feedback.

O ServiceOS deve guardar:

- primitives reutilizaveis;
- AppShell generico;
- Button, Icon, BrandIcon, Surface, Text;
- contratos reutilizaveis;
- comportamento cross-platform;
- LibraryUI e exemplos de catalogo.

## Modelo Mental Que Estamos Testando

```text
Theme
  -> define valores fisicos e semanticos
  -> cores, spacing, stroke, radius, sizing, typography, layout grid

Semi-composed
  -> define receitas
  -> surface solid.2xs, solid.sm, button levels, icon levels

UI
  -> define como cada componente consome as receitas
  -> Button xs, Button xl, BrandIcon, Surface, Text

AppShell
  -> consome UI e Layout
  -> Header, Footer, Drawer, FloatingAction

Aplicacao
  -> declara contrato
  -> passa conteudo
  -> nao recria a casca
```

O contrato da Ana deve ser o mais simples possivel:

```js
footer: {
  surface: "solid.2xs",
  layout: { ... },
  social: {
    button: {
      appearance: "outline",
      tone: "secondary",
      size: "lg",
      iconPosition: "only",
      geometry: { radius: 999 },
    },
  },
}
```

Quando um detalhe visual for especifico, ele deve entrar como custom explicito
no contrato, por exemplo `geometry.radius`, e nao como CSS solto no componente.

## Linha Do Que Aconteceu

1. A landing comecou separada, em Next, mas importando a biblioteca como a
   direcao do MyLife: `theme.js`, `semicomposed.js`, `ui.js`, contrato e
   sections.

2. O primeiro problema foi a dependencia `@serviceos/ui-web`. A landing nao
   conseguia resolver o pacote, entao o projeto passou a apontar para o source
   real do ServiceOS via aliases. Isso confirmou que o laboratorio precisa
   consumir o ServiceOS de verdade, nao uma copia local.

3. O AppShell local foi ficando confuso. A decisao foi separar a aplicacao do
   runtime: a Ana declara contrato, o ServiceOS renderiza Header/Footer/CTA.

4. A parte de Layout mostrou que `box`, `content`, `areas`, `span`, `align`,
   `direction`, `spacing` e `scroll.structure` precisam ser capacidades do
   AppShell/Builder, nao estilos manuais.

5. A Surface mostrou outro aprendizado: `surface: "solid.2xs"` e
   `surface: "solid.sm"` precisam resolver receitas completas. A aplicacao nao
   deveria declarar blur, opacidade, borda e radius campo por campo quando uma
   receita ja expressa isso.

6. O stroke do Header/Footer ficou ora invisivel, ora forte demais. Isso
   mostrou que `stroke` precisa separar largura fisica e presenca visual:
   `borderToken` e `opacityToken`.

7. Os botoes do Header/Footer ficaram inconsistentes. A conclusao foi que todo
   Button precisa consumir a mesma receita de UI: `appearance`, `tone`, `size`,
   `iconPosition`, `width`, `geometry` e `hover` devem ser o contrato comum.

8. O WhatsApp e redes sociais abriram a necessidade de `BrandIcon`. A solucao
   correta foi criar BrandIcon no ServiceOS/Foundation, expor na LibraryUI e
   usar no AppShell.

9. O BrandIcon primeiro nasceu com cor propria por padrao. Isso quebrou o
   comportamento dentro de Button, porque o icone nao herdava o branco do
   botao. A cor base foi ajustada para `inherit`; a cor oficial da marca fica
   em `colorMode: "brand"`.

10. O tamanho do BrandIcon tambem parecia nao obedecer. O bug estava no Button:
    `.icon svg` afetava qualquer SVG dentro do slot, inclusive o SVG interno
    do BrandIcon. O seletor foi ajustado para `.icon > svg`, preservando
    icones diretos como Lucide e deixando componentes compostos controlarem
    seu proprio tamanho.

## Erros Que Nao Devem Se Repetir

- Nao criar Header/Footer local quando o problema e AppShell generico.
- Nao resolver cor de botao social no CSS da landing.
- Nao usar um icone hardcoded para marcas como WhatsApp, Instagram ou LinkedIn.
- Nao deixar Button invadir internamente componentes compostos com seletor CSS
  amplo.
- Nao deixar `successText` ser derivado como verde escuro quando o uso esperado
  e um Button success solid com icone branco.
- Nao usar `columnCount` para Footer quando a necessidade real e `areas.*.span`.
- Nao misturar `Surface` com `Layout`: Surface e material; Layout e estrutura.
- Nao tratar zoom ou largura da janela como excecao local. A grade precisa
  continuar independente e previsivel.

## Estado Atual Do Laboratorio

O laboratorio ja tem:

- AppShell por contrato;
- Header com layout, slots, scroll e surface;
- Footer com areas e botoes sociais via BrandIcon;
- FloatingAction via Button + BrandIcon;
- Button com `tone: "success"`;
- BrandIcon no ServiceOS Foundation Web/Native e facades;
- LibraryUI com BrandIcon/Text/Icon mais documentados;
- feedback em `docs/feedback`.

Ainda falta amadurecer:

- subslots explicitos do Footer, por exemplo `brand.logo`, `brand.text`,
  `brand.social`;
- Builder editando esses contratos;
- paridade completa do contrato novo no AppShell principal;
- remover detalhes locais de CSS quando virarem capacidades maduras do
  ServiceOS;
- validar visualmente desktop, webIsMobile e mobile com o runtime final.

## Como Continuar

Proxima frente recomendada:

```text
Footer slots
  -> brand.logo
  -> brand.text
  -> brand.social
  -> navigation.items
  -> practiceAreas.items

Depois:
  -> Header slots completos
  -> Builder fields
  -> manifest
  -> runtime principal do ServiceOS
```

Sempre que uma melhoria parecer reutilizavel para outras empresas, documentar
primeiro em `docs/feedback`, implementar no ServiceOS e consumir na landing por
contrato.

