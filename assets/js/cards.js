const manufacturers = [
  {
    category: "electrical",
    logo: "/assets/images/manufacturers/elite-components.svg",
    alt: "Elite Components",
    website: "https://elitecomponents.com/",
    catalog: "/assets/linecards/elite-components-catalog.pdf",
    description: "Electrical Fasteners, Plastic Boxes, Strut Accessories, Local Strut & All Thread Inventory",
    freight: "$500",
    territory: "CA, NV",
    usMade: false,
    localStock: false
  },
  {
    category: "electrical",
    logo: "/assets/images/manufacturers/peco-logo.svg",
    alt: "Peco",
    website: "https://peco-electric.com/",
    catalog: "/assets/linecards/peco-catalog.pdf",
    description: "Electrical Conduit Fittings & Accessories",
    freight: "$1500",
    territory: "CA, NV",
    usMade: false,
    localStock: false
  },
  {
    category: "electrical",
    logo: "/assets/images/manufacturers/patriot-industries.svg",
    alt: "Patriot Industries",
    website: "https://patriotsas.com/",
    catalog: "/assets/linecards/patriot.pdf",
    description: "Rigid Aluminum, Rigid Stainless Steel, GRC Elbows, Nipples, Couplings, EMT Elbows",
    freight: "Inquire",
    territory: "CA, NV",
    usMade: true,
    localStock: false
  },
  {
    category: "electrical",
    logo: "/assets/images/manufacturers/alva-manufacturing.svg",
    alt: "Alva Manufacturing",
    website: "https://alva-mfg.com/",
    catalog: "/assets/linecards/e-z-weld-conduit-by-alva-mfg.pdf",
    description: "PVC Conduit, Elbows, Duct Bank Spacers, and Glue/Solvents",
    freight: "Inquire",
    territory: "CA, NV",
    usMade: false,
    localStock: false
  },
  {
    category: "electrical",
    logo: "/assets/images/manufacturers/titan-3-technology.svg",
    alt: "Titan 3 Technology",
    website: "https://www.titan3.com/",
    catalog: "/assets/linecards/titan-catalogs/twcw1pc.pdf",
    description: "In-Use, Metallic/Non-Metallic Weatherproof Boxes, Wire Nuts",
    freight: "$2000",
    territory: "CA, NV",
    usMade: false,
    localStock: false
  },
  {
    category: "electrical",
    logo: "/assets/images/manufacturers/mulberry.svg",
    alt: "Mulberry",
    website: "https://mulberrymetal.com/",
    catalog: "/assets/linecards/mulberry-catalogs/mulberry-catalog.pdf",
    description: "Wall Plates, Weatherproof Boxes, Steel Box Covers, Conduit Bodies",
    freight: "$1000",
    territory: "CA",
    usMade: true,
    localStock: true
  },
  {
    category: "electrical",
    logo: "/assets/images/manufacturers/kps.svg",
    alt: "KPS",
    website: "https://kps-intl.com/",
    catalog: "/assets/linecards/kps-2024-test-and-measurement-catalog.pdf",
    description: "Metering, Testing, & Measurement",
    freight: "$500",
    territory: "CA",
    usMade: false,
    localStock: false
  },
  {
    category: "electrical",
    logo: "/assets/images/manufacturers/wiha.svg",
    alt: "Wiha Tools",
    website: "https://www.wihatools.com/",
    catalog: "https://cdn.shopify.com/s/files/1/0608/2117/6576/files/91327.TopsellerCatalog.2024.pdf?v=1709228560",
    description: "Electrical Trade Tools, Insulated & Precision Tools, German Made",
    freight: "$750",
    territory: "CA, NV",
    usMade: false,
    localStock: false
  },
  {
    category: "electrical",
    logo: "/assets/images/manufacturers/spike.svg",
    alt: "Spike Electric",
    website: "https://spikeelectric.com/",
    catalog: "/assets/linecards/spike-catalogs/spike-electric-line-card.pdf",
    description: "Expedited Gear OEM, Panels, Switchboards, MCC Buckets",
    freight: "Inquire",
    territory: "CA, NV",
    usMade: true,
    localStock: false
  },
  {
    category: "electrical",
    logo: "/assets/images/manufacturers/high-to-low-voltage.svg",
    alt: "High to Low Voltage",
    website: "https://www.hightolowvoltage.com/",
    catalog: "",
    description: "New and Refurbished Transformers, Temporary Gear",
    freight: "Inquire",
    territory: "CA, NV",
    usMade: false,
    localStock: false
  },
  {
    category: "electrical",
    logo: "/assets/images/manufacturers/esa-fabrication.svg",
    alt: "ESA Fabrication",
    website: "https://esafab.com/",
    catalog: "https://esafab.com/wp-content/uploads/2023/09/ESA-Catalog-FINAL.pdf",
    description: "Material Handling, Carts, A Frames, Spool Handling",
    freight: "Inquire",
    territory: "CA",
    usMade: true,
    localStock: false
  },
  {
    category: "electrical",
    logo: "/assets/images/manufacturers/aida.svg",
    alt: "Aida",
    website: "https://aidacorp.com/",
    catalog: "/assets/linecards/2025-aida-catalog.pdf",
    description: "Wiring devices, plug & receptacles, lighting controls",
    freight: "$1500",
    territory: "CA, NV",
    usMade: false,
    localStock: false
  },
  {
    category: "electrical",
    logo: "/assets/images/manufacturers/delta-therm.svg",
    alt: "Delta Therm",
    website: "https://www.delta-therm.com/en-us/default.aspx",
    catalog: "/assets/linecards/deltatherm-catalogs/delta-therm-catalog.pdf",
    description: "Engineered Heat Trace Solutions",
    freight: "$4500",
    territory: "CA, NV",
    usMade: true,
    localStock: false
  },
  {
    category: "electrical",
    logo: "/assets/images/manufacturers/ouellet.svg",
    alt: "Ouellet",
    website: "https://www.ouellet.com/en-us/default.aspx",
    catalog: "/assets/linecards/ouellet-catalog.pdf",
    description: "In-Floor Heat, Wall Heaters, Patio Heaters",
    freight: "$2000",
    territory: "CA, NV",
    usMade: false,
    localStock: true
  },
  {
    category: "lighting",
    logo: "/assets/images/manufacturers/phoenix.svg",
    alt: "Phoenix Lighting",
    website: "https://www.phoenixlighting.com/",
    catalog: "",
    description: "Industrial and hazardous location lighting",
    freight: "$5000",
    territory: "CA, NV",
    usMade: true,
    localStock: false
  },
  {
    category: "lighting",
    logo: "/assets/images/manufacturers/xtralight-s.svg",
    alt: "Xtra Light",
    website: "https://www.xtralight.com/",
    catalog: "/assets/linecards/xtralight-catalogs/obl-spacing-recommendations.pdf",
    description: "Commercial Indoor & Outdoor Fixtures",
    freight: "$2500/$5000 for 8'",
    territory: "CA, NV",
    usMade: true,
    localStock: false,
    descHeightClass: "short-desc"
  },
  {
    category: "lighting",
    logo: "/assets/images/manufacturers/intermatic.svg",
    alt: "Intermatic",
    website: "https://www.intermatic.com/",
    catalog: "",
    description: "ARISTA: Advanced Lighting Controls and Energy Management Solutions",
    freight: "$500",
    territory: "CA",
    usMade: false,
    localStock: false
  },
  {
    category: "lighting",
    logo: "/assets/images/manufacturers/eco-revolution.svg",
    alt: "Eco Revolution",
    website: "https://eco-revolution.com/",
    catalog: "/assets/linecards/pickleball-ec-2024.pdf",
    description: "Architectural Outdoor, Industrial & Local Pole Inventory",
    freight: "$5000",
    territory: "CA, NV",
    usMade: true,
    localStock: false
  },
  {
    category: "lighting",
    logo: "/assets/images/manufacturers/esl-vision.svg",
    alt: "ESL Vision",
    website: "https://eslvision.com/",
    catalog: "/assets/linecards/esl-catalogs/eslcatalog2025.pdf",
    description: "LED Fixtures & Retrofits, Lamps, Drivers, Emergency",
    freight: "$500/$2500 for 8’",
    territory: "CA",
    usMade: false,
    localStock: false,
    descHeightClass: "short-desc"
  },
  {
    category: "lighting",
    logo: "/assets/images/manufacturers/alg.svg",
    alt: "Archipelago Lighting",
    website: "https://www.archipelagolighting.com/",
    catalog: "",
    description: "Indoor/Outdoor Luminaires, lamps, Specialty lighting",
    freight: "$1500",
    territory: "CA",
    usMade: false,
    localStock: false
  },
  {
    category: "lighting",
    logo: "/assets/images/manufacturers/lotus.svg",
    alt: "Lotus LED Lights",
    website: "https://www.lotusledlights.com/",
    catalog: "/assets/linecards/lotus-2025-catalog.pdf",
    description: "Recessed Lighting, Undercabinet, Tape, Fire Rated",
    freight: "$1000",
    territory: "CA",
    usMade: false,
    localStock: false
  },
  {
    category: "lighting",
    logo: "/assets/images/manufacturers/asd.svg",
    alt: "ASD Lighting",
    website: "https://asd-lighting.com/",
    catalog: "",
    description: "Commercial and Residential lighting",
    freight: "$500",
    territory: "CA",
    usMade: false,
    localStock: false
  }
];

