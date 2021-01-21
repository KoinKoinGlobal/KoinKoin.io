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
import {
	// isLoggedIn,
	// getToken,
	isLoggedIn,
} from '../../utils/token';
// Actions
import { logout } from '../../actions/authAction';
// import { setMe } from '../../actions/userAction';
import {
	// setPairs,
	// changePair,
	// setCurrencies,
	// setOrderLimits,
	// setValidBaseCurrency,
	// setConfig,
	setLanguage,
	// changeTheme,
	// requestAvailPlugins,
	getExchangeInfo,
} from '../../actions/appActions';
// import {
// 	setPairsData
// } from '../../actions/orderbookAction';
// Components
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

const MIN_HEIGHT = 450;
const BACKGROUND_PATH =
	'https://mcusercontent.com/94bba1379edc8e1b29b1336d6/images/84d67678-e33f-4c96-a5fe-9fadad312e9f.png';

class Home extends Component {
	state = {
		height: 0,
		style: {
			minHeight: MIN_HEIGHT,
		},
	};
	componentDidMount() {
		this.props.getExchangeInfo();
		// this.initSocketConnections();
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
	render() {
		const { activeLanguage, activeTheme, constants = {} } = this.props;

		const { style } = this.state;

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
				<EventListener target="window" onResize={this.onResize} />
				<div className={'koinkoin-app_bar'}>
					<div className={classnames('app_bar-icon', 'text-uppercase')}>
						<div
							style={{ backgroundImage: `url(${BACKGROUND_PATH})` }}
							className="app_bar-icon-logo"
						></div>
					</div>
					{isLoggedIn() ? (
						<div className="sign-in-up-buttons">
							<Link className="btn-login" to="/summary">
								{STRINGS['HOME.DASHBOARD']}
							</Link>
						</div>
					) : (
						<div className="sign-in-up-buttons">
							<Link className="btn-login" to="/login">
								{STRINGS['LOGIN_TEXT']}&nbsp;/&nbsp;
							</Link>
							<Link className="btn-signup" to="/signup">
								{' '}
								{STRINGS['SIGNUP_TEXT']}
							</Link>
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
				</div>
			</div>
		);
	}
}

const mapStateToProps = (store) => ({
	// fetchingAuth: store.auth.fetching,
	// pair: store.app.pair,
	// token: store.auth.token,
	// verifyToken: store.auth.verifyToken,
	activeLanguage: store.app.language,
	// info: store.app.info,
	activeTheme: store.app.theme,
	constants: store.app.constants,
});

const mapDispatchToProps = (dispatch) => ({
	getExchangeInfo: bindActionCreators(getExchangeInfo, dispatch),
	// changePair: bindActionCreators(changePair, dispatch),
	// setPairs: bindActionCreators(setPairs, dispatch),
	// setPairsData: bindActionCreators(setPairsData, dispatch),
	// setCurrencies: bindActionCreators(setCurrencies, dispatch),
	// setConfig: bindActionCreators(setConfig, dispatch),
	// setValidBaseCurrency: bindActionCreators(setValidBaseCurrency, dispatch),
	// setOrderLimits: bindActionCreators(setOrderLimits, dispatch),
	// setMe: bindActionCreators(setMe, dispatch),
	changeLanguage: bindActionCreators(setLanguage, dispatch),
	// changeTheme: bindActionCreators(changeTheme, dispatch),
	// requestAvailPlugins: bindActionCreators(requestAvailPlugins, dispatch),
	logout: bindActionCreators(logout, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
