// mdm

import { prisma } from "../../prisma";
import { FeedbackRepository, FeedbackData } from "../Feedback-repository";
export default class PrismaFeedbackRepository implements FeedbackRepository {
  async create({ type, comment, screenshot }: FeedbackData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot
      },
    });
  }
}
