# Continuacao 2: Landing Ana Nascimento Como Entrega + Laboratorio ServiceOS

Tipo: continuidade
Autoridade: retomada apos checkpoint inicial no GitHub

Este arquivo continua `continuacao.md`. A ideia agora mudou um pouco de ritmo:
continuamos usando a AnaNascimentoPage como laboratorio ServiceOS, mas aceitamos
um pouco mais de CSS/local hardcoded para entregar a landing inteira primeiro.
Depois, em cima da tela real pronta, extraimos o que virar contrato, token,
Surface, Button, Section, AppShell ou Builder.

## Aviso Importante: Momento Atual Nao E A Arquitetura Final

O proximo chat deve entender que muita coisa feita agora pertence ao momento de
entrega visual da landing, nao ao desenho final do ServiceOS.

A prioridade imediata e:

```text
fazer a landing ficar bonita, completa e parecida com a referencia real
```

Por isso, neste momento e aceitavel:

- usar CSS local em `globals.css`;
- usar composicao especifica dentro das sections;
- usar assets locais direto em `public/assets/images`;
- ajustar max-width, padding, overlay, imagem e grid section por section;
- escrever regras visuais especificas da Ana para aproximar do site original;
- manter alguns detalhes hardcoded enquanto a tela ainda esta nascendo.

Isso nao significa que essas decisoes sao definitivas.

Depois que a landing estiver boa visualmente, o trabalho correto sera revisar
esses hardcodes e decidir o que deve virar capacidade reutilizavel do ServiceOS:

```text
hardcoded de entrega agora
  -> observar padrao repetido
  -> transformar em token/receita/contrato
  -> mover para ServiceOS quando fizer sentido
  -> consumir novamente pela Ana via contrato simples
```

Exemplos do que provavelmente sera promovido depois:

- presets de section azul/branca;
- background com imagem + overlay;
- reveal no scroll;
- cards editoriais de area juridica;
- hero editorial com pessoa/foto;
- CTA juridico;
- espacamentos padrao de landing institucional;
- variantes de AppShell para landing editorial;
- footer institucional com logo, redes e listas;
- contratos de imagem/asset por section.

Exemplos do que pode ficar local por mais tempo:

- textos da Dra. Ana;
- ordem exata das secoes;
- imagens especificas dela;
- ajustes finos de composicao para essa marca;
- links de WhatsApp, mapa, telefone e e-mail.

Regra principal:

```text
Agora: entregar a tela.
Depois: limpar, tokenizar e promover para ServiceOS.
```

Nao tentar resolver todo o Builder/manifest antes da landing existir de forma
boa. A landing pronta sera a evidencia real para melhorar o ServiceOS.

## Repositorio

O projeto foi inicializado como repo proprio e publicado em:

```text
https://github.com/FelipeVilelaFreire/AnaNascimento.git
```

Branch:

```text
main
```

Commit base publicado:

```text
ad5f773 chore: add ana nascimento landing baseline
```

Depois desse commit existem mudancas locais ainda nao commitadas.

## Estado Atual Local

Arquivos principais alterados depois do checkpoint:

```text
frontend/landingpage/app/globals.css
frontend/landingpage/app/layout.jsx
frontend/landingpage/src/LandingPage.jsx
frontend/landingpage/src/content/pt-BR.js
frontend/landingpage/src/foundation/appShell.js
frontend/landingpage/src/foundation/theme.js
frontend/landingpage/src/foundation/ui.js
frontend/landingpage/src/presentation/sectionRegistry.jsx
frontend/landingpage/src/presentation/sectionsLayout.presentation.js
frontend/landingpage/src/sections/AboutSection.jsx
frontend/landingpage/src/sections/ContactSection.jsx
frontend/landingpage/src/sections/FaqSection.jsx
frontend/landingpage/src/sections/HeroSection.jsx
frontend/landingpage/src/sections/ProcessSection.jsx
frontend/landingpage/src/sections/SectionShell.jsx
frontend/landingpage/src/sections/index.js
```

Arquivos removidos porque deixaram de representar a montagem atual:

```text
frontend/landingpage/src/sections/DifferenceSection.jsx
frontend/landingpage/src/sections/PracticeAreasSection.jsx
```

Arquivos novos:

```text
frontend/landingpage/src/sections/DifferenceAreasSection.jsx
frontend/landingpage/public/assets/images/ana-hero.png
frontend/landingpage/public/assets/images/ana-logo-dark.png
frontend/landingpage/public/assets/images/ana-office.jpg
frontend/landingpage/public/assets/images/ana-phone-icon.png
frontend/landingpage/public/assets/images/ana-profile.jpg
```

## Referencia Real

Existe um HTML salvo da pagina original:

```text
frontend/Ana Nascimento – Advocacia.html
```

Esse arquivo deve ser tratado como fonte de verdade para:

- cores;
- tipografia;
- imagens;
- textos;
- ordem das secoes;
- estilo geral dos cards;
- composicao do hero;
- footer;
- ritmo visual.

Trechos importantes encontrados no HTML:

