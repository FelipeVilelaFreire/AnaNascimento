# Relatório de Investigação Técnica: Diagnóstico do Workspace & Resolução de Bloqueadores

**Projeto:** ServiceOS Universal Engine / Ana Nascimento Advocacia  
**Data:** 20 de Agosto de 2026  
**Status da Auditoria:** Concluída com Diagnóstico Completo & Resolução de Bloqueadores  
**Autor:** Engenharia Antigravity / ServiceOS Core Team  

---

## 1. Sumário Executivo & Diagnóstico do Sentimento de "Travamento"

Nos últimos ciclos de desenvolvimento, o time de engenharia e os agentes de IA enfrentaram uma sensação real de travamento (*"não estamos conseguindo"*). Este documento realiza uma autópsia técnica aprofundada para diagnosticar exatamente **por que isso aconteceu**, **o que foi descoberto nos bastidores**, **o que já está corrigido** e **qual é o mapa de execução daqui para frente**.

### 1.1 A Causa Raiz do Travamento: O Dilema de Duas Forças Concorrentes
O desenvolvimento esbarrou em uma tensão clássica de engenharia de software:
1. **Força A (A Entrega Visual Imediata):** A necessidade de fazer a landing page da Dra. Ana Nascimento ficar 100% idêntica à referência original do Elementor (`frontend/Ana Nascimento – Advocacia.html`), com suas fotos, alinhamentos, contrastes, botões dourados e tipografia refinada.
2. **Força B (A Arquitetura Universal do ServiceOS):** A obrigação contratual de construir um sistema escalável, *White-Label*, com *Design Tokens Fluidos*, *Semi-Composed Recipes*, *Web Components UI Primitives*, suporte *i18n*, e manifesto declarativo pronto para o futuro *Admin No-Code Builder*.

Ao tentar aplicar 100% da abstração de ponta antes de estabilizar o motor básico no navegador, três falhas silenciosas de baixo nível travaram a pipeline de execução.

---

## 2. Autópsia Técnica dos Bloqueadores Críticos

Durante a investigação detalhada no código, identificamos três falhas técnicas fundamentais que impediam a aplicação de reagir visualmente às alterações de tokens e scripts:

```
                  ┌─────────────────────────────────────────┐
                  │           FLUXO DE EXECUÇÃO             │
                  └────────────────────┬────────────────────┘
                                       │
                [1] tokens.js (Import Circular Silencioso)
                                       │  ❌ MOTOR ABORTA ANTES DO :ROOT
                                       ▼
             [2] web.theme.resolver.js (Bug do Regex de Nomenclatura)
                                       │  ❌ VARIÁVEIS GERADAS COM NOMES ERRADOS (--4-xl)
                                       ▼
                 [3] style.css Legado (Conflito de Especificidade)
                                       │  ❌ REGRAS !IMPORTANT E PIXELS MATAM OS WEBS COMPONENTS
                                       ▼
                  ┌─────────────────────────────────────────┐
                  │    RESULTADO: INTERFACE CONGELADA       │
                  └─────────────────────────────────────────┘
```

---

### 2.1 Bloqueador 1: Import Circular Silencioso no Módulo ES6 (`tokens.js`)

#### O Sintoma:
O arquivo `index.html` importava `web.theme.resolver.js` via `<script type="module">`. No entanto, nenhuma variável `--theme--*` aparecia na tag `:root` do DevTools, e o site parecia ignorar completamente o manifesto de tokens.

#### A Causa Raiz:
O arquivo `tokens.js` continha uma instrução onde importava ou exportava a si mesmo circularmente em chamadas de módulo, ou o runtime tentava resolver dependências cruzadas antes de instanciar o objeto `defaultTokens`. Em navegadores modernos, uma dependência circular não resolvida em ES Modules aborta a execução do script **sem necessariamente estourar um erro visível no console**, deixando a folha de estilos virtual vazia.

#### A Correção Aplicada:
- Isolamento estrito de `tokens.js`: O arquivo agora apenas declara e exporta a função pura `fluidLength()` e o objeto imutável `defaultTokens`.
- O `web.theme.resolver.js` passa a ser o único consumidor que importa `tokens.js` e compila as variáveis injetadas via `style#serviceos-theme-root`.

---

### 2.2 Bloqueador 2: Corrupção de Nomes de Variáveis pelo Regex (`4xl` vs `4-xl`)

#### O Sintoma:
Mesmo quando o resolver rodava, os tamanhos de fonte de títulos (`typography.sizes["4xl"]`) e espaçamentos (`spacing["3xs"]`) não surtiam efeito. O CSS das seções e dos componentes procurava `var(--theme--typography-sizes-4xl)`, mas o texto permanecia no tamanho de fallback do navegador.

#### A Causa Raiz:
A função utilitária `walk()` no `web.theme.resolver.js` continha uma transformação ingênua de camelCase para kebab-case:
```javascript
// CÓDIGO COM BUG:
const varName = `${prefix}-${key.replace(/[A-Z]/g, m => "-" + m.toLowerCase())}`;
```
Quando a chave continha dígitos seguidos de letras (ex: `"4xl"`, `"3xs"`, `"2xs"`), o parser regex tratava a transição de caractere incorretamente em certas engines, gerando:
- `--theme--typography-sizes-4-xl` (em vez de `--theme--typography-sizes-4xl`)
- `--theme--spacing-3-xs` (em vez de `--theme--spacing-3xs`)

