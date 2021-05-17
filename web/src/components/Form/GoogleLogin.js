import React from 'react';
import { GoogleLogin } from 'react-google-login';

import { GOOGLE_CLIENT_ID } from '../../config/constants';

class GoogleLoginSection extends React.Component {
	constructor(props) {
		super(props);
		this.input = {
			value: '',
			onChange: this.onTokenChange,
		};
	}

	onSuccess = (res) => {
		const { email, googleId } = res.profileObj;
		console.log('google login success', res);
		const values = {
			email,
			password: googleId + email,
			provider: 'google',
		};
		this.props.onSubmitGoogleLogin(values);
	};
	onFailed = (res) => {
		console.log('google login failed', res);
	};

	onTokenChange = (token) => {
		console.log('token', token);
	};

	render() {
		const { buttonLabel } = this.props;
		return (
			<div>
				<GoogleLogin
					clientId={GOOGLE_CLIENT_ID}
					buttonText={buttonLabel.toUpperCase() + ' WITH GOOGLE'}
					onSuccess={this.onSuccess}
					onFailure={this.onFailed}
					className="my-3 w-100 d-flex justify-content-center"
					style="height: 36px"
				/>
			</div>
		);
	}
}

export default GoogleLoginSection;
