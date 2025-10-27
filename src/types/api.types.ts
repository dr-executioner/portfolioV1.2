import { AxiosResponse } from "axios";

export interface ApiResponse<T = unknown> {
  data: T;
  status: number;
  statusText: string;
  headers: AxiosResponse["headers"];
}

export interface AnalyseRequest {
  text: string;
}
export interface SentimentData {
  content: string;
  summary: string;
  tags: string[];
  name: string | null;
  email: string | null;
  phone : string | null
  purpose: string;
  sentiment: "positive" | "negative" | "neutral";
}

export interface SentimentResponse {
  sentiment: SentimentData;
}
