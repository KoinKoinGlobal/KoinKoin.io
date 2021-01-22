import React from 'react';
import classnames from 'classnames';
import { browserHistory } from 'react-router';

import { ReactSVG } from 'react-svg';
import STRINGS from '../../config/localizedStrings';

import { FLEX_CENTER_CLASSES } from '../../config/constants';
import CommonButton from '../../components/CommonButton';
import OrderForm from '../../components/OrderForm';
import ICONS from 'config/icons';
import { getTheme } from 'utils/theme';

const Section1 = ({ style = {}, constants }) => {
	const renderSocialLinkBar = () => {
		if (constants.links) {
			const {
				facebook,
				github,
				instagram,
				linkedin,
				youtube,
				twitter,
			} = constants.links;
			console.log('icons', ICONS);
			const current_theme = getTheme();

			return (
				<nav>
					<ul>
						<li>
							<a className="social-link" href={facebook}>
								<img
									className="social-icon"
									src={ICONS[current_theme]['SOCIAL_FACEBOOK']}
									alt="facebook_icon"
								/>
								<span>Facebook</span>
							</a>
						</li>
						<li>
							<a className="social-link" href={twitter}>
								<img
									className="social-icon"
									src={ICONS[current_theme]['SOCIAL_TWITTER']}
									alt="twitter_icon"
								/>
								<span>Twitter</span>
							</a>
						</li>
						<li>
							<a className="social-link" href={instagram}>
								<img
									className="social-icon"
									src={ICONS[current_theme]['SOCIAL_INSTAGRAM_PNG']}
									alt="instagram_icon"
								/>
								<span>Instagram</span>
							</a>
						</li>
						<li>
							<a className="social-link" href={linkedin}>
								<img
									className="social-icon"
									src={ICONS[current_theme]['SOCIAL_LINKEDIN']}
									alt="linkedin_icon"
								/>
								<span>Linkedin</span>
							</a>
						</li>
						<li>
							<a className="social-link" href={github}>
								<img
									className="social-icon"
									src={ICONS[current_theme]['SOCIAL_GITHUB']}
									alt="github_icon"
								/>
								<span>Github</span>
							</a>
						</li>
						<li>
							<a className="social-link" href={youtube}>
								<img
									className="social-icon"
									src={ICONS[current_theme]['SOCIAL_YOUTUBE']}
									alt="youtube_icon"
								/>
								<span>Youtube</span>
							</a>
						</li>
					</ul>
				</nav>
			);
		} else {
			return null;
		}
	};

	const onClickSignupBtn = () => {
		browserHistory.push('/signup');
	};

	return (
		<div>
			{renderSocialLinkBar()}
			<div
				className={classnames(
					...FLEX_CENTER_CLASSES,
					'flex-column',
					'section_1-content'
				)}
				style={style}
			>
				<video src="assets/video/video.m4v" autoPlay loop muted></video>
				<div
					className={classnames(
						'f-1',
						...FLEX_CENTER_CLASSES,
						'flex-column',
						'content'
					)}
					style={{ width: '100%' }}
				>
					<div className="home-title text-capitalize">
						{STRINGS['HOME.SECTION_1_TITLE']}
					</div>
					<div className="text-section text-center">
						<div>{STRINGS['HOME.SECTION_1_TEXT_1']}</div>
						<div>{STRINGS['HOME.SECTION_1_TEXT_2']}</div>
					</div>
					<CommonButton
						className="btn-open-trading-account"
						label={STRINGS['HOME.SECTION_1_BUTTON_LABEL']}
						onClick={onClickSignupBtn}
					/>
					<OrderForm />
				</div>
			</div>
			<EditWrapper iconId="ARROW_ARROW">
				<div
					className={classnames('pointer', 'flex-0', 'scroll-button')}
					onClick={onClickScrollTo}
				>
					<ReactSVG src={ICONS['ARROW_ARROW']} />
				</div>
			</EditWrapper>
		</div>
	);
};

export default Section1;
