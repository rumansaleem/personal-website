export function format(date: Date|number|string, options?: Partial<Intl.DateTimeFormatOptions>): string {
    const formatter = new Intl.DateTimeFormat(undefined, {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        ...options
    });
    
    switch (typeof date) {
        case 'number':
            date = new Date(date);
            break;
        case 'string':
            date = new Date(Date.parse(date));
            break;
        case 'object':
            if (date instanceof Date) {
                break;
            }
            throw new Error('Invalid date');
    }
    return formatter.format(date);
}