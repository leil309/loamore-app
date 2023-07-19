import {QueryClient, QueryClientProvider} from 'react-query';
import AppNavigation from '~/navigation/AppNavigation';
import store from '~/store';
import {Provider} from 'react-redux';
import UserLoader from '~/components/auth/UserLoader';
import {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import FilterLoader from '~/components/filter/FilterLoader';
import {LogBox, Text, TextInput} from 'react-native';

import * as Sentry from '@sentry/react-native';
import CodePush, {
  CodePushOptions,
  DownloadProgress,
} from 'react-native-code-push';
import CodePushLoadingModal from '~/components/common/CodePushLoadingModal';

Sentry.init({
  dsn: 'https://f78311925f394803a8481850f393f9a7@o4505267508346880.ingest.sentry.io/4505395851427840',
});

// 기기에서 글자크기 키우면 앱이 깨짐, 강제로 조절 못하게 막기
// @ts-ignore
Text.defaultProps = Text.defaultProps || {};
// @ts-ignore
Text.defaultProps.allowFontScaling = false;
// @ts-ignore
TextInput.defaultProps = TextInput.defaultProps || {};
// @ts-ignore
TextInput.defaultProps.allowFontScaling = false;

const queryClient = new QueryClient({defaultOptions: {queries: {retry: 1}}});

const App = () => {
  const [visible, setVisible] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState<DownloadProgress>({
    totalBytes: 100,
    receivedBytes: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  LogBox.ignoreAllLogs();

  useEffect(() => {
    CodePush.sync(
      {
        installMode: CodePush.InstallMode.IMMEDIATE,
        mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
        updateDialog: {
          mandatoryUpdateMessage:
            '필수 업데이트가 있어 설치 후 앱을 재시작할게요.',
          mandatoryContinueButtonLabel: '재시작', //강제 모드라 사실 재시작 하나만 있음
          optionalIgnoreButtonLabel: '나중에',
          optionalInstallButtonLabel: '재시작',
          optionalUpdateMessage: '업데이트가 있습니다. 설치하시겠어요?',
          title: '업데이트 안내',
        },
      },
      status => {
        switch (status) {
          case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
            break;
          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            setVisible(true);
            break;
          case CodePush.SyncStatus.INSTALLING_UPDATE:
            setVisible(false);
            break;
          case CodePush.SyncStatus.UP_TO_DATE:
            break;
          case CodePush.SyncStatus.UPDATE_INSTALLED:
            break;
        }
      },
      progress => {
        setDownloadProgress(progress);
      },
    );
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <CodePushLoadingModal visible={visible} progress={downloadProgress} />
        <UserLoader />
        <FilterLoader />
        <AppNavigation />
      </Provider>
    </QueryClientProvider>
  );
};

const codePushOptions: CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
  // 언제 업데이트를 체크하고 반영할지를 정한다.
  // ON_APP_RESUME은 Background에서 Foreground로 오는 것을 의미
  // ON_APP_START은 앱이 실행되는(켜지는) 순간을 의미
  installMode: CodePush.InstallMode.IMMEDIATE,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  // 업데이트를 어떻게 설치할 것인지 (IMMEDIATE는 강제설치를 의미)
};

export default CodePush(codePushOptions)(App);
