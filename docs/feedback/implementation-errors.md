# Feedback: Incidentes E Erros Do Laboratorio

Tipo: feedback
Autoridade: evidencia pratica para ServiceOS

Este documento registra os erros encontrados enquanto a Ana Nascimento Page
passou a consumir o ServiceOS por contrato. A ideia nao e culpar uma decisao,
mas transformar cada atrito em regra para Builder, AppShell, Foundation e
LibraryUI.

## 1. Pacote ServiceOS Nao Resolvido

Erro observado:

```text
Module not found: Can't resolve '@serviceos/ui-web'
```

Causa:

```text
A landing tentava importar o pacote como se ele ja estivesse publicado ou
instalado corretamente, mas o laboratorio ainda precisava consumir o source
local do ServiceOS.
```

Aprendizado:

```text
Enquanto o pacote nao estiver publicado, a aplicacao laboratorio precisa de uma
facade/alias claro apontando para o source real. O produto nao deve copiar
componentes para contornar o problema.
```

Regra para ServiceOS:

```text
Publicacao da biblioteca e aliases locais precisam ser parte explicita do fluxo
de novas aplicacoes. O Builder/CLI futuro deve saber criar esse caminho.
```

## 2. AppShell Local Confundindo Fronteira

Erro observado:

```text
Header/Footer comecaram a aparecer como arquivos da propria landing.
```

Causa:

```text
A aplicacao precisava testar rapidamente a tela, mas isso confundia o que era
produto e o que era capacidade generica.
```

Aprendizado:

```text
Produto declara contrato. ServiceOS renderiza a casca.
```

Regra para ServiceOS:

```text
Header, Footer, Drawer, Sidebar, BottomTabBar, FloatingAction e Scroll devem
nascer no AppShell. A aplicacao so define valores, slots e conteudo.
```

## 3. Layout Confundido Com Surface

Erro observado:

```text
Ao tentar arrumar Header/Footer, surgia a tentacao de usar Surface para resolver
colunas, respiro, altura e alinhamento.
```

Causa:

```text
Surface tinha varias propriedades visuais e parecia ser o lugar natural para
resolver tudo.
```

Aprendizado:

```text
Surface e material visual. Layout e estrutura.
```

Regra para ServiceOS:

```text
box.columns, content.columns, areas.span, align, justify, direction, gap,
padding e scroll.structure pertencem ao Layout/AppShell, nao ao Surface.
```

## 4. Stroke Invisivel Ou Forte Demais

Erro observado:

```text
Alguns niveis de stroke nao apareciam. Outros ficavam fortes demais.
```

Causa:

```text
Um unico nivel estava carregando largura e intensidade visual ao mesmo tempo.
```

Aprendizado:

```text
O stroke precisa separar largura fisica e opacidade/presenca.
```

Regra para ServiceOS:

```text
Theme.strokes.xs.borderToken  -> largura
Theme.strokes.xs.opacityToken -> presenca
Surface solid.sm              -> escolhe a receita
Theme color.accent            -> fornece a cor
```

## 5. Button Inconsistente Entre Header E Footer

Erro observado:

```text
Botao de WhatsApp, theme toggle e navegacao pareciam componentes diferentes.
```

Causa:

```text
Alguns detalhes eram tratados localmente, outros vinham do Button.
```

Aprendizado:

```text
Button precisa ser o ponto unico de altura, padding, radius, transition,
appearance, tone e iconPosition.
```

Regra para ServiceOS:

```text
Todo botao deve declarar apenas:
appearance, tone, size, iconPosition, width, geometry custom opcional.
```

## 6. Cor Do WhatsApp Flutuante

Erro observado:

```text
O botao ficava verde, mas o BrandIcon continuava verde escuro.
```

Causas:

```text
1. BrandIcon tinha color base propria em vez de herdar currentColor.
2. successText era derivado como verde escuro no tema da landing.
```

Correcoes:

```text
BrandIcon base -> color: inherit
floatingAction.button.icon.colorMode -> currentColor
anaTheme.successText -> #ffffff
```

Aprendizado:

```text
O branco nao deve ser hardcoded no BrandIcon. Ele deve vir do token de texto do
Button solid success.
```

Regra para ServiceOS:

```text
BrandIcon colorMode:
  currentColor -> herda do componente pai
  brand        -> usa cor oficial da marca
```

## 7. Tamanho Do BrandIcon Nao Mudava

Erro observado:

```text
Trocar icon.size de 2xl para 3xl parecia nao fazer efeito.
```

Causa:

```text
O CSS do Button usava `.icon svg`, afetando qualquer SVG dentro do slot. Como
BrandIcon renderiza um span com svg interno, o Button esmagava o tamanho
declarado pelo BrandIcon.
```

Correcao:

```text
.icon svg   -> amplo demais
.icon > svg -> so SVG direto do slot
```

Aprendizado:

```text
Primitives nao podem atravessar a fronteira interna de componentes compostos.
```

Regra para ServiceOS:

```text
Button pode dimensionar icone direto. Componentes como BrandIcon devem manter
seu proprio contrato de size.
```

## 8. Footer Sem Mesma Altura Visual

Erro observado:

```text
As redes sociais da marca ficavam centralizadas no meio da primeira coluna,
enquanto as outras colunas tinham listas verticais.
```

Causa:

```text
Area do footer tinha align e direction, mas nao tinha justify.
```

Correcao:

```text
areas.brand.justify: "between"
```

Aprendizado:

```text
Area precisa controlar eixo principal e eixo transversal.
```

Regra para ServiceOS:

```text
areas.* deve suportar:
span, align, justify, direction, wrap, spacing.stackGap, spacing.itemGap.
```

## 9. Padding Do Footer Com Sensacao Ruim

Erro observado:

```text
Footer ficou com pouco respiro em algumas tentativas e alto demais em outras.
```

Causa:

```text
O ajuste estava sendo feito por tentativa, sem uma decisao clara entre
layout.spacing.paddingY e conteudo interno.
```

Aprendizado:

```text
Respiro externo/interno de AppShell precisa vir de tokens de Layout.
```

Regra para ServiceOS:

```text
Footer deve usar paddingY semantico por breakpoint e areas devem ter seus gaps
proprios. Nao usar margem local em filhos para resolver altura geral.
```

## Checklist Para Nao Repetir

- Antes de criar componente local, perguntar se e ServiceOS.
- Antes de hardcodar cor, procurar token no Theme.
- Antes de hardcodar radius, usar `geometry` custom no contrato.
- Antes de mexer em Surface, confirmar se o problema e material ou layout.
- Antes de usar CSS amplo em primitive, verificar se ele invade componentes
  compostos.
- Sempre registrar o erro em feedback quando ele revelar uma regra de produto.

