/**
 * Made by Ivan Crescenti
 * 
 * TODO
 * 
 * Filter phone extensions by country recognition
 * 
 */


import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

//Flags images
import tr_nc_flag from './flags/TR_NC.png';
import ge_ab_flag from './flags/GE_AB.png';
import ge_os_flag from './flags/GE_OS.png';

const custom_flag_style = {
	width: '18px',
	//boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
	//backgroundColor: 'green',
	margin: '3px'
}

const PhoneExtensionDropdown = ({ 
	onSelect,
	initialExtension,
	TextFieldAddition,
	recognizer = "US",
	switchButtonStyle,
	DropdownStyle
}) => {
	
	var {t} = useTranslation(['countries']);
	const [isOpen, setIsOpen] = useState(false);
	const [extension, setExtension] = useState({ code: '+1', countryCode: 'US', flag: '🇺🇸' });

	const phoneExtensions = [
		{ code: '+1', countryCode: 'US', flag: '🇺🇸' }, //United States
		{ code: '+1', countryCode: 'CA', flag: '🇨🇦' }, //Canada
		{ code: '+7', countryCode: 'RU', flag: '🇷🇺' }, //Russia
		{ code: '+7 840', countryCode: 'GE_AB', flag: ge_ab_flag, include: ["RU", "NI", "VE", "NR", "SY"] }, //Abkhazia
		{ code: '+7 940', countryCode: 'GE_AB', flag: ge_ab_flag, include: ["RU", "NI", "VE", "NR", "SY"] }, //Abkhazia
		{ code: '+7 850', countryCode: 'GE_OS', flag: ge_os_flag, include: ["RU", "NI", "VE", "NR", "SY"] }, //South Ossetia
		{ code: '+7 929', countryCode: 'GE_OS', flag: ge_os_flag, include: ["RU", "NI", "VE", "NR", "SY"] }, //South Ossetia
		{ code: '+20', countryCode: 'EG', flag: '🇪🇬' }, //Egypt
		{ code: '+27', countryCode: 'ZA', flag: '🇿🇦' }, //South Africa
		{ code: '+30', countryCode: 'GR', flag: '🇬🇷' }, //Greece
		{ code: '+31', countryCode: 'NL', flag: '🇳🇱' }, //Netherlands
		{ code: '+32', countryCode: 'BE', flag: '🇧🇪' }, //Belgium
		{ code: '+33', countryCode: 'FR', flag: '🇫🇷' }, //France
		{ code: '+34', countryCode: 'ES', flag: '🇪🇸' }, //Spain
		{ code: '+36', countryCode: 'HU', flag: '🇭🇺' }, //Hungary
		{ code: '+39', countryCode: 'IT', flag: '🇮🇹' }, //Italy
		{ code: '+40', countryCode: 'RO', flag: '🇷🇴' }, //Romania
		{ code: '+41', countryCode: 'CH', flag: '🇨🇭' }, //Switzerland
		{ code: '+43', countryCode: 'AT', flag: '🇦🇹' }, //Austria
		{ code: '+44', countryCode: 'GB', flag: '🇬🇧' }, //United Kingdom
		{ code: '+45', countryCode: 'DK', flag: '🇩🇰' }, //Denmark
		{ code: '+46', countryCode: 'SE', flag: '🇸🇪' }, //Sweden
		{ code: '+47', countryCode: 'NO', flag: '🇳🇴' }, //Norway
		{ code: '+48', countryCode: 'PL', flag: '🇵🇱' }, //Poland
		{ code: '+49', countryCode: 'DE', flag: '🇩🇪' }, //Germany
		{ code: '+51', countryCode: 'PE', flag: '🇵🇪' }, //Peru
		{ code: '+52', countryCode: 'MX', flag: '🇲🇽' }, //Mexico
		{ code: '+53', countryCode: 'CU', flag: '🇨🇺' }, //Cuba
		{ code: '+54', countryCode: 'AR', flag: '🇦🇷' }, //Argentina
		{ code: '+55', countryCode: 'BR', flag: '🇧🇷' }, //Brazil
		{ code: '+56', countryCode: 'CL', flag: '🇨🇱' }, //Chile
		{ code: '+57', countryCode: 'CO', flag: '🇨🇴' }, //Colombia
		{ code: '+58', countryCode: 'VE', flag: '🇻🇪' }, //Venezuela
		{ code: '+60', countryCode: 'MY', flag: '🇲🇾' }, //Malaysia
		{ code: '+61', countryCode: 'AU', flag: '🇦🇺' }, //Australia
		{ code: '+62', countryCode: 'ID', flag: '🇮🇩' }, //Indonesia
		{ code: '+63', countryCode: 'PH', flag: '🇵🇭' }, //Philippines
		{ code: '+64', countryCode: 'NZ', flag: '🇳🇿' }, //New Zealand
		{ code: '+65', countryCode: 'SG', flag: '🇸🇬' }, //Singapore
		{ code: '+66', countryCode: 'TH', flag: '🇹🇭' }, //Thailand
		{ code: '+81', countryCode: 'JP', flag: '🇯🇵' }, //Japan
		{ code: '+82', countryCode: 'KR', flag: '🇰🇷' }, //South Korea
		{ code: '+84', countryCode: 'VN', flag: '🇻🇳' }, //Vietnam
		{ code: '+86', countryCode: 'CN', flag: '🇨🇳' }, //China
		{ code: '+90', countryCode: 'TR', flag: '🇹🇷' }, //Turkey
		{ code: '+90', countryCode: 'TR_NC', flag: tr_nc_flag, include: ["TR"] }, //Northern Cyprus
		{ code: '+91', countryCode: 'IN', flag: '🇮🇳' }, //India
		{ code: '+92', countryCode: 'PK', flag: '🇵🇰' }, //Pakistan
		{ code: '+93', countryCode: 'AF', flag: '🇦🇫' }, //Afghanistan
		{ code: '+94', countryCode: 'LK', flag: '🇱🇰' }, //Sri Lanka
		{ code: '+95', countryCode: 'MM', flag: '🇲🇲' }, //Myanmar
		{ code: '+98', countryCode: 'IR', flag: '🇮🇷' }, //Iran
		{ code: '+212', countryCode: 'MA', flag: '🇲🇦' }, //Morocco
		{ code: '+213', countryCode: 'DZ', flag: '🇩🇿' }, //Algeria
		{ code: '+216', countryCode: 'TN', flag: '🇹🇳' }, //Tunisia
		{ code: '+218', countryCode: 'LY', flag: '🇱🇾' }, //Libya
		{ code: '+220', countryCode: 'GM', flag: '🇬🇲' },
		{ code: '+221', countryCode: 'SN', flag: '🇸🇳' },
		{ code: '+222', countryCode: 'MR', flag: '🇲🇷' },
		{ code: '+223', countryCode: 'ML', flag: '🇲🇱' },
		{ code: '+224', countryCode: 'GN', flag: '🇬🇳' },
		{ code: '+225', countryCode: 'CI', flag: '🇨🇮' },
		{ code: '+226', countryCode: 'BF', flag: '🇧🇫' },
		{ code: '+227', countryCode: 'NE', flag: '🇳🇪' },
		{ code: '+228', countryCode: 'TG', flag: '🇹🇬' },
		{ code: '+229', countryCode: 'BJ', flag: '🇧🇯' },
		{ code: '+230', countryCode: 'MU', flag: '🇲🇺' },
		{ code: '+231', countryCode: 'LR', flag: '🇱🇷' },
		{ code: '+232', countryCode: 'SL', flag: '🇸🇱' },
		{ code: '+233', countryCode: 'GH', flag: '🇬🇭' },
		{ code: '+234', countryCode: 'NG', flag: '🇳🇬' },
		{ code: '+235', countryCode: 'TD', flag: '🇹🇩' },
		{ code: '+236', countryCode: 'CF', flag: '🇨🇫' },
		{ code: '+237', countryCode: 'CM', flag: '🇨🇲' },
		{ code: '+238', countryCode: 'CV', flag: '🇨🇻' },
		{ code: '+239', countryCode: 'ST', flag: '🇸🇹' },
		{ code: '+240', countryCode: 'GQ', flag: '🇬🇶' },
		{ code: '+241', countryCode: 'GA', flag: '🇬🇦' },
		{ code: '+242', countryCode: 'CG', flag: '🇨🇬' },
		{ code: '+243', countryCode: 'CD', flag: '🇨🇩' },
		{ code: '+244', countryCode: 'AO', flag: '🇦🇴' },
		{ code: '+245', countryCode: 'GW', flag: '🇬🇼' },
		{ code: '+246', countryCode: 'IO', flag: '🇮🇴' },
		{ code: '+248', countryCode: 'SC', flag: '🇸🇨' },
		{ code: '+249', countryCode: 'SD', flag: '🇸🇩' },
		{ code: '+250', countryCode: 'RW', flag: '🇷🇼' },
		{ code: '+251', countryCode: 'ET', flag: '🇪🇹' },
		{ code: '+252', countryCode: 'SO', flag: '🇸🇴' },
		{ code: '+253', countryCode: 'DJ', flag: '🇩🇯' },
		{ code: '+254', countryCode: 'KE', flag: '🇰🇪' },
		{ code: '+255', countryCode: 'TZ', flag: '🇹🇿' },
		{ code: '+256', countryCode: 'UG', flag: '🇺🇬' },
		{ code: '+257', countryCode: 'BI', flag: '🇧🇮' },
		{ code: '+258', countryCode: 'MZ', flag: '🇲🇿' },
		{ code: '+260', countryCode: 'ZM', flag: '🇿🇲' },
		{ code: '+261', countryCode: 'MG', flag: '🇲🇬' }, // Madagascar
		{ code: '+262', countryCode: 'RE', flag: '🇷🇪' }, // Réunion
		{ code: '+263', countryCode: 'ZW', flag: '🇿🇼' },
		{ code: '+264', countryCode: 'NA', flag: '🇳🇦' },
		{ code: '+265', countryCode: 'MW', flag: '🇲🇼' },
		{ code: '+266', countryCode: 'LS', flag: '🇱🇸' },
		{ code: '+267', countryCode: 'BW', flag: '🇧🇼' },
		{ code: '+268', countryCode: 'SZ', flag: '🇸🇿' },
		{ code: '+269', countryCode: 'KM', flag: '🇰🇲' },
		{ code: '+290', countryCode: 'SH', flag: '🇸🇭' },
		{ code: '+291', countryCode: 'ER', flag: '🇪🇷' },
		{ code: '+297', countryCode: 'AW', flag: '🇦🇼' },
		{ code: '+298', countryCode: 'FO', flag: '🇫🇴' },
		{ code: '+299', countryCode: 'GL', flag: '🇬🇱' },
		{ code: '+350', countryCode: 'GI', flag: '🇬🇮' },
		{ code: '+351', countryCode: 'PT', flag: '🇵🇹' },
		{ code: '+352', countryCode: 'LU', flag: '🇱🇺' },
		{ code: '+353', countryCode: 'IE', flag: '🇮🇪' },
		{ code: '+354', countryCode: 'IS', flag: '🇮🇸' },
		{ code: '+355', countryCode: 'AL', flag: '🇦🇱' },
		{ code: '+356', countryCode: 'MT', flag: '🇲🇹' },
		{ code: '+357', countryCode: 'CY', flag: '🇨🇾' },
		{ code: '+358', countryCode: 'FI', flag: '🇫🇮' },
		{ code: '+359', countryCode: 'BG', flag: '🇧🇬' },
		{ code: '+370', countryCode: 'LT', flag: '🇱🇹' },
		{ code: '+371', countryCode: 'LV', flag: '🇱🇻' },
		{ code: '+372', countryCode: 'EE', flag: '🇪🇪' },
		{ code: '+373', countryCode: 'MD', flag: '🇲🇩' },
		{ code: '+374', countryCode: 'AM', flag: '🇦🇲' },
		{ code: '+375', countryCode: 'BY', flag: '🇧🇾' },
		{ code: '+376', countryCode: 'AD', flag: '🇦🇩' },
		{ code: '+377', countryCode: 'MC', flag: '🇲🇨' },
		{ code: '+378', countryCode: 'SM', flag: '🇸🇲' },
		{ code: '+379', countryCode: 'VA', flag: '🇻🇦' },
		{ code: '+380', countryCode: 'UA', flag: '🇺🇦' },
		{ code: '+381', countryCode: 'RS', flag: '🇷🇸' },
		{ code: '+382', countryCode: 'ME', flag: '🇲🇪' },
		{ code: '+383', countryCode: 'XK', flag: '🇽🇰', exclude: ["RS", "RU", "CN", "ES", "GR"] }, //Kosovo
		{ code: '+385', countryCode: 'HR', flag: '🇭🇷' }, // Croatia
		{ code: '+386', countryCode: 'SI', flag: '🇸🇮' }, // Slovenia
		{ code: '+387', countryCode: 'BA', flag: '🇧🇦' }, // Bosnia and Herzegovina
		{ code: '+389', countryCode: 'MK', flag: '🇲🇰' }, // Macedonia
		{ code: '+420', countryCode: 'CZ', flag: '🇨🇿' }, // Czech Republic
		{ code: '+421', countryCode: 'SK', flag: '🇸🇰' }, // Slovakia
		{ code: '+423', countryCode: 'LI', flag: '🇱🇮' }, // Liechtenstein
		{ code: '+500', countryCode: 'FK', flag: '🇫🇰' }, // Falkland Islands
		{ code: '+501', countryCode: 'BZ', flag: '🇧🇿' }, // Belize
		{ code: '+502', countryCode: 'GT', flag: '🇬🇹' }, // Guatemala
		{ code: '+503', countryCode: 'SV', flag: '🇸🇻' }, // El Salvador
		{ code: '+504', countryCode: 'HN', flag: '🇭🇳' }, // Honduras
		{ code: '+505', countryCode: 'NI', flag: '🇳🇮' }, // Nicaragua
		{ code: '+506', countryCode: 'CR', flag: '🇨🇷' }, // Costa Rica
		{ code: '+507', countryCode: 'PA', flag: '🇵🇦' }, // Panama
		{ code: '+508', countryCode: 'PM', flag: '🇵🇲' }, // Saint Pierre and Miquelon
		{ code: '+509', countryCode: 'HT', flag: '🇭🇹' }, // Haiti
		{ code: '+590', countryCode: 'GP', flag: '🇬🇵' }, // Guadeloupe
		{ code: '+591', countryCode: 'BO', flag: '🇧🇴' }, // Bolivia
		{ code: '+592', countryCode: 'GY', flag: '🇬🇾' }, // Guyana
		{ code: '+593', countryCode: 'EC', flag: '🇪🇨' }, // Ecuador
		{ code: '+594', countryCode: 'GF', flag: '🇬🇫' }, // French Guiana
		{ code: '+595', countryCode: 'PY', flag: '🇵🇾' }, // Paraguay
		{ code: '+596', countryCode: 'MQ', flag: '🇲🇶' }, // Martinique
		{ code: '+597', countryCode: 'SR', flag: '🇸🇷' },
		{ code: '+598', countryCode: 'UY', flag: '🇺🇾' },
		{ code: '+599', countryCode: 'BQ', flag: '🇧🇶' },
		{ code: '+670', countryCode: 'TL', flag: '🇹🇱' },
		{ code: '+672', countryCode: 'AU', flag: '🇦🇺' },
		{ code: '+673', countryCode: 'BN', flag: '🇧🇳' },
		{ code: '+674', countryCode: 'NR', flag: '🇳🇷' },
		{ code: '+675', countryCode: 'PG', flag: '🇵🇬' },
		{ code: '+676', countryCode: 'TO', flag: '🇹🇴' },
		{ code: '+677', countryCode: 'SB', flag: '🇸🇧' },
		{ code: '+678', countryCode: 'VU', flag: '🇻🇺' },
		{ code: '+679', countryCode: 'FJ', flag: '🇫🇯' },
		{ code: '+680', countryCode: 'PW', flag: '🇵🇼' },
		{ code: '+681', countryCode: 'WF', flag: '🇼🇫' },
		{ code: '+682', countryCode: 'CK', flag: '🇨🇰' },
		{ code: '+683', countryCode: 'NU', flag: '🇳🇺' },
		{ code: '+685', countryCode: 'WS', flag: '🇼🇸' },
		{ code: '+686', countryCode: 'KI', flag: '🇰🇮' },
		{ code: '+687', countryCode: 'NC', flag: '🇳🇨' },
		{ code: '+688', countryCode: 'TV', flag: '🇹🇻' },
		{ code: '+689', countryCode: 'PF', flag: '🇵🇫' },
		{ code: '+690', countryCode: 'TK', flag: '🇹🇰' },
		{ code: '+691', countryCode: 'FM', flag: '🇫🇲' },
		{ code: '+692', countryCode: 'MH', flag: '🇲🇭' },
		{ code: '+800', countryCode: 'Intl Freephone', flag: '🌐' },
		{ code: '+808', countryCode: 'Shared Cost', flag: '🌐' },
		{ code: '+850', countryCode: 'KP', flag: '🇰🇵' },
		{ code: '+852', countryCode: 'HK', flag: '🇭🇰' },
		{ code: '+853', countryCode: 'MO', flag: '🇲🇴' },
		{ code: '+855', countryCode: 'KH', flag: '🇰🇭' },
		{ code: '+856', countryCode: 'LA', flag: '🇱🇦' },
		{ code: '+880', countryCode: 'BD', flag: '🇧🇩' },
		{ code: '+881', countryCode: 'GMSS', flag: '🛰️' }, // Global Mobile Satellite System
		{ code: '+882', countryCode: 'IN', flag: '🌐' }, // International Networks
		{ code: '+883', countryCode: 'IN', flag: '🌐' }, // International Networks
		{ code: '+886', countryCode: 'TW', flag: '🇹🇼', include: ["BZ", "GT", "HT", "VA", "HN", "MH", "NR", "PW", "PY", "KN", "LC", "VC", "TV"] }, // Taiwan
		{ code: '+888', countryCode: 'QA', flag: '🇶🇦' }, // Ooredoo (Qatar)
		{ code: '+960', countryCode: 'MV', flag: '🇲🇻' }, // Maldives
		{ code: '+961', countryCode: 'LB', flag: '🇱🇧' }, // Lebanon
		{ code: '+962', countryCode: 'JO', flag: '🇯🇴' }, // Jordan
		{ code: '+963', countryCode: 'SY', flag: '🇸🇾' }, // Syria
		{ code: '+964', countryCode: 'IQ', flag: '🇮🇶' }, // Iraq
		{ code: '+965', countryCode: 'KW', flag: '🇰🇼' }, // Kuwait
		{ code: '+966', countryCode: 'SA', flag: '🇸🇦' }, // Saudi Arabia
		{ code: '+967', countryCode: 'YE', flag: '🇾🇪' }, // Yemen
		{ code: '+968', countryCode: 'OM', flag: '🇴🇲' }, // Oman
		{ code: '+970', countryCode: 'PS', flag: '🇵🇸' }, // Palestine
		{ code: '+971', countryCode: 'AE', flag: '🇦🇪' }, // United Arab Emirates
		{ code: '+972', countryCode: 'IL', flag: '🇮🇱' }, // Israel
		{ code: '+973', countryCode: 'BH', flag: '🇧🇭' }, // Bahrain
		{ code: '+974', countryCode: 'QA', flag: '🇶🇦' }, // Qatar
		{ code: '+975', countryCode: 'BT', flag: '🇧🇹' }, // Bhutan
		{ code: '+976', countryCode: 'MN', flag: '🇲🇳' }, // Mongolia
		{ code: '+977', countryCode: 'NP', flag: '🇳🇵' }, // Nepal
		{ code: '+979', countryCode: 'IPRS', flag: '⭐' }, // International Premium Rate Service
		{ code: '+992', countryCode: 'TJ', flag: '🇹🇯' }, // Tajikistan
		{ code: '+993', countryCode: 'TM', flag: '🇹🇲' }, // Turkmenistan
		{ code: '+994', countryCode: 'AZ', flag: '🇦🇿' }, // Azerbaijan
		{ code: '+995', countryCode: 'GE', flag: '🇬🇪' }, // Georgia
		{ code: '+996', countryCode: 'KG', flag: '🇰🇬' }, // Kyrgyzstan
		{ code: '+998', countryCode: 'UZ', flag: '🇺🇿' }, // Uzbekistan
		{ code: '+1242', countryCode: 'BS', flag: '🇧🇸' }, // Bahamas
		{ code: '+1246', countryCode: 'BB', flag: '🇧🇧' }, // Barbados
		{ code: '+1264', countryCode: 'AI', flag: '🇦🇮' }, // Anguilla
		{ code: '+1268', countryCode: 'AG', flag: '🇦🇬' }, // Antigua and Barbuda
		{ code: '+1284', countryCode: 'VG', flag: '🇻🇬' }, // British Virgin Islands
		{ code: '+1340', countryCode: 'VI', flag: '🇻🇮' }, // U.S. Virgin Islands
		{ code: '+1345', countryCode: 'KY', flag: '🇰🇾' }, // Cayman Islands
		{ code: '+1441', countryCode: 'BM', flag: '🇧🇲' }, // Bermuda
		{ code: '+1473', countryCode: 'GD', flag: '🇬🇩' }, // Grenada
		{ code: '+1649', countryCode: 'TC', flag: '🇹🇨' }, // Turks and Caicos Islands
		{ code: '+1664', countryCode: 'MS', flag: '🇲🇸' }, // Montserrat
		{ code: '+1670', countryCode: 'MP', flag: '🇲🇵' }, // Northern Mariana Islands
		{ code: '+1671', countryCode: 'GU', flag: '🇬🇺' }, // Guam
		{ code: '+1684', countryCode: 'AS', flag: '🇦🇸' }, // American Samoa
		{ code: '+1721', countryCode: 'SX', flag: '🇸🇽' }, // Sint Maarten
		{ code: '+1758', countryCode: 'LC', flag: '🇱🇨' }, // Saint Lucia
		{ code: '+1767', countryCode: 'DM', flag: '🇩🇲' }, // Dominica
		{ code: '+1784', countryCode: 'VC', flag: '🇻🇨' }, // Saint Vincent and the Grenadines
		{ code: '+1787', countryCode: 'PR', flag: '🇵🇷' }, // Puerto Rico
		{ code: '+1809', countryCode: 'DO', flag: '🇩🇴' }, // Dominican Republic
		{ code: '+1829', countryCode: 'DO', flag: '🇩🇴' }, // Dominican Republic (overlapping)
		{ code: '+1849', countryCode: 'DO', flag: '🇩🇴' }, // Dominican Republic (overlapping)
		{ code: '+1868', countryCode: 'TT', flag: '🇹🇹' }, // Trinidad and Tobago
		{ code: '+1869', countryCode: 'KN', flag: '🇰🇳' }, // Saint Kitts and Nevis
		{ code: '+500', countryCode: 'FK', flag: '🇫🇰' }, // Falkland Islands (Malvinas)
		{ code: '+508', countryCode: 'PM', flag: '🇵🇲' }, // Saint Pierre and Miquelon
		{ code: '+599', countryCode: 'CW', flag: '🇨🇼' }, // Curacao
		{ code: '+599', countryCode: 'BQ', flag: '🇧🇶' }, // Bonaire, Sint Eustatius and Saba
		{ code: '+672', countryCode: 'AQ', flag: '🇦🇶' }, // Australian Antarctic Territory and external territories.
		{ code: '+672', countryCode: 'NF', flag: '🇳🇫' }, // Norfolk Island
		{ code: '+672', countryCode: 'HM', flag: '🇭🇲' }, // Heard Island and McDonald Islands
		{ code: '+672', countryCode: 'CC', flag: '🇨🇨' }, // Cocos (Keeling) Islands
		{ code: '+672', countryCode: 'CX', flag: '🇨🇽' }, // Christmas Island
		{ code: '+690', countryCode: 'TK', flag: '🇹🇰' }, // Tokelau
		

		//Transnistria

		//Somaliland

		//Puntland

		//Sahara Occidental

		

	];

	// Reorder phoneExtensions to put the recognizer country at the top
	const reorderedPhoneExtensions = React.useMemo(() => {
		if (!recognizer) {
			return phoneExtensions;
		}

		const localRecognizer = phoneExtensions.filter(ext => ext.countryCode == recognizer)[0];
		
		const recognizerCountryExtension = localRecognizer?.code?.split(' ')[0] || '+1';
		
		// Find all extensions for the recognizer country
		const recognizerExtensions = phoneExtensions.filter(ext => (ext?.code?.split(' ')[0] || '+1') == recognizerCountryExtension);
		// Get remaining extensions from other countries
		const otherExtensions = phoneExtensions.filter(ext => (ext?.code?.split(' ')[0] || '+1') != recognizerCountryExtension);
		
		let aux = [...recognizerExtensions, ...otherExtensions];

		aux = aux.filter(ext => {
			// If the extension has no include or exclude attributes, include it
			if (!ext.include && !ext.exclude) {
				return true;
			}
			
			// Check if recognizer is in include list
			if (ext.include) {
				if (ext.include.includes(recognizer)) {
					return true;
				}
				else {
					return false;
				}
			}
			
			// Check if recognizer is in exclude list
			if (ext.exclude && ext.exclude.includes(recognizer)) {
				return false;
			}
			
			// If recognizer is not in either list, include the item
			return true;
		})

		return aux;
	}, [recognizer]);

	useEffect(() => {
		if (initialExtension != undefined) {
			setExtension( reorderedPhoneExtensions.filter(extension => extension.code == initialExtension?.toUpperCase())[0]  || { code: '+1', countryCode: 'US', flag: '🇺🇸' });
		}
	}, [initialExtension, reorderedPhoneExtensions]);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleExtensionSelect = (extension) => {
		setExtension(extension);
		setIsOpen(false);
		if (onSelect && typeof onSelect == 'function') {
			onSelect(extension.code);
		}
	};

	const SwitchButton = <button
		onClick={toggleDropdown}
		style={{
			padding: '8px 12px',
			border: '1px solid #ccc',
			borderRadius: '4px',
			//background: '#fff',
			cursor: 'pointer',
			height: '5.3rem',
			width: '75px',
			...switchButtonStyle
		}}
	>
		{
			extension.flag.includes('/')
			?<div>
				<div style={{display: 'flex', justifyContent: 'center'}}>
					<img src={extension.flag} style={custom_flag_style} />
				</div>
				<span>({extension.code})</span>
			</div>
			:`${extension.flag} (${extension.code})`
		}
	</button>;

	return (
		<div style={{ position: 'relative', display: 'inline-block' }}>
		
		{TextFieldAddition == undefined
			?SwitchButton
			:<div style={{display: 'flex', justifyContent: 'center', gap: "5px"}}>
				{SwitchButton}
				{TextFieldAddition}
			</div>
		}

		{isOpen && (
			<ul
				style={{
					position: 'relative',
					top: '100%',
					left: 0,
					width: '250px',
					height: '1250px',
					listStyle: 'none',
					padding: 0,
					margin: 0,
					border: '1px solid #ccc',
					borderRadius: '4px',
					//background: '#fff',
					zIndex: 99999,
					maxHeight: '200px',
					overflowY: 'auto',
					...DropdownStyle
				}}
			>
			{reorderedPhoneExtensions.map((extension) => (
				<li
					key={extension.code}
					onClick={() => handleExtensionSelect(extension)}
					style={{
						padding: '8px 12px',
						cursor: 'pointer',
						':hover':{
							backgroundColor: '#f0f0f0'
						}
					}}
				>
					{
						extension.flag.includes('/')
						?<div>
							<div style={{display: 'flex', justifyContent: 'left'}}>
								<img src={extension.flag} style={custom_flag_style} />
								<span style={{marginLeft: '5px'}}>{t(extension.countryCode.toLowerCase())} {extension.code}</span>
							</div>
						</div>
						:`${extension.flag} ${t(extension.countryCode.toLowerCase())} ${extension.code}`
					}
				</li>
			))}
			</ul>
		)}
		</div>
	);
};

export default PhoneExtensionDropdown;