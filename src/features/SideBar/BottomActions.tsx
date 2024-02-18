import { memo } from 'react';

import { GlobalStore } from '@/store/global';

export interface BottomActionProps {
  tab?: GlobalStore['sidebarKey'];
}
const BottomActions = memo<BottomActionProps>(() => {
  return <div></div>;
});

export default BottomActions;
