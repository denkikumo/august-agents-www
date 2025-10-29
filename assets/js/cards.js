const cardData = [
  {
    category: 'Electrical',
    logo: 'assets/images/Elite-Components.png',
    alt: 'Elite Components',
    website: 'https://elitecomponents.com/',
    catalogs: [
      { label: "Quick Reference", url: "/assets/Linecards/Elite-Electrical-Fasteners-Quick-Reference-Guide_062025.pdf" },
      { label: "Main Catalog", url: "/assets/Linecards/Elite Components Catalog.pdf" }
    ],
    description: 'Electrical Fasteners, Plastic Boxes, Strut Accessories, Local Strut & All Thread Inventory',
    territory: 'CA, NV',
    freight: '$500',
    icons: ['cali-icon']
  },
  {
    category: 'Electrical',
    logo: 'assets/images/Peco-Logo.png',
    alt: 'Peco Electric',
    website: 'https://peco-electric.com/',
    catalogs: [
      { label: "Full Line Card", url: "/assets/Linecards/PECO Catalog.pdf" }
    ],
    description: 'Electrical Conduit Fittings & Accessories',
    territory: 'CA, NV',
    freight: '$1500',
    icons: []
  },
  {
    category: 'Electrical',
    logo: 'assets/images/patriotindustries.png',
    alt: 'Patriot Industries',
    website: 'https://patriotsas.com/',
    catalogs: [
      { label: "Full Line Card", url: "/assets/Linecards/Patriot.pdf" }
    ],
    description: 'Rigid Aluminum, Rigid Stainless Steel, GRC Elbows, Nipples, Couplings, EMT Elbows',
    territory: 'CA, NV',
    freight: 'ADD',
    icons: ['us-made']
  },
  {
    category: 'Electrical',
    logo: 'assets/images/Alva-manufacturing.jpg',
    alt: 'EZ pvc Weld',
    website: 'https://alva-mfg.com/',
    catalogs: [
      { label: "Full Line Card", url: "/assets/Linecards/E-Z-Weld-Conduit-by-Alva-Mfg.pdf" }
    ],
    description: 'PVC Conduit, Elbows, Solvents, and Cements',
    territory: 'CA, NV',
    freight: 'ADD',
    icons: []
  },
  {
    category: 'Electrical',
    logo: 'assets/images/Titan-3-Technology.png',
    alt: 'Titan 3 Technology',
    website: 'https://www.titan3.com/',
    catalogs: [
      { label: "Ceiling Fan Catalog", url: "/assets/Linecards/Titan-Catalogs/Titan Ceiling Fan Catalog.pdf" },
      { label: "Weatherproof Catalog", url: "/assets/Linecards/Titan-Catalogs/Titan Weatherproof Catalog.pdf" },
      { label: "TWCW1PC", url: "/assets/Linecards/Titan-Catalogs/TWCW1PC.pdf" },
      { label: "TWCW2PC", url: "/assets/Linecards/Titan-Catalogs/TWCW2PC.pdf" }
    ],
    description: 'In-Use, Metallic/Non-Metallic Weatherproof Boxes, Wire Nuts',
    territory: 'CA, NV',
    freight: '$2000',
    icons: []
  },
  {
    category: 'Electrical',
    logo: 'assets/images/Mulberry.png',
    alt: 'Mulberry Metals',
    website: 'https://mulberrymetal.com/',
    catalogs: [
      { label: "Main Catalog", url: "/assets/Linecards/Mulberry-Catalogs/Mulberry Catalog.pdf" },
      { label: "Companion Series Brochure 2024", url: "/assets/Linecards/Mulberry-Catalogs/Mulberry Companion Series Brochure-2024.pdf" },
      { label: "LED Flood Lights", url: "/assets/Linecards/Mulberry-Catalogs/Mulberry LED Flood Lights.pdf" },
      { label: "Cat No 30030-W-Z Series", url: "/assets/Linecards/Mulberry-Catalogs/Cat No 30030-W-Z Series.pdf" },
      { label: "Cat No 30040-W-Z Series", url: "/assets/Linecards/Mulberry-Catalogs/Cat No 30040-W-Z Series.pdf" },
    ],
    description: 'Wall Plates, Weatherproof Boxes, Steel Box Covers, Conduit Bodies',
    territory: 'CA',
    freight: '$1000',
    icons: ['imark-icon', 'us-made']
  },
  {
    category: 'Electrical',
    logo: 'assets/images/kps-logo.png',
    alt: 'kps measuring instruments',
    website: 'https://kps-intl.com/',
    catalogs: [
      { label: "Full Line Card", url: "/assets/Linecards/KPS 2024 Test and Measurement Catalog.pdf" }
    ],
    description: 'Metering, Testing, & Measurement',
    territory: 'CA',
    freight: '$500',
    icons: []
  },
  {
    category: 'Electrical',
    logo: 'assets/images/Wiha.png',
    alt: 'Wiha Tools',
    website: 'https://www.wihatools.com/',
    catalogs: [
      { label: "Top Sellers Wiha", url: "https://cdn.shopify.com/s/files/1/0608/2117/6576/files/91327.TopsellerCatalog.2024.pdf?v=1709228560" }
    ],
    description: 'Electrical Trade Tools, Insulated & Precision Tools, German Made',
    territory: 'CA, NV',
    freight: '$750',
    icons: []
  },
  {
    category: 'Electrical',
    logo: 'assets/images/Spike.png',
    alt: 'Spike Electric Controls',
    website: 'https://spikeelectric.com/',
    catalogs: [
      { label: "Line Card", url: "/assets/Linecards/Spike-Catalogs/Spike Electric Line Card.pdf" },
      { label: "Switchgear Solutions", url: "/assets/Linecards/Spike-Catalogs/Spike Switchgear Solutions.pdf" },
    ],
    description: 'Expedited Gear OEM, Panels, Switchboards, MCC Buckets',
    territory: 'CA, NV',
    freight: 'ADD',
    icons: ['us-made']
  },
  {
    category: 'Electrical',
    logo: 'assets/images/High-To-Low-Voltage.png',
    alt: 'High to Low Voltage',
    website: 'https://www.hightolowvoltage.com/',
    catalog: '',
    description: 'New and Refurbished Transformers, Temporary Gear',
    territory: 'CA, NV',
    freight: 'ADD',
    icons: []
  },
  {
    category: 'Electrical',
    logo: 'assets/images/Plymouth.png',
    alt: 'Plymouth',
    website: 'https://www.plymouthrubber.com/',
    catalogs: [
      { label: "Primary", url: "/assets/Linecards/Plymouth-Catalogs/Plymouth PRIMARY.pdf" },
      { label: "PLYJACK Product Overview", url: "/assets/Linecards/Plymouth-Catalogs/PLYJACK Product Overview.pdf" },
      { label: "Mining Catalog", url: "/assets/Linecards/Plymouth-Catalogs/Mining Catalog.pdf" },
      { label: "Plymouth Product Guide", url: "/assets/Linecards/Plymouth-Catalogs/Plymouth Product Guide.pdf" },
      { label: "UTILITY Product Guide", url: "/assets/Linecards/Plymouth-Catalogs/UTILITY Product Guide.pdf" },
    ],
    description: 'C & I Electrical Tapes, Vinyl, Mastics, Rubber Tape',
    territory: 'CA, NV',
    freight: '$2500',
    icons: []
  },
  {
    category: 'Electrical',
    logo: 'assets/images/Aida_logo.png',
    alt: 'Aida Corp',
    website: 'https://aidacorp.com/',
    catalogs: [
      { label: "Full Line Card", url: "/assets/Linecards/2025 Aida Catalog.pdf" }
    ],
    description: 'Wiring devices, plug & receptacles, lighting controls',
    territory: 'CA, NV',
    freight: '$1500',
    icons: []
  },
  {
    category: 'Electrical',
    logo: 'assets/images/Delta-Therm.png',
    alt: 'Delta Therm',
    website: 'https://www.delta-therm.com/en-us/default.aspx',
    catalogs: [
      { label: "Delta Therm Catalog", url: "/assets/Linecards/DeltaTherm-Catalogs/Delta Therm Catalog.pdf" },
      { label: "EX-IT-LA Data-Sheet", url: "/assets/Linecards/DeltaTherm-Catalogs/EX-IT-LA Data-Sheet.pdf" },
      { label: "EX-IT-LA", url: "/assets/Linecards/DeltaTherm-Catalogs/EX-IT-LA.pdf" }
    ],
    description: 'Engineered Heat Trace Solutions',
    territory: 'CA, NV',
    freight: '$4500',
    icons: ['us-made']
  },
  {
    category: 'Electrical',
    logo: 'assets/images/Ouellet.png',
    alt: 'Ouellet',
    website: 'https://www.ouellet.com/en-us/default.aspx',
    catalogs: [
      { label: "Full Line Card", url: "/assets/Linecards/Ouellet Catalog.pdf" }
    ],
    description: 'In-Floor Heat, Wall Heaters, Patio Heaters',
    territory: 'CA',
    freight: '$2000',
    icons: ['imark-icon']
  },
  {
    category: 'Electrical',
    logo: 'assets/images/ESA-Fabrication.png',
    alt: 'ESA Fabrication',
    website: 'https://esafab.com/',
    catalogs: [
      { label: "Full Line Card", url: "https://esafab.com/wp-content/uploads/2023/09/ESA-Catalog-FINAL.pdf" }
    ],
    description: 'Material Handling, Carts, A Frames, Spool Handling',
    territory: 'CA',
    freight: 'ADD',
    icons: ['us-made']
  },
  {
    category: 'Electrical',
    logo: 'assets/images/Nema-Enclosures-Logo.png',
    alt: 'Nema Enclosures',
    website: 'https://www.nemaenclosures.com/',
    catalog: '',
    description: 'Custom, Stainless Enclosures',
    territory: 'CA, NV',
    freight: 'ADD',
    icons: ['us-made']
  }
  // Add more cards following this structure
];

