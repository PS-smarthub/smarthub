import * as msal from "@azure/msal-node";
const client_id = String(process.env.AZURE_ENTRA_ID_CLIENT_ID);
const tenant = String(process.env.AZURE_ENTRA_ID_TENANT_ID);
const secret = String(process.env.AZURE_ENTRA_ID_SECRET)

const msalConfig = {
  auth: {
    clientId: client_id,
    authority: `https://login.microsoftonline.com/${tenant}`,
    clientSecret: secret,
  },
  system: {
    loggerOptions: {
      piiLoggingEnabled: false,
      logLevel: msal.LogLevel.Info,
    },
  },
};

export const pca = new msal.ConfidentialClientApplication(msalConfig) ;
