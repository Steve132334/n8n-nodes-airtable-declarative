import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AirtableEnterpriseApi implements ICredentialType {
	name = 'airtableEnterpriseApi';

	displayName = 'Airtable Enterprise API';

	documentationUrl = 'https://airtable.com/developers/web/api/introduction';

	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			description: 'Your Airtable Enterprise API token. Get it from your Airtable account settings under Developer Hub.',
			required: true,
		},
		{
			displayName: 'Workspace ID',
			name: 'workspaceId',
			type: 'string',
			default: '',
			description: 'Your Airtable Workspace ID (required for Enterprise operations). Found in your workspace URL.',
			required: true,
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
				'Content-Type': 'application/json',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.airtable.com/v0',
			url: '/meta/bases',
			method: 'GET',
		},
		rules: [
			{
				type: 'responseSuccessBody',
				properties: {
					key: 'bases',
					value: undefined,
					message: 'Invalid credentials or insufficient permissions for Enterprise API',
				},
			},
		],
	};
}