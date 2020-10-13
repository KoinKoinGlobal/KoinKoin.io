import React from 'react';
import { Link } from 'react-router';
import { isMobile } from 'react-device-detect';

import { CurrencyBall, ActionNotification, SearchBox, AssetsBlockForm, EditWrapper } from 'components';
import { calculatePrice, formatToCurrency } from 'utils/currency';
import STRINGS from 'config/localizedStrings';
import {
  BASE_CURRENCY,
  CURRENCY_PRICE_FORMAT,
  DEFAULT_COIN_DATA,
  IS_XHT
} from 'config/constants';
import withConfig from 'components/ConfigProvider/withConfig';

const AssetsBlock = ({
	balance,
	prices,
	coins,
	pairs,
	totalAssets,
	wallets,
	onOpenDialog,
	bankaccount,
	navigate,
	isValidBase,
	openContactUs,
	handleSearch,
	searchResult,
 	handleCheck,
	icons: ICONS,
}) => {

	const sortedSearchResults = Object.entries(searchResult)
    .filter(([key]) => balance.hasOwnProperty(`${key}_balance`))
    .sort(([key_a], [key_b]) => {
      const price_a = calculatePrice(balance[`${key_a}_balance`], key_a);
      const price_b = calculatePrice(balance[`${key_b}_balance`], key_b);
      return price_a < price_b ? 1 : -1 // descending order
    })

	const findPair = (key) => {
    let tempPair
		const defaultPair = `${key.toLowerCase()}-${BASE_CURRENCY.toLowerCase()}`
		if (isMarketAvailable(defaultPair)) {
			return defaultPair;
    }

    tempPair = findPairByPairBase(key);
		if (tempPair) return tempPair;

		tempPair = findPairByPair2(key);
		if (tempPair) return tempPair;
	}

	const isMarketAvailable = (pair) => {
		return pair && pairs[pair] && pairs[pair].active
	}

	const findPairByPairBase = (key) => {
    const availableMarketsArray = [];

    Object.keys(pairs).map(pairKey => {
			const pairObject = pairs[pairKey];

      if (pairObject && pairObject.pair_base === key && isMarketAvailable(pairKey)) {
        availableMarketsArray.push(pairKey)
      }

      return pairKey;
    });

    return availableMarketsArray[0];
	}

  const findPairByPair2 = (key) => {
    const availableMarketsArray = [];

    Object.keys(pairs).map(pairKey => {
      const pairObject = pairs[pairKey];

      if (pairObject && pairObject.pair_2 === key && isMarketAvailable(pairKey)) {
        availableMarketsArray.push(pairKey)
      }

      return pairKey;
    });

    return availableMarketsArray[0];
  }

  const goToTrade = (pair) => {
		if (pair) {
      return navigate(`/trade/${pair}`)
		}
	}

	return (
		<div className="wallet-assets_block">
			<section className="ml-4 pt-4">
				<EditWrapper stringId="WALLET_DEPOSIT_USD,CONTACT_US_TEXT,WALLET_ESTIMATED_TOTAL_BALANCE">
					<div className="wallet-search-improvement">
            {
              BASE_CURRENCY && IS_XHT
                ? <div>
                  {STRINGS.formatString(
                    STRINGS["WALLET_DEPOSIT_USD"],
										<span className="blue-link pointer" onClick={openContactUs}>{STRINGS["CONTACT_US_TEXT"]}</span>
                  )}
								</div>
                : BASE_CURRENCY && isValidBase ?
								<div>
									<div>{STRINGS["WALLET_ESTIMATED_TOTAL_BALANCE"]}</div>
									<div className="font-title">{totalAssets}</div>
								</div>
                : null
            }
					</div>
				</EditWrapper>
				<div className="d-flex justify-content-between">
					<EditWrapper stringId="WALLET_ASSETS_SEARCH_TXT">
						<SearchBox
							name="search-assets"
							placeHolder={`${STRINGS["WALLET_ASSETS_SEARCH_TXT"]}...`}
							handleSearch={handleSearch}
						/>
					</EditWrapper>
					<EditWrapper stringId="WALLET_HIDE_ZERO_BALANCE">
						<AssetsBlockForm
							label={STRINGS["WALLET_HIDE_ZERO_BALANCE"]}
							handleCheck={handleCheck}
						/>
					</EditWrapper>
				</div>
			</section>
			<table className="wallet-assets_block-table">
				<thead>
				<tr className="table-bottom-border">
					<th />
					<th>
						<EditWrapper stringId="CURRENCY">
              {STRINGS["CURRENCY"]}
						</EditWrapper>
					</th>
					<th>
						<EditWrapper stringId="AMOUNT">
              {STRINGS["AMOUNT"]}
						</EditWrapper>
					</th>
					<th className="td-amount" />
					<th>
						<EditWrapper stringId="DEPOSIT_WITHDRAW,WALLET_BUTTON_BASE_DEPOSIT,WALLET_BUTTON_BASE_WITHDRAW,GENERATE_WALLET">
              {STRINGS["DEPOSIT_WITHDRAW"]}
						</EditWrapper>
					</th>
					{!isMobile && (
						<th>
							<EditWrapper stringId="TRADE_TAB_TRADE">
                {STRINGS["TRADE_TAB_TRADE"]}
							</EditWrapper>
						</th>
					)}
				</tr>
				</thead>
				<tbody>
        {sortedSearchResults.map(([key, { min, allow_deposit, allow_withdrawal }]) => {
            const balanceValue = balance[`${key}_balance`];
            const pair = findPair(key);
            const { fullname, symbol = '' } = coins[key] || DEFAULT_COIN_DATA;
            const baseCoin = coins[BASE_CURRENCY] || DEFAULT_COIN_DATA;
            const balanceText =
              key === BASE_CURRENCY
                ? formatToCurrency(balanceValue, min)
                : formatToCurrency(
                calculatePrice(balanceValue, key),
                baseCoin.min
                );
            return (
							<tr className="table-row table-bottom-border" key={key}>
								<td className="table-icon td-fit">
									<Link to={`/wallet/${key.toLowerCase()}`}>
										<CurrencyBall
											name={symbol.toUpperCase()}
											symbol={key}
											size="s"
										/>
									</Link>
								</td>
								<td className="td-name td-fit">
									<Link to={`/wallet/${key.toLowerCase()}`}>{fullname}</Link>
								</td>
								<td className="td-amount">
									<div className="d-flex">
										<div className="mr-4">
                      {STRINGS.formatString(
                        CURRENCY_PRICE_FORMAT,
                        formatToCurrency(balanceValue, min, true),
                        symbol.toUpperCase()
                      )}
										</div>
                    {!isMobile &&
                    key !== BASE_CURRENCY &&
                    parseFloat(balanceText || 0) > 0 && (
											<div>
                        {`(≈ ${baseCoin.symbol.toUpperCase()} ${balanceText})`}
											</div>
                    )}
									</div>
								</td>
								<th className="td-amount" />
								<td className="td-wallet">
                  {wallets[key] ? (
										<div className="d-flex justify-content-between deposit-withdrawal-wrapper">
											<ActionNotification
												text={STRINGS["WALLET_BUTTON_BASE_DEPOSIT"]}
												iconPath={ICONS.BLUE_PLUS}
												onClick={() => navigate(`wallet/${key}/deposit`)}
												useSvg={true}
												className="csv-action"
												showActionText={isMobile}
												disable={!allow_deposit}
											/>
											<ActionNotification
												text={STRINGS["WALLET_BUTTON_BASE_WITHDRAW"]}
												iconPath={ICONS.BLUE_PLUS}
												onClick={() => navigate(`wallet/${key}/withdraw`)}
												useSvg={true}
												className="csv-action"
												showActionText={isMobile}
												disable={!allow_withdrawal}
											/>
										</div>
                  ) : (
										<div className="d-flex justify-content-between deposit-withdrawal-wrapper">
											<ActionNotification
												text={STRINGS["GENERATE_WALLET"]}
												status="information"
												iconPath={ICONS.BLUE_PLUS}
												onClick={() => onOpenDialog(key)}
												className="need-help"
												useSvg={true}
												showActionText={isMobile}
												disable={!allow_deposit}
											/>
										</div>
                  )}
								</td>
								{
									!isMobile && <td>
									<ActionNotification
										text={STRINGS["TRADE_TAB_TRADE"]}
										iconPath={ICONS.BLUE_PLUS}
										onClick={() => goToTrade(pair)}
										useSvg={true}
										className="csv-action"
										showActionText={isMobile}
										disable={!isMarketAvailable(pair)}
									/>
								</td>
								}
							</tr>
            );
          })}
				</tbody>
			</table>
		</div>
  );
}

export default withConfig(AssetsBlock);