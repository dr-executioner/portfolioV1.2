
interface Config {
  baseUrl: string;
  env: string;
  saapi: string
  mailapi: string
}
export const config: Config = {
  saapi: import.meta.env.VITE_SENTIMENT_ANALYSIS_API || "",
  env: import.meta.env.VITE_NODE_ENV || "development",
  baseUrl: import.meta.env.VITE_BASE_URL || "",
  mailapi: import.meta.env.VITE_SEND_MAIL_API || "",
};
