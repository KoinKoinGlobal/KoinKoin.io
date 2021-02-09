import React from 'react';
import classnames from 'classnames';
import { isMobile } from 'react-device-detect';
import STRINGS from '../../config/localizedStrings';
// import { PUBLIC_URL } from '../../config/constants';
import withConfig from 'components/ConfigProvider/withConfig';
import Image from 'components/Image';
import withEdit from 'components/EditProvider/withEdit';

const generateSectionsText = (links = {}, ICONS) => {
	let sectionsText = Object.keys(links)
		.filter(
			(sectionKey) =>
				typeof links[sectionKey] === 'object' && links[sectionKey].header
		)
		.map((key) => {
			const section = links[key];
			let heading = Object.keys(section.header)[0];
			return {
				TITLE: section.header[heading],
				LINKS: Object.keys(section.content).map((contentKey) => ({
					text: contentKey,
					link: section.content[contentKey],
				})),
			};
		});

	sectionsText = sectionsText.filter((item) => !!item);
	return sectionsText.map(({ TITLE, LINKS }) => {
		let obj = {
			TITLE,
			LINKS: LINKS.filter((link) => {
				return !!link;
			}),
		};
		return obj;
	});
};

const AppFooter = ({
	className,
	theme,
	constants = { description: '' },
	icons: ICONS,
	isEditMode,
}) => {
	return (
		<div
			className={classnames(
				'app_footer-container',
				'd-flex',
				'flex-column',
				'apply_rtl',
				{ 'deep-footer': isEditMode },
				className
			)}
		>
			<div
				className={classnames(
					'd-flex',
					'justify-content-around',
					'footer-row-content',
					'mx-auto'
				)}
			>
				<div
					className={classnames(
						'd-flex',
						'justify-content-center',
						'align-items-start',
						'footer-links-section'
					)}
				>
					<div
						className={classnames('d-flex', 'flex-1', {
							'flex-column': isMobile,
						})}
					>
						{generateSectionsText(constants.links, ICONS)
							.filter(({ LINKS }) => LINKS.length)
							.map(({ TITLE, LINKS }, index) => (
								<div
									key={index}
									className={classnames(
										'd-flex',
										'flex-column',
										'footer-links-group',
										{ 'mb-3': isMobile }
									)}
								>
									<div className="footer-links-section--title">{TITLE}</div>
									<div
										className={classnames(
											'd-flex',
											'flex-column',
											'footer-links-section--list'
										)}
									>
										{LINKS.map(({ link, text, icon }, indexLink) => (
											<div key={indexLink} className="link-section d-flex">
												<a
													href={link || '#'}
													target="_blank"
													rel="noopener noreferrer"
												>
													<div
														className={classnames('d-flex', 'f-1', 'flex-row')}
													>
														<div>
															{icon ? (
																<img
																	src={icon}
																	className="social_icon"
																	alt="social_icons"
																/>
															) : null}
														</div>
														<span>{text}</span>
													</div>
												</a>
											</div>
										))}
									</div>
								</div>
							))}
						<div className="footer_separter">
							<div className="footer-content">
								<div className="d-flex">
									<Image
										iconId="EXCHANGE_LOGO"
										icon={ICONS['EXCHANGE_LOGO']}
										wrapperClassName="footer-logo"
									/>
								</div>
								<div className="footer-txt">
									{constants.description || ''}
									{/* {STRINGS.formatString(
										STRINGS["FOOTER.XHT_DESCRIPTION"],
										<a
											href={
												'https://info.hollaex.com/hc/en-us/articles/360040098633-What-is-the-Wave-Auction-'
											}
											target="_blank"
											rel="noopener noreferrer"
											className="blue-link pointer"
										>
											{' '}
											{STRINGS["FOOTER.CLICK_HERE"]}{' '}
										</a>,
										<a
											href={'https://bitholla.com/hollaex-kit/'}
											target="_blank"
											rel="noopener noreferrer"
											className="blue-link pointer"
										>
											{STRINGS["FOOTER.VISIT_HERE"]}
										</a>
									)} */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={classnames('footer-row-bottom')}>
				<div className="d-flex my-2" />
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<div>{STRINGS['FOOTER.FOOTER_COPYRIGHT']}</div>
					<div className="logo-group">
						<img src="assets/home/mastercard.png" alt="" />
						<img src="assets/home/visa.png" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

AppFooter.defaultProps = {
	className: '',
	onChangeLanguage: () => () => {},
	activeLanguage: '',
};

export default withEdit(withConfig(AppFooter));
