# Estrutura Canônica dos 20 Módulos de Receita Semi-Composed (ServiceOS Standard)

Este documento registra a separação física e lógica dos **20 Módulos de Receitas Canônicas do Semi-Composed** na pasta `src/foundation/semi-composed/`.

---

## 📁 Árvore de Arquivos Criada (`src/foundation/semi-composed/`)

```text
src/foundation/semi-composed/
├── index.css               <-- Maestro Centralizador de Importação
├── text.css                <-- Receita 1: Tipografia (heroTitle, sectionTitle)
├── icon.css                <-- Receita 2: Ícones (phoneBadge, headerMail)
├── surface.css             <-- Receita 3: Superfícies (solid, glass, transparent)
├── field.css               <-- Receita 4: Campos de formulário
├── outer-elevation.css     <-- Receita 5: Sombras externas (modal, drawer)
├── inner-elevation.css     <-- Receita 6: Sombras internas (inset)
├── stroke.css              <-- Receita 7: Bordas e contornos
├── motion.css              <-- Receita 8: Animações e curvas beziers
├── glass.css               <-- Receita 9: Efeitos de refração e desfoque
├── gradient.css            <-- Receita 10: Gradientes e overlays
├── overlay.css             <-- Receita 11: Camadas de fundo
├── focus-ring.css          <-- Receita 12: Anéis de foco e acessibilidade
├── disabled.css            <-- Receita 13: Estados de desativação
├── state-layer.css         <-- Receita 14: Camadas de interação hover/pressed
├── divider.css             <-- Receita 15: Linhas e divisores
├── background.css          <-- Receita 16: Fundos de grandes seções
├── ambient.css            <-- Receita 17: Brilhos e iluminação de ambiente (glow)
├── dropdown-panel.css      <-- Receita 18: Caixas flutuantes e modais
├── listbox.css             <-- Receita 19: Estrutura de listas agrupadas
└── listbox-option.css      <-- Receita 20: Itens de sanfona/accordion (FAQ)
```