const lightingCards = [
  {
    category: 'Lighting',
    logo: 'assets/images/pheonix-logo.png',
    alt: 'Phoenix Lighting',
    website: 'https://www.phoenixlighting.com/',
    catalog: '',
    description: 'Industrial and Hazardous Location Lighting',
    territory: 'CA, NV',
    freight: '$2000',
    icons: ['us-made']
  },
  {
    category: 'Lighting',
    logo: 'assets/images/XtraLight.svg',
    alt: 'Xtra Light',
    website: 'https://www.xtralight.com/',
    catalogs: [
      { label: "OBL Spacing Recommendations", url: "/assets/Linecards/XtraLight-Catalogs/OBL spacing recommendations.pdf" },
      { label: "Optibay_final_7.16.2025", url: "/assets/Linecards/XtraLight-Catalogs/Optibay_final_7.16.2025.pdf" },
    ],
    description: 'Commercial Indoor & Outdoor Fixtures',
    territory: 'CA, NV',
    freight: '$2500',
    icons: ['us-made']
  },
  {
    category: 'Lighting',
    logo: 'assets/images/intermatic-logo.png',
    alt: 'Intermatic',
    website: 'https://www.intermatic.com/',
    catalog: '',
    description: 'ARISTA: Advanced Lighting Controls and Energy Management Solutions',
    territory: 'CA',
    freight: '$500',
    icons: []
  },
  {
    category: 'Lighting',
    logo: 'assets/images/Eco-Revolution.png',
    alt: 'Eco Revolution Lighting',
    website: 'https://eco-revolution.com/',
    catalogs: [
      { label: "Full Line Card", url: "/assets/Linecards/Pickleball-EC-2024.pdf" }
    ],
    description: 'Architectural Outdoor, Industrial & Local Pole Inventory',
    territory: 'CA, NV',
    freight: '$5000',
    icons: ['cali-icon', 'us-made']
  },
  {
    category: 'Lighting',
    logo: 'assets/images/ESL-Vision.png',
    alt: 'ESL Vision',
    website: 'https://eslvision.com/',
    catalogs: [
      { label: "ESL-AL-75150W-13050", url: "/assets/Linecards/ESL-Catalogs/ESL Vision, ESL-AL-75150W-13050.pdf" },
      { label: "ESL-PT-4580W-13050-BZ.pdf", url: "/assets/Linecards/ESL-Catalogs/ESL Vision, ESL-PT-4580W-13050-BZ.pdf" },
      { label: "ESL-PT-100160W-13050-BZ.pdf", url: "/assets/Linecards/ESL-Catalogs/ESL Vision, ESL-PT-100160W-13050-BZ.pdf" },
      { label: "ESL-WP-30100W-53050.pdf", url: "/assets/Linecards/ESL-Catalogs/ESL Vision, ESL-WP-30100W-53050.pdf" },
      { label: "ESL-OPT-6-0919W-23050K", url: "/assets/Linecards/ESL-Catalogs/ESL-Vision-ESL-OPT-6-0919W-23050K.pdf" },
      { label: "ESL-OPT-8-1129W-23050K.pdf", url: "/assets/Linecards/ESL-Catalogs/ESL-Vision-ESL-OPT-8-1129W-23050K.pdf" },
      { label: "ESL-2025-Catalog.pdf", url: "/assets/Linecards/ESL-Catalogs/ESLCatalog2025.pdf" },
    ],
    description: 'LED Fixtures & Retrofits, Lamps, Drivers, Emergency',
    territory: 'CA',
    freight: '$500',
    icons: []
  },
  {
    category: 'Lighting',
    logo: 'assets/images/ALG-logo.svg',
    alt: 'archipelagolighting',
    website: 'https://www.archipelagolighting.com/',
    catalog: '',
    description: 'Indoor/Outdoor Luminaires, lamps, Specialty lighting',
    territory: 'CA',
    freight: '$1500',
    icons: ['cali-icon']
  },
  {
    category: 'Lighting',
    logo: 'assets/images/lotus-led-lights.svg',
    alt: 'Lotus LED Lights',
    website: 'https://www.lotusledlights.com/',
    catalogs: [
      { label: "Full Line Card", url: "/assets/Linecards/Lotus 2025 Catalog.pdf" }
    ],
    description: 'Specialty Recessed Lighting, Undercabinet, Tape, Fire Rated',
    territory: 'CA',
    freight: '$1000',
    icons: []
  },
  {
    category: 'Lighting',
    logo: 'assets/images/asd-logo.png',
    alt: 'ASD Lighting',
    website: 'https://asd-lighting.com/',
    catalogs: '',
    description: 'Commercial and Residential Lighting',
    territory: 'CA',
    freight: 'Inquire',
    icons: []
  }
];

