import React from 'react';

const Values = ({ theme }) => {
  return <div className={`value-banner value-banner-${theme} inline`}>
    <span className="value-content">
      <h4 className={`highlight highlight-${theme}`}>Userbility</h4>
      <p>People are at the core of what I do. It is important to me that everything I do enhances the user experience.</p>
    </span>

    <span className="value-content">
      <h4 className={`highlight highlight-${theme}`}>Creativity</h4>
      <p>Technology is all about solving real world problems with ingenuity and imagination in a continuously changing environment.</p>
    </span>

    <span className="value-content">
      <h4 className={`highlight highlight-${theme}`}>Simplicity</h4>
      <p>In code, like in life, it is far better to keep it simple! Technology should be efficient, understandable and user friendly.</p>
    </span>

</div>
}

export default Values;