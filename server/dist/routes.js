"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = require("express");
const prisma_repository_1 = __importDefault(require("./repositories/prisma/prisma-repository"));
const nodemailer_mail_adapter_1 = require("./adapters/nodemailer/nodemailer-mail-adapter");
const submit_feedback_usecase_1 = require("./use-cases/submit-feedback-usecase");
const route = (0, express_1.Router)();
exports.route = route;
route.post("/feedbacks", async (req, res) => {
    const { type, screenshot, comment } = req.body;
    const PrismaFeedbackRepository = new prisma_repository_1.default();
    const nodemailerMailAdapter = new nodemailer_mail_adapter_1.NodemailerMailAdapter();
    const feedback = new submit_feedback_usecase_1.SubmitFeedback(PrismaFeedbackRepository, nodemailerMailAdapter);
    feedback.execute({ type, screenshot, comment });
    res.status(201).send();
});
