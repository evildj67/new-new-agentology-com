export let states = [
    { abbr: 'AL', name: 'Alabama' },
    { abbr: 'AK', name: 'Alaska' },
    { abbr: 'AZ', name: 'Arizona' },
    { abbr: 'AR', name: 'Arkansas' },
    { abbr: 'CA', name: 'California' },
    { abbr: 'CO', name: 'Colorado' },
    { abbr: 'CT', name: 'Connecticut' },
    { abbr: 'DE', name: 'Delaware' },
    { abbr: 'DC', name: 'District of Columbia' },
    { abbr: 'FL', name: 'Florida' },
    { abbr: 'GA', name: 'Georgia' },
    { abbr: 'GU', name: 'Guam' },
    { abbr: 'HI', name: 'Hawaii' },
    { abbr: 'ID', name: 'Idaho' },
    { abbr: 'IL', name: 'Illinois' },
    { abbr: 'IN', name: 'Indiana' },
    { abbr: 'IA', name: 'Iowa' },
    { abbr: 'KS', name: 'Kansas' },
    { abbr: 'KY', name: 'Kentucky' },
    { abbr: 'LA', name: 'Louisiana' },
    { abbr: 'ME', name: 'Maine' },
    { abbr: 'MD', name: 'Maryland' },
    { abbr: 'MA', name: 'Massachusetts' },
    { abbr: 'MI', name: 'Michigan' },
    { abbr: 'MN', name: 'Minnesota' },
    { abbr: 'MS', name: 'Mississippi' },
    { abbr: 'MO', name: 'Missouri' },
    { abbr: 'MT', name: 'Montana' },
    { abbr: 'NE', name: 'Nebraska' },
    { abbr: 'NV', name: 'Nevada' },
    { abbr: 'NH', name: 'New Hampshire' },
    { abbr: 'NJ', name: 'New Jersey' },
    { abbr: 'NM', name: 'New Mexico' },
    { abbr: 'NY', name: 'New York' },
    { abbr: 'NC', name: 'North Carolina' },
    { abbr: 'ND', name: 'North Dakota' },
    { abbr: 'OH', name: 'Ohio' },
    { abbr: 'OK', name: 'Oklahoma' },
    { abbr: 'OR', name: 'Oregon' },
    { abbr: 'PA', name: 'Pennsylvania' },
    { abbr: 'RI', name: 'Rhode Island' },
    { abbr: 'SC', name: 'South Carolina' },
    { abbr: 'SD', name: 'South Dakota' },
    { abbr: 'TN', name: 'Tennessee' },
    { abbr: 'TX', name: 'Texas' },
    { abbr: 'UT', name: 'Utah' },
    { abbr: 'VT', name: 'Vermont' },
    { abbr: 'VA', name: 'Virginia' },
    { abbr: 'WA', name: 'Washington' },
    { abbr: 'WV', name: 'West Virginia' },
    { abbr: 'WI', name: 'Wisconsin' },
    { abbr: 'WY', name: 'Wyoming' }
];

export let transactions = [
    '0-5',
    '5-10',
    '10-25',
    '25-50',
    '50-100',
    '100+'
];

export let specialties = [
    'Purchase Loans',
    'Refinancing',
    'Home Equity',
    'Mortgage Planning'
];

export let expertise = [
    'New Homes',
    'Relocation',
    'First Time Home Buyers',
    'Buyer Representative',
    'Listing Expert',
    'Lot/Land',
    'Resorts',
    'Short Sales',
    'Luxury Properties',
    'New Construction',
    '1031 Tax Exchange',
    'Condominiums',
    'Investment Properties'
];

export let associations = [
    'NAR',
    'NAHREP'
];

export let certifications = [
    'Five-Star',
    'CDPE®',
    'ABR®',
    'CRS®',
    'CRE',
    'CCIM®',
    'RAA',
    'GRI',
    'CRB',
    'e-PRO',
    'RLI'
];

export let languages = [
    'Arabic',
    'Bosnian',
    'Cantonese',
    'French',
    'Farsi',
    'German',
    'Greek',
    'Hebrew',
    'Hindi',
    'Italian',
    'Japanese',
    'Korean',
    'Mandarin',
    'Polish',
    'Portuguese',
    'Romanian',
    'Russian',
    'Spanish',
    'Tagalog',
    'Ukrainian',
    'Vietnamese'
];

export let referral_types = [
    'Home Buyers',
    'Home Sellers',
    'Short Sales'
];

