import React, { forwardRef, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import dataAttributes from '../../../utils/data-attributes';

/*
* DSFR v1.3.1
*/
import '@gouvfr/dsfr/dist/component/checkbox/checkbox.css';

/**
 *
 * @visibleName Checkbox
 */
const Checkbox = forwardRef((props, ref) => {
  const {
    className,
    hint,
    id,
    label,
    message,
    messageType,
    size,
    ...remainingProps
  } = props;
  const _className = classNames('fr-checkbox-group', {
    [`fr-checkbox-group--${messageType}`]: messageType,
    'fr-checkbox-group--sm': (size !== 'md'),
  }, className);
  const checkboxId = useRef(id || uuidv4());

  useEffect(() => {
    checkboxId.current = id || uuidv4();
  }, [id]);

  return (
    <div
      className={_className}
      {...dataAttributes.getAll(remainingProps)}
    >
      <input
        {...dataAttributes.filterAll(remainingProps)}
        type="checkbox"
        id={checkboxId.current}
        name="checkbox"
        ref={ref}
      />
      <label className="fr-label" htmlFor={checkboxId.current}>{label}</label>
      {hint && <p className="fr-hint-text">{hint}</p>}
      {(message && messageType) && <p className={`fr-${messageType}-text`}>{message}</p>}
    </div>
  );
});

Checkbox.defaultProps = {
  className: '',
  hint: '',
  id: null,
  size: 'md',
  messageType: '',
  message: '',
};

Checkbox.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  id: PropTypes.string,
  hint: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  label: PropTypes.string.isRequired,
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['error', 'valid', '']),
  size: PropTypes.oneOf(['sm', 'md']),
};

export default Checkbox;
