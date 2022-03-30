import PropTypes from 'prop-types';
import styles from './Percentage.module.scss';

export default function Percentage({ percent }) {
  const percentSlicer = (percent) => {
    let starter = 0; let rotate2 = 0; let rotate3 = 0; let
      rotate4 = 0;
    if (percent > 0) { starter = '17.5%'; }
    if (percent > 17.5) {
      starter = `${Math.min(percent * 2, 50)}%`;
    }
    if (percent > 25) {
      rotate2 = `${Math.min((percent - 25) * (90 / 25), 90)}deg`;
    }
    if (percent > 50) {
      rotate3 = `${Math.min((percent - 50) * (90 / 25), 90) + 90}deg`;
    }
    if (percent > 75) {
      rotate4 = `${Math.min((percent - 75) * (90 / 25), 90) + 180}deg`;
    }
    return [starter, rotate2, rotate3, rotate4];
  };

  const [starter, rotate2, rotate3, rotate4] = percentSlicer(percent);

  return (
    <span className={styles.oval}>
      <span className={styles.border} />
      <span className={styles.box} style={{ '--percent_starter': starter }} />
      <span className={styles.box} style={{ '--percent_starter': starter, '--rotate': rotate2, '--direction': 'top' }} />
      <span className={styles.box} style={{ '--percent_starter': starter, '--rotate': rotate3, '--direction': 'top' }} />
      <span className={styles.box} style={{ '--percent_starter': starter, '--rotate': rotate4 }} />
    </span>
  );
}

Percentage.propTypes = {
  percent: PropTypes.number,
};

Percentage.defaultProps = {
  percent: 0,
};
