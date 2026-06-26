import es from '../src/i18n/locales/es.js';
import en from '../src/i18n/locales/en.js';

/**
 * Recursively collects all dot-notation keys from a locale object.
 * Objects are traversed by key name; arrays are traversed by index.
 * This catches structural mismatches whether they live in plain objects
 * or inside arrays of objects (e.g. experience.list[0].highlights[1].title).
 */
function collectKeys(obj, prefix = '') {
    const keys = [];
    for (const key of Object.keys(obj)) {
        const path = prefix ? `${prefix}.${key}` : key;
        const value = obj[key];
        if (Array.isArray(value)) {
            value.forEach((item, index) => {
                const itemPath = `${path}.${index}`;
                if (item !== null && typeof item === 'object') {
                    keys.push(...collectKeys(item, itemPath));
                } else {
                    keys.push(itemPath);
                }
            });
        } else if (value !== null && typeof value === 'object') {
            keys.push(...collectKeys(value, path));
        } else {
            keys.push(path);
        }
    }
    return keys;
}

const esKeys = new Set(collectKeys(es));
const enKeys = new Set(collectKeys(en));

const missingInEn = [...esKeys].filter(k => !enKeys.has(k));
const missingInEs = [...enKeys].filter(k => !esKeys.has(k));

if (missingInEn.length === 0 && missingInEs.length === 0) {
    console.log('✓ i18n parity OK — all keys match between es.js and en.js');
    process.exit(0);
}

if (missingInEn.length > 0) {
    console.error(`\n✗ Keys present in es.js but missing from en.js (${missingInEn.length}):`);
    missingInEn.forEach(k => console.error(`  - ${k}`));
}

if (missingInEs.length > 0) {
    console.error(`\n✗ Keys present in en.js but missing from es.js (${missingInEs.length}):`);
    missingInEs.forEach(k => console.error(`  - ${k}`));
}

process.exit(1);