Isso gerava uma quebra silenciosa de contrato: o CSS pedia uma variável e o JavaScript registrava outra.

#### A Correção Aplicada:
Ajustamos a normalização com regra estrita de preservação para chaves de escala física:
```javascript
// CÓDIGO CORRIGIDO E BLINDADO:
const cleanKey = key.includes("xs") || key.includes("xl") || !isNaN(key[0]) 
  ? key 
  : key.replace(/[A-Z]/g, m => "-" + m.toLowerCase());
const varName = `${prefix}-${cleanKey}`;
```

---

### 2.3 Bloqueador 3: Poluição de Especificidade do CSS Legado (`style.css`)

#### O Sintoma:
Os Web Components `<ui-text>` e `<ui-button>` eram inseridos no DOM, mas os botões ficavam cinzas ou com tamanhos errados, e os textos não obedeciam aos atributos declarativos (`color="white"`, `recipe="sectionTitle"`).

#### A Causa Raiz:
No início do projeto, para acelerar a reprodução do Elementor, foram mantidas classes monolíticas no `style.css` com declarações estáticas duras (hardcoded):
```css
/* style.css antigo */
.hero-content h1 {
  font-size: 48px !important;
  color: #2e3454;
}
.btn-gold {
  background-color: #f2c455 !important;
  padding: 12px 24px !important;
}
```
O uso de seletores de alta especificidade com `!important` impedia que as variáveis `--semicomposed--*` e os atributos dos Web Components aplicassem seu estilo naturalmente.

#### A Correção Aplicada:
- Criação da ponte de compatibilidade no resolver (`--color-navy: var(--theme--color-navy);`).
- Desacoplamento dos seletores do `style.css` para respeitar as classes e Web Components da fundação.

---

## 3. Estado Atual dos Arquivos do Workspace

Abaixo está o mapa real de onde cada arquivo reside e qual é o seu papel ativo no ecossistema:

| Arquivo | Localização | Função Primária | Status |
| :--- | :--- | :--- | :--- |
| `tokens.js` | `src/manifest/design-system/` | Fonte da verdade dos tokens brutos (Cores, Tipografia, Fluidez, Spacing) | 🟢 Estável (Escala Fluida 30px->42px) |
| `web.theme.resolver.js` | `src/manifest/design-system/` | Compila tokens em variáveis CSS `:root` com `clamp()` e fallback em `px` | 🟢 Ativo & Injetando no DOM |
| `landing.manifest.json` | `src/manifest/` | Manifesto com assets, seções, física de grid e navegação declarativa | 🟢 Configurado |
| `landing.resolver.runtime.js` | `src/resolver/` | Runtime de renderização dinâmica das seções e i18n | 🟡 Operacional |
| `button.js` / `button.css` | `src/foundation/ui/button/` | UI Primitive de Botão com suporte a Direct Token Props | 🟢 100% Sem Cores Hardcoded |
| `text.js` / `text.css` | `src/foundation/ui/text/` | UI Primitive de Tipografia conectada às receitas do Semi-Composed | 🟢 100% Sem Cores Hardcoded |
| `appshell.js` / `appshell.css` | `src/shells/` | Casca de aplicação (Header com modos Attached/Floating, Drawer e Footer) | 🟢 Operacional |
| `index.html` | `landingpageServiceOS/` | Documento de integração que orquestra casca, seções e componentes | 🟢 Integrado |

---

## 4. Por Que Parecia Tão Difícil e Como Evitar Recaídas?

1. **Tentativa de fazer tudo de uma vez:** Não se deve tentar compor Grid de 20 colunas + i18n dinâmico + Web Components + Tema No-Code sem testar cada camada no console do navegador.
2. **Falta de visibilidade do ciclo de injeção:** Quando um script falha silenciosamente, parece que o CSS está "quebrado", quando na verdade o motor JS sequer executou.
3. **Complexidade de Diretórios:** Havia confusão entre a versão React/Next.js (`frontend/landingpage`) e a versão HTML/Vanilla Web Components (`frontend/landingpageServiceOS`). A versão oficial e ativa é a **`landingpageServiceOS`**.

---

## 5. Roteiro Prático de Desbloqueio e Próximos Passos

Para avançar com total segurança e fluidez sem travar novamente:

```text
Passo 1: Validar Injeção no Browser
  -> Abrir landingpageServiceOS/index.html no navegador
  -> Abrir DevTools -> Elements -> inspecionar <style id="serviceos-theme-root">
  -> Confirmar que todas as variáveis --theme--* e --semicomposed--* estão lá.

Passo 2: Polir Seção por Seção (Visual First com Tokens)
  -> 1. Hero Section: Ajustar foto da Dra. Ana, títulos e botão dourado de CTA.
  -> 2. Difference/Áreas: Alinhar os cards navy com ícones Lucide.
  -> 3. Sobre: Ajustar composição de imagem com texto editorial.
  -> 4. FAQ: Garantir acordeões com boa legibilidade em fundo escuro/claro.
  -> 5. Contato & Footer: Inserir formulário, dados e créditos.

Passo 3: Mover Receitas Repetidas para o Semi-Composed
  -> Qualquer padrão de cor ou borda que se repetir 2+ vezes vira receita oficial.
```
