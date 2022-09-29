import { LocalStorage, SessionStorage} from 'typescript-web-storage';

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
        return (value == "")?(()=>{return null;})():(()=>{return value;})();
    }

    public removeProp(prop: string) {
        this.storage.removeItem(prop);
    }

    public clearProps() {
        this.storage?.clear();
    }
}

class LocalStorageClass extends WebStorageClass {
    constructor() {
        super(new LocalStorage());
    }
}

class SessionStorageClass extends WebStorageClass {
    constructor() {
        super(new SessionStorage());
    }
}

export {LocalStorageClass, SessionStorageClass}