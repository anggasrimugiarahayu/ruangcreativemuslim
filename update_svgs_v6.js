const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf8');
const blocks = page.split('<g transform="translate(821 600)">');

const extractInner = (block) => {
  let count = 1;
  for (let i = 0; i < block.length; i++) {
    if (block.substring(i, i + 2) === '<g') count++;
    if (block.substring(i, i + 3) === '</g') count--;
    if (count === 0) {
      return { inner: block.substring(0, i), rest: block.substring(i) };
    }
  }
  return { inner: block, rest: '' };
};

const ebookSvg = `
                      <g transform="translate(-12 0)">
                        <style>{\`
                          @keyframes e-step1 { 0%, 90%, 100% { opacity: 0; transform: translateY(10px) scale(0.8); } 10%, 80% { opacity: 1; transform: translateY(0) scale(1); } }
                          @keyframes e-step2 { 0%, 25%, 90%, 100% { opacity: 0; transform: translateY(10px) scale(0.8); } 35%, 80% { opacity: 1; transform: translateY(0) scale(1); } }
                          @keyframes e-step3 { 0%, 50%, 90%, 100% { opacity: 0; transform: translateY(10px) scale(0.8); } 60%, 80% { opacity: 1; transform: translateY(0) scale(1); } }
                          @keyframes e-line1 { 0%, 15%, 90%, 100% { stroke-dashoffset: 1; opacity: 0; } 25%, 80% { stroke-dashoffset: 0; opacity: 1; } }
                          @keyframes e-line2 { 0%, 40%, 90%, 100% { stroke-dashoffset: 1; opacity: 0; } 50%, 80% { stroke-dashoffset: 0; opacity: 1; } }
                        \`}</style>
                        
                        {/* Step 1: Digital Product */}
                        <g style={{ animation: "e-step1 6s infinite", transformOrigin: "-100px 0px" }}>
                          <rect x="-120" y="-20" width="40" height="40" rx="4" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2"></rect>
                          <path d="M-120 -5 L-100 5 L-80 -5 M-100 5 L-100 20" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" fill="none"></path>
                          <circle cx="-100" cy="0" r="10" fill="var(--rn-accent)" fillOpacity="0.2"></circle>
                          <text x="-100" y="35" fontSize="12" fill="currentColor" textAnchor="middle">Produk Digital</text>
                        </g>

                        {/* Line 1 */}
                        <line x1="-70" y1="0" x2="-30" y2="0" stroke="var(--rn-accent)" strokeWidth="3" strokeDasharray="1 1" pathLength="1" style={{ animation: "e-line1 6s infinite" }}></line>

                        {/* Step 2: Faceless Content */}
                        <g style={{ animation: "e-step2 6s infinite", transformOrigin: "0px 0px" }}>
                          <rect x="-20" y="-30" width="40" height="60" rx="6" fill="var(--card)" stroke="currentColor" strokeOpacity="0.8" strokeWidth="2"></rect>
                          <circle cx="0" cy="-10" r="8" fill="currentColor" fillOpacity="0.2"></circle>
                          <path d="M-12 15 Q0 0 12 15 Z" fill="currentColor" fillOpacity="0.2"></path>
                          <rect x="-10" y="-12" width="20" height="6" rx="2" fill="var(--rn-accent)"></rect> {/* Faceless bar */}
                          <text x="0" y="45" fontSize="12" fill="currentColor" textAnchor="middle">Faceless</text>
                        </g>

                        {/* Line 2 */}
                        <path d="M 30 0 C 60 0, 70 -20, 90 -20" fill="none" stroke="var(--rn-accent)" strokeWidth="3" strokeDasharray="1 1" pathLength="1" style={{ animation: "e-line2 6s infinite" }}></path>

                        {/* Step 3: Cuan */}
                        <g style={{ animation: "e-step3 6s infinite", transformOrigin: "110px -20px" }}>
                          <circle cx="110" cy="-20" r="25" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="2"></circle>
                          <path d="M100 -30 L110 -40 L120 -30" stroke="#10B981" strokeWidth="3" fill="none" strokeLinecap="round"></path>
                          <text x="110" y="-18" fontSize="24" fontWeight="bold" fill="#10B981" textAnchor="middle" dominantBaseline="central">$</text>
                          <text x="110" y="20" fontSize="12" fill="#10B981" textAnchor="middle" fontWeight="bold">Cuan</text>
                        </g>
                      </g>
`;

