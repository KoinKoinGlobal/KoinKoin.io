import React from 'react';
import classnames from 'classnames';
import { browserHistory } from 'react-router';
// import STRINGS from '../../config/localizedStrings';

import { FLEX_CENTER_CLASSES } from '../../config/constants';
import CommonButton from '../../components/CommonButton';

import YouTube from 'react-youtube';
import AnimationContainer from '../../components/AnimationContainer';
import { isMobile } from 'react-device-detect';

const Section4 = ({ style = {} }) => {
	const onClickSignUpBtn = () => {
		browserHistory.push('/signup');
	};

	const opts = {
		height: isMobile ? '240' : '480',
		width: isMobile ? '426' : '854',
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};

	return (
		<div
			className={classnames(
				...FLEX_CENTER_CLASSES,
				'flex-column',
				'section_4',
				'p-5'
			)}
			style={style}
		>
			<div className="animate-container">
				<img src={'/assets/background-animate-pattern.jpg'} alt="" />
			</div>

			<div className={classnames('f-1', ...FLEX_CENTER_CLASSES, 'flex-column')}>
				<AnimationContainer>
					<div className="my-3">
						<YouTube videoId="juRNOzkJ6Qs" opts={opts} />
					</div>
				</AnimationContainer>

				<AnimationContainer>
					<div className={'section-detail-item'}>
						<div className="home-title text-capitalize">
							NEW BEGINNINGS - BORDERLESS AFRICA
						</div>
						<p className="lead font-weight-bold text-center">
							KoinKoin’s continuing mission is to bolster small businesses and
							empower individuals using blockchain technology
						</p>
						<CommonButton
							className="btn-open-trading-account mt-5"
							label="OPEN TRADING ACCOUNT"
							onClick={onClickSignUpBtn}
						/>

						<div className="mobile-app-icons">
							<img src="/assets/home/mobile_appstore.png" alt="" />
							<img src="/assets/home/mobile_googlestore.png" alt="" />
						</div>
					</div>
				</AnimationContainer>
			</div>
		</div>
	);
};

export default Section4;
