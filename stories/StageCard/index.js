import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import StageCard from '../../src/StageCard';

import CartAbandonImage from './images/cart-abandon.png';
import BrowseAbandonImage from './images/browse-abandon.png';
import FollowUpImage from './images/follow-up.png';
import PriceDropImage from './images/price-drop.png';
import BirthdayImage from './images/birthday.png';
import AnniversaryImage from './images/anniversary.png';
import AtRiskOfLeavingImage from './images/at-risk-of-leaving.png';
import ChurnedFromYourBusiness from './images/churned-from-your-business.png';

storiesOf('StageCard', module)
	.add('Cart Abandon', 
		() => <StageCard
				title="Cart Abandon"
				color="#191C87"
				icon={`url(${CartAbandonImage})`}
				activeCount={4}
				pendingCount={0}
				draftCount={6}
				tooltip="Test"
				activeOnClick={action('activeOnClick')}
				draftOnClick={action('draftOnClick')}
				manageTemplateOnClick={action('manageTemplateOnClick')}
				/>)
	.add('Browse Abandon', 
		() => <StageCard
				title="Browse Abandon"
				color="#191C87"
				icon={`url(${BrowseAbandonImage})`}
				activeCount={4}
				pendingCount={0}
				draftCount={6}
				tooltip="Test"
				activeOnClick={action('activeOnClick')}
				draftOnClick={action('draftOnClick')}
				manageTemplateOnClick={action('manageTemplateOnClick')}
				/>)
	.add('Follow Up', 
		() => <StageCard
				title="Follow Up"
				color="#191C87"
				icon={`url(${FollowUpImage})`}
				tooltip="Test"
				manageTemplateOnClick={action('manageTemplateOnClick')}
				/>)
	.add('Price Drop', 
		() => <StageCard
				title="Price Drop"
				color="#EABE00"
				icon={`url(${PriceDropImage})`}
				activeCount={4}
				pendingCount={0}
				draftCount={6}
				tooltip="Test"
				activeOnClick={action('activeOnClick')}
				draftOnClick={action('draftOnClick')}
				manageTemplateOnClick={action('manageTemplateOnClick')}
				/>)
	.add('Birthday', 
		() => <StageCard
				title="Birthday"
				color="#77BFD2"
				icon={`url(${BirthdayImage})`}
				tooltip="Test"
				manageTemplateOnClick={action('manageTemplateOnClick')}
				/>)
	.add('Anniversary', 
		() => <StageCard
				title="Anniversary"
				color="#77BFD2"
				icon={`url(${AnniversaryImage})`}
				activeCount={4}
				pendingCount={0}
				draftCount={6}
				tooltip="Test"
				activeOnClick={action('activeOnClick')}
				draftOnClick={action('draftOnClick')}
				manageTemplateOnClick={action('manageTemplateOnClick')}
				/>)
	.add('At Risk Of Leaving', 
		() => <StageCard
				title="At Risk Of Leaving"
				color="#AF2BA7"
				icon={`url(${AtRiskOfLeavingImage})`}
				activeCount={4}
				pendingCount={0}
				draftCount={6}
				tooltip="Test"
				activeOnClick={action('activeOnClick')}
				draftOnClick={action('draftOnClick')}
				manageTemplateOnClick={action('manageTemplateOnClick')}
				/>)
	.add('Churned From Your Business', 
		() => <StageCard
				title="Churned From Your Business"
				color="#AF2BA7"
				icon={`url(${ChurnedFromYourBusiness})`}
				activeCount={4}
				pendingCount={0}
				draftCount={6}
				tooltip="Test"
				activeOnClick={action('activeOnClick')}
				draftOnClick={action('draftOnClick')}
				manageTemplateOnClick={action('manageTemplateOnClick')}
				/>)
	;
