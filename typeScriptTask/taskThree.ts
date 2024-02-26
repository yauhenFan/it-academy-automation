export class ObjectManipulator<T> {

    constructor(protected obj: T) {}

    public set<K extends string, V>(key: K, value: V): ObjectManipulator<T> {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get<K extends keyof T>(key: K): T[K]{
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K): ObjectManipulator<T> {
        const newObj: T = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): T {
        return this.obj;
    }
}