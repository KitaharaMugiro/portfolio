import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import { MyHistory } from "../contents/MyHistory";

//https://github.com/stephane-monnot/react-vertical-timeline
export default () => {
  const renderElements = () => {
    const mainContentStyle = { background: "rgb(33, 150, 243)", color: "#fff" };
    const mainContentArrowStyle = {
      borderRight: "7px solid  rgb(33, 150, 243)"
    };
    return MyHistory.map(history => {
      return (
        <VerticalTimelineElement
          key={history.where}
          className="vertical-timeline-element--work"
          contentStyle={history.main ? mainContentStyle : {}}
          contentArrowStyle={history.main ? mainContentArrowStyle : {}}
          date={history.date}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">{history.what}</h3>
          <h4 className="vertical-timeline-element-subtitle">
            {history.where}
          </h4>
          <p>{history.description}</p>
        </VerticalTimelineElement>
      );
    });
  };

  return (
    <VerticalTimeline layout="2-columns">{renderElements()}</VerticalTimeline>
  );
};