let toolsStyles = `@keyframes t-path { 0%, 10% { stroke-dashoffset: 1; opacity: 0; } 15%, 85% { stroke-dashoffset: 0; opacity: 1; } 95%, 100% { stroke-dashoffset: 1; opacity: 0; } }\n`;
toolsStyles += `@keyframes t-finish { 0%, 80% { opacity: 0; transform: scale(0.5); } 85%, 95% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(0.5); } }\n`;
for (let i = 1; i <= 8; i++) {
  let appearStart = 10 + (i * 8); 
  let appearEnd = appearStart + 5;
  toolsStyles += `@keyframes t-n${i} { 0%, ${appearStart}% { opacity: 0.2; transform: scale(0.8); } ${appearEnd}%, 95% { opacity: 1; transform: scale(1.2); fill: var(--rn-accent); } 100% { opacity: 0.2; transform: scale(0.8); } }\n`;
}

const toolsSvg = `
                      <g transform="translate(-12 0)">
                        <style>{\`
                          ${toolsStyles}
                        \`}</style>
                        
                        {/* The Main Route (S shape) */}
                        <path d="M-140 20 L-60 20 C-30 20, -30 -20, 0 -20 L80 -20 C110 -20, 110 20, 140 20" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="3"></path>
                        
                        {/* The Glowing Progress Line */}
                        <path d="M-140 20 L-60 20 C-30 20, -30 -20, 0 -20 L80 -20 C110 -20, 110 20, 140 20" fill="none" stroke="var(--rn-accent)" strokeWidth="3" strokeDasharray="1 1" pathLength="1" style={{ animation: "t-path 8s infinite linear" }}></path>

                        {/* 8 Nodes (Blueprint -> Schedule) */}
                        <g>
                          {/* 1. Blueprint */}
                          <g transform="translate(-120, 20)">
                            <circle cx="0" cy="0" r="14" fill="var(--card)" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"></circle>
                            <circle cx="0" cy="0" r="6" fill="currentColor" opacity="0.2" style={{ animation: "t-n1 8s infinite" }}></circle>
                            <text x="0" y="25" fontSize="10" fill="currentColor" textAnchor="middle">Niche</text>
                          </g>
                          {/* 2. Bio */}
                          <g transform="translate(-80, 20)">
                            <circle cx="0" cy="0" r="14" fill="var(--card)" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"></circle>
                            <rect x="-6" y="-4" width="12" height="8" rx="1" fill="currentColor" opacity="0.2" style={{ animation: "t-n2 8s infinite" }}></rect>
                            <text x="0" y="25" fontSize="10" fill="currentColor" textAnchor="middle">Bio</text>
                          </g>
                          {/* 3. Idea */}
                          <g transform="translate(-45, 0)">
                            <circle cx="0" cy="0" r="14" fill="var(--card)" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"></circle>
                            <path d="M-3 -4 L0 -8 L3 -4 Z" fill="currentColor" opacity="0.2" style={{ animation: "t-n3 8s infinite" }}></path>
                            <circle cx="0" cy="-1" r="3" fill="currentColor" opacity="0.2" style={{ animation: "t-n3 8s infinite" }}></circle>
                            <text x="-15" y="-15" fontSize="10" fill="currentColor" textAnchor="middle">Ide</text>
                          </g>
                          {/* 4. Script */}
                          <g transform="translate(-15, -20)">
                            <circle cx="0" cy="0" r="14" fill="var(--card)" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"></circle>
                            <rect x="-5" y="-6" width="10" height="12" fill="currentColor" opacity="0.2" style={{ animation: "t-n4 8s infinite" }}></rect>
                            <text x="0" y="-22" fontSize="10" fill="currentColor" textAnchor="middle">Script</text>
                          </g>
                          {/* 5. ATM */}
                          <g transform="translate(25, -20)">
                            <circle cx="0" cy="0" r="14" fill="var(--card)" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"></circle>
                            <path d="M-4 -2 L4 -2 M-4 2 L4 2" stroke="currentColor" strokeWidth="2" opacity="0.2" style={{ animation: "t-n5 8s infinite" }}></path>
                            <text x="0" y="-22" fontSize="10" fill="currentColor" textAnchor="middle">ATM</text>
                          </g>
                          {/* 6. Carousel */}
                          <g transform="translate(65, -20)">
                            <circle cx="0" cy="0" r="14" fill="var(--card)" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"></circle>
                            <rect x="-6" y="-5" width="8" height="10" fill="currentColor" opacity="0.2" style={{ animation: "t-n6 8s infinite" }}></rect>
                            <rect x="2" y="-3" width="4" height="8" fill="currentColor" opacity="0.1" style={{ animation: "t-n6 8s infinite" }}></rect>
                            <text x="0" y="-22" fontSize="10" fill="currentColor" textAnchor="middle">Slide</text>
                          </g>
                          {/* 7. Ebook */}
                          <g transform="translate(95, 0)">
                            <circle cx="0" cy="0" r="14" fill="var(--card)" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"></circle>
                            <path d="M-5 -5 L0 -3 L5 -5 L5 5 L0 7 L-5 5 Z" fill="currentColor" opacity="0.2" style={{ animation: "t-n7 8s infinite" }}></path>
                            <text x="18" y="-15" fontSize="10" fill="currentColor" textAnchor="middle">Buku</text>
                          </g>
                          {/* 8. Schedule */}
                          <g transform="translate(125, 20)">
                            <circle cx="0" cy="0" r="14" fill="var(--card)" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"></circle>
                            <rect x="-6" y="-5" width="12" height="10" rx="1" fill="currentColor" opacity="0.2" style={{ animation: "t-n8 8s infinite" }}></rect>
                            <line x1="-6" y1="-1" x2="6" y2="-1" stroke="var(--card)" strokeWidth="2"></line>
                            <text x="0" y="25" fontSize="10" fill="currentColor" textAnchor="middle">Jadwal</text>
                          </g>
                        </g>

                        {/* Final Checkmark */}
                        <g transform="translate(165, 20)" style={{ animation: "t-finish 8s infinite" }}>
                          <circle cx="0" cy="0" r="16" fill="#10B981" fillOpacity="0.2"></circle>
                          <path d="M-6 0 L-2 4 L6 -4" fill="none" stroke="#10B981" strokeWidth="3" strokeLinecap="round"></path>
                          <text x="0" y="25" fontSize="10" fontWeight="bold" fill="#10B981" textAnchor="middle">Done!</text>
                        </g>
                      </g>
`;

