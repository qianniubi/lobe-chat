import { ActionIcon } from '@lobehub/ui';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { GlobalStore, useGlobalStore } from '@/store/global';
import { SidebarTabKey } from '@/store/global/initialState';
import { useSessionStore } from '@/store/session';

export interface TopActionProps {
  tab?: GlobalStore['sidebarKey'];
}

const TopActions = memo<TopActionProps>(({ tab }) => {
  const { t } = useTranslation('common');
  const switchBackToChat = useGlobalStore((s) => s.switchBackToChat);

  return (
    <Link
      href={'/chat'}
      onClick={(e) => {
        e.preventDefault();
        switchBackToChat(useSessionStore.getState().activeId);
      }}
    >
      <ActionIcon
        active={tab === SidebarTabKey.Chat}
        icon={MessageSquare}
        placement={'right'}
        size="large"
        title={t('tab.chat')}
      />
    </Link>
  );
});

export default TopActions;
