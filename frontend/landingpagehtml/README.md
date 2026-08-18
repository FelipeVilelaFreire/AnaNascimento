# Landing Page - Ana Nascimento Advocacia

Versão HTML/CSS pura e otimizada da Landing Page.

## 📱 Observação Técnica de Responsividade (DevTools vs Celular Real)

Ao testar a responsividade da página, é importante considerar as diferenças entre a simulação do navegador desktop (DevTools) e o dispositivo móvel real:

1. **Barras Dinâmicas de Navegação**: Navegadores mobile (como Safari no iOS e Chrome no Android) possuem barras de endereço e navegação dinâmicas no topo e no rodapé que consomem cerca de `100px` a `140px` da altura visível (`viewport height / vh`).
2. **Densidade de Pixels (DPI/DPR)**: Dispositivos móveis utilizam telas de alta densidade (Retina/AMOLED 2x/3x), aplicando escalonamento de interface diferente de simuladores desktop.
3. **Barra de Scroll**: No desktop o navegador contabiliza a barra de scroll lateral, enquanto no celular a rolagem é por gestos sobre a viewport completa.

Por esses motivos, os ajustes de `padding-top: 90px` e enquadramento da `.hero-section` foram calibrados para garantir o enquadramento ideal no celular real.
