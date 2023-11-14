import { ReactNode, createContext, useState } from "react";

type BlurMessageProps = {
  children: ReactNode;
};

export type BlurContextType = {
  navOpen?: boolean;
  setNavOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BlurContext = createContext({});

export const BlurMessage = ({ children }: BlurMessageProps) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <BlurContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </BlurContext.Provider>
  );
};
