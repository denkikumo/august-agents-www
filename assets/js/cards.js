const cardData = [
  {
    category: 'Electrical',
    logo: 'assets/images/Elite-Components.png',
    alt: 'Elite Components',
    website: 'https://elitecomponents.com/',
    catalog: 'https://elitecomponents.com/wp-content/uploads/Elite-Electrical-Fasteners-Quick-Reference-Guide.pdf',
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
    catalog: 'https://peco-electric.com/wp-content/uploads/2023/11/PECO-Catalog-2023.pdf',
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
    catalog: '/assets/Catalogs/Patriot Industries Catalog - 2024.pdf',
    description: 'Rigid Aluminum, Rigid Stainless Steel, GRC Elbows, Nipples, Couplings, EMT Elbows',
    territory: 'CA, NV',
    freight: 'ADD',
    icons: ['us-made']
  },
  {
    category: 'Electrical',
    logo: 'assets/images/EZW-Conduit-Alva_color-1.png',
    alt: 'EZ pvc Weld',
    website: 'https://alva-mfg.com/',
    catalog: 'https://online.flippingbook.com/view/40133734/',
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
    catalog: '/titan-catalogs',
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
    catalog: '/mulberry-catalogs',
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
    catalog: '',
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
    catalog: '/wiha-catalogs',
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
    catalog: '/spike-catalogs',
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
    catalog: '/plymouth-catalogs',
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
    catalog: 'https://aidacorp.com/wp-content/uploads/2023/04/2023-AIDA-CATALOG_DIGITAL4REPS.pdf',
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
    catalog: '/assets/Catalogs/Delta Therm Catalog.pdf',
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
    catalog: 'https://www.ouellet.com/CMSLibraries/Catalogues/us_products_catalog/CATUS.pdf',
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
    catalog: 'https://esafab.com/wp-content/uploads/2024/08/2024-ESA-Catalog.pdf',
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
    catalog: '',
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
    catalog: '',
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
    catalog: '/assets/Catalogs/ESL Vision Catalog 2024.pdf',
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
    catalog: 'https://www.lotusledlights.com/resources/Lotus-Catalog-2025_Web.pdf',
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
    catalog: 'https://asd-lighting.com/upload/catalog/asd-catalog-web-2025-2.pdf',
    description: 'Commercial and Residential Lighting',
    territory: 'CA',
    freight: 'Inquire',
    icons: []
  }
];




// ======= SELECT TARGET CONTAINERS =======
const electricalGrid = document.getElementById('electricalGrid');
const lightingGrid = document.getElementById('lightingGrid');

// ======= CARD RENDER FUNCTION =======
const renderCards = (dataArray, targetGrid, filterState) => {
  targetGrid.innerHTML = '';
  const normalized = filterState.toLowerCase();

  const filtered = normalized === 'all'
    ? dataArray
    : dataArray.filter(card =>
        card.territory.toLowerCase().includes(normalized)
      );

  filtered.forEach(data => {
    const card = document.createElement('div');
    card.classList.add('manufacturer-card');

    card.innerHTML = `
      <div class="manufacturer-logo-container">
        <a href="${data.website}" target="_blank">
          <img src="${data.logo}" alt="${data.alt}" class="manufacturer-logo" />
        </a>
      </div>
      <div class="manufacturer-info-container">
        <p class="manufacturer-products">${data.description}</p>

        <div class="spacer-line"></div>

        <div class="territory-freight-row">
          <p class="manufacturer-products-sub"><strong>Territory:</strong> ${data.territory}</p>
          <p class="manufacturer-products-sub"><strong>Freight:</strong> ${data.freight}</p>
        </div>

        <div class="freight-icon-row">
          ${data.icons.includes('us-made') ? '<div class="icon-group"><img src="assets/images/us-made.png" /><span>US Made</span></div>' : ''}
          ${data.icons.includes('cali-icon') ? '<div class="icon-group"><img src="assets/images/cali-icon.png" /><span>Local Stock</span></div>' : ''}
        </div>

        <div class="flex-spacer"></div>

        <div class="card-btn-links">
          <a href="${data.website}" target="_blank" class="card-btn-link">Website</a>
          ${data.catalog ? `<a href="${data.catalog}" target="_blank" class="card-btn-link">Catalog</a>` : ''}
        </div>
      </div>
    `;

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
    if (!sortDropdown.contains(e.target) && !sortToggleBtn.contains(e.target)) {
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
    const lightingTop = lighting.offsetTop;
    const electricalTop = electrical.offsetTop;

    if (scrollY + buffer >= lightingTop && lighting.open) {
      stickyHeading.textContent = 'Lighting Lines';
    } else if (scrollY + buffer >= electricalTop && electrical.open) {
      stickyHeading.textContent = 'Electrical Lines';
    } else {
      stickyHeading.textContent = 'Manufacturers';
    }
  };

  window.addEventListener('scroll', updateStickyHeading);
  updateStickyHeading(); // initial run
});
