// world-clock.js
// Renders 5 world clock tiles, each user-selectable for any country/timezone




// List of countries with a representative timezone for each (no cities)
const allTimezones = [
  { label: 'India', tz: 'Asia/Kolkata' },
  { label: 'China', tz: 'Asia/Shanghai' },
  { label: 'United States', tz: 'America/New_York' },
  { label: 'Indonesia', tz: 'Asia/Jakarta' },
  { label: 'Pakistan', tz: 'Asia/Karachi' },
  { label: 'Nigeria', tz: 'Africa/Lagos' },
  { label: 'Brazil', tz: 'America/Sao_Paulo' },
  { label: 'Bangladesh', tz: 'Asia/Dhaka' },
  { label: 'Russia', tz: 'Europe/Moscow' },
  { label: 'Mexico', tz: 'America/Mexico_City' },
  { label: 'Japan', tz: 'Asia/Tokyo' },
  { label: 'Philippines', tz: 'Asia/Manila' },
  { label: 'Democratic Republic of the Congo', tz: 'Africa/Kinshasa' },
  { label: 'Ethiopia', tz: 'Africa/Addis_Ababa' },
  { label: 'Egypt', tz: 'Africa/Cairo' },
  { label: 'Vietnam', tz: 'Asia/Ho_Chi_Minh' },
  { label: 'Rest of the world', tz: 'UTC' },
  { label: 'Iran', tz: 'Asia/Tehran' },
  { label: 'Turkey', tz: 'Europe/Istanbul' },
  { label: 'Germany', tz: 'Europe/Berlin' },
  { label: 'United Kingdom', tz: 'Europe/London' },
  { label: 'France', tz: 'Europe/Paris' },
  { label: 'Tanzania', tz: 'Africa/Dar_es_Salaam' },
  { label: 'Thailand', tz: 'Asia/Bangkok' },
  { label: 'South Africa', tz: 'Africa/Johannesburg' },
  { label: 'Italy', tz: 'Europe/Rome' },
  { label: 'Kenya', tz: 'Africa/Nairobi' },
  { label: 'Colombia', tz: 'America/Bogota' },
  { label: 'Sudan', tz: 'Africa/Khartoum' },
  { label: 'Myanmar', tz: 'Asia/Yangon' },
  { label: 'South Korea', tz: 'Asia/Seoul' },
  { label: 'Spain', tz: 'Europe/Madrid' },
  { label: 'Algeria', tz: 'Africa/Algiers' },
  { label: 'Argentina', tz: 'America/Argentina/Buenos_Aires' },
  { label: 'Iraq', tz: 'Asia/Baghdad' },
  { label: 'Uganda', tz: 'Africa/Kampala' },
  { label: 'Afghanistan', tz: 'Asia/Kabul' },
  { label: 'Canada', tz: 'America/Toronto' },
  { label: 'Uzbekistan', tz: 'Asia/Tashkent' },
  { label: 'Poland', tz: 'Europe/Warsaw' },
  { label: 'Morocco', tz: 'Africa/Casablanca' },
  { label: 'Angola', tz: 'Africa/Luanda' },
  { label: 'Saudi Arabia', tz: 'Asia/Riyadh' },
  { label: 'Peru', tz: 'America/Lima' },
  { label: 'Malaysia', tz: 'Asia/Kuala_Lumpur' },
  { label: 'Mozambique', tz: 'Africa/Maputo' },
  { label: 'Ghana', tz: 'Africa/Accra' },
  { label: 'Ukraine', tz: 'Europe/Kyiv' },
  { label: 'Yemen', tz: 'Asia/Aden' },
  { label: 'Madagascar', tz: 'Indian/Antananarivo' },
  { label: 'Nepal', tz: 'Asia/Kathmandu' },
  { label: 'Cameroon', tz: 'Africa/Douala' },
  { label: 'Ivory Coast', tz: 'Africa/Abidjan' },
  { label: 'Venezuela', tz: 'America/Caracas' },
  { label: 'Australia', tz: 'Australia/Sydney' },
  { label: 'Niger', tz: 'Africa/Niamey' },
  { label: 'North Korea', tz: 'Asia/Pyongyang' },
  { label: 'Syria', tz: 'Asia/Damascus' },
  { label: 'Burkina Faso', tz: 'Africa/Ouagadougou' },
  { label: 'Taiwan', tz: 'Asia/Taipei' },
  { label: 'Mali', tz: 'Africa/Bamako' },
  { label: 'Sri Lanka', tz: 'Asia/Colombo' },
  { label: 'Malawi', tz: 'Africa/Blantyre' },
  { label: 'Kazakhstan', tz: 'Asia/Almaty' },
  { label: 'Chile', tz: 'America/Santiago' },
  { label: 'Zambia', tz: 'Africa/Lusaka' },
  { label: 'Somalia', tz: 'Africa/Mogadishu' },
  { label: 'Chad', tz: 'Africa/Ndjamena' },
  { label: 'Romania', tz: 'Europe/Bucharest' },
  { label: 'Senegal', tz: 'Africa/Dakar' },
  { label: 'Ecuador', tz: 'America/Guayaquil' },
  { label: 'Netherlands', tz: 'Europe/Amsterdam' },
  { label: 'Guatemala', tz: 'America/Guatemala' },
  { label: 'Cambodia', tz: 'Asia/Phnom_Penh' },
  { label: 'Zimbabwe', tz: 'Africa/Harare' },
  { label: 'South Sudan', tz: 'Africa/Juba' },
  { label: 'Guinea', tz: 'Africa/Conakry' },
  { label: 'Rwanda', tz: 'Africa/Kigali' },
  { label: 'Benin', tz: 'Africa/Porto-Novo' },
  { label: 'Burundi', tz: 'Africa/Bujumbura' },
  { label: 'Tunisia', tz: 'Africa/Tunis' },
  { label: 'Haiti', tz: 'America/Port-au-Prince' },
  { label: 'Belgium', tz: 'Europe/Brussels' },
  { label: 'Papua New Guinea', tz: 'Pacific/Port_Moresby' },
  { label: 'Jordan', tz: 'Asia/Amman' },
  { label: 'Bolivia', tz: 'America/La_Paz' },
  { label: 'Czech Republic', tz: 'Europe/Prague' },
  { label: 'Dominican Republic', tz: 'America/Santo_Domingo' },
  { label: 'Portugal', tz: 'Europe/Lisbon' },
  { label: 'United Arab Emirates', tz: 'Asia/Dubai' },
  { label: 'Sweden', tz: 'Europe/Stockholm' },
  { label: 'Tajikistan', tz: 'Asia/Dushanbe' },
  { label: 'Greece', tz: 'Europe/Athens' },
  { label: 'Azerbaijan', tz: 'Asia/Baku' },
  { label: 'Israel', tz: 'Asia/Jerusalem' },
  { label: 'Honduras', tz: 'America/Tegucigalpa' },
  { label: 'Cuba', tz: 'America/Havana' },
  { label: 'Hungary', tz: 'Europe/Budapest' },
  { label: 'Austria', tz: 'Europe/Vienna' },
  { label: 'Belarus', tz: 'Europe/Minsk' },
  { label: 'Switzerland', tz: 'Europe/Zurich' },
  { label: 'Sierra Leone', tz: 'Africa/Freetown' },
  { label: 'Togo', tz: 'Africa/Lome' },
  { label: 'Laos', tz: 'Asia/Vientiane' },
  { label: 'Hong Kong(China)', tz: 'Asia/Hong_Kong' },
  { label: 'Libya', tz: 'Africa/Tripoli' },
  { label: 'Kyrgyzstan', tz: 'Asia/Bishkek' },
  { label: 'Turkmenistan', tz: 'Asia/Ashgabat' },
  { label: 'Nicaragua', tz: 'America/Managua' },
  { label: 'Serbia', tz: 'Europe/Belgrade' },
  { label: 'Central African Republic', tz: 'Africa/Bangui' },
  { label: 'Bulgaria', tz: 'Europe/Sofia' },
  { label: 'Republic of the Congo', tz: 'Africa/Brazzaville' },
  { label: 'Paraguay', tz: 'America/Asuncion' },
  { label: 'Singapore', tz: 'Asia/Singapore' },
  { label: 'El Salvador', tz: 'America/El_Salvador' },
  { label: 'Denmark', tz: 'Europe/Copenhagen' },
  { label: 'Finland', tz: 'Europe/Helsinki' },
  { label: 'Norway', tz: 'Europe/Oslo' },
  { label: 'Lebanon', tz: 'Asia/Beirut' },
  { label: 'Ireland', tz: 'Europe/Dublin' },
  { label: 'Slovakia', tz: 'Europe/Bratislava' },
  { label: 'New Zealand', tz: 'Pacific/Auckland' },
  { label: 'Costa Rica', tz: 'America/Costa_Rica' },
  { label: 'Oman', tz: 'Asia/Muscat' },
  { label: 'Liberia', tz: 'Africa/Monrovia' },
  { label: 'Mauritania', tz: 'Africa/Nouakchott' },
  { label: 'Kuwait', tz: 'Asia/Kuwait' },
  { label: 'Panama', tz: 'America/Panama' },
  { label: 'Croatia', tz: 'Europe/Zagreb' },
  { label: 'Georgia', tz: 'Asia/Tbilisi' },
  { label: 'Eritrea', tz: 'Africa/Asmara' },
  { label: 'Mongolia', tz: 'Asia/Ulaanbaatar' },
  { label: 'Uruguay', tz: 'America/Montevideo' },
  { label: 'Bosnia and Herzegovina', tz: 'Europe/Sarajevo' },
  { label: 'Puerto Rico(US)', tz: 'America/Puerto_Rico' },
  { label: 'Qatar', tz: 'Asia/Qatar' },
  { label: 'Armenia', tz: 'Asia/Yerevan' },
  { label: 'Namibia', tz: 'Africa/Windhoek' },
  { label: 'West Bank', tz: 'Asia/Hebron' },
  { label: 'Lithuania', tz: 'Europe/Vilnius' },
  { label: 'Jamaica', tz: 'America/Jamaica' },
  { label: 'Gabon', tz: 'Africa/Libreville' },
  { label: 'Gambia', tz: 'Africa/Banjul' },
  { label: 'Moldova', tz: 'Europe/Chisinau' },
  { label: 'Albania', tz: 'Europe/Tirane' },
  { label: 'Botswana', tz: 'Africa/Gaborone' },
  { label: 'Slovenia', tz: 'Europe/Ljubljana' },
  { label: 'Lesotho', tz: 'Africa/Maseru' },
  { label: 'Gaza Strip', tz: 'Asia/Gaza' },
  { label: 'Latvia', tz: 'Europe/Riga' },
  { label: 'North Macedonia', tz: 'Europe/Skopje' },
  { label: 'Guinea-Bissau', tz: 'Africa/Bissau' },
  { label: 'Equatorial Guinea', tz: 'Africa/Malabo' },
  { label: 'Bahrain', tz: 'Asia/Bahrain' },
  { label: 'Kosovo', tz: 'Europe/Belgrade' },
  { label: 'Timor-Leste', tz: 'Asia/Dili' },
  { label: 'Estonia', tz: 'Europe/Tallinn' },
  { label: 'Trinidad and Tobago', tz: 'America/Port_of_Spain' },
  { label: 'Mauritius', tz: 'Indian/Mauritius' },
  { label: 'Eswatini', tz: 'Africa/Mbabane' },
  { label: 'Djibouti', tz: 'Africa/Djibouti' },
  { label: 'Cyprus', tz: 'Asia/Nicosia' },
  { label: 'Fiji', tz: 'Pacific/Fiji' },
  { label: 'Comoros', tz: 'Indian/Comoro' },
  { label: 'Bhutan', tz: 'Asia/Thimphu' },
  { label: 'Guyana', tz: 'America/Guyana' },
  { label: 'Solomon Islands', tz: 'Pacific/Guadalcanal' },
  { label: 'Macau(China)', tz: 'Asia/Macau' },
  { label: 'Luxembourg', tz: 'Europe/Luxembourg' },
  { label: 'Montenegro', tz: 'Europe/Podgorica' },
  { label: 'Suriname', tz: 'America/Paramaribo' },
  { label: 'Western Sahara(disputed)', tz: 'Africa/El_Aaiun' },
  { label: 'Malta', tz: 'Europe/Malta' },
  { label: 'Maldives', tz: 'Indian/Maldives' },
  { label: 'Cape Verde', tz: 'Atlantic/Cape_Verde' },
  { label: 'Northern Cyprus', tz: 'Asia/Nicosia' },
  { label: 'Brunei', tz: 'Asia/Brunei' },
  { label: 'Belize', tz: 'America/Belize' },
  { label: 'Bahamas', tz: 'America/Nassau' },
  { label: 'Iceland', tz: 'Atlantic/Reykjavik' },
  { label: 'Transnistria', tz: 'Europe/Chisinau' },
  { label: 'Vanuatu', tz: 'Pacific/Efate' },
  { label: 'French Polynesia(France)', tz: 'Pacific/Tahiti' },
  { label: 'New Caledonia(France)', tz: 'Pacific/Noumea' },
  { label: 'Barbados', tz: 'America/Barbados' },
  { label: 'Abkhazia', tz: 'Asia/Sukhumi' },
  { label: 'São Tomé and Príncipe', tz: 'Africa/Sao_Tome' },
  { label: 'Samoa', tz: 'Pacific/Apia' },
  { label: 'Saint Lucia', tz: 'America/St_Lucia' },
  { label: 'Curaçao(Netherlands)', tz: 'America/Curacao' },
  { label: 'Guam(US)', tz: 'Pacific/Guam' },
  { label: 'Seychelles', tz: 'Indian/Mahe' },
  { label: 'Kiribati', tz: 'Pacific/Tarawa' },
  { label: 'Saint Vincent and the Grenadines', tz: 'America/St_Vincent' },
  { label: 'Grenada', tz: 'America/Grenada' },
  { label: 'Aruba(Netherlands)', tz: 'America/Aruba' },
  { label: 'Micronesia', tz: 'Pacific/Chuuk' },
  { label: 'Antigua and Barbuda', tz: 'America/Antigua' },
  { label: 'Jersey(UK)', tz: 'Europe/Jersey' },
  { label: 'Tonga', tz: 'Pacific/Tongatapu' },
  { label: 'Andorra', tz: 'Europe/Andorra' },
  { label: 'U.S. Virgin Islands(US)', tz: 'America/St_Thomas' },
  { label: 'Cayman Islands(UK)', tz: 'America/Cayman' },
  { label: 'Isle of Man(UK)', tz: 'Europe/Isle_of_Man' },
  { label: 'Dominica', tz: 'America/Dominica' },
  { label: 'Guernsey(UK)', tz: 'Europe/Guernsey' },
  { label: 'Bermuda(UK)', tz: 'Atlantic/Bermuda' },
  { label: 'Greenland(Denmark)', tz: 'America/Godthab' },
  { label: 'South Ossetia', tz: 'Asia/Tbilisi' },
  { label: 'Faroe Islands(Denmark)', tz: 'Atlantic/Faroe' },
  { label: 'Saint Kitts and Nevis', tz: 'America/St_Kitts' },
  { label: 'Turks and Caicos Islands(UK)', tz: 'America/Grand_Turk' },
  { label: 'American Samoa(US)', tz: 'Pacific/Pago_Pago' },
  { label: 'Northern Mariana Islands(US)', tz: 'Pacific/Saipan' },
  { label: 'Marshall Islands', tz: 'Pacific/Majuro' },
  { label: 'Sint Maarten(Netherlands)', tz: 'America/Lower_Princes' },
  { label: 'Liechtenstein', tz: 'Europe/Vaduz' },
  { label: 'British Virgin Islands(UK)', tz: 'America/Tortola' },
  { label: 'Monaco', tz: 'Europe/Monaco' },
  { label: 'Gibraltar(UK)', tz: 'Europe/Gibraltar' },
  { label: 'San Marino', tz: 'Europe/San_Marino' },
  { label: 'Saint Martin(France)', tz: 'America/Marigot' },
  { label: 'Bonaire(Netherlands)', tz: 'America/Kralendijk' },
  { label: 'Palau', tz: 'Pacific/Palau' },
  { label: 'Anguilla(UK)', tz: 'America/Anguilla' },
  { label: 'Cook Islands(New Zealand)', tz: 'Pacific/Rarotonga' },
  { label: 'Nauru', tz: 'Pacific/Nauru' },
  { label: 'Wallis and Futuna(France)', tz: 'Pacific/Wallis' },
  { label: 'Tuvalu', tz: 'Pacific/Funafuti' },
  { label: 'Saint Barthélemy(France)', tz: 'America/St_Barthelemy' },
  { label: 'Saint Pierre and Miquelon(France)', tz: 'America/Miquelon' },
  { label: 'Saint Helena, Ascension and Tristan da Cunha(UK)', tz: 'Atlantic/St_Helena' },
  { label: 'Montserrat(UK)', tz: 'America/Montserrat' },
  { label: 'Falkland Islands(UK)', tz: 'Atlantic/Stanley' },
  { label: 'Norfolk Island(Australia)', tz: 'Pacific/Norfolk' },
  { label: 'Saba(Netherlands)', tz: 'America/Kralendijk' },
  { label: 'Christmas Island(Australia)', tz: 'Indian/Christmas' },
  { label: 'Niue(New Zealand)', tz: 'Pacific/Niue' },
  { label: 'Tokelau(New Zealand)', tz: 'Pacific/Fakaofo' },
  { label: 'Vatican City', tz: 'Europe/Vatican' },
  { label: 'Cocos (Keeling) Islands(Australia)', tz: 'Indian/Cocos' },
  { label: 'Pitcairn Islands(UK)', tz: 'Pacific/Pitcairn' },
];

