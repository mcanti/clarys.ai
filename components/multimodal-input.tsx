"use client";

import type {
  Attachment,
  ChatRequestOptions,
  CreateMessage,
  Message,
} from "ai";
import { motion } from "framer-motion";
import type React from "react";
import {
  useRef,
  useEffect,
  useState,
  useCallback,
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
} from "react";
import { toast } from "sonner";
import { useLocalStorage, useWindowSize } from "usehooks-ts";

import {cn, sanitizeUIMessages} from "@/lib/utils";

import { StopIcon } from "./icons";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import Image from "next/image";

const suggestedActions = [
  {
    image: "/images/accountability.png",
    title: "Check a proposal for ",
    label: "Accountability",
    action: "Check one proposal for accountability",
  },
  {
    image: "/images/proposals.png",
    title: "Compare two ",
    label: "Proposals",
    action: "Compare two proposals",
  },
  {
    image: "/images/categories.png",
    title: "Show me all",
    label: "Categories",
    action: "List all categories",
  },
];

export function MultimodalInput({
  chatId,
  input,
  setInput,
  isLoading,
  stop,
  attachments,
  setAttachments,
  messages,
  setMessages,
  append,
  handleSubmit,
  className,
}: {
  chatId: string;
  input: string;
  setInput: (value: string) => void;
  isLoading: boolean;
  stop: () => void;
  attachments: Array<Attachment>;
  setAttachments: Dispatch<SetStateAction<Array<Attachment>>>;
  messages: Array<Message>;
  setMessages: Dispatch<SetStateAction<Array<Message>>>;
  append: (
    message: Message | CreateMessage,
    chatRequestOptions?: ChatRequestOptions
  ) => Promise<string | null | undefined>;
  handleSubmit: (
    event?: {
      preventDefault?: () => void;
    },
    chatRequestOptions?: ChatRequestOptions
  ) => void;
  className?: string;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { width } = useWindowSize();

  useEffect(() => {
    if (textareaRef.current) {
      adjustHeight();
    }
  }, []);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${
        textareaRef.current.scrollHeight + 2
      }px`;
    }
  };

  const [localStorageInput, setLocalStorageInput] = useLocalStorage(
    "input",
    ""
  );

  useEffect(() => {
    if (textareaRef.current) {
      const domValue = textareaRef.current.value;
      // Prefer DOM value over localStorage to handle hydration
      const finalValue = domValue || localStorageInput || "";
      setInput(finalValue);
      adjustHeight();
    }
    // Only run once after hydration
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLocalStorageInput(input);
  }, [input, setLocalStorageInput]);

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
    adjustHeight();
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadQueue, setUploadQueue] = useState<Array<string>>([]);

  const submitForm = useCallback(() => {
    window.history.replaceState({}, "", `/chat/${chatId}`);

    handleSubmit(undefined, {
      experimental_attachments: attachments,
    });

    setAttachments([]);
    setLocalStorageInput("");

    if (width && width > 768) {
      textareaRef.current?.focus();
    }
  }, [
    attachments,
    handleSubmit,
    setAttachments,
    setLocalStorageInput,
    width,
    chatId,
  ]);

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/files/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const { url, pathname, contentType } = data;

        return {
          url,
          name: pathname,
          contentType: contentType,
        };
      }
      const { error } = await response.json();
      toast.error(error);
    } catch (error) {
      toast.error("Failed to upload file, please try again!");
    }
  };

  const handleFileChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const files = Array.from(event.target.files || []);

      setUploadQueue(files.map((file) => file.name));

      try {
        const uploadPromises = files.map((file) => uploadFile(file));
        const uploadedAttachments = await Promise.all(uploadPromises);
        const successfullyUploadedAttachments = uploadedAttachments.filter(
          (attachment) => attachment !== undefined
        );

        setAttachments((currentAttachments) => [
          ...currentAttachments,
          ...successfullyUploadedAttachments,
        ]);
      } catch (error) {
        console.error("Error uploading files!", error);
      } finally {
        setUploadQueue([]);
      }
    },
    [setAttachments]
  );

  return (
    <div className="relative w-full flex flex-col gap-8">
      {messages.length === 0 &&
        attachments.length === 0 &&
        uploadQueue.length === 0 && (
            <div className="grid sm:grid-cols-3 gap-8 w-full">
              {suggestedActions.map((suggestedAction, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.05 * index }}
                  key={`suggested-action-${suggestedAction.title}-${index}`}
                  className={index > 1 ? "hidden sm:block" : "block"}
                >
                  <Button
                    variant="ghost"
                    onClick={async () => {
                      window.history.replaceState({}, "", `/chat/${chatId}`);

                      append({
                        role: "user",
                        content: suggestedAction.action,
                      });
                    }}
                    className="border flex-1 gap-1 sm:flex-col w-full h-auto p-8"
                  >
                    <div className="w-[60px] h-[60px] pb-4 items-center justify-center flex align-middle">
                      <img src={suggestedAction.image} alt="logo" />
                    </div>
                    <span className="text-[14px] font-normal leading-4">
                      {suggestedAction.title}
                    </span>
                    <span className="leading-8 text-[32px] font-bold">
                      {suggestedAction.label}
                    </span>
                  </Button>
                </motion.div>
              ))}
            </div>
        )}

      {/*<input*/}
      {/*  type="file"*/}
      {/*  className="fixed -top-4 -left-4 size-0.5 opacity-0 pointer-events-none"*/}
      {/*  ref={fileInputRef}*/}
      {/*  multiple*/}
      {/*  onChange={handleFileChange}*/}
      {/*  tabIndex={-1}*/}
      {/*/>*/}

      {/*{(attachments.length > 0 || uploadQueue.length > 0) && (
                <div className="flex flex-row gap-2 overflow-x-scroll items-end">
                    {attachments.map((attachment) => (
                        <PreviewAttachment key={attachment.url} attachment={attachment}/>
                    ))}

                    {uploadQueue.map((filename) => (
                        <PreviewAttachment
                            key={filename}
                            attachment={{
                                url: '',
                                name: filename,
                                contentType: '',
                            }}
                            isUploading={true}
                        />
                    ))}
                </div>
            )}*/}

      <Textarea
        ref={textareaRef}
        placeholder="Ask me anything about proposals, their content & feasibility"
        value={input}
        onChange={handleInput}
        className={cn(
          // 'min-h-[80px] max-h-[80px] overflow-hidden resize-none rounded-2xl p-[30px] pr-[80px] border border-white/32 border-solid outline-none focus-visible:outline-none disabled:cursor-not-allowed text-[14px] leading-4 shadow-inner inputField' +
          className
        )}
        rows={1}
        autoFocus
        onKeyDown={(event) => {
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();

            if (isLoading) {
              toast.error("Please wait for the model to finish its response!");
            } else {
              submitForm();
            }
          }
        }}
      />

      {isLoading ? (
        <Button
          className="rounded-2xl p-4 h-fit absolute bottom-4 right-4 border"
          onClick={(event) => {
            event.preventDefault();
            stop();
            setMessages((messages) => sanitizeUIMessages(messages));
          }}
        >
          <StopIcon size={14} />
        </Button>
      ) : (
        <Button
          className="rounded-2xl p-4 h-fit absolute bottom-4 right-4 border"
          onClick={(event) => {
            event.preventDefault();
            submitForm();
          }}
          disabled={input.length === 0 || uploadQueue.length > 0}
        >
          <Image
            src="/images/search-icon.png"
            alt="logomark"
            width={14}
            height={14}
          />
        </Button>
      )}

      {/* Attach button */}
      {/*<Button*/}
      {/*  className="rounded-full p-1.5 h-fit absolute bottom-2 right-11 m-0.5 dark:border-zinc-700"*/}
      {/*  onClick={(event) => {*/}
      {/*    event.preventDefault();*/}
      {/*    fileInputRef.current?.click();*/}
      {/*  }}*/}
      {/*  variant="outline"*/}
      {/*  disabled={isLoading}*/}
      {/*>*/}
      {/*  <PaperclipIcon size={14} />*/}
      {/*</Button>*/}
    </div>
  );
}
