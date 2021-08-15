# loopback4-connector-firebase-admin

Firebase Admin connector for the LoopBack framework.

## System Requirements

- **[NodeJS](https://nodejs.org/en/)** (version >= 10).

## Installation

If you want to know how to get started with Loopback [check this][5].

To add a new data source, use the data source generator:

```sh
lb4 datasource
```

Then the data source generator will prompt some questions like

- Enter the data-source name: **Firebase**
- Select the connector for Firebase: **other**
- Enter the connector's module name **loopback4-connector-firebase-admin**
- Install loopback4-connector-firebase-admin (Y/n) **y**

Then you should use a service account. Go to [Project Settings > Service Accounts][4] in the Google Cloud Platform Console. Generate a new private key and save the JSON file.

You should fill the application's datasource file which is located in `/server/datasources.json` with those details, You can find them in the downloaded JSON file from the Google Cloud Platform.

```json
"Firebase": {
  "name": "Firebase",
  "projectId": "",
  "clientEmail":  "",
  "privateKey": "",
  "databaseURL": ""
}
```

### Connection properties

| Property     | Type&nbsp;&nbsp; | Description                   | ---                          |
| ------------ | ---------------- | ----------------------------- | ---------------------------- |
| projectId    | String           | project_id in the JSON file   | ---                          |
| clientEmail  | String           | client_email in the JSON file | ---                          |
| privateKey   | String           | private_key in the JSON file  | ---                          |
| databaseURL  | String           | realtime database url         | ---                          |

And you can actually store those private details as an Environment variables, Check [source-configuration][6]
