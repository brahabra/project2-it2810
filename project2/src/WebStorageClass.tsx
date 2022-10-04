import { LocalStorage, SessionStorage} from 'typescript-web-storage';

//Abstract class for webstorage. Impements functions for storing, getting and clearing (prop: value)
//to storage.
abstract class WebStorageClass {
    private storage: Storage;

    constructor(storage: Storage) {
        this.storage = storage;
    }

    public setPropValue(prop: string, value: string) {
        this.storage?.setItem(prop, value);
    }

    public getPropValue(prop: string) {
        let value = this.storage.getItem(prop);
        return (value === "")?(()=>{return null;})():(()=>{return value;})();
    }

    public removeProp(prop: string) {
        this.storage.removeItem(prop);
    }

    public clearProps() {
        this.storage?.clear();
    }
}

//Variant for localstorage.
class LocalStorageClass extends WebStorageClass {
    constructor() {
        super(new LocalStorage());
    }
}

//Variant for sessionstorage.
class SessionStorageClass extends WebStorageClass {
    constructor() {
        super(new SessionStorage());
    }
}

export {LocalStorageClass, SessionStorageClass}