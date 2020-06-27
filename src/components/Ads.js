import React from 'react';
import {
  InterstitialAd,
  BannerAdSize,
  RewardedAd,
  BannerAd,
  TestIds,
} from '@react-native-firebase/admob';

InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

RewardedAd.createForAdRequest(TestIds.REWARDED);

export const Ads = () => {
  return <BannerAd size={BannerAdSize.FULL_BANNER} unitId={TestIds.BANNER} />;
};
