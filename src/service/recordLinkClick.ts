import { record } from 'aws-amplify/analytics';

export const recordLinkClick = (linkName: string) => {
	record({
		name: 'LinkClick',
		attributes: {
			name: linkName,
		},
	})
}
