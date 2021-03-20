import React from 'react';
import classnames from 'classnames';
// import STRINGS from '../../config/localizedStrings';

import { FLEX_CENTER_CLASSES } from '../../config/constants';

// import YouTube from 'react-youtube';
import AnimationContainer from '../../components/AnimationContainer';

const Section7 = ({ style = {} }) => {
	return (
		<div
			className={classnames(
				...FLEX_CENTER_CLASSES,
				'flex-column',
				'section_7',
				'p-5'
			)}
			style={style}
		>
			<div className={classnames('f-1', ...FLEX_CENTER_CLASSES, 'flex-column')}>
				<AnimationContainer>
					<div className={'section-detail-item'}>
						<div className="combine-wallet d-flex justify-content-center mt-5">
							<img src="assets/home/shield-wallet.png" alt=""></img>
						</div>
						<div>
							<h2 className="font-weight-bold mt-5 mb-0 text-center">
								CRYPTOINSURANCE AGAINST LOSS/THEFT/HACKING - COMING SOON
							</h2>
							<h2 className="lead text-muted text-center">
								Insure all your cryptoassets/coins - transfer all funds to us
								today
							</h2>
						</div>
					</div>
				</AnimationContainer>
			</div>
		</div>
	);
};

export default Section7;
