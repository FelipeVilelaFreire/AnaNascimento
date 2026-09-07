# Visão de Arquitetura do ServiceOS Engine: Do Token ao Builder No-Code

**Projeto:** ServiceOS Universal Engine  
**Versão:** 2.0 Master Blueprint  
**Data:** 20 de Agosto de 2026  
**Classificação:** Arquitetura Estratégica & Manual Canônico  

---

## 1. A Grande Ideia: O Que é o ServiceOS?

O **ServiceOS** não é apenas mais um site ou um template estático. Ele é uma **Plataforma Modular White-Label de Nova Geração** projetada para permitir que qualquer negócio de serviços (escritórios de advocacia como a *Dra. Ana Nascimento*, consultórios médicos, clínicas de estética, corretoras ou consultorias) tenha:

1. **Uma Landing Page Pública Ultra-Rápida e Fluida** (Zero dependência de frameworks pesados no cliente, Web Components nativos, pontuação 100 no Lighthouse).
2. **Um Sistema de Troca de Temas em Tempo Real** (Paletas de cores, tipografias, física de bordas e atmosferas de vidro trocadas com 1 clique).
3. **Internacionalização Nativa (i18n)** (Suporte completo a múltiplos idiomas por chave declarativa).
4. **Prontidão para o Admin Builder No-Code** (Qualquer pessoa pode criar ou customizar um novo site apenas editando um arquivo JSON ou arrastando blocos no painel visual).

```
                                  ┌────────────────────────────────┐
                                  │      ADMIN BUILDER NO-CODE     │
                                  │   (Draft / Config / Preview)   │
                                  └───────────────┬────────────────┘
                                                  │ Emite JSON
                                                  ▼
 ┌──────────────────────────────────────────────────────────────────────────────────────────────────┐
 │                                   SERVICEOS CORE RUNTIME                                         │
 │                                                                                                  │
 │  ┌───────────────────────────┐      ┌───────────────────────────┐      ┌──────────────────────┐  │
 │  │   MANIFESTO DECLARATIVO   │ ───> │   THEME & FLUID ENGINE    │ ───> │    SEMI-COMPOSED     │  │
 │  │  (Assets, Grid, Seções)   │      │ (Cores, Math de 20 cols)  │      │ (Receitas de Superf) │  │
 │  └───────────────────────────┘      └───────────────────────────┘      └──────────┬───────────┘  │
 │                                                                                   │              │
 │                                                                                   ▼              │
 │                                                                        ┌──────────────────────┐  │
 │                                                                        │    UI PRIMITIVES     │  │
 │                                                                        │  (<ui-button>, etc.) │  │
 │                                                                        └──────────────────────┘  │
 └──────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. A Hierarquia Inviolável de 4 Camadas (ServiceOS Standard)

Para garantir que o código seja infinitamente reutilizável e nunca quebre quando o tema mudar, o ServiceOS adota uma separação de responsabilidades estrita:

```
[ Camada 1: MANIFESTO ] -> Define O QUÊ existe na página (Textos, Seções, Assets, Navegação).
[ Camada 2: THEME ]     -> Define os TOKENS BRUTOS (--theme--*) e a Matemática Fluida.
[ Camada 3: SEMI-COMPOSED ] -> Define as RECEITAS VISUAIS (--semicomposed--*) de Superfície e Tipografia.
[ Camada 4: UI PRIMITIVES ] -> Elementos HTML cegos (<ui-button>, <ui-text>, <ui-icon>) que apenas vestem as receitas.
```

### 2.1 Camada 1: Manifesto Declarativo (`landing.manifest.json`)
A fonte única da verdade para o conteúdo e a estrutura. Nele declaramos:
- **`assets`**: Catálogo centralizado de imagens (ex: `brandLogo`, `heroBg`, `anaHeroPhoto`). Nenhuma seção hardcoda URLs no HTML.
- **`navigation`**: Itens do menu com IDs, ícones e chaves de tradução.
- **`sections`**: Lista técnica de seções com tipo de fundo (`solid`, `image`, `glass`), proporção de altura (`hero-peek` de 90vh) e divisão de colunas no grid.

### 2.2 Camada 2: Theme Manifest & Fluid Engine (`tokens.js` / `web.theme.resolver.js`)
O Theme fornece matérias-primas puras:
- **Cores semânticas**: `navy`, `gold`, `white`, `borderLight`.
- **Física de Grid**: Matriz Master de **20 Colunas** no desktop.
- **Fluid Tokens Portáveis**: A função `fluidLength(min, max)` cria tokens matemáticos que escalam perfeitamente entre 360px (mobile) e 1440px+ (desktop grande) sem necessidade de centenas de media queries manuais.

### 2.3 Camada 3: Semi-Composed (`src/foundation/semi-composed/`)
O cérebro de composição visual do sistema:
- Ele consome `--theme--*` e gera `--semicomposed--surface--*`.
- **Superfícies**:
  - `solid`: Fundo opaco tokenizado com bordas e elevação.
  - `glass`: Fundo translúcido com `backdrop-filter: blur()`.
  - `soft`: Fundo suave para cards e elementos de apoio.
- **Tipografia**: Receitas semânticas (`sectionTitle`, `bodyText`, `badgeText`) que combinam família de fonte, tamanho fluido, peso e tracking.

### 2.4 Camada 4: UI Primitives & AppShell
Componentes Web autocontidos:
- **`<ui-button>`**: Botão universal que suporta `appearance="solid|glass|transparent"` e atributos diretos como `color="white"`, `bg="gold"`, `radius="full"`.
- **`<ui-text>`**: Renderiza tipografia padronizada via `recipe="sectionTitle"` e gerencia tradução automática por `key="header.title"`.
- **`<ui-icon>`**: Wrapper leve para ícones Lucide lendo tokens de cor.
- **`AppShell`**: Casca do site (Header com suporte a layouts `attached` e `floating`, Drawer mobile e Footer).

---

## 3. A Diferença Crucial: Responsividade Estrutural vs. Fluidez Matemática

Um dos maiores diferenciais da engenharia do ServiceOS é como tratamos o dimensionamento:

| Conceito | Responsável | Como Funciona | Para Que Serve |
| :--- | :--- | :--- | :--- |
| **Responsividade Estrutural** | Media Queries (`@media`) | Muda o layout de 20 colunas (Desktop) para 8 colunas (Tablet) e 4 colunas (Mobile) | Reorganizar blocos, empilhar cards, abrir menu hamburger |
| **Fluidez Matemática** | `FluidToken` com `clamp()` | Interpola continuamente tamanhos de fonte e espaçamentos | Evitar quebras de linha indesejadas em notebooks, telas intermediárias e zoom do usuário |

### A Fórmula do `clamp()` com Fallback Nativo
O resolvedor converte o objeto `fluidLength(30, 42)` na fórmula:
```css
/* Fallback estático para browsers legados ou leitores */
--theme--typography-sizes-4xl: 36px;
/* Escala fluida dinâmica */
--theme--typography-sizes-4xl: clamp(1.8750rem, 1.6250rem + 1.1111vw, 2.6250rem);
```

---

## 4. O Grid Universal de 20 Colunas

Nenhum componente inventa larguras mágicas em porcentagens arbitrárias. O ServiceOS usa a **Matriz Master de 20 Colunas**:

```
 0        1.5                                                      18.5       20
 ├─────────┼────────────────────────────────────────────────────────┼─────────┤
 │ Offset  │                   17 COLUNAS ÚTEIS                     │ Offset  │
 │ (1.5c)  │  ┌───────────────────────┐  ┌───────────────────────┐  │ (1.5c)  │
 │         │  │ 10.5 Colunas (Textos) │  │ 6.5 Colunas (Imagem)  │  │         │
 │         │  └───────────────────────┘  └───────────────────────┘  │         │
 └─────────┴────────────────────────────────────────────────────────┴─────────┘