const elearningSvg = `
                      <g transform="translate(-12 0)">
                        <style>{\`
                          @keyframes l-step1 { 0%, 90%, 100% { opacity: 0; transform: scale(0.9); } 10%, 80% { opacity: 1; transform: scale(1); } }
                          @keyframes l-step2 { 0%, 25%, 90%, 100% { stroke-dashoffset: 1; opacity: 0; } 35%, 80% { stroke-dashoffset: 0; opacity: 1; } }
                          @keyframes l-step3 { 0%, 50%, 90%, 100% { opacity: 0; transform: scale(0.5); } 60%, 80% { opacity: 1; transform: scale(1); } }
                          @keyframes l-step4 { 0%, 65%, 90%, 100% { opacity: 0; transform: scale(0.5); } 75%, 85% { opacity: 1; transform: scale(1.2); } }
                          @keyframes l-stair { 0%, 25%, 90%, 100% { opacity: 0; transform: translateY(10px); } 35%, 80% { opacity: 1; transform: translateY(0); } }
                        \`}</style>
                        
                        {/* Step 1: Platform/Screen */}
                        <rect x="-140" y="-80" width="280" height="160" rx="8" fill="currentColor" fillOpacity="0.02" stroke="currentColor" strokeOpacity="0.1" strokeWidth="2"></rect>
                        <rect x="-140" y="-80" width="280" height="20" rx="8" fill="currentColor" fillOpacity="0.05"></rect>

                        {/* Step 2: Mentor & Student */}
                        <g style={{ animation: "l-step1 8s infinite", transformOrigin: "center" }}>
                          {/* Mentor (Left) */}
                          <g transform="translate(-80, 20)">
                            <circle cx="0" cy="-20" r="10" fill="var(--rn-accent)" fillOpacity="0.8"></circle>
                            <path d="M-15 15 Q0 -5 15 15 Z" fill="var(--rn-accent)" fillOpacity="0.5"></path>
                            {/* Pointer stick */}
                            <line x1="10" y1="5" x2="30" y2="-10" stroke="var(--rn-accent)" strokeWidth="2"></line>
                            <text x="0" y="30" fontSize="12" fill="currentColor" textAnchor="middle">Mentor</text>
                          </g>
                          
                          {/* Student (Right) */}
                          <g transform="translate(80, 20)">
                            <circle cx="0" cy="-20" r="10" fill="currentColor" fillOpacity="0.5"></circle>
                            <path d="M-15 15 Q0 -5 15 15 Z" fill="currentColor" fillOpacity="0.2"></path>
                            <text x="0" y="30" fontSize="12" fill="currentColor" textAnchor="middle">Member</text>
                          </g>
                          
                          {/* Guidance Line */}
                          <path d="M-40 0 Q0 -20 40 0" fill="none" stroke="var(--rn-accent)" strokeWidth="2" strokeDasharray="4 4"></path>
                          <polygon points="35,-5 40,0 32,2" fill="var(--rn-accent)"></polygon>
                        </g>

                        {/* Step 3: Learning Path (Stairs) */}
                        <g>
                          <path d="M-20 40 L-20 20 L0 20 L0 0 L20 0 L20 -20 L40 -20" fill="none" stroke="currentColor" strokeWidth="4" strokeOpacity="0.1" strokeDasharray="1 1" pathLength="1" style={{ animation: "l-step2 8s infinite" }}></path>
                          
                          <circle cx="-20" cy="40" r="4" fill="var(--rn-accent)" style={{ animation: "l-stair 8s infinite" }}></circle>
                          <circle cx="0" cy="20" r="4" fill="var(--rn-accent)" style={{ animation: "l-stair 8s infinite", animationDelay: "0.2s" }}></circle>
                          <circle cx="20" cy="0" r="4" fill="var(--rn-accent)" style={{ animation: "l-stair 8s infinite", animationDelay: "0.4s" }}></circle>
                        </g>

                        {/* Step 4: Gamification / Reward */}
                        <g style={{ animation: "l-step3 8s infinite", transformOrigin: "40px -20px" }}>
                          <circle cx="40" cy="-20" r="15" fill="#FACE68" fillOpacity="0.2"></circle>
                          <path d="M35 -25 L45 -25 L42 -12 Q40 -5 38 -12 Z" fill="#FACE68"></path>
                        </g>
                        
                        <g style={{ animation: "l-step4 8s infinite", transformOrigin: "40px -30px" }}>
                          {/* Confetti / Stars */}
                          <circle cx="25" cy="-35" r="3" fill="#10B981"></circle>
                          <circle cx="55" cy="-35" r="4" fill="#FACE68"></circle>
                          <circle cx="40" cy="-45" r="3" fill="var(--rn-accent)"></circle>
                          <text x="40" y="-60" fontSize="14" fontWeight="bold" fill="#FACE68" textAnchor="middle">LEVEL UP!</text>
                        </g>

                      </g>
`;

const res1 = extractInner(blocks[1]);
const res2 = extractInner(blocks[2]);
const res3 = extractInner(blocks[3]);

const newPage = blocks[0] + 
  '<g transform="translate(821 600)">' + ebookSvg + res1.rest +
  '<g transform="translate(821 600)">' + toolsSvg + res2.rest +
  '<g transform="translate(821 600)">' + elearningSvg + res3.rest;

fs.writeFileSync('src/app/page.tsx', newPage);
console.log('done update v6');
