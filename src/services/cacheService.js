const {
    VUE_APP_TIMER_CACHE
} = process.env;

const saveCacheData = (localStorageKey, data) => {
    localStorage.setItem(localStorageKey, JSON.stringify(data))
}

const getCacheData = (localStorageKey) => {
    return JSON.parse(localStorage.getItem(localStorageKey))
}

const validateCacheData = (dtSaved) => {
    const dtNow = Date.now();
    const dtCached = new Date(dtSaved);

    const timeDif = dtNow - dtCached

    return ((timeDif / 1000) / 60) <= VUE_APP_TIMER_CACHE
}

const getValidCache = (localStorageKey) => {
    const dataCached = getCacheData(localStorageKey);

    if (dataCached && validateCacheData(dataCached[3])) {
        return dataCached;
    }

    return false;
}

export {
    saveCacheData,
    getCacheData,
    validateCacheData,
    getValidCache
}