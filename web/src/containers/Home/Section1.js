import React from 'react';
import classnames from 'classnames';
import { browserHistory } from 'react-router';
import STRINGS from '../../config/localizedStrings';
import { FLEX_CENTER_CLASSES } from '../../config/constants';
import CommonButton from '../../components/CommonButton';
import OrderForm from '../../components/OrderForm';

const Section1 = ({ style = {},
	onClickScrollTo = () => {},
	onClickLearnMore,
	token,
	icons: ICONS,
}) => {
	const renderSocialLinkBar = () => {
		if (constants.links) {
			const {
				facebook,
				github,
				instagram,
				linkedin,
				youtube,
				twitter,
			} = constants.links.section_6
				? constants.links.section_6.content
				: constants.links;
			return (
				<nav>
					<ul>
						<li>
							<a className="social-link" href={facebook}>
								<img
									className="social-icon"
									src={icons['SOCIAL_FACEBOOK']}
									alt="facebook_icon"
								/>
								<span>Facebook</span>
							</a>
						</li>
						<li>
							<a className="social-link" href={twitter}>
								<img
									className="social-icon"
									src={icons['SOCIAL_TWITTER']}
									alt="twitter_icon"
								/>
								<span>Twitter</span>
							</a>
						</li>
						<li>
							<a className="social-link" href={instagram}>
								<img
									className="social-icon"
									src={icons['SOCIAL_INSTAGRAM_PNG']}
									alt="instagram_icon"
								/>
								<span>Instagram</span>
							</a>
						</li>
						<li>
							<a className="social-link" href={linkedin}>
								<img
									className="social-icon"
									src={icons['SOCIAL_LINKEDIN']}
									alt="linkedin_icon"
								/>
								<span>Linkedin</span>
							</a>
						</li>
						<li>
							<a className="social-link" href={github}>
								<img
									className="social-icon"
									src={icons['SOCIAL_GITHUB']}
									alt="github_icon"
								/>
								<span>Github</span>
							</a>
						</li>
						<li>
							<a className="social-link" href={youtube}>
								<img
									className="social-icon"
									src={icons['SOCIAL_YOUTUBE']}
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
				<div className={classnames('f-1', ...FLEX_CENTER_CLASSES, 'flex-column')}>
					<div className="home-title text-capitalize">
						{STRINGS['HOME.SECTION_1_TITLE']}
					</div>
					<div className="text-section text-center">
						<div>{STRINGS['HOME.SECTION_1_TEXT_1']}</div>
						<div>{STRINGS['HOME.SECTION_1_TEXT_2']}</div>
					</div>
					<div className={classnames('buttons-section', ...FLEX_CENTER_CLASSES)}>
						<div
							className={classnames(...BUTTONS_CLASSES, {
								pointer: onClickLearnMore,
							})}
							onClick={onClickLearnMore}
						>
							{STRINGS['HOME.SECTION_1_BUTTON_1']}
						</div>
						{/*!token && (
						<div
							className={classnames(...BUTTONS_CLASSES, 'contrast', {
								pointer: onClickRegister
							})}
							onClick={onClickRegister}
						>
							{STRINGS["REGISTER_TEXT"]}
						</div>
					)*/}
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
		</div>
	);
};

export default Section1;
