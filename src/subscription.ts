import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 4055,
  name: 'hcwhan_GKD_Subscription',
  version: 0,
  author: 'hcwhan',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/hcwhan/GKD_subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
