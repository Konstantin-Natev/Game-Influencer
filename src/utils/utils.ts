export const addPrefix = (prefix: string, className: string): string =>
    `${prefix}-${className}`;

export function classNames(...className: string[]) {
    const classNames = Array.from(arguments);
    return classNames.length ? classNames.join(' ') : undefined;
}

export function prefixClasses(prefix: string, classNames: any): void {
    for (let key in classNames) {
        classNames[key] = addPrefix(prefix, key);
    }
}
