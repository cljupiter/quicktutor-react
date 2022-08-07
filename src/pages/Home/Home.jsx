import React from "react";
import Header from "./Header";
import LearningIntroduce from "./LearningIntroduce";
import InfiniteSection from "./InfiniteSection";
import QuestionSection from "./QuestionSection";

const Home = () => {
  return (
    <>
      <main>
        <Header />
        <LearningIntroduce />
        <InfiniteSection />
        <QuestionSection />
      </main>
    </>
  );
};
export default Home;
