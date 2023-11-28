import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <p>{(message = 'There is no feedback')}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
