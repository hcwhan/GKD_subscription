import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.vphonegaga.titan',
  name: '光速虚拟机',
  groups: [
    {
      key: 1,
      name: '打开虚拟机 - 广告弹窗',
      quickFind: false,
      activityIds: 'com.vphonegaga.titan.homepage.HomePageActivity',
      rules:
        'WebView > WebView > View[index=0] > View[index=1] > View[index=0] > View[index=2] > View[index=0] > View[index=0]',
      snapshotUrls: 'https://i.gkd.li/i/15185596',
    },
  ],
});
