import React, { useState } from "react";
import { motion } from "framer-motion";

type Step = 1 | 2 | 3;

interface StepStyle {
  containerWidth: number;
  imageHeight: number;
  contentDirection: "row" | "column";
  contentAlign: "flex-start" | "center";
  contentJustify: "flex-start" | "space-between";
  infoDirection: "row" | "column";
  infoAlign: "flex-start" | "center";
  infoJustify: "flex-start" | "space-between";
  infoWidth: string;
}

const stepStyles: Record<Step, StepStyle> = {
  1: {
    containerWidth: 400,
    imageHeight: 230,
    contentDirection: "column",
    contentAlign: "flex-start",
    contentJustify: "flex-start",
    infoDirection: "column",
    infoAlign: "flex-start",
    infoJustify: "flex-start",
    infoWidth: "100%",
  },
  2: {
    containerWidth: 550,
    imageHeight: 280,
    contentDirection: "column",
    contentAlign: "flex-start",
    contentJustify: "flex-start",
    infoDirection: "row",
    infoAlign: "center",
    infoJustify: "space-between",
    infoWidth: "100%",
  },
  3: {
    containerWidth: 700,
    imageHeight: 330,
    contentDirection: "row",
    contentAlign: "center",
    contentJustify: "space-between",
    infoDirection: "row",
    infoAlign: "center",
    infoJustify: "space-between",
    infoWidth: "auto",
  },
};

const App: React.FC = () => {
  const [step, setStep] = useState<Step>(1);

  const handleClick = () => setStep((prevStep) => ((prevStep % 3) + 1) as Step);

  const currentStyle = stepStyles[step];

  return (
    <main className="relative w-full min-h-screen flex items-start md:items-center justify-center px-4 py-10 bg-background bg-cover bg-center">
      <motion.div
        className="bg-white p-2"
        style={{
          width: currentStyle.containerWidth,
          borderRadius: 24,
        }}
        layout
      >
        <motion.img
          src="/main.png"
          alt="main-image"
          className="w-full object-cover cursor-pointer"
          onClick={handleClick}
          style={{
            height: currentStyle.imageHeight,
            borderRadius: 18,
          }}
          layout
        />
        <motion.div
          className="px-5 pb-8 pt-10 flex items-start gap-10"
          style={{
            flexDirection: currentStyle.contentDirection,
            alignItems: currentStyle.contentAlign,
            justifyContent: currentStyle.contentJustify,
          }}
          layout
        >
          <motion.h1 layout className="text-4xl">
            Auto-layout <br /> Interaction
          </motion.h1>
          <motion.div
            className="flex"
            style={{
              flexDirection: currentStyle.infoDirection,
              justifyContent: currentStyle.infoJustify,
              alignItems: currentStyle.infoAlign,
              width: currentStyle.infoWidth,
            }}
          >
            <motion.p layout className="mr-6">
              www.config.com
            </motion.p>
            <motion.p layout>Last update 2024</motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default App;
