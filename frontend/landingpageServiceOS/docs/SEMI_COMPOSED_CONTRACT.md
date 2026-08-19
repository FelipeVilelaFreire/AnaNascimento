# Contrato da Camada Semi-Composed (Receitas de Interface Reutilizaveis)

Este documento detalha a arquitetura da camada **Semi-Composed** no ServiceOS.

---

## 🏛️ Função Central: Eliminacao de Duplicacao de Tokens

A camada **Semi-Composed** une os tokens puros da camada `theme` (cores, spacing, fontes, elevações) e cria **Receitas Visuais Reutilizáveis** que são consumidas pelos componentes `ui` e pelas seções da Landing Page.

### 🎯 Benefícios:
1. **Zero Duplicação de CSS**: Evita repetir regras de `fontSize`, `fontWeight`, `padding` e `shadow` em múltiplos lugares.
2. **Centralização de Alterações**: Alterar a receita de um card ou botão no `semiComposed.manifest.js` atualiza instantaneamente todos os elementos correspondentes na aplicação.
3. **Desacoplamento Total**: O código visual da página apenas chama a receita registrada.

---

## 📐 Os 20 Módulos de Receita do Semi-Composed

```text
src/manifest/design-system/semiComposed.manifest.js
├── 1.  text                   (Receitas de Títulos, Eyebrows e Subtítulos)
├── 2.  icon                   (Receita do Ícone Circular Dourado)
├── 3.  field                  (Receita de Campos de Input e Formulários)
├── 4.  outerElevation         (Receitas de Sombras Externas de Profundidade)
├── 5.  innerElevation         (Receitas de Profundidade Interna)
├── 6.  stroke                 (Receitas de Contornos e Traços de Borda)
├── 7.  motion                 (Receitas de Transições e Animações)
├── 8.  glass                  (Receita de Glassmorphism Translúcido)
├── 9.  gradient               (Receitas de Gradiente Dinâmico)
├── 10. overlay                (Receita da Capa de Escurecimento de Fotos)
├── 11. focusRing              (Receita do Anel de Destaque para Acessibilidade)
├── 12. disabled               (Receita de Estados Desabilitados)
├── 13. stateLayer             (Receitas de Efeitos de Clique e Hover)
├── 14. divider                (Receitas de Linhas Divisórias)
├── 15. surface                (Receita dos Cards de Áreas de Atuação)
├── 16. background             (Receita dos Planos de Fundo das Seções)
├── 17. ambient                (Receita de Iluminação e Glow Ambiental)
├── 18. dropdownPanel          (Receita do Container do Modal de Temas)
├── 19. listbox                (Receita de Listas Estruturadas de Contato/FAQ)
└── 20. listboxOption          (Receita do Item Individual Expansível do FAQ)
```
