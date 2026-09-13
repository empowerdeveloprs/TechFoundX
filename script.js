document.getElementById("year").textContent = new Date().getFullYear();

/* =========================================================
   EMPOWERDEVELOPERS MARKETPLACE — ONBOARDING MVP
   ========================================================= */

(function () {
  const purposeCards = document.querySelectorAll("[data-purpose]");
  const purposeSection = document.getElementById("marketplace-purpose");
  const questionnaire = document.getElementById("marketplace-questionnaire");
  const title = document.getElementById("marketplace-question-title");
  const description = document.getElementById("marketplace-question-description");
  const backButton = document.getElementById("marketplace-back");
  const continueButton = document.getElementById("marketplace-continue");
  const sellerGroup = document.querySelector("[data-seller-only]");
  const getStarted = document.querySelector("[data-scroll-purpose]");

  if (!purposeSection || !questionnaire) return;

  const purposeData = {
    buyer: {
      title: "Tell us what you want to acquire.",
      description:
        "Complete the compulsory requirements first. Supplementary information helps us improve product matching."
    },

    licensee: {
      title: "Tell us what you want to license.",
      description:
        "Your compulsory requirements define the commercial search. Supplementary information improves relevance."
    },

    seller: {
      title: "Prepare your technology product for listing.",
      description:
        "A product price and core commercial information are compulsory for marketplace listing."
    },

    partner: {
      title: "Tell us what partnership you need.",
      description:
        "Define the core opportunity first, then add supplementary information if useful."
    },

    explorer: {
      title: "Tell us what you want to explore.",
      description:
        "Only core information is required. Supplementary preferences can improve your marketplace experience."
    }
  };

  let selectedPurpose = "";

  function openQuestionnaire(purpose) {
    selectedPurpose = purpose;

    purposeCards.forEach(card => {
      card.classList.toggle(
        "active",
        card.dataset.purpose === purpose
      );
    });

    const data = purposeData[purpose];

    if (data) {
      title.textContent = data.title;
      description.textContent = data.description;
    }

    sellerGroup.hidden = purpose !== "seller";

    document.querySelectorAll("[data-seller-required]").forEach(field => {
      field.required = purpose === "seller";
    });

    questionnaire.hidden = false;

    questionnaire.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  purposeCards.forEach(card => {
    card.addEventListener("click", function () {
      openQuestionnaire(this.dataset.purpose);
    });
  });

  if (getStarted) {
    getStarted.addEventListener("click", function () {
      purposeSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }

  backButton.addEventListener("click", function () {
    questionnaire.hidden = true;

    purposeSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  continueButton.addEventListener("click", function () {

    const requiredFields = questionnaire.querySelectorAll(
      "[data-required], [data-seller-required]"
    );

    let valid = true;
    let firstInvalid = null;

    requiredFields.forEach(field => {

      const sellerField =
        field.hasAttribute("data-seller-required");

      if (sellerField && selectedPurpose !== "seller") {
        return;
      }

      if (!field.value || !field.value.trim()) {
        valid = false;

        if (!firstInvalid) {
          firstInvalid = field;
        }

        field.style.borderColor = "#a13a32";
      } else {
        field.style.borderColor = "";
      }
    });

    if (!valid) {
      firstInvalid.focus();

      firstInvalid.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      return;
    }

    /*
      MVP stage:
      Do not submit data to a server yet.
      The next stage will connect this structured
      questionnaire to the marketplace account,
      search and matching system.
    */

    const success = document.createElement("div");

    success.className = "marketplace-fee-notice";

    success.innerHTML = `
      <strong>Requirements captured</strong>
      <p>
        Your marketplace requirements are ready for the next step.
        Account creation, marketplace matching and commercial
        communication will be connected in the next stage.
      </p>
    `;

    questionnaire.appendChild(success);

    continueButton.disabled = true;
    continueButton.textContent = "Requirements Ready";

    success.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });

})();
