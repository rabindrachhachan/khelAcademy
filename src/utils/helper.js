import DeviceInfo from "react-native-device-info";

export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const isValidOtpEntered = (otp) => {
    const re = /^\w{4}$/
    return re.test(otp);
}

export const validateMobileNumber = (mobNumber) => {
    const re = /^\d{10}$/;
    return re.test(mobNumber);
};

export const validateMinLength = (text, minLength) => {
    if (text && text.length >= minLength) {
        return true;
    }
    else {
        return false;
    }
};

export const getDeviceInformation = () => {
    let appName = DeviceInfo.getApplicationName();
    let buildNumber = DeviceInfo.getBuildNumber();
    let bundleId = DeviceInfo.getBundleId();
    let carrier = DeviceInfo.getCarrier();
    let deviceCountry = DeviceInfo.getDeviceCountry();
    let deviceId = DeviceInfo.getDeviceId();
    let deviceLocale = DeviceInfo.getDeviceLocale();
    let fontScale = DeviceInfo.getFontScale();
    let freeDiskStorage = DeviceInfo.getFreeDiskStorage();
    let manufacturer = DeviceInfo.getManufacturer();
    let maxMemory = DeviceInfo.getMaxMemory();
    let model = DeviceInfo.getModel();
    let readableVersion = DeviceInfo.getReadableVersion();
    let serialNumber = DeviceInfo.getSerialNumber();
    let systemName = DeviceInfo.getSystemName();
    let systemVersion = DeviceInfo.getSystemVersion();
    let timezone = DeviceInfo.getTimezone();
    let storageSize = DeviceInfo.getTotalDiskCapacity();
    let totalMemory = DeviceInfo.getTotalMemory();
    let userAgent = DeviceInfo.getUserAgent();
    let is24Hour = DeviceInfo.is24Hour();
    let isEmulator = DeviceInfo.isEmulator();
    let uniqueId = DeviceInfo.getUniqueID();

    return {
        app_name: appName,
        // battery_level: batteryLevel,
        build_number: buildNumber,
        bundle_id: bundleId,
        carrier: carrier,
        device_country: deviceCountry,
        device_id: deviceId,
        device_locale: deviceLocale,
        font_scale: fontScale,
        freedisk_storage: freeDiskStorage,
        // ipaddress: ipAddress,
        manufacturer: manufacturer,
        max_memory: maxMemory,
        model: model,
        readable_version: readableVersion,
        serial_number: serialNumber,
        system_name: systemName,
        system_version: systemVersion,
        timezone: timezone,
        storage_size: storageSize,
        total_memory: totalMemory,
        user_agent: userAgent,
        is24_hour: is24Hour,
        is_emulator: isEmulator,
        device_uid : uniqueId
    }
}