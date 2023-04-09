import React from 'react';
import { SectionWrapper } from './Section.styled';
import { Title } from 'components/Title/Title';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Title title={title} />
      {children}
    </SectionWrapper>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
