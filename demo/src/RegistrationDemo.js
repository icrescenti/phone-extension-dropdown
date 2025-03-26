import React, { useEffect, useState } from 'react';
import './RegistrationDemo.css';
import PhoneExtensionDropdown, { validatePhone } from 'phone-extension-dropdown';

function RegistrationDemo() {
	
	const [phone, setPhone] = useState('');	
	const [countryCode, setCountryCode] = useState('US');
	const [validPhone, setValidPhone] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		alert('Phone is valid: ' + validatePhone(countryCode, phone).toString());
	};

	useEffect(() => {
		setValidPhone(validatePhone(countryCode, phone));
	}, [countryCode, phone]);

	return (
		<div className="registration-container">
			<div className="registration-card">
				<h1>Demo</h1>
				<div>
					<div>
					<PhoneExtensionDropdown
						language="en"
						TextFieldAddition={
							<div className="input-group" style={{marginBottom: "0px"}}>
								<input
									type="text"
									id="username"
									name="username"
									style={{width: '100%', height: '4rem'}}
									value={phone}
									onChange={(e) => setPhone(e.target.value)}
								/>
							</div>
						}
						onSelect={(code, countryCode) => {
							setCountryCode(countryCode);
						}}
						DropdownStyle={{
							color: "#e0e0e0"
						}}
					/>
					</div>
					<span style={{fontSize: '0.9rem', color: validPhone ? 'green' : 'red', marginBottom: "20px"}}>{validPhone ? 'Valid phone' : 'Invalid phone'}</span>
					<div className="input-group">
						<label htmlFor="password">Password</label>
						<input
							type="text"
							id="password"
							name="password"
							style={{width: '100%', height: '4rem'}}
						/>
					</div>
					<button onClick={handleSubmit}>Login</button>
				</div>
			</div>
		</div>
	);
}

export default RegistrationDemo;
