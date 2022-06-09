import { mailAdapter } from "../adapters/mail-adapter";
import { FeedbackRepository } from "../repositories/Feedback-repository";

export interface submitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedback {
  private feedbackRepository;
  private mailAdapter;
  constructor(feedbackRepository: FeedbackRepository,mailAdapter:mailAdapter) {
    this.feedbackRepository = feedbackRepository;
    this.mailAdapter = mailAdapter
  }
  async execute(request: submitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if(screenshot && !screenshot.startsWith('data:image/png;base64')){
      throw Error("invalid screenshot format")
    }
    if(!type){
      throw Error('type is require')
    }
    if(!comment){
      throw Error("comment is require")
    }
    this.feedbackRepository.create({
      type,
      comment,
      screenshot,
    });

    this.mailAdapter.send({
      subject:'novo feedback',
      body:[
        "<div>",
        `<p>tipo feedback: ${type}</p>`,
        `<p>comentário:${comment}</p>`,
        screenshot?`<img src=${screenshot} />`: ``,
        `</div>`,
      ].join("\n"),
    })
  }
  
}
