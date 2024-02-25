/// <reference types="vite/client" />
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_SERVER_URL: string;
  readonly VITE_APP_CLIENT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
