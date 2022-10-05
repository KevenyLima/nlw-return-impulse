import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ArrowLeft } from "phosphor-react";
import { ScreenshotButton } from "../ScreenshotButton";
import { useState } from "react";
import { FormEvent } from "react";
import { api } from "../../../services/api";
import { Loading } from "../../Loading";
interface props {
  feedbackType: FeedbackType;
  resetType: () => void;
  OnSendFeedback: () => void;
}
export const FeedbackContentStep = ({
  OnSendFeedback,
  feedbackType,
  resetType,
}: props) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>("");
  const feedbackTypeInfo = feedbackTypes[feedbackType];
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    // console.log({
    //   screenshot,
    //   comment,
    // });
    setIsSendingFeedback(true);
    await api.post("/feedbacks", {
      type: feedbackType,
      comment,
      screenshot,
    });

    setIsSendingFeedback(false);
    OnSendFeedback();
  }
  return (
    <>
      <header>
        <button
          type="button"
          onClick={resetType}
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form className="my-4 w-full" onSubmit={handleSubmitFeedback}>
        <textarea
          className="min-w-[384px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-400  border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="conte com detalhes o que está acontecendo..."
          onChange={(event) => setComment(event.target.value)}
        ></textarea>
        <footer className="flex flex-1 gap-2 mb-4 w-full transition-colors ">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            type="submit"
            disabled={comment === '' || isSendingFeedback}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            {isSendingFeedback ? <Loading /> : "Enviar feedback"}
          </button>
        </footer>
      </form>
    </>
  );
};
