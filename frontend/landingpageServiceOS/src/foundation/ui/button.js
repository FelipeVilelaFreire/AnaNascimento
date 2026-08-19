// DICIONÁRIO I18N LOCALES - PT-BR
var ptBR = {
  header: {
    nav: {
      inicio: "Início",
      area: "Áreas de Atuação",
      sobre: "Sobre Nós",
      faq: "Perguntas Frequentes",
      contato: "Contato"
    },
    email: "ana@ananascimento.adv.br",
    themeButtonText: "Mudar Cor",
    mobileThemeButtonText: "Cor"
  },
  drawer: {
    themeButtonText: "Trocar Paleta de Cores",
    cta: "FALE COM ADVOGADA"
  },
  hero: {
    eyebrow: "Dra. Ana Nascimento",
    title: "Sua história merece respeito, estratégia e resultado.",
    description: "Fundado pela Dra. Ana Nascimento...",
    cta: "FALE COM ADVOGADA",
    phone: "(21) 99656-7447"
  },
  cards: {
    saibaMais: "SAIBA MAIS"
  },
  footer: {
    areas: {
      trabalho: "Direito do Trabalho",
      civil: "Direito Civil",
      consumidor: "Direito do Consumidor",
      familia: "Direito de Família",
      imobiliario: "Direito Imobiliário",
      patrimonial: "Direito Patrimonial"
    }
  },
  process: {
    title: "Como funciona o atendimento?",
    subtitle: "Estamos localizados na Barra da Tijuca...",
    cta: "FALE COM ADVOGADA"
  },
  contact: {
    title: "ENTRE EM CONTATO",
    lead: "Estamos prontos...",
    ctaWhatsApp: "FALE PELO WHATSAPP"
  }
};

function getI18nString(keyPath) {
  if (!keyPath) return "";
  var keys = keyPath.split(".");
  var result = ptBR;
  for (var i = 0; i < keys.length; i++) {
    if (result && result[keys[i]]) {
      result = result[keys[i]];
    } else {
      return keyPath;
    }
  }
  return typeof result === "string" ? result : keyPath;
}

function renderAllUiButtons() {
  var buttons = document.querySelectorAll("ui-button");
  buttons.forEach(function(btn) {
    var size = btn.getAttribute("size") || "md";
    var appearance = btn.getAttribute("appearance") || btn.getAttribute("tone") || "solid";
    var key = btn.getAttribute("key");
    var icon = btn.getAttribute("icon");
    var href = btn.getAttribute("href");

    btn.setAttribute("data-size", size);
    btn.setAttribute("data-appearance", appearance);

    var labelText = key ? getI18nString(key) : (btn.getAttribute("label") || btn.textContent.trim());
    var iconHTML = icon ? '<i data-lucide="' + icon + '"></i> ' : '';

    btn.innerHTML = iconHTML + '<span>' + labelText + '</span>';

    if (href) {
      btn.style.cursor = "pointer";
      btn.onclick = function(e) {
        if (href.startsWith("#")) {
          var target = document.querySelector(href);
          if (target) target.scrollIntoView({ behavior: "smooth" });
        } else {
          window.open(href, "_blank");
        }
      };
    }
  });

  if (window.lucide && window.lucide.createIcons) {
    window.lucide.createIcons();
  }
}

// Execucao imediata quando o DOM carrega
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderAllUiButtons);
} else {
  renderAllUiButtons();
}

// Registrar o Web Component Nativo
if (typeof customElements !== "undefined" && !customElements.get("ui-button")) {
  customElements.define("ui-button", class extends HTMLElement {
    connectedCallback() {
      renderAllUiButtons();
    }
  });
}
