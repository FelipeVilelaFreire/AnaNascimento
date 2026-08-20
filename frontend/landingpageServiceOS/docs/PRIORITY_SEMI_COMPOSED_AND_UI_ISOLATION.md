# Prioridade de Arquitetura: Regra dos 20 Módulos de Semi-Composed & Isolamento de Primitives UI

Este documento grava o compromisso prioritário de arquitetura do ServiceOS para ser continuado e aprofundado com foco máximo.

---

## 🚫 1. Regra Inviolável: O Semi-Composed NÃO PODE TER ERROS DE ISOLAMENTO

A camada `semi-composed` é a **fonte de verdade de receitas** e nunca deve ser tratada como HTML/JSX solto.

### Diretrizes Prioritárias:
- **Subpastas Isoladas para Módulos Ricos**: `surface/`, `background/`, `ambient/`.
- **Cada Módulo possui seus arquivos CSS limpos** em `src/foundation/semi-composed/`.
- **Gramática Inviolável de Namespaces**:
  - `Theme` ──▶ `--theme--[categoria]--[token]`
  - `Semi-Composed` ──▶ `--semicomposed--[módulo]--[propriedade]`

---

## 📁 2. Regra de Isolamento de Pastas nas Primitives UI (`src/foundation/ui/`)

Cada Primitive UI (Button, Input, Card, Modal) deve morar em sua **pasta dedicada isolada**:

```text
src/foundation/ui/
├── button/                 <-- [PASTA ISOLADA DO BUTTON]
│   ├── button.css          (Estilos base e consumo de --semicomposed--*)
│   └── button.js           (Registro do Web Component nativo)
│
├── card/                   <-- [FUTURO: PASTA ISOLADA DO CARD]
│   ├── card.css
│   └── card.js
```

Nenhum arquivo CSS/JS de Primitive fica solto direto na raiz de `src/foundation/ui/`.