const manufacturerGrid = document.getElementById("manufacturerGrid");
const resultsCount = document.getElementById("resultsCount");

let currentStateFilter = "all";

function getCategoryTitle(category) {
  if (category === "electrical") return "Electrical Lines";
  if (category === "lighting") return "Lighting Lines";
  return category;
}

function formatTerritory(territory) {
  if (currentStateFilter === "all") {
    return territory;
  }

  return territory
    .split(",")
    .map((state) => {
      const trimmed = state.trim();

      if (trimmed.toUpperCase() === currentStateFilter.toUpperCase()) {
        return `<span class="territory-highlight">${trimmed}</span>`;
      }

      return trimmed;
    })
    .join(", ");
}

function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("manufacturer-card");

  card.innerHTML = `
    <div class="manufacturer-logo-container">
      <img
        src="${data.logo}"
        alt="${data.alt}"
        class="manufacturer-logo"
        loading="lazy"
        decoding="async"
      >
    </div>

    <p class="manufacturer-description ${data.descHeightClass || ""}">
      ${data.description}
    </p>

    <hr class="line-sep">

    <div class="detail-grid">
      <p class="freight">Freight: ${data.freight}</p>

      <p class="territory">Territory: ${formatTerritory(data.territory)}</p>

      <p class="us-made">
        ${
          data.usMade
            ? `<img src="/assets/images/us-made.png" alt="US Made">US Made`
            : ""
        }
      </p>

      <p class="local-stock">
        ${
          data.localStock
            ? `<img src="/assets/images/ad-small.png" alt="AD logo">`
            : ""
        }
      </p>
    </div>

    <div class="button-row">
      <button class="website-btn" type="button">Website</button>
      <button class="catalog-btn" type="button">Catalog</button>
    </div>
  `;

  const websiteBtn = card.querySelector(".website-btn");
  const catalogBtn = card.querySelector(".catalog-btn");

  websiteBtn.addEventListener("click", () => {
    window.open(data.website, "_blank", "noopener");
  });

  if (data.catalog && data.catalog.trim() !== "") {
    catalogBtn.addEventListener("click", () => {
      window.open(data.catalog, "_blank", "noopener");
    });
  } else {
    catalogBtn.disabled = true;
    catalogBtn.textContent = "No Catalog";
  }

  return card;
}

