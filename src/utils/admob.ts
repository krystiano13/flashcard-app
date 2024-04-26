import {AdMob, AdmobConsentStatus, AdOptions, AdLoadInfo, InterstitialAdPluginEvents} from "@capacitor-community/admob";

export async function initialize(): Promise<void> {
    await AdMob.initialize();

    const [trackingInfo, consentInfo] = await Promise.all([
        AdMob.trackingAuthorizationStatus(),
        AdMob.requestConsentInfo(),
    ]);

    if (trackingInfo.status === 'notDetermined') {
        await AdMob.requestTrackingAuthorization();
    }

    const authorizationStatus = await AdMob.trackingAuthorizationStatus();
    if (
        authorizationStatus.status === 'authorized' &&
        consentInfo.isConsentFormAvailable &&
        consentInfo.status === AdmobConsentStatus.REQUIRED
    ) {
        await AdMob.showConsentForm();
    }
}

export async function loadAd(): Promise<void> {
    AdMob.addListener(InterstitialAdPluginEvents.Loaded, (info: AdLoadInfo) => {
        // Subscribe prepared interstitial
    });

    const options: AdOptions = {
        adId: 'ca-app-pub-5851642075240630/9038844003',
        isTesting: false,
        npa: true
    };
    await AdMob.prepareInterstitial(options);
    await AdMob.showInterstitial();
}