```text
--e-global-color-primary: #2E3454
--e-global-color-secondary: #F2C455
--e-global-color-text: #2E3454
--e-global-color-accent: #F2C455
--e-global-color-8a7e426: #FFFFFF
--e-global-color-f709b3e: #E1E1E1
--e-global-color-6d92ba1: #FFFFFF1A
--e-global-color-1b523f7: #FFFFFF80
--e-global-typography-primary-font-family: "Marcellus"
--e-global-typography-secondary-font-family: "Karla"
--e-global-typography-text-font-family: "Karla"
--e-global-typography-accent-font-family: "Marcellus"
```

Assets reais usados:

```text
Logo:
https://ananascimento.adv.br/wp-content/uploads/2025/09/marca-d´agua-para-fundo-escuro.png

Hero:
https://ananascimento.adv.br/wp-content/uploads/2025/08/ana-683x1024.png

Sobre:
https://ananascimento.adv.br/wp-content/uploads/2025/08/ANA-20-1-683x1024.jpg

Fundo/apoio:
https://ananascimento.adv.br/wp-content/uploads/2025/08/ANA-17-1.jpg

Icone telefone:
https://ananascimento.adv.br/wp-content/uploads/2025/04/elements-150-line-icons-XNYRKN-1.png
```

Esses assets ja foram baixados para `public/assets/images`.

## Estrutura Atual Das Sections

A tela agora esta montada em 6 secoes principais:

```text
1. HeroSection
2. DifferenceAreasSection
3. AboutSection
4. ProcessSection
5. FaqSection
6. ContactSection
```

Ordem visual desejada:

```text
1 azul
2 branco
3 azul
4 branco
5 azul
6 branco
```

`SectionShell.jsx` agora adiciona `data-reveal` por padrao para animacao de
entrada no scroll.

`LandingPage.jsx` tem `IntersectionObserver` simples para aplicar
`data-reveal-visible="true"` quando cada section aparece.

## Theme Atual

O theme foi corrigido porque o ServiceOS nao consumia `fontFamilyBody` e
`fontFamilyHeading` para gerar `--font-body` e `--font-heading`.

O provider usa:

```text
tokens.typography.bodyFamily
tokens.typography.headingFamily
tokens.typography.monoFamily
```

Por isso `theme.js` agora deve sempre definir essas chaves. Isso evita que o
DevTools mostre Inter no atributo `style`.

Estado desejado:

```text
--font-body: Karla
--font-heading: Marcellus
body font-size: 18px
body line-height: 1.6
```

Tambem foram declaradas variaveis `--e-global-*` em `globals.css` como ponte
direta com o Elementor original.

## Estado Visual Atual

Ja foi feito:

- logo do AppShell aponta para `/assets/images/ana-logo-dark.png`;
- navegacao usa labels com acentos;
- hero usa imagem real `/assets/images/ana-hero.png`;
- hero usa fundo azul com overlay e imagem de apoio;
- About usa `/assets/images/ana-profile.jpg`;
- seções azuis usam `/assets/images/ana-office.jpg` como fundo com overlay;
- cards das areas estao em navy, retos, com icones lucide e lista de pontos;
- cards/process usam Surface/Button/Card do ServiceOS quando possivel;
- CTA principal usa Button do ServiceOS;
- reveal no scroll ja existe.

Ainda precisa melhorar visualmente:

- Hero ainda pode ficar mais parecido com o original: logo grande a esquerda,
  menu vertical/dourado ou AppShell mais proximo do layout real.
- Cards das areas precisam ser refinados para ficar menos pesados e mais
  alinhados ao Elementor original.
- About pode usar melhor a foto, com composicao editorial e texto mais solto.
- Process precisa ficar mais parecido com blocos/etapas da referencia.
- FAQ azul precisa de mais acabamento: divisorias, spacing e estados.
- Contact precisa receber mapa depois.
- Footer ainda pode receber fundo com imagem e composicao igual ao original.

## Regra De Trabalho Para O Proximo Chat

Por enquanto, pode usar hardcoded controlado na landing para entregar a tela.
Isso significa:

- pode ajustar CSS local em `globals.css`;
- pode usar paths diretos de assets locais;
- pode ajustar composição das sections;
- pode mexer no conteúdo da Ana;
- pode usar ServiceOS onde ja encaixa naturalmente.

Mas nao deve:

- recriar AppShell local;
- mexer no ServiceOS sem necessidade clara;
- transformar tudo em contrato antes da tela existir;
- quebrar o uso de Button/Card/Surface/BrandIcon onde ja esta funcionando;
- perder a referencia do HTML original.

Modelo mental:

```text
Primeiro entregar a landing inteira bonita
Depois observar os padrões repetidos
Depois promover para ServiceOS:
  Theme
  UI
  Semi-composed
  Surface
  Button
  Section
  AppShell
  Builder
```

## Validacao

O ultimo build executado passou:

```text
npm run build
```

Diretorio:

```text
frontend/landingpage
```

Resultado:

```text
Compiled successfully
Route /
Static prerendered
```

## Proximo Passo Recomendado

Comecar pelo visual do Hero e Header, lendo do HTML original:

```text
frontend/Ana Nascimento – Advocacia.html
```

Depois seguir seção por seção:

```text
Hero -> DifferenceAreas -> About -> Process -> FAQ -> Contact -> Footer
```

Em cada seção:

1. comparar com HTML/referencia;
2. ajustar layout e spacing;
3. usar assets locais;
4. manter cores e fontes do theme;
5. validar build;
6. so depois pensar se algo vira ServiceOS.
