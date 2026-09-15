import dotenv from "dotenv";

dotenv.config();

export const DATABASE_URL: string = process.env.DATABASE_URL || "";

export const SECRET: string = process.env.SECRET || "";

export const EMAIL_SMTP_SECURE: boolean = Boolean(process.env.EMAIL_SMTP_SECURE) || false;
export const EMAIL_SMTMP_PASS: string = process.env.EMAIL_SMTMP_PASS || "";
export const EMAIL_SMTMP_USER: string = process.env.EMAIL_SMTMP_USER || "";
export const EMAIL_SMTMP_PORT: number = Number(process.env.EMAIL_SMTMP_PORT) || 465;
export const EMAIL_SMTMP_HOST = process.env.EMAIL_SMTMP_HOST || "";
export const EMAIL_SMTMP_SERVICE_NAME = process.env.EMAIL_SMTMP_SERVICE_NAME || "Zoho";