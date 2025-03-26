export function validatePhone(countryCode, phone) {
	let phoneRegex;
	let _countryCode = countryCode.toUpperCase();

	function isCountryInArray(countryCode, array) {
		return array.some(country => country == countryCode);
	}

	if (isCountryInArray(_countryCode, ["US", "CA", "AI", "AG", "BS", "BB", "DM", "DO", "GD", "JM", "KN", "LC", "VC", "TT", "VG"])) { //Tested
		phoneRegex = /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*(\d{3})\s*\)|(\d{3}))\s*(?:[.-]\s*)?)?(\d{3})\s*(?:[.-]\s*)?(\d{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;
	}
	else if (isCountryInArray(_countryCode, ["ES"])) { //Tested
		phoneRegex = /^(?:6|7)[0-9]{8}$/;
	}
	else if (isCountryInArray(_countryCode, ["FR"])) { //Tested
		phoneRegex = /^(0[1-9])(?:[ ]?\d{2}){4}$/;
	}
	else if (isCountryInArray(_countryCode, ["RU"])) {
		phoneRegex = /^8\d{10}$/;
	}
	else {
		return false; // Invalid country code
	}

	return phoneRegex.test(phone);
}