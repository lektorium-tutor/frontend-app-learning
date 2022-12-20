import { ensureConfig, getConfig } from "@edx/frontend-platform";
import { injectIntl, intlShape } from "@edx/frontend-platform/i18n";
import React, { useContext } from "react";
import { useModel } from "../../../../../generic/model-store";
import SidebarBase from "../../common/SidebarBase";
import SidebarContext from "../../SidebarContext";
import { ID } from "./FeedbackTrigger";
import { Input, InputText, TextArea, Button } from "@edx/paragon";

import messages from "./messages";

// ensureConfig(['DISCUSSIONS_MFE_BASE_URL']);

function FeedbackSidebar({ intl }) {
  // const {
  //   unitId,
  //   courseId,
  // } = useContext(SidebarContext);
  // const topic = useModel('discussionTopics', unitId);
  // if (!topic?.id) {
  //   return null;
  // }
  // const discussionsUrl = `${getConfig().DISCUSSIONS_MFE_BASE_URL}/${courseId}/category/${unitId}`;
  return (
    <SidebarBase
      title={intl.formatMessage(messages.feedbackTitle)}
      ariaLabel={intl.formatMessage(messages.feedbackTitle)}
      sidebarId={ID}
      width="50rem"
      showTitleBar={false}
    >
      {/* <iframe
        src={`${discussionsUrl}?inContext`}
        className="d-flex w-100 h-100 border-0"
        title={intl.formatMessage(messages.discussionsTitle)}
      /> */}
      <form>
        {/* <div className="d-flex"> */}
        {/* <span className="p-2.5 d-inline-block">
          {intl.formatMessage(messages.feedbackTitle)}
        </span> */}
        {/* <div className="flex flex-col space-y-2"> */}
            {/* <span className="row-auto row-form-label pl-3">{`${intl.formatMessage(messages.feedbackTitle)}:`}</span> */}
          <TextArea
            label={intl.formatMessage(messages.feedbackTitle)}
            onKeyPress={(event) => this.onKeyPress(event)}
            type="text"
            className="row-4 form-control"
          />
          <Button 
            type="submit"
            className='row-4 form-control'
          >Send Feedback</Button>
        {/* </div> */}
        {/* </div> */}
      </form>
    </SidebarBase>
  );
}

FeedbackSidebar.propTypes = {
  intl: intlShape.isRequired,
};

FeedbackSidebar.Trigger = FeedbackSidebar;
FeedbackSidebar.ID = ID;

export default injectIntl(FeedbackSidebar);
