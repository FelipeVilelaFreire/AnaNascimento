# Regra Sagrada do Workspace: Isolamento Estrito de Projetos

Este documento estabelece o contrato inviolável de separação entre o site estático legado de produção e o novo desenvolvimento arquiteturado ServiceOS.

---

## 🚫 Regra Inviolável: Pasta `frontend/landingpagehtml` é INTOCÁVEL

A pasta **`frontend/landingpagehtml/`** é o site legado em produção ativa na Vercel/servidor.

### Diretrizes de Bloqueio:
1. **NUNCA** mover, renomear ou deletar arquivos de imagem (`ana-hero.png`, `hero-bg.jpg`, etc.) da raiz de `frontend/landingpagehtml/`.
2. **NUNCA** editar ou aplicar Web Components / Manifests no `index.html` de `frontend/landingpagehtml/`.
3. **NUNCA** rodar comandos de limpeza ou refatoração no caminho `frontend/landingpagehtml/`.

---

## 🏛️ Pasta Oficial de Desenvolvimento: `frontend/landingpageServiceOS`

Todo o desenvolvimento da nova arquitetura declarativa (**Manifest Supremo**, **Semi-Composed**, **UI Primitives**, **i18n**, **Assets Registry**) deve acontecer **EXCLUSIVAMENTE** dentro da pasta:

👉 **`frontend/landingpageServiceOS/`**
