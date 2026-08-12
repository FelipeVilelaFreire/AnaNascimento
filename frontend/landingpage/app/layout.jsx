import "./globals.css";

export const metadata = {
  title: "Ana Nascimento Advocacia",
  description:
    "Atendimento juridico humanizado e estrategico em Direito do Trabalho, Civil, Familia, Patrimonial, Imobiliario e Consumidor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
