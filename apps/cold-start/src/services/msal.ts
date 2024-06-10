import * as msal from "@azure/msal-node";
const client_id = process.env.AZURE_ENTRA_ID_CLIENT_ID;
const tenant = process.env.AZURE_ENTRA_ID_TENANT_ID;

const msalConfig = {
  auth: {
    clientId: client_id,
    authority: `https://login.microsoftonline.com/${tenant}`,
    clientSecret: process.env.AZURE_ENTRA_ID_SECRET,
  },
  system: {
    loggerOptions: {
      piiLoggingEnabled: false,
      logLevel: msal.LogLevel.Info,
    },
  },
};

export const pca = new msal.ConfidentialClientApplication(msalConfig);
