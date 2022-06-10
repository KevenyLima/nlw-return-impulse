import { Router } from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";
import prismaFeedbackRepository from "./repositories/prisma/prisma-repository";
import {NodemailerMailAdapter} from "./adapters/nodemailer/nodemailer-mail-adapter"
import { SubmitFeedback } from "./use-cases/submit-feedback-usecase";
const route = Router();



route.post("/feedbacks", async (req, res) => {
  const { type, screenshot, comment } = req.body;
  try {
    const PrismaFeedbackRepository = new prismaFeedbackRepository();
    const nodemailerMailAdapter = new NodemailerMailAdapter();
    const feedback = new SubmitFeedback(PrismaFeedbackRepository,nodemailerMailAdapter);
    feedback.execute({type, screenshot, comment})
    
    res.status(201).send();
  } catch (error) {
    console.log(error)
    res.status(400).json({error})
  }

});

export { route };
