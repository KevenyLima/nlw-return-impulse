"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitFeedback = void 0;
class SubmitFeedback {
    constructor(feedbackRepository, mailAdapter) {
        this.feedbackRepository = feedbackRepository;
        this.mailAdapter = mailAdapter;
    }
    async execute(request) {
        const { type, comment, screenshot } = request;
        if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
            throw Error("invalid screenshot format");
        }
        if (!type) {
            throw Error('type is require');
        }
        if (!comment) {
            throw Error("comment is require");
        }
        this.feedbackRepository.create({
            type,
            comment,
            screenshot,
        });
        this.mailAdapter.send({
            subject: 'novo feedback',
            body: [
                "<div>",
                `<p>tipo feedback: ${type}</p>`,
                `<p>comentario:${comment}</p>`,
                `</div>`,
            ].join("\n"),
        });
    }
}
exports.SubmitFeedback = SubmitFeedback;
