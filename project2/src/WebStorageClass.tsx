import { LocalStorage} from 'typescript-web-storage';

class WebStorageClass {
    private storage: Storage = new LocalStorage();

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

export {WebStorageClass}