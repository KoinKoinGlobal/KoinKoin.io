import React from 'react';
import STRINGS from '../../config/localizedStrings';
import AnimationContainer from '../../components/AnimationContainer';
import Image from 'components/Image';

const LeadingFeatures = () => (
	<div
		className="d-flex justify-content-center align-items-center flex-column text-dark my-5"
		style={{ fontSize: '15px' }}
	>
		<h1 className="display-5 font-weight-bold my-5 text-uppercase">
			KoinKoin Corporate OTC Trading
		</h1>
		<AnimationContainer animationType="scale">
			<div className="d-flex flex-column text-center mt-2 mx-5 px-5">
				<div className="row px-5">
					<div className="col p-5 m-3 shadow-lg bg-white rounded">
						<Image
							icon="/assets/icons/00/handshake-icon.png"
							wrapperClassName="width-50px mb-4"
						></Image>
						<h3>{STRINGS['HOME.SECTION_5_CARD_1_TITLE']}</h3>
						<p className="lead">{STRINGS['HOME.SECTION_5_CARD_1_TEXT']}</p>
					</div>
					<div className="col p-5 m-3 shadow-lg bg-white rounded">
						<Image
							icon="/assets/icons/00/perfermence_icon.png"
							wrapperClassName="width-50px mb-4"
						></Image>
						<h3>{STRINGS['HOME.SECTION_5_CARD_2_TITLE']}</h3>
						<p className="lead">{STRINGS['HOME.SECTION_5_CARD_2_TEXT']}</p>
					</div>
					<div className="col p-5 m-3 shadow-lg bg-white rounded">
						<Image
							icon="/assets/icons/00/dollar-sign.jpg"
							wrapperClassName="width-50px mb-4"
						></Image>
						<h3>{STRINGS['HOME.SECTION_5_CARD_3_TITLE']}</h3>
						<p className="lead">{STRINGS['HOME.SECTION_5_CARD_3_TEXT']}</p>
					</div>
				</div>
				<div className="row px-5">
					<div className="col p-5 m-3 shadow-lg bg-white rounded">
						<Image
							icon="/assets/icons/00/auditable-transactions2.png"
							wrapperClassName="width-50px mb-4"
						></Image>
						<h3>{STRINGS['HOME.SECTION_5_CARD_4_TITLE']}</h3>
						<p className="lead">{STRINGS['HOME.SECTION_5_CARD_4_TEXT']}</p>
					</div>
					<div className="col p-5 m-3 shadow-lg bg-white rounded">
						<Image
							icon="/assets/icons/00/deal-confidentiality.jpg"
							wrapperClassName="width-50px mb-4"
						></Image>
						<h3>{STRINGS['HOME.SECTION_5_CARD_5_TITLE']}</h3>
						<p className="lead">{STRINGS['HOME.SECTION_5_CARD_5_TEXT']}</p>
					</div>
					<div className="col p-5 m-3 shadow-lg bg-white rounded">
						<Image
							icon="/assets/icons/00/certificate-icon.png"
							wrapperClassName="width-50px mb-4"
						></Image>
						<h3>{STRINGS['HOME.SECTION_5_CARD_6_TITLE']}</h3>
						<p className="lead">{STRINGS['HOME.SECTION_5_CARD_6_TEXT']}</p>
					</div>
				</div>
			</div>
		</AnimationContainer>
	</div>
);

export default LeadingFeatures;
