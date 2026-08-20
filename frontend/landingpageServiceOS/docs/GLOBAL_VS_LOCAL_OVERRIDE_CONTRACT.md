# Contrato Canônico de Alteração Visual: Mudança Global vs Override Local

Este documento define formalmente os dois fluxos autorizados para personalização visual no ServiceOS.

---

## 🏛️ Fluxo 1: Mudança Global de Estilo (Caso 1)

Quando uma mudança visual deve se aplicar a **todos os componentes e páginas do sistema inteiro**:

- **Onde alterar**: No manifesto `semiComposed.manifest.js` ou nos arquivos CSS de receita em `src/foundation/semi-composed/surface/` (`solid.css`, `glass.css`, `soft.css`, `outline.css`, `transparent.css`).
- **Como funciona**: A alteração na receita `--semicomposed--surface--*` propaga instantaneamente para todos os `<ui-button>`, `<ui-text>` e componentes da aplicação.

---

## 🎨 Fluxo 2: Override Local em Chamada Específica (Caso 2)

Quando um único componente em uma tela específica precisa de uma cor ou borda diferente sem afetar o resto do site:

- **Onde alterar**: Diretamente na chamada do elemento HTML/JSX.
- **Exemplo Prático**:
  ```html
  <ui-button appearance="soft" size="sm" style="--semicomposed--surface--color: var(--theme--color-gold);" key="cards.saibaMais"></ui-button>
  ```
- **Como funciona**: A variável local sobrescreve o valor apenas naquele elemento, mantendo intactos todos os outros botões `soft` do sistema.
