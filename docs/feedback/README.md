# Feedback

Tipo: indice
Autoridade: complementar

Esta pasta guarda aprendizados da Ana Nascimento Page para evoluir o ServiceOS.
Use estes documentos como evidencia de uso real antes de mudar Builder,
AppShell, Foundation ou contratos compartilhados.

## Arquivos

- [`layout.md`](layout.md): decisoes e fronteiras conceituais de Layout.
- [`layout-example.md`](layout-example.md): exemplos de chamadas para
  AppShell, scroll e sections.
- [`serviceos-appshell-boundary.md`](serviceos-appshell-boundary.md): limite
  entre contrato da aplicacao e runtime reutilizavel do AppShell.
- [`button-brandicon.md`](button-brandicon.md): aprendizados sobre Button,
  Icon, BrandIcon, cor, tamanho e composicao.
- [`implementation-errors.md`](implementation-errors.md): registro dos erros
  encontrados no laboratorio e regras para nao repeti-los.

## Como Usar

Antes de migrar algo para o Builder ou para o AppShell principal do ServiceOS,
verifique se o comportamento ja apareceu aqui como necessidade real.

Se uma nova cor, gap, size ou slot for necessario apenas para a Ana, ele fica
no contrato da Ana. Se servir para outras empresas, vira capacidade do
ServiceOS.
