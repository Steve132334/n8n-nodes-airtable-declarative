# n8n-nodes-airtable-declarative

This is an n8n node developed using the **declarative style** for creating Airtable bases. It provides a simple and straightforward way to create new Airtable bases with predefined structures using JSON templates.

n8n is a fair-code licensed workflow automation platform.

## Features

- **Simple Base Creation:** Create new Airtable bases with a single operation.
- **JSON-Based Structure:** Define your base structure using a simple JSON format.
- **Predefined Templates:** Comes with example templates for common base structures.
- **Enterprise API Support:** Works with Airtable Enterprise API for automated base creation.

## Installation

To use this node, you need to install it manually in your n8n instance.

### Manual Installation

1.  Navigate to your n8n custom nodes directory (usually `~/.n8n/custom/`).
2.  Run the following command:
    ```bash
    npm install n8n-nodes-airtable-declarative
    ```
3.  Restart your n8n instance.

If you are using Docker, you may need to add this installation step to your Dockerfile and rebuild the container for the changes to take effect.

## Usage

This node is designed to be as simple as possible, with just two main inputs:

1.  **Base Name:** The name for your new Airtable base.
2.  **Base Structure:** A JSON template defining your tables and fields.

### Example Base Structure

```json
{
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
}
```

### Supported Field Types

The node supports all standard Airtable field types, including:

- `singleLineText`
- `multilineText`
- `checkbox`
- `singleSelect`
- `multipleSelect`
- `date`
- `number`
- `currency`
- `email`
- `url`
- And more...

## Credentials

To use this node, you need to configure Airtable Enterprise API credentials:

1.  Go to the "Developer Hub" section in your Airtable account settings to generate an **Access Token**.
2.  Get the **Workspace ID** from your Airtable workspace URL.
3.  In n8n, create a new credential of type `Airtable Enterprise API`.
4.  Enter your `Access Token` and `Workspace ID`.

## Quick Start

1.  Add an `Airtable Create` node to your workflow.
2.  Configure the `Airtable Enterprise API` credentials.
3.  Enter a name for your new base.
4.  Use the provided JSON template or paste your own base structure.
5.  Execute the node to create your base.

## Resources

- [Airtable API Documentation](https://airtable.com/developers/web/api/introduction)
- [n8n Documentation](https://docs.n8n.io/)

## License

This project is licensed under the MIT License.
