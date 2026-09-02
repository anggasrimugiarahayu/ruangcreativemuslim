const fs = require('fs');

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace <Image ... /> that doesn't have an alt attribute
    content = content.replace(/<Image([^>]+)>/g, (match, p1) => {
        if (!/alt=/.test(p1)) {
            // Check if it's self closing
            if (p1.endsWith('/')) {
                return `<Image${p1.slice(0, -1)} alt="Image" />`;
            } else {
                return `<Image${p1} alt="Image">`;
            }
        }
        return match;
    });

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Processed ${filePath}`);
}

processFile('src/app/ebook/page.tsx');
processFile('src/app/tools/page.tsx');
