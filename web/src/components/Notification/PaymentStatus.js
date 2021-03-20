import React from 'react';
import { NotificationWraper, NotificationContent } from './Notification';
import { EditWrapper } from 'components';
import { ICONS } from '../../config/constants';

const getTitleAndIcon = (type) => {
	const data = {
		iconId: '',
		stringId: '',
		icon: '',
		title: '',
	};

	if (type === 'fail') {
		data.iconId = 'VERIFICATION_WARNING';
		data.icon = ICONS.NOTIFICATION_VERIFICATION_WARNING;
		// data.title = STRINGS['VERIFICATION_NOTIFICATION_SKIP_TITLE'];
		data.title = 'Payment Failed';
	} else if (type === 'success') {
		data.iconId = 'VERIFICATION_SUCCESS';
		data.icon = ICONS['VERIFICATION_SUCCESS'];
		// data.title = STRINGS['VERIFICATION_NOTIFICATION_SUCCESS_TITLE'];
		data.title = 'Payment Success';
	}

	return data;
};

const PaymentStatus = ({ data: { status, message } }) => {
	const notificationProps = getTitleAndIcon(status);
	return (
		<NotificationWraper
			{...notificationProps}
			className="notification_verification"
		>
			<NotificationContent>
				<EditWrapper
					stringId={
						status === 'skip'
							? 'VERIFICATION_NOTIFICATION_SKIP_TEXT'
							: 'VERIFICATION_NOTIFICATION_SUCCESS_TEXT'
					}
				>
					{message}
				</EditWrapper>
			</NotificationContent>
		</NotificationWraper>
	);
};

export default PaymentStatus;
