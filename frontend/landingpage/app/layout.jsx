import "./globals.css";

export const metadata = {
  title: "Ana Nascimento Advocacia",
  description:
    "Atendimento jurídico humanizado e estratégico em Direito do Trabalho, Civil, Família, Patrimonial, Imobiliário e Consumidor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
