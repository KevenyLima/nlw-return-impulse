// biblioteca para componentes com acessibilidade
import { Popover } from "@headlessui/react";
// biblioteca para icons
import { ChatTeardropDots } from "phosphor-react";
import { WidgetForm } from "./WidgetForm";
export const Widget: React.FC = () => {
  return (
    <Popover className="absolute bottom-4 right-4 md:bottom-10 md:right-10 flex flex-col items-end text-white">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>
      {/* ---------------------------brand-500 e uma cor criado no arquivo tailwind.config.js na parte de extend colors */}
      <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />
        {/* -----------------------------------------group significa agrupar todas as tags filhas
     group-hover quando passar por cima desse group  o width do span para 320px(max-w-xs)*/}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
};
