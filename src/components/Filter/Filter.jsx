import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Input, LabelDescr } from './Filter.styled';
import { LabelWrapper } from 'components/ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <LabelDescr>
    <LabelWrapper>
      <BsSearch size="16" /> Find contacts by name
    </LabelWrapper>
    <Input type="text" value={value} onChange={onChange} placeholder="search" />
  </LabelDescr>
);

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
