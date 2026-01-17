// Manufacturer Sourcing Pro - Application Logic
// Version 1.0 - January 2026

let searchResults = [];

const countryFlags = {
    // Priority countries
    'Turkey': '🇹🇷',
    'Poland': '🇵🇱',
    'Germany': '🇩🇪',
    // EU Member States (alphabetical)
    'Austria': '🇦🇹',
    'Belgium': '🇧🇪',
    'Bulgaria': '🇧🇬',
    'Croatia': '🇭🇷',
    'Cyprus': '🇨🇾',
    'Czech Republic': '🇨🇿',
    'Denmark': '🇩🇰',
    'Estonia': '🇪🇪',
    'Finland': '🇫🇮',
    'France': '🇫🇷',
    'Greece': '🇬🇷',
    'Hungary': '🇭🇺',
    'Ireland': '🇮🇪',
    'Italy': '🇮🇹',
    'Latvia': '🇱🇻',
    'Lithuania': '🇱🇹',
    'Luxembourg': '🇱🇺',
    'Malta': '🇲🇹',
    'Netherlands': '🇳🇱',
    'Portugal': '🇵🇹',
    'Romania': '🇷🇴',
    'Slovakia': '🇸🇰',
    'Slovenia': '🇸🇮',
    'Spain': '🇪🇸',
    'Sweden': '🇸🇪',
    // United Kingdom
    'United Kingdom': '🇬🇧',
    // Baltic States
    'Estonia': '🇪🇪',
    'Latvia': '🇱🇻',
    'Lithuania': '🇱🇹',
    // Balkan States (including EU and non-EU)
    'Albania': '🇦🇱',
    'Bosnia and Herzegovina': '🇧🇦',
    'Montenegro': '🇲🇪',
    'North Macedonia': '🇲🇰',
    'Serbia': '🇷🇸'
};

const countryCodes = {
    // Priority countries
    'Turkey': 'TUR',
    'Poland': 'PL',
    'Germany': 'DE',
    // EU Member States (ISO codes)
    'Austria': 'AT',
    'Belgium': 'BE',
    'Bulgaria': 'BG',
    'Croatia': 'HR',
    'Cyprus': 'CY',
    'Czech Republic': 'CZ',
    'Denmark': 'DK',
    'Estonia': 'EE',
    'Finland': 'FI',
    'France': 'FR',
    'Greece': 'GR',
    'Hungary': 'HU',
    'Ireland': 'IE',
    'Italy': 'IT',
    'Latvia': 'LV',
    'Lithuania': 'LT',
    'Luxembourg': 'LU',
    'Malta': 'MT',
    'Netherlands': 'NL',
    'Portugal': 'PT',
    'Romania': 'RO',
    'Slovakia': 'SK',
    'Slovenia': 'SI',
    'Spain': 'ES',
    'Sweden': 'SE',
    // United Kingdom
    'United Kingdom': 'GB',
    // Baltic States
    'Estonia': 'EE',
    'Latvia': 'LV',
    'Lithuania': 'LT',
    // Balkan States (including EU and non-EU)
    'Albania': 'AL',
    'Bosnia and Herzegovina': 'BA',
    'Montenegro': 'ME',
    'North Macedonia': 'MK',
    'Serbia': 'RS'
};

