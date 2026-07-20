import { classNames } from "./format";

export { classNames };

export function cn(...args: Parameters<typeof classNames>): string {
    return classNames(...args);
}
