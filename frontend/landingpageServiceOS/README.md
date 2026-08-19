# Landing Page - Ana Nascimento Advocacia (Arquitetura ServiceOS)

Esta aplicação foi reestruturada seguindo o padrão **ServiceOS-First**, onde a interface gráfica é 100% declarativa, guiada por **Manifests** e totalmente desacoplada de dados hardcoded.

---

## 🏛️ Filosofia da Arquitetura: Manifest Supremacy

A montagem de toda a Landing Page é declarada no **Manifest Supremo**. O repositório `foundation` contém apenas componentes e estilos puros e reutilizáveis (sem lógica de negócio), enquanto o **Resolver** é o responsável por ler as instruções declarativas e renderizar a aplicação na tela.

### 📐 Árvore de Diretórios Canonical ServiceOS

```text
frontend/landingpagehtml/
├── src/
│   ├── manifest/                      <-- O CONTAINER SUPREMO (Declaração de Tudo)
│   │   ├── manifest.config.js         <-- Configurações gerais da aplicação e seções
│   │   ├── assets/
│   │   │   └── assets.registry.js     <-- Registro declarativo de imagens e mídias
│   │   ├── locales/
│   │   │   └── pt-BR.js               <-- Catálogo declarativo de textos (i18n-first)
│   │   └── design-system/
│   │       ├── theme.manifest.js      <-- Configuração dos 20 temas de cores, fontes, spacing
│   │       └── ui.manifest.js         <-- Configurações visuais e presets de UI (Button, Cards, etc.)
│   │
│   ├── resolver/
│   │   └── landing.resolver.js        <-- O MAESTRO (Conecta Manifest + Assets + Locales -> Foundation)
│   │
│   └── foundation/                    <-- CÓDIGO REUTILIZÁVEL (Renderizadores Puros)
│       ├── theme/                     <-- Motor que aplica variáveis CSS na tela
│       ├── ui/                        <-- Primitives reutilizáveis (Button, Modal, Drawer, PhoneBox)
│       └── semi-composed/             <-- Seções compostas (HeroSection, ServicesGrid, Footer)
│
├── assets/                            <-- Arquivos físicos de imagem (ana-hero.png, logos, etc.)
├── index.html                         <-- Entrypoint funcional limpo consumido pelo Resolver
└── style.css                          <-- Estilos consolidados do Design System
```

---

## ⚙️ Fluxo das 4 Camadas

1. **`manifest/` (Declaração)**: Define O QUE deve ser exibido, qual tema está ativo, quais textos e variações visuais de UI serão aplicados (ex: `Button2xl = { padding: '16px 32px', fontSize: '18px' }`).
2. **`manifest/assets` & `manifest/locales`**: Registro centralizado de mídias e strings (`strings.heroTitle`, `assets.heroBanner`).
3. **`resolver/` (Inteligência & Resolução)**: Lê o Manifest Supremo e entrega os dados estruturados para a camada visual.
4. **`foundation/` (Renderizadores Puros)**: Componentes primários que apenas recebem dados genéricos e renderizam o HTML/CSS sem hardcode.

---

## 📱 Observação Técnica de Responsividade (DevTools vs Celular Real)

- **Barras Dinâmicas de Navegação**: Navegadores mobile (Safari/Chrome) possuem barras dinâmicas que consomem `100px` a `140px` da altura visível (`vh`).
- **Densidade de Pixels (DPI/DPR)**: Telas Retina/AMOLED aplicam escalonamento de interface.
- **Bottom Sheet de Temas**: O modal de 20 cores é renderizado como um **Bottom Sheet fluido** no celular e modal centralizado no desktop.
