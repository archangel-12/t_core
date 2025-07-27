import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./Chatbox.css";

const Chatbox = ({ messages }) => {
  const hasMessages = messages && messages.length > 0;

  return (
    <div className="Chatbox">
      <div className="flex flex-col gap-[24px] overflow-y-auto h-full">
        <div className="flex items-center gap-[12px]">
          <img src="/ti.png" alt="Ti._logo" className="w-30 object-contain" />
        </div>

        {hasMessages ? (
          <div className="flex flex-col gap-4 px-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`rounded-lg p-3 max-w-[80%] ${
                  msg.role === "user"
                    ? "self-end bg-white/40 text-black backdrop-blur-md"
                    : "self-start bg-blue-200/30 text-black backdrop-blur-md"
                }`}
              >
                <div className="prose prose-sm max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {msg.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="Prompt_Example">
            <div className="prompt_example">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Fascist_symbol.svg/885px-Fascist_symbol.svg.png"
                alt="logo"
              />
              <span className="text-[14px] text-[#111] font-medium leading-[1.4]">
                Bagaimana kamu mendefinisikan Perang Dunia II?
              </span>
            </div>
            <div className="prompt_example">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Bundesschild.svg/300px-Bundesschild.svg.png"
                alt="logo"
              />
              <span className="text-[14px] text-[#111] font-medium leading-[1.4]">
                Atas dasar apa Jerman menginvasi Rusia?
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbox;