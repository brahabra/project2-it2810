class WebStorage {
    private prop: string | undefined;
    private value: string | undefined;
    private propTypes: string[] = ["commiter_name", 
                           "commited_date", 
                           "message"];

    public constructor(prop: string) {
        this.setPropType(prop);
    }

    //template methods:

    private setPropValue(value: string) {
        this.value = value;
    }

    public setPropType(prop: string) {
        this.propChecker(prop);
        this.prop = prop;
    }

    public getPropValue() {
        return this.value;
    }

    private propChecker(prop: string) {
        if (!(this.propTypes.indexOf(prop) > -1)) {
            throw new Error(prop +"is not a valid property");
        }
    }

    

}

export {WebStorage}