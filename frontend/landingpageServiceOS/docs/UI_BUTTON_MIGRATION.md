# Plano de Conexao de UI: Passo 1 - Primitive Button (landingpageServiceOS)

Este documento registra a estrategia de conexão do componente **Button** da UI para consumir as receitas do `ui.manifest.js`.

---

## 🎯 Objetivo do Passo 1: Primitive Button

Substituir o estilo solto de botões no `style.css` por classes puras que leem os tokens declarados no `ui.manifest.js`:

1. **Button Scale (`2xs` até `3xl`)**:
   - `.ui-btn-2xs` -> Altura 2XS, Gap 2XS, Fonte 2XS, Surface XS.
   - `.ui-btn-md`  -> Altura MD, Gap MD, Fonte MD, Surface MD.
   - `.ui-btn-2xl` -> Altura 2XL, Gap 2XL, Fonte 2XL, Surface 2XL (Botão Hero principal).

2. **Variações Semânticas**:
   - `.ui-btn-gold` -> Fundo Dourado (`var(--color-gold)`), texto marinho, hover lift.
   - `.ui-btn-theme-toggle` -> Fundo Glass (`rgba(255,255,255,0.1)`), borda fina, texto dourado.

3. **Validação**:
   - O HTML consome apenas as classes universais da UI (`ui-btn ui-btn-2xl ui-btn-gold`), eliminando qualquer regra solta.