// ======= SELECT TARGET CONTAINERS =======
const electricalGrid = document.getElementById('electricalGrid');
const lightingGrid = document.getElementById('lightingGrid');

/* ======= CATALOG MODAL HELPERS (build on the fly) ======= */
function openCatalogModal(links) {
  if (!Array.isArray(links) || links.length === 0) return;

  let modal = document.getElementById('catalogModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'catalogModal';
    modal.className = 'catalog-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'catalogModalTitle');
    modal.innerHTML = `
      <div class="catalog-modal__backdrop" data-close-catalog></div>
      <div class="catalog-modal__dialog" role="document">
        <button class="catalog-modal__close" type="button" aria-label="Close" data-close-catalog>×</button>
        <h3 id="catalogModalTitle" class="catalog-modal__title">Select a Catalog</h3>
        <div id="catalogLinks" class="catalog-modal__links"></div>
      </div>
    `;
    document.body.appendChild(modal);

    // close handlers
    modal.addEventListener('click', (e) => {
      if (e.target.matches('[data-close-catalog]')) closeCatalogModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeCatalogModal();
    });
  }

  const list = modal.querySelector('#catalogLinks');
  list.innerHTML = '';

  links.forEach(({ label, url }) => {
    const a = document.createElement('a');
    a.className = 'catalog-modal__link';
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener';
    a.textContent = label || (url ? url.split('/').pop() : 'Catalog');
    list.appendChild(a);
  });

  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
}

