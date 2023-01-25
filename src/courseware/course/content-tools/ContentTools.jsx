import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Calculator from './calculator';
import Feedback from './feedback';
import NotesVisibility from './notes-visibility';
import { useModel } from '../../../generic/model-store';

export default function ContentTools({
  course,
  unitId,
  sequenceId,
  courseId,
}) {
  const sequence = useModel('sequences', sequenceId);
  const unit = useModel('units', unitId);
  // const [sidebarOpened, setOpened ] = useState(false);
//   function openSidenav(){
//     setOpened(prev => !prev);
// }
//sidebarOpened={sidebarOpened}
  console.log(unit.id);
  console.log(unitId)
  return (
    <div className="content-tools">
      <div className="d-flex justify-content-end align-items-end m-0">
        {course.showCalculator && (
          <Calculator />
        )}
        {course.notes.enabled && (
          <NotesVisibility course={course} />
        )}
        <Feedback unitId={unitId || unit.id} />
      </div>
    </div>
  );
}

ContentTools.propTypes = {
  course: PropTypes.shape({
    notes: PropTypes.shape({
      enabled: PropTypes.bool,
    }),
    showCalculator: PropTypes.bool,
  }).isRequired,
  unitId: PropTypes.string.isRequired,
};