```
- **Seções Amplas (Hero, Sobre, Contato):** Usam 17 colunas úteis (`outerOffset: 1.5`).
- **Seções de Leitura Concentrada (FAQ):** Usam 14 colunas úteis (`outerOffset: 3.0`).

---

## 5. Como Esta Arquitetura Destrava o Futuro No-Code

Quando um novo cliente entrar na plataforma (ex: *Dra. Fernanda*, *Dra. Gabriela* ou um novo escritório):
1. **NÃO escrevemos novo código HTML/CSS do zero.**
2. Apenas geramos um novo `manifest.json` com:
   - Os textos do novo cliente nos arquivos de `locales/pt-BR.json`.
   - As fotos na pasta de assets.
   - O tema escolhido no `themePresets.js` (Ex: *Verde Esmeralda*, *Bordeaux Clássico*, *Minimal Dark*).
3. O ServiceOS compila e entrega a página pronta em segundos!

---

## 6. Mandamentos do Desenvolvedor ServiceOS

1. **Nunca hardcode cores no CSS**: Use sempre `var(--theme--color-*)` ou `var(--semicomposed--surface--*)`.
2. **Nunca crie seletores de `appearance` dentro da UI Primitive**: Quem dita a aparência é o `semi-composed`.
3. **Sempre passe textos por chaves `key="secao.campo"`**: A interface deve ser 100% traduzível e configurável.
4. **Mantenha os arquivos desacoplados**: `tokens.js` fornece dados brutos, `resolver.js` aplica no DOM, e o HTML consome componentes.