function closeCatalogModal() {
  const modal = document.getElementById('catalogModal');
  if (modal) {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
  }
}

/* ======= CARD RENDER FUNCTION ======= */
const renderCards = (dataArray, targetGrid, filterState) => {
  targetGrid.innerHTML = '';
  const normalized = (filterState || 'all').toLowerCase();

  const filtered = normalized === 'all'
    ? dataArray
    : dataArray.filter(card =>
        (card.territory || '').toLowerCase().includes(normalized)
      );

  filtered.forEach(data => {
    const card = document.createElement('div');
    card.classList.add('manufacturer-card');

    card.innerHTML = `
      <div class="manufacturer-logo-container">
        <a href="${data.website}" target="_blank" rel="noopener">
          <img src="${data.logo}" alt="${data.alt}" class="manufacturer-logo" />
        </a>
      </div>
      <div class="manufacturer-info-container">
        <p class="manufacturer-products">${data.description || ''}</p>

        <div class="spacer-line"></div>

        <div class="territory-freight-row">
          <p class="manufacturer-products-sub"><strong>Territory:</strong> ${data.territory || ''}</p>
          <p class="manufacturer-products-sub"><strong>Freight:</strong> ${data.freight || ''}</p>
        </div>

        <div class="freight-icon-row">
          ${data.icons && data.icons.includes('us-made') ? '<div class="icon-group"><img src="assets/images/us-made.png" /><span>US Made</span></div>' : ''}
          ${data.icons && data.icons.includes('cali-icon') ? '<div class="icon-group"><img src="assets/images/cali-icon.png" /><span>Local Stock</span></div>' : ''}
          ${data.icons && data.icons.includes('imark-icon') ? '<div class="icon-group"><img src="assets/images/ad-small-white.png" /><span></span></div>' : ''}
        </div>

        <div class="flex-spacer"></div>

        <div class="card-btn-links">
          <a href="${data.website}" target="_blank" rel="noopener" class="card-btn-link">Website</a>
          <!-- Catalog button injected below -->
        </div>
      </div>
    `;

    // Find button row
    const btnRow = card.querySelector('.card-btn-links');

    // Handle catalogs (preferred: data.catalogs = [{label, url}, ...])
    if (Array.isArray(data.catalogs) && data.catalogs.length > 0) {
      const catalogBtn = document.createElement('a');
      catalogBtn.className = 'card-btn-link';
      catalogBtn.textContent = 'Catalog';

      if (data.catalogs.length === 1) {
        // Single catalog → real link (no '#')
        const u = data.catalogs[0]?.url || '#';
        catalogBtn.href = u;
        catalogBtn.target = '_blank';
        catalogBtn.rel = 'noopener';
      } else {
        // Multiple → open modal list
        catalogBtn.href = '#';
        catalogBtn.addEventListener('click', (e) => {
          e.preventDefault();
          openCatalogModal(data.catalogs);
        });
      }

      btnRow.appendChild(catalogBtn);
    }
    // Back-compat: old schema data.catalog (single string URL)
    else if (data.catalog) {
      const catalogBtn = document.createElement('a');
      catalogBtn.href = data.catalog;
      catalogBtn.target = '_blank';
      catalogBtn.rel = 'noopener';
      catalogBtn.className = 'card-btn-link';
      catalogBtn.textContent = 'Catalog';
      btnRow.appendChild(catalogBtn);
    }

    targetGrid.appendChild(card);
  });
};