// Manufacturer database - expandable
const manufacturerDatabase = {
    'Turkey': {
        'takeaway boxes': [
            {
                company: 'Alya Packaging',
                comments: '30+ years experience, 8000m² facility, custom printed packaging',
                specialRef: 'Export specialist to EU',
                website: 'https://alyapackaging.com',
                email: 'info@alyapackaging.com',
                phone: '+90 212 xxx xxxx',
                address: 'Istanbul, Turkey'
            },
            {
                company: 'SNI Pack',
                comments: 'Founded 2004, food packaging specialist, eco-friendly focus',
                specialRef: 'Corrugated & offset food boxes',
                website: 'https://snipack.com.tr',
                email: 'info@snipack.com.tr',
                phone: '+90 xxx xxx xxxx',
                address: 'Turkey'
            },
            {
                company: 'Kapak Ambalaj',
                comments: 'Pizza & fastfood boxes specialist, super flexo printing',
                specialRef: 'All flute types: A,B,C,D,E,F',
                website: 'https://kapakambalaj.com',
                email: 'info@kapakambalaj.com',
                phone: '+90 212 xxx xxxx',
                address: 'Istanbul, Turkey'
            },
            {
                company: 'Ankutsan',
                comments: '300k tons paper, 420k tons corrugated/year, R&D center',
                specialRef: 'Exports to 70+ countries',
                website: 'https://ankutsan.com',
                email: 'export@ankutsan.com',
                phone: '+90 xxx xxx xxxx',
                address: 'Turkey (Multiple facilities)'
            },
            {
                company: 'Smart Design Box',
                comments: 'Custom printed folding boxes, 15+ years experience',
                specialRef: 'Luxury packaging specialist',
                website: 'https://smartdesignbox.com',
                email: 'info@smartdesignbox.com',
                phone: '+90 xxx xxx xxxx',
                address: 'Oruceis Mh. Tekstilkent, Istanbul'
            },
            {
                company: 'Atlas Export Packaging',
                comments: 'Eco-friendly packaging solutions, export focused',
                specialRef: 'ISO certified',
                website: 'https://atlasexportpack.com',
                email: 'info@atlasexportpack.com',
                phone: '+90 xxx xxx xxxx',
                address: 'Istanbul, Turkey'
            },
            {
                company: 'Modern Karton',
                comments: 'Largest paper producer in Turkey, 1.05M tons/year capacity',
                specialRef: 'Advanced automation, ISO certified',
                website: 'https://modernkarton.com',
                email: 'info@modernkarton.com',
                phone: '+90 xxx xxx xxxx',
                address: 'Turkey'
            },
            {
                company: 'Şekil Ofset',
                comments: 'Est. 1998, 25+ years industry expertise, offset printing',
                specialRef: 'Paper packaging specialist',
                website: 'https://sekilofset.com',
                email: 'info@sekilofset.com',
                phone: '+90 xxx xxx xxxx',
                address: 'Turkey'
            }
        ],
        'cake boxes': [
            {
                company: 'Smart Design Box',
                comments: 'Luxury packaging, custom designs, 15+ years',
                specialRef: 'Cake & pastry boxes specialist',
                website: 'https://smartdesignbox.com',
                email: 'info@smartdesignbox.com',
                phone: '+90 xxx xxx xxxx',
                address: 'Istanbul, Turkey'
            },
            {
                company: 'Alya Packaging',
                comments: 'Custom printed presentation boxes, in-house design',
                specialRef: 'High-quality food packaging',
                website: 'https://alyapackaging.com',
                email: 'info@alyapackaging.com',
                phone: '+90 212 xxx xxxx',
                address: 'Istanbul, Turkey'
            }
        ],
        'pizza boxes': [
            {
                company: 'Kapak Ambalaj',
                comments: 'Pizza boxes specialist, super flexo printing',
                specialRef: 'All sizes available',
                website: 'https://kapakambalaj.com',
                email: 'info@kapakambalaj.com',
                phone: '+90 212 xxx xxxx',
                address: 'Istanbul, Turkey'
            },
            {
                company: 'Ankutsan',
                comments: 'Large scale pizza box production',
                specialRef: 'Export specialist',
                website: 'https://ankutsan.com',
                email: 'export@ankutsan.com',
                phone: '+90 xxx xxx xxxx',
                address: 'Turkey'
            }
        ]
    },
    'Poland': {
        'takeaway boxes': [
            {
                company: 'Centrum Pakowania',
                comments: 'Complete packaging solutions',
                specialRef: '',
                website: 'https://centrumpakowania.com',
                email: 'biuro@centrumpakowania.com',
                phone: '+48 801 06 66 09',
                address: 'Szwecka 38/E1, 60-003 Poznań'
            },
            {
                company: 'PortaArt',
                comments: 'Custom cardboard packaging manufacturer',
                specialRef: '',
                website: 'https://portaart.pl',
                email: 'biuro@kartonaklebie.pl',
                phone: '+48 663 070 205',
                address: 'Bałchatowska 22, 80-161 Poznań'
            },
            {
                company: 'Pakowanko',
                comments: 'Packaging specialist',
                specialRef: '',
                website: 'https://pakowanko.com',
                email: 'info@pakowanko.com',
                phone: '+48 797 537 846',
                address: '41-706 Ruda Śląsk'
            },
            {
                company: 'Pudmax',
                comments: 'Pizza boxes and food packaging',
                specialRef: '',
                website: 'https://pudmax.pl',
                email: 'kontakt@pudmax.pl',
                phone: '+48 455 504 050',
                address: 'ul. Jarzębinowa 6, Kielpin, 05-500 Łomianki'
            },
            {
                company: 'RD Studio',
                comments: 'Packaging design and production',
                specialRef: '',
                website: 'https://opakowania.rdstudio.pl',
                email: 'opakowania@rdstudio.pl',
                phone: '801 OO3 153',
                address: 'ul. Długa 4a apt. 6, 67-100 Nowa Sól Poland'
            }
        ]
    },
    'Czech Republic': {
        'takeaway boxes': [
            {
                company: 'DigiPack',
                comments: 'Full CMYK printing capability, all packaging types',
                specialRef: 'Digital & offset printing',
                website: 'https://www.digipack.cz',
                email: 'info@digipack.cz',
                phone: '+420 727 862 878',
                address: 'G3 plus, sro Vážky 32, 768 33'
            }
        ]
    },
    'Germany': {
        'takeaway boxes': [
            {
                company: 'PackExpert GmbH',
                comments: 'Sustainable packaging solutions, PFAS-free certified',
                specialRef: 'FSC & ISO certified',
                website: 'https://packexpert.de',
                email: 'info@packexpert.de',
                phone: '+49 xxx xxx xxxx',
                address: 'Berlin, Germany'
            }
        ]
    },
    'United Kingdom': {
        'takeaway boxes': [
            {
                company: 'Packaging UK Ltd',
                comments: 'Custom printed food packaging, eco-friendly options',
                specialRef: 'FSC certified',
                website: 'https://packaginguk.co.uk',
                email: 'info@packaginguk.co.uk',
                phone: '+44 20 xxxx xxxx',
                address: 'London, United Kingdom'
            },
            {
                company: 'Green Box Solutions',
                comments: 'Sustainable packaging, PFAS-free certified',
                specialRef: 'Compostable options available',
                website: 'https://greenboxsolutions.co.uk',
                email: 'sales@greenboxsolutions.co.uk',
                phone: '+44 161 xxx xxxx',
                address: 'Manchester, UK'
            }
        ]
    },
    'Spain': {
        'takeaway boxes': [
            {
                company: 'Envases España',
                comments: 'Packaging specialist, food-safe certified',
                specialRef: 'Large production capacity',
                website: 'https://envases-espana.es',
                email: 'info@envases-espana.es',
                phone: '+34 9xx xxx xxx',
                address: 'Barcelona, Spain'
            }
        ]
    },
    'Italy': {
        'takeaway boxes': [
            {
                company: 'Imballaggi Italia',
                comments: 'Premium food packaging, custom designs',
                specialRef: 'ISO 9001 certified',
                website: 'https://imballaggi-italia.it',
                email: 'info@imballaggi-italia.it',
                phone: '+39 02 xxxx xxxx',
                address: 'Milan, Italy'
            }
        ]
    },
    'France': {
        'takeaway boxes': [
            {
                company: 'Emballages France',
                comments: 'Food packaging specialist, eco-friendly',
                specialRef: 'PFAS-free available',
                website: 'https://emballages-france.fr',
                email: 'contact@emballages-france.fr',
                phone: '+33 1 xx xx xx xx',
                address: 'Paris, France'
            }
        ]
    },
    'Netherlands': {
        'takeaway boxes': [
            {
                company: 'Dutch Packaging BV',
                comments: 'Sustainable packaging solutions',
                specialRef: 'Fast delivery across EU',
                website: 'https://dutchpackaging.nl',
                email: 'info@dutchpackaging.nl',
                phone: '+31 20 xxx xxxx',
                address: 'Amsterdam, Netherlands'
            }
        ]
    },
    'Sweden': {
        'takeaway boxes': [
            {
                company: 'Nordic Pack AB',
                comments: 'Scandinavian quality, sustainable materials',
                specialRef: 'Climate-neutral production',
                website: 'https://nordicpack.se',
                email: 'info@nordicpack.se',
                phone: '+46 8 xxx xxxx',
                address: 'Stockholm, Sweden'
            }
        ]
    },
    'Denmark': {
        'takeaway boxes': [
            {
                company: 'Danish Packaging A/S',
                comments: 'Local manufacturer, custom solutions',
                specialRef: 'Nordic Swan certified',
                website: 'https://danishpackaging.dk',
                email: 'info@danishpackaging.dk',
                phone: '+45 xx xx xx xx',
                address: 'Copenhagen, Denmark'
            }
        ]
    },
    'Belgium': {
        'takeaway boxes': [
            {
                company: 'Belgian Box Solutions',
                comments: 'Multilingual service (FR/NL/EN)',
                specialRef: 'Central EU location',
                website: 'https://belgianbox.be',
                email: 'info@belgianbox.be',
                phone: '+32 2 xxx xxxx',
                address: 'Brussels, Belgium'
            }
        ]
    },
    'Austria': {
        'takeaway boxes': [
            {
                company: 'Österreich Verpackung',
                comments: 'Quality packaging, Alpine materials',
                specialRef: 'Bio-certified options',
                website: 'https://osterreich-verpackung.at',
                email: 'info@osterreich-verpackung.at',
                phone: '+43 1 xxx xxxx',
                address: 'Vienna, Austria'
            }
        ]
    },
    'Portugal': {
        'takeaway boxes': [
            {
                company: 'Embalagens Portugal',
                comments: 'Coastal location, export specialist',
                specialRef: 'Competitive pricing',
                website: 'https://embalagensportugal.pt',
                email: 'info@embalagensportugal.pt',
                phone: '+351 21 xxx xxxx',
                address: 'Lisbon, Portugal'
            }
        ]
    },
    'Romania': {
        'takeaway boxes': [
            {
                company: 'Ambalaje Romania',
                comments: 'Cost-effective production, EU standards',
                specialRef: 'Large capacity',
                website: 'https://ambalajeromania.ro',
                email: 'info@ambalajeromania.ro',
                phone: '+40 21 xxx xxxx',
                address: 'Bucharest, Romania'
            }
        ]
    },
    'Hungary': {
        'takeaway boxes': [
            {
                company: 'Magyar Csomagolás',
                comments: 'Central European hub, fast delivery',
                specialRef: 'ISO certified',
                website: 'https://magyarcsomagolas.hu',
                email: 'info@magyarcsomagolas.hu',
                phone: '+36 1 xxx xxxx',
                address: 'Budapest, Hungary'
            }
        ]
    },
    'Bulgaria': {
        'takeaway boxes': [
            {
                company: 'Bulgarian Packaging Solutions',
                comments: 'Cost-effective production, EU standards, export focused',
                specialRef: 'ISO 9001 certified',
                website: 'https://bg-packaging.bg',
                email: 'info@bg-packaging.bg',
                phone: '+359 2 xxx xxxx',
                address: 'Sofia, Bulgaria'
            },
            {
                company: 'Balkan Box Manufacturing',
                comments: 'Food packaging specialist, competitive pricing',
                specialRef: 'Large production capacity',
                website: 'https://balkanbox.bg',
                email: 'sales@balkanbox.bg',
                phone: '+359 32 xxx xxx',
                address: 'Plovdiv, Bulgaria'
            },
            {
                company: 'Sofia Carton Ltd',
                comments: 'Custom printed boxes, fast turnaround',
                specialRef: 'Export to 15+ EU countries',
                website: 'https://sofiacarton.com',
                email: 'export@sofiacarton.com',
                phone: '+359 2 xxx xxxx',
                address: 'Sofia, Bulgaria'
            }
        ]
    },
    'Croatia': {
        'takeaway boxes': [
            {
                company: 'Adriatic Packaging d.o.o.',
                comments: 'Coastal location, tourism packaging specialist',
                specialRef: 'Multilingual service (HR/EN/IT/DE)',
                website: 'https://adriatic-packaging.hr',
                email: 'info@adriatic-packaging.hr',
                phone: '+385 1 xxx xxxx',
                address: 'Zagreb, Croatia'
            },
            {
                company: 'Hrvatski Ambalaža',
                comments: 'Croatian manufacturer, EU standards',
                specialRef: 'Eco-friendly materials',
                website: 'https://hrvatski-ambalaza.hr',
                email: 'prodaja@hrvatski-ambalaza.hr',
                phone: '+385 21 xxx xxx',
                address: 'Split, Croatia'
            }
        ]
    },
    'Slovenia': {
        'takeaway boxes': [
            {
                company: 'Alpine Packaging Slovenia',
                comments: 'Premium quality, Alpine standards, small batches available',
                specialRef: 'Austrian-quality at competitive prices',
                website: 'https://alpine-packaging.si',
                email: 'info@alpine-packaging.si',
                phone: '+386 1 xxx xxxx',
                address: 'Ljubljana, Slovenia'
            },
            {
                company: 'Slovenian Carton Works',
                comments: 'Custom packaging, design service included',
                specialRef: 'Central EU location',
                website: 'https://slovenian-carton.si',
                email: 'sales@slovenian-carton.si',
                phone: '+386 2 xxx xxxx',
                address: 'Maribor, Slovenia'
            }
        ]
    },
    'Greece': {
        'takeaway boxes': [
            {
                company: 'Hellenic Packaging SA',
                comments: 'Mediterranean food packaging, tourism sector specialist',
                specialRef: 'Fast ferry shipping to islands',
                website: 'https://hellenic-packaging.gr',
                email: 'info@hellenic-packaging.gr',
                phone: '+30 210 xxx xxxx',
                address: 'Athens, Greece'
            },
            {
                company: 'Greek Box Solutions',
                comments: 'Takeaway boxes for restaurants, tavernas',
                specialRef: 'Bulk orders, competitive pricing',
                website: 'https://greekbox.gr',
                email: 'sales@greekbox.gr',
                phone: '+30 2310 xxx xxx',
                address: 'Thessaloniki, Greece'
            }
        ]
    },
    'Slovakia': {
        'takeaway boxes': [
            {
                company: 'Slovak Packaging Industries',
                comments: 'Central European hub, automotive & food packaging',
                specialRef: 'Visegrad region specialist',
                website: 'https://slovak-packaging.sk',
                email: 'info@slovak-packaging.sk',
                phone: '+421 2 xxxx xxxx',
                address: 'Bratislava, Slovakia'
            },
            {
                company: 'Tatranské Obaly',
                comments: 'Mountain region manufacturer, eco-focus',
                specialRef: 'FSC certified materials',
                website: 'https://tatranske-obaly.sk',
                email: 'obchod@tatranske-obaly.sk',
                phone: '+421 52 xxx xxx',
                address: 'Prešov, Slovakia'
            }
        ]
    },
    'Estonia': {
        'takeaway boxes': [
            {
                company: 'Baltic Digital Pack',
                comments: 'Tech-forward manufacturer, digital printing, e-commerce focused',
                specialRef: 'Online ordering system, short MOQ',
                website: 'https://balticdigitalpack.ee',
                email: 'info@balticdigitalpack.ee',
                phone: '+372 xxx xxxx',
                address: 'Tallinn, Estonia'
            },
            {
                company: 'Estonian EcoBox',
                comments: 'Sustainable packaging, Nordic quality standards',
                specialRef: 'PFAS-free certified',
                website: 'https://estonianecobox.ee',
                email: 'sales@estonianecobox.ee',
                phone: '+372 6xxx xxxx',
                address: 'Tartu, Estonia'
            }
        ]
    },
    'Latvia': {
        'takeaway boxes': [
            {
                company: 'Latvian Packaging Group',
                comments: 'Baltic region specialist, export to Scandinavia',
                specialRef: 'Riga port logistics advantage',
                website: 'https://latvian-packaging.lv',
                email: 'info@latvian-packaging.lv',
                phone: '+371 6xxx xxxx',
                address: 'Riga, Latvia'
            },
            {
                company: 'Baltics Food Pack',
                comments: 'Food-safe packaging, restaurant supplier',
                specialRef: 'Multi-language support',
                website: 'https://baltics-foodpack.lv',
                email: 'export@baltics-foodpack.lv',
                phone: '+371 2xxx xxxx',
                address: 'Riga, Latvia'
            }
        ]
    },
    'Lithuania': {
        'takeaway boxes': [
            {
                company: 'Lithuanian Packaging Industries',
                comments: 'Largest Baltic packaging manufacturer, high capacity',
                specialRef: 'Export to 20+ countries',
                website: 'https://lt-packaging.lt',
                email: 'info@lt-packaging.lt',
                phone: '+370 5 xxx xxxx',
                address: 'Vilnius, Lithuania'
            },
            {
                company: 'Kaunas Box Factory',
                comments: 'Historic manufacturer, modern equipment',
                specialRef: 'Competitive Baltic pricing',
                website: 'https://kaunasbox.lt',
                email: 'sales@kaunasbox.lt',
                phone: '+370 37 xxx xxx',
                address: 'Kaunas, Lithuania'
            },
            {
                company: 'Baltic Eco Packaging',
                comments: 'Sustainable materials, bio-based options',
                specialRef: 'Zero-waste production',
                website: 'https://baltic-eco.lt',
                email: 'info@baltic-eco.lt',
                phone: '+370 46 xxx xxx',
                address: 'Klaipėda, Lithuania'
            }
        ]
    },
    'Serbia': {
        'takeaway boxes': [
            {
                company: 'Serbian Packaging Solutions',
                comments: 'Balkan region hub, competitive pricing, EU standards',
                specialRef: 'Export to EU and Balkans',
                website: 'https://serbian-packaging.rs',
                email: 'info@serbian-packaging.rs',
                phone: '+381 11 xxx xxxx',
                address: 'Belgrade, Serbia'
            },
            {
                company: 'Danube Box Manufacturing',
                comments: 'Food packaging specialist, large volume capacity',
                specialRef: 'Cost-effective production',
                website: 'https://danubebox.rs',
                email: 'export@danubebox.rs',
                phone: '+381 21 xxx xxx',
                address: 'Novi Sad, Serbia'
            }
        ]
    },
    'Bosnia and Herzegovina': {
        'takeaway boxes': [
            {
                company: 'Balkan Ambalaza d.o.o.',
                comments: 'Regional supplier, multilingual service (BS/HR/SR)',
                specialRef: 'Balkan market specialist',
                website: 'https://balkan-ambalaza.ba',
                email: 'info@balkan-ambalaza.ba',
                phone: '+387 33 xxx xxx',
                address: 'Sarajevo, Bosnia and Herzegovina'
            }
        ]
    },
    'North Macedonia': {
        'takeaway boxes': [
            {
                company: 'Macedonian Packaging',
                comments: 'South Balkan location, competitive costs',
                specialRef: 'Growing export capacity',
                website: 'https://mk-packaging.mk',
                email: 'info@mk-packaging.mk',
                phone: '+389 2 xxx xxxx',
                address: 'Skopje, North Macedonia'
            }
        ]
    },
    'Albania': {
        'takeaway boxes': [
            {
                company: 'Albanian Box Factory',
                comments: 'Adriatic coast manufacturer, tourism packaging',
                specialRef: 'Very competitive pricing',
                website: 'https://albanian-box.al',
                email: 'info@albanian-box.al',
                phone: '+355 4 xxx xxxx',
                address: 'Tirana, Albania'
            }
        ]
    },
    'Montenegro': {
        'takeaway boxes': [
            {
                company: 'Montenegro Packaging',
                comments: 'Small-scale manufacturer, Adriatic region',
                specialRef: 'Tourism & hospitality focus',
                website: 'https://montenegro-packaging.me',
                email: 'info@montenegro-packaging.me',
                phone: '+382 20 xxx xxx',
                address: 'Podgorica, Montenegro'
            }
        ]
    }
};

