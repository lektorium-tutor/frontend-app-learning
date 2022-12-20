import * as notifications from './notifications';
import * as discusssions from './discussions';
import * as feedback from './feedback';

export const SIDEBARS = {
  [notifications.ID]: {
    ID: notifications.ID,
    Sidebar: notifications.Sidebar,
    Trigger: notifications.Trigger,
  },
  [discusssions.ID]: {
    ID: discusssions.ID,
    Sidebar: discusssions.Sidebar,
    Trigger: discusssions.Trigger,
  },
  [feedback.ID]: {
    ID: feedback.ID,
    Sidebar: feedback.Sidebar,
    Trigger: feedback.Trigger,
  },
};

export const SIDEBAR_ORDER = [
  discusssions.ID,
  notifications.ID,
  feedback.ID,
];
