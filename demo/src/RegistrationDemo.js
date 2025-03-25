import React, { useState } from 'react';
import './RegistrationDemo.css';
import PhoneExtensionDropdown from 'phone-extension-dropdown';

function RegistrationDemo() {
	const handleSubmit = (e) => {
		e.preventDefault();
		alert('This page is just a demo');
	};

	return (
		<div className="registration-container">
			<div className="registration-card">
				<h1>Demo</h1>
				<div>
					<div style={{marginBottom: "20px"}}>
					<PhoneExtensionDropdown
						TextFieldAddition={
							<div className="input-group" style={{marginBottom: "0px"}}>
								<input
									type="text"
									id="username"
									name="username"
									style={{width: '100%', height: '4rem'}}
								/>
							</div>
						}
						DropdownStyle={{
							color: "#e0e0e0"
						}}
					/>
					</div>
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
