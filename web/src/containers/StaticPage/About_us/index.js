import React, { Component } from 'react';

class AboutUs extends Component {
	render() {
		return (
			<main className="inner-page my-5 py-5">
				<div id="hero-inner">
					<div className="container">
						<div className="row align-items-center justify-content-center text-center">
							<div className="col col-12 col-md-10 col-lg-8">
								<h1 className="page-title">About Us</h1>
								<p>
									KoinKoin was created by a team of individuals who are
									passionate about business in Africa & Asia and it is our
									intention to meet as many individual traders across both
									regions at their point of need. Are you a Kenyan completing
									business in Malaysia? Are you a small business buying goods
									from Nigeria? Whatever your need is with regards
									cryptocurrencies and local currencies, KoinKoin is here to
									help!
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="about-page">
					<div className="container">
						<div className="row align-items-center">
							<div className="col col-12 col-md-9">
								<h2 className="text-dark">Our Goal</h2>
								<p>
									KoinKoin’s continuing mission is to bolster small businesses
									and empower individuals using blockchain technology.
								</p>
							</div>
							{/* <div className="col col-12 col-md-3">
                <img src='/assets/images/koin-koin-our-goal.png' alt="koin koin our goal" className="img-fluid" />
              </div> */}
						</div>

						<div className="divider" />

						<div className="row align-items-start">
							<div className="col col-12 col-md-9">
								<h2 className="text-dark"> What Makes KoinKoin Unique?</h2>
								<p>
									We provide a secure, Lightningfast and seamless service at
									very low cost to individuals and small businesses across
									Africa who wish to benefit from the expediency of our
									cryptocurrency exchange services. Our easy to use e-wallet
									services allows you to convert and send your LOCAL currency
									into cryptocurrency which is accepted in many regions all over
									the world as a form of payment for your goods and services or
									for goods and services you wish to purchase from anywhere in
									the world where BTC and other cryptocurrencies are accepted.
									Whilst we aim to please our business customers, the KoinKoin
									platform is also powered to serve cryptocurrency speculators
									and intraday traders who simply wish to BUY, HOLD & TRADE
									cryptocurrencies. The KoinKoin platform provides exchange and
									Lightningfast execution services for an array of African Fiat
									including ZAR, NGN, GHS, UGX and KES as well as South East
									Asian Fiat including VND, MYR, IDR and THB and of course our
									virtual currencies to BTC (BitCoin), ETH (Ethereum), LTC
									(LiteCoin) & XRP (Ripple) with fast deposits and withdrawals.
									We also permit deposits in EUR and USD for those who are not
									based in Africa or South East Asia but wish to transact and
									complete business in these regions.
								</p>
							</div>
							<div className="col col-12 col-md-3">
								<img
									src="/assets/images/unique-koinkoin.png"
									alt="koin koin what makes us unique"
									className="img-fluid d-block mx-auto mr-lg-0 ml-lg-auto"
								/>
							</div>
						</div>

						<div className="divider" />

						<div className="row">
							<div className="col col-12 col-lg-6 text-center">
								<span className="single-image">
									<img
										src="/assets/images/compliance-and-security.png"
										alt="compliance and security"
									/>
								</span>
								<h3 className="mt-3">COMPLIANCE & SECURITY</h3>
								<p>
									KoinKoin is committed to adhering to global financial
									regulations that help prevent, detect and remediate any
									unlawful behaviour with our platform.
								</p>
							</div>
							<div className="col col-12 col-lg-6 text-center">
								<span className="single-image">
									<img
										src="/assets/images/the-future.png"
										alt="compliance and security"
									/>
								</span>
								<h3 className="mt-3">THE FUTURE</h3>
								<p>
									We at KoinKoin believe cryptocurrency is the future and we are
									happy to provide a platform which serves not just Africa but
									all regions that have an active interest in trade within
									Africa and the South East Asian Region.
								</p>
							</div>
							<div className="col col-12 col-lg-6 text-center">
								<span className="single-image">
									<img
										src="/assets/images/get-in-touch.png"
										alt="compliance and security"
									/>
								</span>
								<h3 className="mt-3">GET IN TOUCH</h3>
								<p>
									If you are interested in cooperation or have any suggestions
									for us, drop a message to{' '}
									<a href="mailto:support@koinkoin.io">support@koinkoin.io</a>.
								</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}
}

export default AboutUs;
