import { AdMob, AdmobConsentStatus } from "@capacitor-community/admob";

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