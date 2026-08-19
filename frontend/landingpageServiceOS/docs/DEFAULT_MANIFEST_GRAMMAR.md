# Estrutura Canônica de Manifests Supremor (Default ServiceOS)

Este documento registra o padrão de **Manifest Supremor (Default)** para o ServiceOS.

---

## 🏛️ Filosofia do Manifest Default

No novo ServiceOS, a camada de **Manifests** é construída como um modelo **Default completo e universal**. Todos os componentes e primitives possuem suas escalas completas declaradas por **chaves conhecidas** (`2xs` até `3xl`), sem nenhuma propriedade de CSS solta ou hardcoded.

### 📐 Estrutura das 4 Famílias Primárias de UI (`ui.manifest.js`)

Cada família de UI consome estritamente as chaves conhecidas do `theme` e `semi-composed`:
- `height` (Chave do Sizing)
- `minWidth` (Chave do Sizing)
- `gap` (Chave do Spacing)
- `text` (Chave do Semi-Composed/Text)
- `icon` (Chave do Semi-Composed/Icon)
- `surface` (Chave do Semi-Composed/Surface)
- `stateLayer` (Chave do Semi-Composed/StateLayer)
- `motion` (Chave do Semi-Composed/Motion)

---

## ⚙️ Escala Completa Default (2XS -> 3XL)

1. **`buttons`**: `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`
2. **`inputs`**: `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`
3. **`cards`**: `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`
4. **`modals`**: `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`
