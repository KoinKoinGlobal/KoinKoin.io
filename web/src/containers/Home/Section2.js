import React from 'react';
import { browserHistory } from 'react-router';
import CommonButton from '../../components/CommonButton';
import AnimationContainer from '../../components/AnimationContainer';

const Section2 = ({ style }) => {
	const onClickSignupBtn = () => {
		browserHistory.push('/signup');
	};

	const onClickViewMarketBtn = () => {
		browserHistory.push('/trade/add/tabs');
	};

	return (
		<div className="my-5 section_2 text-dark" style={style}>
			<div className="animate-container">
				<img src={'/assets/background-animate-pattern.jpg'} alt="" />
			</div>
			<AnimationContainer>
				<div className="section-detail-item my-5 py-5">
					<div className="image">
						<img src={'/assets/home/home_box.svg'} alt="" width="150px" />
					</div>
					<div className="title">ENGINEERED WITH THE LATEST TECHNOLOGY</div>
					<p className="lead text-muted">
						Keeping ahead and staying up to date with the very best trading
						technology available
					</p>
					<div className="action-group">
						<CommonButton label="MORE INFO" />
						<CommonButton
							label="SIGN UP"
							onClick={onClickSignupBtn}
							animationEffect={true}
						/>
					</div>
				</div>
			</AnimationContainer>
			<AnimationContainer>
				<div className="section-detail-item my-5 py-5">
					<div className="image">
						<img src={'/assets/home/home_hand.png'} alt="" />
					</div>
					<div className="title">FOR EVERYONE</div>
					<p className="lead text-muted">
						Building a Borderless World Through International Crypto exchange
						trading
					</p>
					<div className="action-group">
						<CommonButton label="MORE INFO" />
					</div>
				</div>
			</AnimationContainer>
			<AnimationContainer>
				<div className="section-detail-item my-5 py-5">
					<div className="image">
						<img src={'/assets/home/home_search.png'} width="200px" alt="" />
					</div>
					<div className="title">BEST LIQUIDITY</div>
					<p className="lead text-muted">
						Trade your local currencies against BTC and other major crypto
						assets
					</p>
					<div className="action-group">
						<CommonButton label="VIEW MARKET" onClick={onClickViewMarketBtn} />
					</div>
				</div>
			</AnimationContainer>

			<AnimationContainer>
				<div className="section-detail-item my-5 py-5">
					<div className="title" style={{ fontSize: '24px' }}>
						KoinKoin Fiat Partners
					</div>
					<div className="supported-cards-row m-5 d-flex col-md-9 col-sm-12">
						<div className="supported-card-item">
							<div className="logo">
								<img src={'/assets/home/paystack.png'} alt="" />
							</div>
							<p className="lead text-center">
								Paystack provides us with a modern, frictionless, payment
								process. Our integration with paystack allows you to painlessly
								deposit your currency whilst keeping your financial details
								highly secure. Your payments are automatically routed through
								the most optimal channels, ensuring the highest transaction
								success rates in the market.
							</p>
						</div>
						<div className="supported-card-item">
							<div className="logo">
								<img
									src={'/assets/home/koinal.png'}
									style={{ width: '60%' }}
									alt=""
								/>
							</div>
							<p className="lead text-center">
								Koinal provides you with 24/7 instant access to Bitcoin,
								Ethereum, Litecoin, Bitcoin Cash and Ripple liquidity. You can
								buy coin instantly with your debit/credit cards and wire
								transfers. With Koinal you'll have a peace of mind - your
								sensitive financial details are never shared with others and
								your payments are protected by sophisticated fraud monitoring
								and advanced encryption.
							</p>
						</div>
						<div className="supported-card-item">
							<div className="logo">
								<img src={'/assets/home/ipaytotal.png'} alt="" />
							</div>
							<p className="lead text-center">
								iPaytotal are a London-based company that take security of your
								money to a very advanced level. They monitor transactions in
								real-time allowing you the peace of mind to make deposits and
								purchase cryptocurrency from any location in the world.
							</p>
						</div>
						<div className="supported-card-item">
							<div className="logo">
								<img src={'/assets/home/flutterwave.png'} alt="" />
							</div>
							<p className="lead text-center">
								KoinKoin has partnered with Flutterwave to create a seamless
								fiat-to-crypto gateway for Africa. Flutterwave provides access
								to numerous regions in Africa allowing our users to take
								advantage of local payment methods to purchase cryptocurrency at
								Lightningfast speeds and over secure channels and gateways.
							</p>
						</div>
					</div>
				</div>
			</AnimationContainer>
		</div>
	);
};

export default Section2;
