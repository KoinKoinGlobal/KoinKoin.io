import React, { useState } from 'react';
import ReactSVG from 'react-svg';
import OutsideAlerter from './OutsideAlerter';
import PropTypes from 'prop-types';
import classes from './style.module.scss';

import withConfig from 'components/ConfigProvider/withConfig';

const SelectSearchBox = (props) => {
	const icons = props.icons;
	const { options, onChange, value, type } = props;
	const [crytoDropdownListOpen, setCrytoDropdownListOpen] = useState(false);

	const openSelectbox = () => {
		setCrytoDropdownListOpen(!crytoDropdownListOpen);
	};

	const closeSelectBox = () => {
		setCrytoDropdownListOpen(false);
	};

	const onSelectItem = (item) => {
		onChange(item);
		setCrytoDropdownListOpen(false);
	};

	const renderOptions = () => {
		const arr = [];

		options.forEach((element, i) => {
			const symbol = element.symbol.toUpperCase();

			if (type === 'cryto') {
				if (element.isCryto) {
					arr.push(
						<div
							key={i}
							className={classes.dropdownListItem}
							onClick={() => {
								onSelectItem(element);
							}}
						>
							<div className="coin-price-container">
								<ReactSVG path={element.icon} wrapperClassName="coin-price" />
							</div>
							<div className="cryto-symbol">{symbol}</div>
						</div>
					);
				}
			}
			if (type === 'cash') {
				if (!element.isCryto) {
					console.log('cash element', element);
					arr.push(
						<div
							key={i}
							className={classes.dropdownListItem}
							onClick={() => {
								onSelectItem(element);
							}}
						>
							<div className="coin-price-container">
								<ReactSVG
									path={icons[`${symbol}_ICON`]}
									wrapperClassName="coin-price"
								/>
							</div>
							<div className="cryto-symbol">{symbol}</div>
						</div>
					);
				}
			}
		});

		return arr;
	};

	let currentSymbol = '';
	if (value) {
		currentSymbol = value.symbol.toUpperCase();
	}
	return (
		<div
			className="select-search-box"
			style={{ height: '35.05px', display: 'flex', alignItems: 'center' }}
		>
			<OutsideAlerter onClickOutSide={closeSelectBox}>
				<div className="select-search-box-btn" onClick={openSelectbox}>
					<div className="coin-price-container">
						{currentSymbol ? (
							<ReactSVG
								path={icons[`${currentSymbol}_ICON`]}
								wrapperClassName="coin-price"
							/>
						) : null}
					</div>
					<div className="cryto-symbol">{currentSymbol}</div>
					<span className="arrow-down"></span>
				</div>
				{crytoDropdownListOpen && (
					<div className="dropdown-list">{renderOptions()}</div>
				)}
			</OutsideAlerter>
		</div>
	);
};

SelectSearchBox.propTypes = {
	options: PropTypes.array.isRequired,
	onChange: PropTypes.func,
	value: PropTypes.object,
	type: PropTypes.string,
};

SelectSearchBox.defaultProps = {
	options: [],
	onChange: () => {},
	type: 'cryto',
};

export default withConfig(SelectSearchBox);
