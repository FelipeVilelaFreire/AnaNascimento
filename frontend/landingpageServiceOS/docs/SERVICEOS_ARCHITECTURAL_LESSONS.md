# Guia Canônico de Aprendizados do ServiceOS: Arquitetura de Semi-Composed & Primitivas de UI

Este documento compila a síntese de aprendizados práticos e regras de arquitetura consolidadas durante a migração e padronização do ServiceOS.

---

## 🏛️ 1. O Papel do Semi-Composed (Muito Além do Theme)

Muitos desenvolvedores confundem a função do **Theme** com a do **Semi-Composed**. 

- **Theme (`theme.manifest.js`)**: É um repositório burro/passivo de matérias-primas brutas (ex: `#2e3454`, `16px`, `8px`, `blur(4px)`). O Theme não sabe o que é um botão, o que é um texto ou o que é um card.
- **Semi-Composed (`src/foundation/semi-composed/`)**: É o cérebro que inventa e compõe as receitas visuais do sistema. É aqui que decidimos a física de superfícies (`solid`, `glass`, `soft`, `outline`), a tipografia semântica (`sectionTitle`, `bodyText`) e a estrutura de fundo (`hero-bg`).

```text
Theme (Valores Brutos)
  └──> Semi-Composed (Receitas & Física Visual)
          └──> UI Primitives (Componentes Cegos no HTML)
```

---

## 🎨 2. Como Criar Novos Módulos de Semi-Composed

Para criar uma nova capacidade ou módulo no `semi-composed` (ex: um módulo de `card-recipe` ou `elevation-recipe`):

1. **Criar a pasta isolada**: `src/foundation/semi-composed/[modulo]/`.
2. **Receber estritamente `--theme--*`**: Nenhuma cor `#hex` ou `rgba` solta é permitida dentro do CSS do `semi-composed`.
3. **Emitir estritamente `--semicomposed--[modulo]--*`**: O módulo gera a gramática pública que os componentes de UI vão vestir.

### Exemplo Prático:
```css
/* src/foundation/semi-composed/surface/soft.css */
[data-recipe-surface-soft] {
  --semicomposed--surface--bg: var(--theme--glass-light);
  --semicomposed--surface--color: var(--theme--color-white);
  --semicomposed--surface--border: var(--theme--borders-light);
  --semicomposed--surface--blur: var(--theme--ambient-backdrop-blur);
}
```

---

## ⚡ 3. O Motor de Zero Fricção: Direct Token Props em UI Primitives

Para eliminar o atrito de ter que criar CSS novo a cada pequena variação (como mudar o raio de borda de um botão ou a cor de um texto), criamos a regra de **Direct Token Props**:

### A Regra dos Dois Casos:
- **Caso 1 (95% dos Casos - Defaults Automáticos)**: O componente `<ui-button appearance="solid">` ou `<ui-text recipe="sectionTitle">` veste a receita padrão sem exigir nenhum atributo visual extra.
- **Caso 2 (5% dos Casos - Custom Direct Props)**: Qualquer Web Component ou Primitivo de UI intercepta props diretas (`color`, `bg`, `radius`, `shadow`, `border`, `size`, `weight`, `opacity`) e resolve nativamente para os tokens do Theme (`--theme--[categoria]--[token]`).

### Exemplo de Uso Limpo no HTML:
```html
<!-- Texto branco em seção escura sem styles manuais -->
<ui-text recipe="sectionTitle" color="white" key="faq.title"></ui-text>

<!-- Botão com fundo navy e borda arredondada customizada -->
<ui-button appearance="solid" bg="navy" color="white" radius="full" shadow="lg"></ui-button>
```

---

## 🛡️ 4. Regras Anti-Bugs para IAs e Desenvolvedores

1. **Zero Style Hardcoded no HTML**: Nunca injetar `style="color: #ffffff"` ou `style="background: red"`. Usar `color="white"` ou `bg="red"`.
2. **Zero Invasão de Appearance no CSS da Primitive**: O `button.css` ou `text.css` não deve ter regras como `ui-button[appearance="soft"]`. Quem responde pela superfície é o `semi-composed`.
3. **Respeito aos Papéis Semânticos**: Ao criar textos sobre fundos escuros, utilizar `color="white"` ou receitas invertidas (`sectionTitleInverted`, `bodyTextInverted`) para não gerar bugs de invisibilidade de texto.