// Create an alphabetically sorted copy of timezones for UI lists (A → Z)
const sortedTimezones = allTimezones.slice().sort((a, b) => a.label.localeCompare(b.label, 'en', { sensitivity: 'base' }));

// Use the first 5 countries from the original list as the default tiles
const defaultTimezones = allTimezones.slice(0, 5);


function createClockTile(idx, tzObj) {
  const tile = document.createElement('div');
  tile.className = 'clock-tile';

  const title = document.createElement('div');
  title.className = 'clock-title';
  title.textContent = tzObj.label;
  tile.appendChild(title);

  const time = document.createElement('div');
  time.className = 'clock-time';
  time.id = `clock-time-${idx}`;
  tile.appendChild(time);

  // Search bar
  const search = document.createElement('input');
  search.type = 'text';
  search.placeholder = 'Search country';
  search.className = 'clock-search';
  tile.appendChild(search);

  // Dropdown (use sorted list so options appear A → Z)
  const select = document.createElement('select');
  select.className = 'clock-select';
  sortedTimezones.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt.tz;
    option.textContent = opt.label;
    if (opt.tz === tzObj.tz) option.selected = true;
    select.appendChild(option);
  });
  tile.appendChild(select);

  // Filter dropdown as user types
  search.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    select.innerHTML = '';
    // Filter from the sorted list to preserve alphabetical order in results
    sortedTimezones.filter(opt => opt.label.toLowerCase().includes(val)).forEach(opt => {
      const option = document.createElement('option');
      option.value = opt.tz;
      option.textContent = opt.label;
      select.appendChild(option);
    });
    // If only one match, select it
    if (select.options.length === 1) {
      select.selectedIndex = 0;
      select.dispatchEvent(new Event('change'));
    }
  });

  select.addEventListener('change', (e) => {
    const newTz = e.target.value;
    const newLabel = allTimezones.find(t => t.tz === newTz)?.label || newTz;
    title.textContent = newLabel;
    tile.setAttribute('data-tz', newTz);
  });
  tile.setAttribute('data-tz', tzObj.tz);
  return tile;
}

function updateClocks() {
  document.querySelectorAll('.clock-tile').forEach((tile, idx) => {
    const tz = tile.getAttribute('data-tz');
    const now = new Date();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: tz });
    const timeDiv = tile.querySelector('.clock-time');
    if (timeDiv) timeDiv.textContent = timeStr;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const row = document.getElementById('clock-row');
  row.innerHTML = '';
  for (let i = 0; i < 5; ++i) {
    const tzObj = defaultTimezones[i % defaultTimezones.length];
    row.appendChild(createClockTile(i, tzObj));
  }
  updateClocks();
  setInterval(updateClocks, 1000);
});
