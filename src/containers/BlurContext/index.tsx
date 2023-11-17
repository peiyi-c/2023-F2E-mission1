import { ReactNode, createContext, useState } from "react";

type BlurMessageProps = {
  children: ReactNode;
};

export type BlurContextType = {
  blur?: boolean;
  setBlur?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BlurContext = createContext({});

export const BlurMessage = ({ children }: BlurMessageProps) => {
  const [blur, setBlur] = useState(false);

  return (
    <BlurContext.Provider value={{ blur, setBlur }}>
      {children}
    </BlurContext.Provider>
  );
};
