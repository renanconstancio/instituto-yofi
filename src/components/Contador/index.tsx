import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

type TProps = {
  start: number;
  end: number;
  duration: number;
  delay: number;
};

const Contador = ({ start = 50, end = 132, duration = 1.2, delay = 0 }: TProps) => {
  return (
    <VisibilitySensor>
      {({ isVisible }) => (
        <span className="d-block" style={{ fontSize: '55px' }}>
          +{isVisible ? <CountUp start={start} end={end} duration={duration} delay={delay} /> : '0'}
        </span>
      )}
    </VisibilitySensor>
  );
};

export default Contador;