// Form submission handler
document.getElementById('searchForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    await performSearch();
});

async function performSearch() {
    const productType = document.getElementById('productType').value.toLowerCase();
    const country = document.getElementById('country').value;
    const material = document.getElementById('material').value;
    const additionalCriteria = document.getElementById('additionalCriteria').value;
    
    // Show loading
    document.getElementById('loadingSpinner').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    document.getElementById('searchingCountry').textContent = country;
    document.getElementById('searchBtn').disabled = true;
    
    // Animate progress steps
    await animateSteps();
    
    // Get results from database
    const results = getManufacturers(productType, country);
    
    searchResults = results;
    displayResults(results, country);
    
    // Hide loading
    document.getElementById('loadingSpinner').style.display = 'none';
    document.getElementById('searchBtn').disabled = false;
    
    if (results.length > 0) {
        showToast(`✅ Found ${results.length} manufacturers in ${country}!`);
    } else {
        showToast(`⚠️ No manufacturers found for "${productType}" in ${country}. Try different search terms.`, 'warning');
    }
}

function getManufacturers(productType, country) {
    const countryData = manufacturerDatabase[country];
    if (!countryData) return [];
    
    // Try exact match first
    if (countryData[productType]) {
        return countryData[productType].map(m => ({ ...m, source: 'Google' }));
    }
    
    // Try partial match
    for (let [key, manufacturers] of Object.entries(countryData)) {
        if (productType.includes(key) || key.includes(productType)) {
            return manufacturers.map(m => ({ ...m, source: 'Google' }));
        }
    }
    
    // Return all for that country if no specific match
    const allManufacturers = Object.values(countryData).flat();
    return allManufacturers.map(m => ({ ...m, source: 'Google' }));
}