export let buyer_statuses = [
    {stage: 'Assigned', status: "Accepted: Trying to Reach Client", show: "admin"},
    {stage: 'Assigned', status: "I am trying to reach this Client", show: "agent"},
    {stage: 'Assigned', status: "48 hours: I have not reached this Client", show: "admin"},
    {stage: 'Prospect', status: "I'm communicating with this Client", show: "agent"},
    {stage: 'Prospect', status: "I have an appointment to show this Buyer properties", show: "agent"},
    {stage: 'Client', status: "I'm showing this Buyer properties", show: "agent"},
    {stage: 'Client', status: "I have submitted an offer for this Buyer", show: "agent"},
    {stage: 'Client', status: "I have an offer accepted (pending lender approval) for this Client", show: "none"},
    {stage: 'In Escrow', status: "I am in escrow with this Client", show: "agent"},
    {stage: 'Closed Escrow', status: "Sold! I have closed escrow with this Client", show: "agent"},
    {stage: 'No Longer Engaged', status: "Client has another agent", show: "agent"},
    {stage: 'On Hold', status: "I'm nurturing this client (long term)", show: "agent"},
    {stage: 'No Longer Engaged', status: "Client is Unresponsive", show: "agent"},
    {stage: 'No Longer Engaged', status: "I'm not able to attend to this Client", show: "agent"},
    {stage: 'No Longer Engaged', status: "Other", show: "agent"}
];

export let seller_statuses = [
    {stage: 'Assigned', status: "Accepted: Trying to Reach Client", show: "admin"},
    {stage: 'Assigned', status: "I am trying to reach this Client", show: "agent"},
    {stage: 'Assigned', status: "48 hours: I have not reached this Client", show: "admin"},
    {stage: 'Prospect', status: "I'm communicating with this Client", show: "agent"},
    {stage: 'Prospect', status: "I have a listing appointment scheduled with this Seller", show: "agent"},
    {stage: 'Listed', status: "I have signed a listing agreement with this Seller", show: "agent"},
    {stage: 'Listed', status: "I have listed this Seller's property", show: "agent"},
    {stage: 'Listed', status: "I have an offer accepted (pending lender approval) for this Client", show: "none"},
    {stage: 'In Escrow', status: "I am in escrow with this Client", show: "agent"},
    {stage: 'Closed Escrow', status: "Sold! I have closed escrow with this Client", show: "agent"},
    {stage: 'No Longer Engaged', status: "Client has another agent", show: "agent"},
    {stage: 'On Hold', status: "I'm nurturing this client (long term)", show: "agent"},
    {stage: 'No Longer Engaged', status: "Client is Unresponsive", show: "agent"},
    {stage: 'No Longer Engaged', status: "I'm not able to attend to this Client", show: "agent"},
    {stage: 'No Longer Engaged', status: "Other", show: "agent"}
];

export let new_statuses = [
    {
        stage: 'Assigned', 
        options: [
            'I am trying to reach this Client'
        ]
    },
    {
        stage: 'Prospect', 
        options: [
            'I\'m communicating with this Client',
            'I have a listing appointment scheduled with this Seller'
        ]
    },
    {
        stage: 'Listed', 
        options: [
            'I have signed a listing agreement with this Seller',
            'I have listed this Seller\'s property'
        ]
    },
    {
        stage: 'In Escrow', 
        options: [
            'I am in escrow with this Client'
        ]
    }
];

export let price_ranges = [
    'Under $200,000',
    '$200,000 - $400,000',
    '$400,000 - $600,000',
    '$600,000 - $800,000',
    '$800,000 - $1,000,000',
    'Over $1,000,000'
];

export let rental_ranges = [
    '$500 - $750',
    '$750 - $1000',
    '$1,000 - $1,250',
    '$1,250 - $1,500',
    '$1,500 - $1,750',
    '$1,750 - $2,000',
    '$2,000 - $2,500',
    '$2,500 - $3,000',
    'Over $3,000'
];

export let best_ways = [
    'Right Now',
    'Morning',
    'Afternoon',
    'Evening'
];

export let sources = [
    'Homegain',
    'RealtyTrac',
    'PrimeSellerLead',
    'Expired',
    'Other:'
];

export let hometypes = [
    'Single Family',
    'Condominium',
    'Town Home',
    'Mobile Home',
    '2-4 Units',
    'Vacation Home',
    'Rental',
    'Land/Lot'
];

export let timeframes = [
    'Within 3 months',
    '3-6 months',
    '6 months or longer'
];

export let re_timeframes = [
    'Today',
    'This Week',
    'This Month',
    'This Year',
    'Over a Year Ago'
];

export let statuses = [
    'Pre-Qualified',
    'Pre-Approved',
    'Haven\'t Applied Yet',
    'I don\'t know'
];

export let reps = [
    {"init": 'bb', "name": 'Brittany'},
    {"init": 'ck', "name": 'Chris'},
    {"init": 'dj', "name": 'Darren'},
    {"init": 'et', "name": 'Eitan'},
    {"init": 'jj', "name": 'Jessica'},
    {"init": 'k', "name": 'Ken'},
    {"init": 'mt', "name": 'Masha'},
    {"init": 'md', "name": 'Mike'}
];

export let reasons = [
    'Relocating',
    'Just Browsing',
    'Looking for an Investment',
    'Other'
];