function renderManufacturers(dataArray, stateFilter = "all") {
  currentStateFilter = stateFilter;

  manufacturerGrid.innerHTML = "";

  const filteredData =
    stateFilter === "all"
      ? dataArray
      : dataArray.filter((item) =>
          item.territory.toLowerCase().includes(stateFilter.toLowerCase())
        );

  if (resultsCount) {
    resultsCount.textContent = `Showing ${filteredData.length} manufacturer${
      filteredData.length === 1 ? "" : "s"
    }`;
  }

  const categories = [...new Set(filteredData.map((item) => item.category))];

  categories.forEach((category) => {
    const divider = document.createElement("div");
    divider.classList.add("section-divider");

    divider.innerHTML = `
      <span>${getCategoryTitle(category)}</span>
    `;

    manufacturerGrid.appendChild(divider);

    const categoryGrid = document.createElement("div");
    categoryGrid.classList.add("manufacturer-grid");

    const categoryItems = filteredData.filter(
      (item) => item.category === category
    );

    categoryItems.forEach((data) => {
      const card = createCard(data);
      categoryGrid.appendChild(card);
    });

    manufacturerGrid.appendChild(categoryGrid);
  });
}

function openStateFilterModal() {
  let modal = document.getElementById("stateFilterModal");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "stateFilterModal";
    modal.className = "state-filter-modal";

    modal.innerHTML = `
      <div class="state-filter-backdrop"></div>

      <div class="state-filter-box">
        <button class="state-filter-close" type="button">×</button>

        <h3>Sort by State</h3>

        <button class="state-option" type="button" data-state="CA">
          California
        </button>

        <button class="state-option" type="button" data-state="NV">
          Nevada
        </button>

        <button class="state-option" type="button" data-state="all">
          Show All
        </button>
      </div>
    `;

    document.body.appendChild(modal);

    modal
      .querySelector(".state-filter-backdrop")
      .addEventListener("click", closeStateFilterModal);

    modal
      .querySelector(".state-filter-close")
      .addEventListener("click", closeStateFilterModal);

    modal.querySelectorAll(".state-option").forEach((button) => {
      button.addEventListener("click", () => {
        const selectedState = button.dataset.state;

        closeStateFilterModal();
        renderManufacturers(manufacturers, selectedState);
      });
    });
  }

  modal.classList.add("show");
}

function closeStateFilterModal() {
  const modal = document.getElementById("stateFilterModal");

  if (modal) {
    modal.classList.remove("show");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (!manufacturerGrid) return;

  const params = new URLSearchParams(window.location.search);
  const stateFromUrl = params.get("state") || "all";

  renderManufacturers(manufacturers, stateFromUrl);

  const filterBtn = document.querySelector(".filter-btn");

  if (filterBtn) {
    filterBtn.addEventListener("click", openStateFilterModal);
  }
});