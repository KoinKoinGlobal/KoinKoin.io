import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isMobile } from 'react-device-detect';
import { Modal as ConfirmationModal } from 'antd';

import ActiveOrders from './ActiveOrders';
import UserTrades from './UserTrades';
import TradeBlockTabs from './TradeBlockTabs';
import LogoutInfoOrder from './LogoutInfoOrder';
import LogoutInfoTrade from './LogoutInfoTrade';
import MobileOrders from '../MobileOrders';
import { cancelOrder, cancelAllOrders } from '../../../actions/orderAction';
import { isLoggedIn } from '../../../utils/token';
import { ActionNotification } from '../../../components';
import STRINGS from '../../../config/localizedStrings';
import withConfig from 'components/ConfigProvider/withConfig';
import { userTradesSelector, activeOrdersSelector } from '../utils';

class OrdersWrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cancelDelayData: [],
		};
	}

	openConfirm = () => {
		ConfirmationModal.confirm({
			content: 'Do you want cancel all orders?',
			okText: 'Yes',
			cancelText: 'No',
			onOk: this.cancelAllOrders,
			onCancel: () => {},
			className: 'trade_cancel-All-confirmation',
		});
	};

	cancelAllOrders = () => {
		let cancelDelayData = [];
		this.props.activeOrders.map((order) => {
			cancelDelayData = [...cancelDelayData, order.id];
			return '';
		});
		this.setState({ cancelDelayData });
		setTimeout(() => {
			this.props.cancelAllOrders(this.props.pair, this.props.settings);
		}, 700);
	};

	handleCancelOrders = (id) => {
		this.setState({ cancelDelayData: this.state.cancelDelayData.concat(id) });
		setTimeout(() => {
			this.props.cancelOrder(id, this.props.settings);
		}, 700);
	};

	render() {
		const {
			pair,
			pairData,
			activeOrders,
			userTrades,
			activeTheme,
			pairs,
			coins,
			discount,
			icons: ICONS,
		} = this.props;
		const { cancelDelayData } = this.state;
		const USER_TABS = [
			{
				stringId: 'ORDERS',
				title: STRINGS['ORDERS'],
				children: isLoggedIn() ? (
					<ActiveOrders
						pairData={pairData}
						cancelDelayData={cancelDelayData}
						orders={activeOrders}
						onCancel={this.handleCancelOrders}
						onCancelAll={this.openConfirm}
					/>
				) : (
					<LogoutInfoOrder activeTheme={activeTheme} />
				),
				titleAction: isLoggedIn() ? (
					<ActionNotification
						stringId="TRANSACTION_HISTORY.TITLE"
						text={STRINGS['TRANSACTION_HISTORY.TITLE']}
						iconId="ARROW_TRANSFER_HISTORY_ACTIVE"
						iconPath={ICONS['ARROW_TRANSFER_HISTORY_ACTIVE']}
						onClick={this.props.goToTransactionsHistory}
						status="information"
					/>
				) : (
					''
				),
			},
			{
				stringId: 'RECENT_TRADES',
				title: STRINGS['RECENT_TRADES'],
				children: isLoggedIn() ? (
					<UserTrades
						pageSize={10}
						trades={userTrades}
						pair={pair}
						pairData={pairData}
						pairs={pairs}
						coins={coins}
						discount={discount}
					/>
				) : (
					<LogoutInfoTrade />
				),
				titleAction: isLoggedIn() ? (
					<ActionNotification
						stringId="TRANSACTION_HISTORY.TITLE"
						text={STRINGS['TRANSACTION_HISTORY.TITLE']}
						iconId="ARROW_TRANSFER_HISTORY_ACTIVE"
						iconPath={ICONS['ARROW_TRANSFER_HISTORY_ACTIVE']}
						onClick={this.props.goToTransactionsHistory}
						status="information"
					/>
				) : (
					''
				),
			},
		];
		if (isMobile) {
			return (
				<MobileOrders
					isLoggedIn={isLoggedIn()}
					activeOrders={activeOrders}
					cancelOrder={this.handleCancelOrders}
					cancelDelayData={cancelDelayData}
					cancelAllOrders={this.cancelAllOrders}
					goToTransactionsHistory={this.props.goToTransactionsHistory}
					pair={pair}
					pairData={pairData}
					pairs={pairs}
					coins={coins}
					userTrades={userTrades}
					activeTheme={activeTheme}
				/>
			);
		}
		return <TradeBlockTabs content={USER_TABS} />;
	}
}

OrdersWrapper.defaultProps = {
	activeOrders: [],
	userTrades: [],
};

const mapStateToProps = (state) => ({
	activeOrders: activeOrdersSelector(state),
	userTrades: userTradesSelector(state),
	settings: state.user.settings,
});

const mapDispatchToProps = (dispatch) => ({
	cancelOrder: bindActionCreators(cancelOrder, dispatch),
	cancelAllOrders: bindActionCreators(cancelAllOrders, dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(withConfig(OrdersWrapper));
