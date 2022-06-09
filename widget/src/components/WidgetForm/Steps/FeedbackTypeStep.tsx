import { feedbackTypes, FeedbackType } from "..";
import { CloseButton } from "../../CloseButton";
interface Props {
  onFeedbackTypeChange: (type: FeedbackType) => void;
}
export const FeedbackTypeStep = ({ onFeedbackTypeChange }: Props) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, item]) => (
          <button
            key={key}
            onClick={() => onFeedbackTypeChange(key as FeedbackType)}
            className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
          >
            <img src={item.image.source} alt={item.image.alt} />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </>
  );
};
