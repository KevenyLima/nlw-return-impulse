import { SubmitFeedback } from "./submit-feedback-usecase"

const createFeedbackSpy = jest.fn()
const sendMailFeedbackSpy = jest.fn()
const submitFeedback = new SubmitFeedback(
  {create: createFeedbackSpy},
  {send: sendMailFeedbackSpy}
)
describe('submit feedback',()=>{
  it('should be able to submit a feedback',async()=>{
    await expect(submitFeedback.execute({
      type:'bug',
      comment:'bugs',
      screenshot:'data:image/png;base64'
    })).resolves.not.toThrow()
    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailFeedbackSpy).toHaveBeenCalled()
  })
  it('should not be able to submit a feedback without type',async()=>{
    await expect(submitFeedback.execute({
      type:'',
      comment:'bugs',
      screenshot:'data:image/png;base64'
    })).rejects.toThrow()
  })

  it('should not be able to submit a feedback without comment',async()=>{
    await expect(submitFeedback.execute({
      type:'bug',
      comment:'',
      screenshot:'data:image/png;base64'
    })).rejects.toThrow()
  })

  it('should not be able to submit a feedback with an invalid screenshot',async()=>{
    await expect(submitFeedback.execute({
      type:'bug',
      comment:'bugs',
      screenshot:'image.jpeg'
    })).rejects.toThrow()
  })
})