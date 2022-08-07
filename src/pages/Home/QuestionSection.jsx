import react from "react";
import { Row, Container } from "react-bootstrap";
import SingleQuestion from "../../components/SingleQuestion/SingleQuestion.jsx";
const QuestionSection = () => {
    const questionData = [
        {
            image: "assets/images/FAQ.png",
            title: "Frequently asked questions",
            description: "Support is just a tap away. We can also answer any questions you might have in our FAQ section.",
            btnTitle: "Get help",
        },
        {
            image: "assets/images/Why_QT.png",
            title: "Why QuickTutor?",
            description: "Turn your knowledge into dollars & become your own boss today.",
            btnTitle: "Learn more",
        },
    ];
    return (
        <div className="content-section question-section">
            <Container>
                <Row>
                    {questionData.map((item, index) => (
                        <SingleQuestion data={item} key={index} />
                    ))}
                </Row>
            </Container>
        </div>    
    );
};
export default QuestionSection;