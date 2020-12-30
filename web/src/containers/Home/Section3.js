import React from 'react';
import classnames from 'classnames';
import STRINGS from '../../config/localizedStrings';

import { FLEX_CENTER_CLASSES } from '../../config/constants';
import CommonButton from '../../components/CommonButton';
import AnimationContainer from '../../components/AnimationContainer';

const Section = ({ style }) => (
	<div
		className={classnames(...FLEX_CENTER_CLASSES, 'section_3')}
		style={style}
	>
		<div className="text-center features-title">
			{STRINGS['HOME.SECTION_3_TITLE']}
		</div>
		<div className="image-desktop">
			<img src="/assets/home/home_desktop.jpg" alt="" />
		</div>

		<AnimationContainer animationType="scale">
			<div className="step-container">
				<div className="step-item">
					<span>{STRINGS['HOME.SECTION_3_CARD_1_TITLE']}</span>
					<p>{STRINGS['HOME.SECTION_3_CARD_1_TEXT']}</p>
				</div>
				<div className="step-item">
					<span>{STRINGS['HOME.SECTION_3_CARD_2_TITLE']}</span>
					<p>{STRINGS['HOME.SECTION_3_CARD_2_TEXT']}</p>
				</div>
				<div className="step-item">
					<span>{STRINGS['HOME.SECTION_3_CARD_3_TITLE']}</span>
					<p>{STRINGS['HOME.SECTION_3_CARD_3_TEXT']}</p>
				</div>
			</div>
			<div className={classnames('buttons-section', ...FLEX_CENTER_CLASSES)}>
				<CommonButton
					className="btn-open-trading-account"
					label={STRINGS['HOME.SECTION_3_BUTTON_LABEL']}
				/>
			</div>
		</AnimationContainer>
	</div>
);

export default Section;
