import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Deals with the local storage of Data into AsyncStorage
 *
 * @class LocalStorage
 */
class LocalStorageHelper {
    /**
     * Get a single item
     *
     * @param {string} key
     * @returns {Promise<String>}
     * @memberof LocalStorage
     */
    async getItem(key: string): Promise<string | null> {
        return AsyncStorage.getItem(`${key}`)
    }

    /**
     * Save a single item
     *
     * @param {string} value
     * @returns {Promise<void>}
     * @memberof LocalStorage
     */
    async setItem(key: string, value: string): Promise<void> {
        return AsyncStorage.setItem(`${key}`, value);
    }

    /**
     * Deletes a single item
     *
     * @returns {Promise<void>}
     * @memberof LocalStorage
     */
    async deleteItem(key: string): Promise<void> {
        return AsyncStorage.removeItem(`${key}`);
    }

    /**
     * Delete all the items(Clear local store)
     *
     * @returns {Promise<void>}
     * @memberof LocalStorage
     */
    async clear(): Promise<void> {
        return AsyncStorage.getAllKeys().then((keys: readonly string[]) => {
            AsyncStorage.multiRemove(keys);
        });
    }
}

const LocalStorage = new LocalStorageHelper();
export default LocalStorage;