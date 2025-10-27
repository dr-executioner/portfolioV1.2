import { api } from "../api/api";
import { config } from "../config/config";
import { AnalyseRequest, SentimentResponse } from "../types/api.types";

export async function send2Analyser(
  data: AnalyseRequest
): Promise<SentimentResponse> {
  try {
    const analyseResult = await api.post<SentimentResponse>(config.saapi, data);
    return analyseResult;
  } catch (error: any) {
    throw new Error("Error occurred in send2Analyser", { cause: error });
  }
}

export async function sendMail(text: string) {
  try {
    const data = {
      text,
    };
    const response: SentimentResponse = await send2Analyser(data);
    console.log(response);
    const {
      sentiment: { email, name, sentiment, phone },
    } = response;

    // if (!email || !phone) return;
    if (sentiment === "negative") return;

    await api.post(config.mailapi, {
      text,
      email: email || name,
    });
    return { message: "Message sent successfully!", status: "success" };
  } catch (error: any) {
    throw new Error("Error occured", error.message);
  }
}
