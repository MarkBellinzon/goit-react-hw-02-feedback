import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <section>
    <h2>{(title = 'Please leave feedback')}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