// ======= READ URL PARAMS FOR FILTER STATE =======
const params = new URLSearchParams(window.location.search);
const filterParam = params.get('filter')?.toLowerCase() || 'all';

// ======= RENDER BOTH GRIDS =======
renderCards(cardData, electricalGrid, filterParam);
renderCards(lightingCards, lightingGrid, filterParam);

// ======= DOM READY INTERACTIONS =======
document.addEventListener('DOMContentLoaded', () => {
  const sortToggleBtn = document.querySelector('.sort-toggle-btn');
  const sortDropdown = document.querySelector('.sort-dropdown');
  const filterLinks = document.querySelectorAll('.filter-btn');
  const stickyHeading = document.querySelector('.sticky-heading-text');
  const electrical = document.getElementById('electricalAccordion');
  const lighting = document.getElementById('lightingAccordion');

  // Toggle sort dropdown
  sortToggleBtn?.addEventListener('click', () => {
    sortDropdown.classList.toggle('open');
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (sortDropdown && !sortDropdown.contains(e.target) && !sortToggleBtn.contains(e.target)) {
      sortDropdown.classList.remove('open');
    }
  });

  // Set active filter button on load
  filterLinks.forEach(link => {
    const hrefFilter = new URL(link.href, window.location.origin).searchParams.get('filter')?.toLowerCase();
    if (hrefFilter === filterParam) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // ======= SIMPLE HEADING SCROLL BEHAVIOR =======
  const updateStickyHeading = () => {
    const scrollY = window.scrollY;
    const buffer = 120; // adjust as needed
    const lightingTop = lighting?.offsetTop ?? Number.POSITIVE_INFINITY;
    const electricalTop = electrical?.offsetTop ?? Number.POSITIVE_INFINITY;

    if (scrollY + buffer >= lightingTop && lighting && lighting.open) {
      stickyHeading.textContent = 'Lighting Lines';
    } else if (scrollY + buffer >= electricalTop && electrical && electrical.open) {
      stickyHeading.textContent = 'Electrical Lines';
    } else {
      stickyHeading.textContent = 'Manufacturers';
    }
  };

  window.addEventListener('scroll', updateStickyHeading);
  updateStickyHeading(); // initial run
});
