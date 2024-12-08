import { createContext } from "react";

export const GeneralContext = createContext();

export default function GeneralProvider({children}) {
  const coreValues = [
    {
      title: "Justice and Equality",
      description:
        "Promoting fairness and equal oppurtunity in all aspects of community development",
    },
    {
      title: "Empowerment",
      description:
        "Strengthening the capabilities of individuals, especially marginalized groups, to drive positive change",
    },
    {
      title: "Sustainability",
      description:
        "Committing to environmentally responsible practices that ensure long-term community well-being",
    },
    {
      title: "Integrity",
      description:
        "Upholding the highest standards of accountability, transparency, and ethical conduct.",
    },
    {
      title: "Collaboration",
      description:
        "Building partnerships and fostering inclusive participation in all our initiatives.",
    },
  ];
  return <GeneralContext.Provider value={
    {
        coreValues
    }
  }>{children}</GeneralContext.Provider>;
}