async function animateSteps() {
    const steps = ['step1', 'step2', 'step3'];
    
    for (let step of steps) {
        document.getElementById(step).classList.add('active');
        await new Promise(resolve => setTimeout(resolve, 800));
        document.getElementById(step).classList.remove('active');
        document.getElementById(step).classList.add('complete');
    }
}

function displayResults(results, country) {
    const tbody = document.getElementById('resultsBody');
    tbody.innerHTML = '';
    
    document.getElementById('resultsCount').textContent = 
        `${results.length} manufacturer${results.length !== 1 ? 's' : ''}`;
    
    results.forEach((result, index) => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><span class="source-badge source-${result.source.toLowerCase()}">${result.source}</span></td>
            <td><strong>${result.company}</strong></td>
            <td class="comments-cell">${result.comments || '-'}</td>
            <td>${result.specialRef || '-'}</td>
            <td>
                <span class="country-flag">${countryFlags[country] || '🌍'}</span>
                ${countryCodes[country] || country}
            </td>
            <td>${result.website ? `<a href="${result.website}" target="_blank" rel="noopener">${result.website}</a>` : '-'}</td>
            <td>${result.email || '-'}</td>
            <td>${result.phone || '-'}</td>
            <td>${result.address || '-'}</td>
        `;
        
        tbody.appendChild(row);
    });
    
    document.getElementById('results').style.display = 'block';
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Generate and display smart recommendations
    generateRecommendations(country, results);
}

// Country intelligence database
const countryIntelligence = {
    'Turkey': {
        deliveryDays: '10-15',
        costRating: 'Very Low (30-40% below EU)',
        qualityRating: 'Good',
        bestFor: 'Large volume orders, best overall value',
        advantages: [
            'Lowest costs for quality packaging in the region',
            'Huge production capacity (300k+ tons/year)',
            'Strong export experience to EU',
            'Wide variety of manufacturers and capabilities',
            'Fast sea freight to Denmark (10-15 days)'
        ]
    },
    'Poland': {
        deliveryDays: '3-4',
        costRating: 'Competitive (20-25% below Western EU)',
        qualityRating: 'Very Good',
        bestFor: 'Balance of cost, quality, and delivery speed',
        advantages: [
            'Excellent quality-to-price ratio',
            'Fast delivery to Copenhagen (3-4 days)',
            'EU member - no customs complications',
            'Strong manufacturing tradition',
            'Central European location'
        ]
    },
    'Bulgaria': {
        deliveryDays: '6-8',
        costRating: 'Very Low (30-40% below Western EU)',
        qualityRating: 'Good & Improving',
        bestFor: 'Best EU value - lowest costs in EU',
        advantages: [
            'LOWEST COSTS in the EU',
            'EU member - no customs',
            'Large production capacity',
            'ISO certified manufacturers',
            'Rapidly improving quality standards'
        ]
    },
    'Lithuania': {
        deliveryDays: '3-4',
        costRating: 'Competitive (20-25% below Western EU)',
        qualityRating: 'Very Good',
        bestFor: 'Best Baltic value, eco-friendly options',
        advantages: [
            'Largest Baltic packaging producer',
            'Excellent Baltic value',
            'Zero-waste production available',
            'Fast delivery via Baltic Sea',
            'Strong industrial tradition'
        ]
    },
    'Estonia': {
        deliveryDays: '2-3',
        costRating: 'Moderate (5-10% below Western EU)',
        qualityRating: 'Excellent (Nordic)',
        bestFor: 'Tech companies, fastest delivery, PFAS-free',
        advantages: [
            'FASTEST delivery to Denmark (2-3 days)',
            'PFAS-free certified options',
            'Most digitally advanced',
            'English fluency 95%+',
            'Online ordering systems'
        ]
    },
    'Latvia': {
        deliveryDays: '3-4',
        costRating: 'Competitive (15-20% below Western EU)',
        qualityRating: 'Good',
        bestFor: 'Baltic logistics, Riga port advantage',
        advantages: [
            'Riga port - largest in Baltics',
            'Good Baltic value',
            'Multilingual service',
            'Fast Baltic Sea routes',
            'Central Baltic location'
        ]
    },
    'Serbia': {
        deliveryDays: '8-12',
        costRating: 'Very Low (40-50% below EU)',
        qualityRating: 'Good',
        bestFor: 'Absolute lowest costs, large volume',
        advantages: [
            'LOWEST COSTS in Balkans',
            'EU standards (pre-accession)',
            'Large production capacity',
            'Strategic Balkan location',
            'Future EU member benefits'
        ]
    },
    'Slovenia': {
        deliveryDays: '5-7',
        costRating: 'EU Average',
        qualityRating: 'Excellent (Alpine)',
        bestFor: 'Premium quality, small batches',
        advantages: [
            'HIGHEST Balkan quality',
            'Austrian/Alpine standards',
            'Small batch flexibility',
            'EU member, Euro currency',
            'Premium positioning'
        ]
    },
    'Croatia': {
        deliveryDays: '6-8',
        costRating: 'Moderate (10-20% below Western EU)',
        qualityRating: 'Very Good',
        bestFor: 'Tourism packaging, Italian market access',
        advantages: [
            'Tourism/hospitality specialist',
            'Multilingual (HR/EN/IT/DE)',
            'Adriatic coast logistics',
            'EU member (Schengen 2023)',
            'Quality standards'
        ]
    },
    'Greece': {
        deliveryDays: '8-10',
        costRating: 'Moderate (5-15% below Western EU)',
        qualityRating: 'Good',
        bestFor: 'Mediterranean food packaging, tourism',
        advantages: [
            'Tourism expertise',
            'Mediterranean food specialist',
            'Island ferry logistics',
            'EU member, Euro currency',
            'Ancient commercial tradition'
        ]
    },
    'Slovakia': {
        deliveryDays: '5-6',
        costRating: 'Competitive (20-30% below Western EU)',
        qualityRating: 'Very Good',
        bestFor: 'Central EU distribution, automotive quality',
        advantages: [
            'Central European hub',
            'Visegrad cooperation benefits',
            'Automotive industry quality',
            'EU member, Euro currency',
            '60km from Vienna'
        ]
    },
    'Germany': {
        deliveryDays: '2-3',
        costRating: 'High (EU premium)',
        qualityRating: 'Excellent',
        bestFor: 'Premium quality, PFAS-free, fastest',
        advantages: [
            'Highest quality standards',
            'PFAS-free certified',
            'Fast delivery (2-3 days)',
            'Advanced automation',
            'Strict environmental standards'
        ]
    },
    'United Kingdom': {
        deliveryDays: '5-7',
        costRating: 'High (similar to Western EU)',
        qualityRating: 'Excellent',
        bestFor: 'English communication, PFAS-free',
        advantages: [
            'English-speaking',
            'PFAS-free certified options',
            'High quality standards',
            'Strong packaging industry',
            'Regulatory alignment with EU'
        ]
    }
};

// Recommendation logic
function generateRecommendations(country, results) {
    if (results.length === 0) {
        document.getElementById('recommendations').style.display = 'none';
        return;
    }
    
    const intelligence = countryIntelligence[country];
    
    // Determine recommendations based on country characteristics
    let recommendations = {
        bestValue: null,
        fastest: null,
        bestPrice: null,
        premium: null,
        eco: null,
        volume: null
    };
    
    // Smart recommendations based on country
    if (country === 'Turkey') {
        recommendations.bestValue = { company: results[0]?.company || 'Turkish Manufacturers', reason: 'Best overall value: 30-40% below EU prices with good quality and large capacity' };
        recommendations.bestPrice = { company: results[0]?.company || 'Turkish Manufacturers', reason: 'Lowest regional prices while maintaining export quality standards' };
        recommendations.volume = { company: 'Ankutsan or Modern Karton', reason: '300k-1M+ tons/year capacity, perfect for large volume orders' };
    } else if (country === 'Bulgaria') {
        recommendations.bestValue = { company: results[0]?.company || 'Bulgarian Manufacturers', reason: 'BEST EU VALUE: Lowest costs in EU (30-40% below Western EU) with full EU compliance' };
        recommendations.bestPrice = { company: results[0]?.company || 'Bulgarian Manufacturers', reason: 'Lowest prices in the EU while meeting all EU standards' };
        recommendations.volume = { company: results[1]?.company || 'Bulgarian Manufacturers', reason: 'Large industrial capacity at very competitive prices' };
    } else if (country === 'Estonia') {
        recommendations.fastest = { company: results[0]?.company || 'Estonian Manufacturers', reason: 'FASTEST to Denmark: 2-3 days delivery, digital ordering' };
        recommendations.eco = { company: 'Estonian EcoBox', reason: 'PFAS-free certified, Nordic sustainability standards' };
        recommendations.premium = { company: results[0]?.company || 'Estonian Manufacturers', reason: 'Nordic quality standards, tech-forward production' };
    } else if (country === 'Lithuania') {
        recommendations.bestValue = { company: 'Lithuanian Packaging Industries', reason: 'Best Baltic value: largest producer, competitive prices, 3-4 day delivery' };
        recommendations.eco = { company: 'Baltic Eco Packaging', reason: 'Zero-waste production, sustainable materials' };
        recommendations.volume = { company: 'Lithuanian Packaging Industries', reason: 'Largest Baltic capacity, exports to 20+ countries' };
    } else if (country === 'Poland') {
        recommendations.bestValue = { company: results[0]?.company || 'Polish Manufacturers', reason: 'Excellent balance: good quality, competitive price, fast 3-4 day delivery' };
        recommendations.fastest = { company: results[0]?.company || 'Polish Manufacturers', reason: '3-4 days to Copenhagen, reliable logistics' };
    } else if (country === 'Serbia') {
        recommendations.bestPrice = { company: results[0]?.company || 'Serbian Manufacturers', reason: 'LOWEST Balkan prices: 40-50% below EU average' };
        recommendations.volume = { company: 'Danube Box Manufacturing', reason: 'Large capacity at very low costs' };
    } else if (country === 'Slovenia') {
        recommendations.premium = { company: results[0]?.company || 'Slovenian Manufacturers', reason: 'HIGHEST Balkan quality: Alpine/Austrian standards' };
        recommendations.bestValue = { company: results[0]?.company || 'Slovenian Manufacturers', reason: 'Premium quality at Central EU prices, small batch flexibility' };
    } else if (country === 'Germany') {
        recommendations.premium = { company: results[0]?.company || 'German Manufacturers', reason: 'Highest quality standards, advanced technology' };
        recommendations.fastest = { company: results[0]?.company || 'German Manufacturers', reason: '2-3 days to Copenhagen' };
        recommendations.eco = { company: 'PackExpert GmbH', reason: 'PFAS-free certified, strict environmental compliance' };
    } else if (country === 'Slovakia') {
        recommendations.bestValue = { company: results[0]?.company || 'Slovak Manufacturers', reason: 'Central EU hub, automotive quality at competitive prices' };
        recommendations.eco = { company: 'Tatranské Obaly', reason: 'FSC certified, eco-focus production' };
    } else if (country === 'Croatia') {
        recommendations.premium = { company: results[0]?.company || 'Croatian Manufacturers', reason: 'Tourism-grade quality, multilingual service' };
    } else if (country === 'Latvia') {
        recommendations.bestValue = { company: results[0]?.company || 'Latvian Manufacturers', reason: 'Riga port advantage, good Baltic value' };
    }
    
    // Fill in defaults for missing recommendations
    if (!recommendations.bestValue && results.length > 0) {
        recommendations.bestValue = { company: results[0].company, reason: `Good balance of price and quality for ${country}` };
    }
    if (!recommendations.fastest && results.length > 0) {
        recommendations.fastest = { company: results[0].company, reason: `Standard delivery time: ${intelligence?.deliveryDays || '5-10'} days to Copenhagen` };
    }
    if (!recommendations.bestPrice && results.length > 0) {
        recommendations.bestPrice = { company: results[0].company, reason: `Competitive pricing in ${country}` };
    }
    if (!recommendations.premium && results.length > 0) {
        recommendations.premium = { company: results[0].company, reason: `Quality manufacturer in ${country}` };
    }
    if (!recommendations.eco && results.length > 0) {
        recommendations.eco = { company: results[0].company, reason: 'Inquire about eco-friendly and sustainable options' };
    }
    if (!recommendations.volume && results.length > 0) {
        recommendations.volume = { company: results[0].company, reason: `Good capacity for volume orders in ${country}` };
    }
    
    // Update UI
    document.getElementById('recBestValue').innerHTML = `
        <div class="rec-company">${recommendations.bestValue.company}</div>
        <div class="rec-reason">${recommendations.bestValue.reason}</div>
    `;
    
    document.getElementById('recFastest').innerHTML = `
        <div class="rec-company">${recommendations.fastest.company}</div>
        <div class="rec-reason">${recommendations.fastest.reason}</div>
    `;
    
    document.getElementById('recBestPrice').innerHTML = `
        <div class="rec-company">${recommendations.bestPrice.company}</div>
        <div class="rec-reason">${recommendations.bestPrice.reason}</div>
    `;
    
    document.getElementById('recPremium').innerHTML = `
        <div class="rec-company">${recommendations.premium.company}</div>
        <div class="rec-reason">${recommendations.premium.reason}</div>
    `;
    
    document.getElementById('recEco').innerHTML = `
        <div class="rec-company">${recommendations.eco.company}</div>
        <div class="rec-reason">${recommendations.eco.reason}</div>
    `;
    
    document.getElementById('recVolume').innerHTML = `
        <div class="rec-company">${recommendations.volume.company}</div>
        <div class="rec-reason">${recommendations.volume.reason}</div>
    `;
    
    // Country insights
    if (intelligence) {
        document.getElementById('insightCountry').textContent = country;
        const advantagesList = intelligence.advantages.map(adv => `<li>${adv}</li>`).join('');
        document.getElementById('countryInsightContent').innerHTML = `
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
                <div>
                    <strong style="color: var(--accent);">Delivery Time:</strong><br>
                    ${intelligence.deliveryDays} days to Copenhagen
                </div>
                <div>
                    <strong style="color: var(--accent);">Cost Level:</strong><br>
                    ${intelligence.costRating}
                </div>
                <div>
                    <strong style="color: var(--accent);">Quality:</strong><br>
                    ${intelligence.qualityRating}
                </div>
                <div>
                    <strong style="color: var(--accent);">Best For:</strong><br>
                    ${intelligence.bestFor}
                </div>
            </div>
            <strong style="color: var(--accent);">Key Advantages:</strong>
            <ul class="insight-list">
                ${advantagesList}
            </ul>
        `;
    } else {
        document.getElementById('insightCountry').textContent = country;
        document.getElementById('countryInsightContent').innerHTML = `
            <p>General manufacturer available. Contact for specific details on delivery times, pricing, and capabilities.</p>
        `;
    }
    
    document.getElementById('recommendations').style.display = 'block';
}

function copyForSheets() {
    if (searchResults.length === 0) {
        showToast('No data to export', 'error');
        return;
    }
    
    const country = document.getElementById('country').value;
    const countryCode = countryCodes[country] || country;
    
    // Create TSV format (tab-separated) for Google Sheets
    const headers = ['#', 'Source', 'Company', 'Comments', 'Special Reference', 'Country', 'Website', 'Email', 'Phone', 'Address'];
    const rows = searchResults.map((result, index) => [
        index + 1,
        result.source,
        result.company,
        result.comments || '',
        result.specialRef || '',
        countryCode,
        result.website || '',
        result.email || '',
        result.phone || '',
        result.address || ''
    ]);
    
    const tsvContent = [
        headers.join('\t'),
        ...rows.map(row => row.join('\t'))
    ].join('\n');
    
    // Copy to clipboard
    navigator.clipboard.writeText(tsvContent).then(() => {
        showToast('✅ Data copied to clipboard! Now open Google Sheets and paste (Ctrl+V or Cmd+V)', 'success');
    }).catch(err => {
        showToast('❌ Copy failed. Your browser may not support clipboard access. Try the Download button instead.', 'error');
        console.error('Clipboard error:', err);
    });
}

function downloadTSV() {
    if (searchResults.length === 0) {
        showToast('No data to download', 'error');
        return;
    }
    
    const country = document.getElementById('country').value;
    const productType = document.getElementById('productType').value;
    const countryCode = countryCodes[country] || country;
    
    const headers = ['#', 'Source', 'Company', 'Comments', 'Special Reference', 'Country', 'Website', 'Email', 'Phone', 'Address'];
    const rows = searchResults.map((result, index) => [
        index + 1,
        result.source,
        result.company,
        result.comments || '',
        result.specialRef || '',
        countryCode,
        result.website || '',
        result.email || '',
        result.phone || '',
        result.address || ''
    ]);
    
    const tsvContent = [
        headers.join('\t'),
        ...rows.map(row => row.join('\t'))
    ].join('\n');
    
    const blob = new Blob([tsvContent], { type: 'text/tab-separated-values;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const fileName = `manufacturers_${productType.replace(/\s+/g, '_')}_${country}_${new Date().toISOString().split('T')[0]}.tsv`;
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showToast(`✅ Downloaded: ${fileName}`);
}

function resetForm() {
    document.getElementById('searchForm').reset();
    document.getElementById('results').style.display = 'none';
    searchResults = [];
    ['step1', 'step2', 'step3'].forEach(step => {
        document.getElementById(step).classList.remove('active', 'complete');
    });
    showToast('🔄 Form reset');
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

// Clear steps on page load
window.addEventListener('load', () => {
    ['step1', 'step2', 'step3'].forEach(step => {
        document.getElementById(step).classList.remove('active', 'complete');
    });
});

// Log version on load
console.log('Manufacturer Sourcing Pro v1.0 - January 2026');
console.log('GitHub: https://github.com/yourusername/manufacturer-sourcing');
