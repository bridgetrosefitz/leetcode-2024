import "./progressBar.styles.css";
const BAR_WIDTH = 400;

const ProgressBar = ({ percentFilled }) => {
  return (
    <div>
      <div
        className="progress-bar dynamic-bar"
        style={{ width: percentFilled * BAR_WIDTH }}
      />
      <div
        className="progress-bar background-bar"
        style={{ width: (1 - percentFilled) * BAR_WIDTH }}
      />
    </div>
  );
};

export default ProgressBar;
