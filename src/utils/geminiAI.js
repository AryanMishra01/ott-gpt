import { API_KEY } from "./constants";
import {GoogleGenerativeAI } from "@google/generative-ai"

//const { GoogleGenerativeAI } = require("@google/generative-ai");

export const genAI = new GoogleGenerativeAI(API_KEY);

const geminiModel = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export default geminiModel;