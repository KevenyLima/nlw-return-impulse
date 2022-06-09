import bugImageUrl from "../../assets/Emoji.svg";
import IdeaImageUrl from "../../assets/Idea.svg";
import ThoughtImageUrl from "../../assets/Thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: IdeaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: ThoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};
export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [sendFeedback, setSendFeedback] = useState(false);
  function handleResetFeedbackType() {
    setFeedbackType(null);
    setSendFeedback(false);
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {sendFeedback ? (
        <FeedbackSuccessStep onFeedbackRestartRequest={handleResetFeedbackType} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              OnSendFeedback={() => setSendFeedback(true)}
              feedbackType={feedbackType}
              resetType={handleResetFeedbackType}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <a
          className="underline underline-offset-2"
          href="https://rocketseat.com.br"
        >
          Rocketseat
        </a>
      </footer>
    </div>
  );
};
