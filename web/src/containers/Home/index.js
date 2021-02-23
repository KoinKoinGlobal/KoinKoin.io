import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isBrowser, isMobile } from 'react-device-detect';
import classnames from 'classnames';
import { getClasesForLanguage } from '../../utils/string';
import { getThemeClass } from '../../utils/theme';
import EventListener from 'react-event-listener';
import STRINGS from '../../config/localizedStrings';
import { AppFooter } from '../../components';
import { Link } from 'react-router';
import { isLoggedIn } from '../../utils/token';
// Actions
import { logout } from '../../actions/authAction';
import { getExchangeInfo } from '../../actions/appActions';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import { _shouldShowPopup, _setCookie } from '../../utils/cookie';
import CommonButton from '../../components/CommonButton';
import Dialog from '../../components/Dialog';
import Image from 'components/Image';
import Socket from '../App/Socket';
import GetSocketState from '../App/GetSocketState';
import withConfig from 'components/ConfigProvider/withConfig';

const MIN_HEIGHT = 450;
const BACKGROUND_PATH =
	'https://mcusercontent.com/94bba1379edc8e1b29b1336d6/images/84d67678-e33f-4c96-a5fe-9fadad312e9f.png';

class Home extends Component {
	state = {
		height: 0,
		style: {
			minHeight: MIN_HEIGHT,
		},
		publicSocket: undefined,
		privateSocket: undefined,
		appLoaded: false,
		isSocketDataReady: false,
		openCookieModal: _shouldShowPopup(),
	};
	componentDidMount() {
		this.props.getExchangeInfo();
		// this.initSocketConnections();
	}
	componentWillUnmount() {
		if (this.state.publicSocket) {
			this.state.publicSocket.close();
		}
	}
	onResize = () => {
		if (this.container) {
			const height = window.innerHeight - 45;
			this.setState({
				style: {
					minHeight: height,
				},
				height,
			});
		}
	};
	setContainerRef = (el) => {
		if (el) {
			this.container = el;
			this.onResize();
		}
	};
	onChangeLanguage = (language) => () => {
		return this.props.changeLanguage(language);
	};
	cancelCookieAccept = () => {
		this.setState({ openCookieModal: false });
	};
	onClickCookieAcceptBtn = () => {
		_setCookie('KoinKoin', 1, 365);
		this.setState({ openCookieModal: false });
	};
	connectionCallBack = (value) => {
		this.setState({ appLoaded: value });
	};

	socketDataCallback = (value = false) => {
		this.setState({ isSocketDataReady: value });
	};
	logout = (message = '') => {
		this.setState({ appLoaded: false }, () => {
			this.props.logout(typeof message === 'string' ? message : '');
		});
	};
	render() {
		const {
			activeLanguage,
			activeTheme,
			constants = { captcha: {} },
			router,
			location,
		} = this.props;
		console.log('constants', this.props);
		const { style, isSocketDataReady } = this.state;

		return (
			<div
				className={classnames(
					'app_container',
					'home_container',
					'app_background',
					getClasesForLanguage(activeLanguage),
					getThemeClass(activeTheme),
					{
						'layout-mobile': isMobile,
						'layout-desktop': isBrowser,
					}
				)}
			>
				<Socket
					router={router}
					location={location}
					logout={this.logout}
					connectionCallBack={this.connectionCallBack}
				/>
				<GetSocketState
					router={router}
					isDataReady={isSocketDataReady}
					socketDataCallback={this.socketDataCallback}
				/>
				<EventListener target="window" onResize={this.onResize} />
				<div className={'koinkoin-app_bar'}>
					<div className="app_bar-icon text-uppercase d-flex justify-content-center align-items-center">
						{/* <div
							style={{ backgroundImage: `url(${BACKGROUND_PATH})` }}
							className="app_bar-icon-logo"
						></div> */}
						<Image
							icon={BACKGROUND_PATH}
							wrapperClassName="app_bar-icon-logo"
						/>
					</div>
					{isLoggedIn() ? (
						<div className="sign-in-up-buttons">
							<Link className="btn-login" to="/summary">
								{STRINGS['HOME.DASHBOARD']}&nbsp;/&nbsp;
							</Link>
							<a
								className="btn-login"
								href="https://koinkoin.otctrade.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								{' '}
								{'OTC'}
							</a>
						</div>
					) : (
						<div className="sign-in-up-buttons">
							<Link className="btn-login" to="/login">
								{STRINGS['LOGIN_TEXT']}&nbsp;/&nbsp;
							</Link>
							<Link className="btn-login" to="/signup">
								{' '}
								{STRINGS['SIGNUP_TEXT']}&nbsp;/&nbsp;
							</Link>
							<a
								className="btn-login"
								href="https://koinkoin.otctrade.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								{' '}
								{STRINGS['FOOTER.SECTIONS.SECTION_7_LINK_1']}
							</a>
						</div>
					)}
				</div>
				<div
					className={classnames(
						'app_container-content',
						'home_container-content',
						'flex-column',
						'overflow-y'
					)}
					ref={this.setContainerRef}
				>
					<Section1
						constants={constants}
						style={{
							height:
								style.minHeight > MIN_HEIGHT ? style.minHeight : MIN_HEIGHT,
						}}
					/>

					<Section2 style={style} />

					<Section3 style={style} />

					<Section4
						style={style}
						theme={activeTheme}
						onChangeLanguage={this.onChangeLanguage}
						activeLanguage={activeLanguage}
						constants={constants}
					/>
					<AppFooter
						theme={activeTheme}
						onChangeLanguage={this.onChangeLanguage}
						activeLanguage={activeLanguage}
						constants={constants}
					/>
					<Dialog
						isOpen={this.state.openCookieModal}
						label="hollaex-modal"
						className={classnames('app-dialog', {
							'app-dialog-flex': true,
						})}
						onCloseDialog={this.cancelCookieAccept}
					>
						<div style={{ padding: '10px' }}></div>
						<h2>Cookie Information and Consent Request</h2>
						<CommonButton
							label="Accept"
							onClick={this.onClickCookieAcceptBtn}
						/>
					</Dialog>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (store) => ({
	activeLanguage: store.app.language,
	activeTheme: store.app.theme,
	info: store.app.info,
	constants: store.app.constants,
});

const mapDispatchToProps = (dispatch) => ({
	getExchangeInfo: bindActionCreators(getExchangeInfo, dispatch),
	logout: bindActionCreators(logout, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withConfig(Home));
