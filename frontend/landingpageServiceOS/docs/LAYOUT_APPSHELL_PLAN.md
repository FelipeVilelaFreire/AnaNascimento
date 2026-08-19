# Plano de Implementacao: Etapa 1 - Estrutura de Layout e AppShell (landingpageServiceOS)

Este documento detalha o plano para estruturar a camada de Layout e AppShell declarativa na pasta `landingpageServiceOS`.

## 🎯 Objetivo da Etapa 1

Criar o contrato declarativo do **Layout / AppShell** no `manifest` e no `foundation/semi-composed`, definindo:
1. **Configuração de AppShell no Manifest**:
   - `header`: modo de navegação, logo, menu e ativação do botão de cor.
   - `layout`: estrutura de containers globais (`1620px` max-width), espaçamentos de seções e ordem de renderização.
   - `footer`: visibilidade dos links, redes sociais e direitos autorais.

2. **Componente de Layout em `foundation/semi-composed/layout.css`**:
   - Isolamento das regras de grid, flexbox, containers universais e dobras.

3. **Validação**:
   - O Resolver expõe o contrato de Layout para o runtime ler a disposição sem hardcode no HTML.
