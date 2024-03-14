import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.flacks.app',
  appName: "Flack's Cut & Connect",
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
