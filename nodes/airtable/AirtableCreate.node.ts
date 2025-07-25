import type { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class AirtableCreate implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Airtable declarative',
    name: 'airtableCreate',
    icon: 'file:airtable2.svg',
    group: ['productivity'],
    version: 1,
    subtitle: 'Create Airtable Base',
    description: 'A simple declarative node to create an Airtable Base',
    defaults: {
      name: 'Airtable Create',
    },
    inputs: ['main'] as any,
    outputs: ['main'] as any,
    credentials: [
      {
        name: 'airtableEnterpriseApi',
        required: true,
      },
    ],
    requestDefaults: {
      baseURL: 'https://api.airtable.com/v0/meta/bases',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    },
    properties: [
      {
        displayName: 'Base Name',
        name: 'baseName',
        type: 'string',
        required: true,
        default: 'Apartment Hunting',
        description: 'Name of the new base',
      },
      {
        displayName: 'Base Structure',
        name: 'baseStructure',
        type: 'string',
        default: `{
  "tables": [
    {
      "name": "Apartments",
      "description": "A to-do list of places to visit",
      "fields": [
        {
          "name": "Name",
          "type": "singleLineText",
          "description": "Name of the apartment"
        },
        {
          "name": "Address",
          "type": "singleLineText"
        },
        {
          "name": "Visited",
          "type": "checkbox",
          "options": {
            "color": "greenBright",
            "icon": "check"
          }
        }
      ]
    }
  ]
}`,
        description: 'The structure of your base in JSON format',
      },
      {
        displayName: 'Operation',
        name: 'operation',
        type: 'hidden',
        default: 'create',
        routing: {
          request: {
            method: 'POST',
            body: {
              name: '={{$parameter.baseName}}',
              workspaceId: '={{$credentials.workspaceId}}',
              tables: '={{JSON.parse($parameter.baseStructure).tables}}'
            },
          },
        },
      },
    ],
  };
}