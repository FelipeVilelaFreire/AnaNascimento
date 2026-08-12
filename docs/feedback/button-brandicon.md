# Feedback: Button, Icon E BrandIcon

Tipo: feedback
Autoridade: aprendizado para Foundation/UI

Este documento registra a direcao atual para `Button`, `Icon` e `BrandIcon`.
Esses componentes precisam ser simples de chamar pela aplicacao e fortes o
suficiente para o Builder.

## Fronteira Entre Icon E BrandIcon

`Icon` representa simbolos do sistema:

```text
menu, search, moon, sun, close, arrow, check, warning
```

`BrandIcon` representa marcas:

```text
whatsapp, instagram, facebook, linkedin, github, youtube, google
```

Ambos podem ficar em Foundation/Semi-composed, mas ambos precisam aparecer na
LibraryUI para o usuario ver tamanho, estado, tom, skeleton e uso dentro de
Button.

## API Desejada

```js
<BrandIcon name="whatsapp" size="2xl" colorMode="currentColor" />
<BrandIcon name="instagram" size="sm" colorMode="brand" />
```

Leitura:

```text
name      -> qual marca
size      -> token semantico ou numero custom
colorMode -> currentColor ou brand
```

`currentColor` e o padrao correto para composicao em Button. O icone herda a
cor do Button.

`brand` e usado quando a intencao visual e mostrar a cor oficial da marca.

## Button Com BrandIcon

Contrato ideal:

```js
button: {
  appearance: "solid",
  tone: "success",
  size: "xl",
  iconPosition: "only",
  icon: {
    name: "whatsapp",
    colorMode: "currentColor",
    size: "2xl",
  },
  geometry: {
    radius: 12,
  },
}
```

O Button deve controlar:

- altura;
- padding;
- radius;
- transition;
- appearance;
- tone;
- width;
- estado de hover/disabled/loading.

O BrandIcon deve controlar:

- glyph;
- size;
- colorMode;
- label/accessibility.

## Erro Encontrado

O CSS do Button usava:

```css
.icon svg
```

Isso afetava o SVG interno do BrandIcon, mesmo quando o BrandIcon declarava
`size: "3xl"`.

Correcao:

```css
.icon > svg
```

Assim o Button continua dimensionando icones diretos, mas nao invade
componentes compostos.

## Regra Para Tokens De Cor

O WhatsApp flutuante nao deve declarar branco no componente.

Fluxo correto:

```text
Button
  appearance: solid
  tone: success

Surface solid success
  background: color.success
  color: color.successText

BrandIcon
  colorMode: currentColor
  color: inherit
```

Na Ana Nascimento Page:

```js
success: "#3f8d57",
successText: "#ffffff",
```

Assim o icone fica branco por token de Theme.

## Tamanhos

O tamanho visual do BrandIcon pode ser diferente do tamanho do Button:

```text
button.size = xl
icon.size   = 2xl
```

Isso e valido porque o botao define o frame clicavel e o BrandIcon define o
glyph. O Builder deve permitir configurar os dois quando o slot tiver icone.

## LibraryUI

BrandIcon deve aparecer na LibraryUI com:

- catalogo de marcas;
- tamanhos `2xs` ate `3xl`;
- `colorMode: currentColor`;
- `colorMode: brand`;
- estado disabled;
- skeleton;
- exemplo dentro de Button.

O objetivo e que futuras landings nunca precisem pesquisar novamente como
renderizar WhatsApp, Instagram ou LinkedIn.

