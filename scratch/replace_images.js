const fs = require('fs');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add import if not exists
    if (!content.includes('import Image from "next/image"')) {
        content = content.replace(/import Link from "next\/link";/, 'import Link from "next/link";\nimport Image from "next/image";');
    }

    // Replace <img ... /> with <Image width={1200} height={800} ... />
    // Using a regex to match <img ... />
    // Some are multiline, so we need to be careful
    content = content.replace(/<img([\s\S]*?)(\/?)>/g, (match, p1, p2) => {
        // If it already has width/height, don't add them. Otherwise add them.
        let newAttrs = p1;
        if (!/width=/.test(newAttrs) && !/fill/.test(newAttrs)) {
            newAttrs = ' width={1200} height={800}' + newAttrs;
        }
        // If it's the hero image, add priority
        if (/Hero Image/i.test(newAttrs) || /Frame_90_siuhne/i.test(newAttrs) || /Mockup Ruang Ngonten/i.test(newAttrs)) {
            newAttrs = ' priority' + newAttrs;
        }
        return `<Image${newAttrs}${p2 ? '/' : ''}>`;
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Processed ${filePath}`);
}

processFile('src/app/ebook/page.tsx');
processFile('src/app/tools/page.tsx');
