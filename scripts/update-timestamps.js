#!/usr/bin/env node
/**
 * scripts/update-timestamps.js
 *
 * Reads each prototype's slug, queries git for the last commit date on its
 * public/prototypes/<slug>/ folder, and writes the timestamp back into
 * src/data/prototypes.js automatically.
 *
 * Run automatically via "prestart" and "prebuild" in package.json.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'src', 'data', 'prototypes.js');

let source = fs.readFileSync(DATA_FILE, 'utf8');

// Match each updatedAt field and replace with the git date for that slug.
// The data file must have a slug field right above or near updatedAt.
const PROTO_REGEX = /\{\s*id:\s*'([^']+)'[\s\S]*?slug:\s*'([^']+)'[\s\S]*?updatedAt:\s*'([^']*)'/g;

source = source.replace(PROTO_REGEX, (match, id, slug, _current) => {
    const getGitDate = (dir) => {
        try {
            return execSync(
                `git log -1 --format=%aI -- ${dir}`,
                { cwd: path.join(__dirname, '..'), encoding: 'utf8' }
            ).trim();
        } catch (_) { return ''; }
    };

    // Check both src/projects/<slug> and public/<slug>, use the more recent one
    const srcDate = getGitDate(`src/projects/${slug}`);
    const pubDate = getGitDate(`public/${slug}`);

    let isoDate = '';
    if (srcDate && pubDate) {
        isoDate = srcDate > pubDate ? srcDate : pubDate;
    } else {
        isoDate = srcDate || pubDate;
    }

    // Fallback: use the repo's last commit date (always a real git timestamp)
    if (!isoDate) {
        isoDate = getGitDate('.') || new Date().toISOString();
    }

    return match.replace(/updatedAt:\s*'[^']*'/, `updatedAt: '${isoDate}'`);
});

fs.writeFileSync(DATA_FILE, source, 'utf8');
console.log('[update-timestamps] ✓ updatedAt fields refreshed from git history.');
