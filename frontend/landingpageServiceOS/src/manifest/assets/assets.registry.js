// Registro Declarativo de Assets - Mapeando a pasta física /assets/
export const assetsRegistry = {
  // Identidade Visual & Logos
  branding: {
    logoDark: {
      src: "assets/ana-logo-dark.png",
      alt: "Ana Nascimento Advocacia - Logotipo Oficial"
    },
    logoLight: {
      src: "assets/ana-logo-dark.png",
      alt: "Ana Nascimento Advocacia - Logotipo Oficial"
    },
    favicon32: "https://ananascimento.adv.br/wp-content/uploads/2025/09/cropped-cropped-marca-d´agua-para-fundo-escuro-150x150.png",
    favicon192: "https://ananascimento.adv.br/wp-content/uploads/2025/09/cropped-cropped-marca-d´agua-para-fundo-escuro.png"
  },

  // Seção Hero (Foto da Dra. Ana + Fundo)
  hero: {
    personImg: {
      src: "assets/ana-hero.png",
      alt: "Dra. Ana Nascimento em traje executivo azul marinho"
    },
    bgImg: {
      src: "assets/hero-bg.jpg",
      alt: "Textura de fundo do Hero"
    }
  },

  // Seção Sobre Nós & Escritório
  about: {
    profileImg: {
      src: "assets/ana-profile.jpg",
      alt: "Retrato oficial da Dra. Ana Nascimento"
    },
    officeImg: {
      src: "assets/ana-office.jpg",
      alt: "Escritório na Barra da Tijuca"
    },
    bgImg: {
      src: "assets/about-bg.jpg",
      alt: "Textura de fundo da Seção Sobre Nós"
    }
  },

  // Fundo da Seção FAQ e Outras Seções
  sections: {
    faqBg: {
      src: "assets/faq-bg.jpg",
      alt: "Fundo elegante da seção de Perguntas Frequentes"
    }
  }
};
