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
                      <g transform="translate(0 0) scale(1.6)">
                        <style>{\`
                          @keyframes e-step1 { 0%, 90%, 100% { opacity: 0; transform: translateY(10px) scale(0.8); } 10%, 80% { opacity: 1; transform: translateY(0) scale(1); } }
                          @keyframes e-step2 { 0%, 25%, 90%, 100% { opacity: 0; transform: translateY(10px) scale(0.8); } 35%, 80% { opacity: 1; transform: translateY(0) scale(1); } }
                          @keyframes e-step3 { 0%, 50%, 90%, 100% { opacity: 0; transform: translateY(10px) scale(0.8); } 60%, 80% { opacity: 1; transform: translateY(0) scale(1); } }
                          @keyframes e-line1 { 0%, 15%, 90%, 100% { stroke-dashoffset: 1; opacity: 0; } 25%, 80% { stroke-dashoffset: 0; opacity: 1; } }
                          @keyframes e-line2 { 0%, 40%, 90%, 100% { stroke-dashoffset: 1; opacity: 0; } 50%, 80% { stroke-dashoffset: 0; opacity: 1; } }
                        \`}</style>
                        
                        {/* Step 1: Digital Product */}
                        <g style={{ animation: "e-step1 6s infinite", transformOrigin: "-80px 0px" }}>
                          <rect x="-95" y="-20" width="30" height="30" rx="4" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2"></rect>
                          <path d="M-95 -5 L-80 5 L-65 -5 M-80 5 L-80 20" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" fill="none"></path>
                          <circle cx="-80" cy="-2" r="8" fill="var(--rn-accent)" fillOpacity="0.2"></circle>
                          <text x="-80" y="25" fontSize="11" fontWeight="600" fill="currentColor" textAnchor="middle">Produk</text>
                        </g>

                        {/* Line 1 */}
                        <line x1="-55" y1="-5" x2="-25" y2="-5" stroke="var(--rn-accent)" strokeWidth="3" strokeDasharray="1 1" pathLength="1" style={{ animation: "e-line1 6s infinite" }}></line>

                        {/* Step 2: Faceless Content */}
                        <g style={{ animation: "e-step2 6s infinite", transformOrigin: "0px 0px" }}>
                          <rect x="-15" y="-30" width="30" height="45" rx="4" fill="var(--card)" stroke="currentColor" strokeOpacity="0.8" strokeWidth="2"></rect>
                          <circle cx="0" cy="-12" r="6" fill="currentColor" fillOpacity="0.2"></circle>
                          <path d="M-10 10 Q0 -2 10 10 Z" fill="currentColor" fillOpacity="0.2"></path>
                          <rect x="-8" y="-14" width="16" height="5" rx="2" fill="var(--rn-accent)"></rect> {/* Faceless bar */}
                          <text x="0" y="32" fontSize="11" fontWeight="600" fill="currentColor" textAnchor="middle">Faceless</text>
                        </g>

                        {/* Line 2 */}
                        <path d="M 25 -5 C 45 -5, 55 -25, 75 -25" fill="none" stroke="var(--rn-accent)" strokeWidth="3" strokeDasharray="1 1" pathLength="1" style={{ animation: "e-line2 6s infinite" }}></path>

                        {/* Step 3: Cuan */}
                        <g style={{ animation: "e-step3 6s infinite", transformOrigin: "85px -25px" }}>
                          <circle cx="85" cy="-25" r="20" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="2"></circle>
                          <text x="85" y="-23" fontSize="22" fontWeight="bold" fill="#10B981" textAnchor="middle" dominantBaseline="central">$</text>
                          <text x="85" y="10" fontSize="12" fontWeight="bold" fill="#10B981" textAnchor="middle">Cuan</text>
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
                      <g transform="translate(0 0) scale(1.5)">
                        <style>{\`
                          ${toolsStyles}
                        \`}</style>
                        
                        {/* Snake Route */}
                        <path d="M-85 -20 L75 -20 C95 -20, 95 25, 75 25 L-75 25" fill="none" stroke="currentColor" strokeOpacity="0.1" strokeWidth="3"></path>
                        
                        {/* Glowing Progress Line */}
                        <path d="M-85 -20 L75 -20 C95 -20, 95 25, 75 25 L-75 25" fill="none" stroke="var(--rn-accent)" strokeWidth="3" strokeDasharray="1 1" pathLength="1" style={{ animation: "t-path 8s infinite linear" }}></path>

                        {/* Top Row: 1 to 4 */}
                        <g>
                          {/* 1. Blueprint */}
                          <g transform="translate(-75, -20)">
                            <circle cx="0" cy="0" r="12" fill="var(--card)" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"></circle>
                            <circle cx="0" cy="0" r="5" fill="currentColor" opacity="0.2" style={{ animation: "t-n1 8s infinite" }}></circle>
                            <text x="0" y="-20" fontSize="10" fontWeight="600" fill="currentColor" textAnchor="middle">Niche</text>
                          </g>
                          {/* 2. Bio */}
                          <g transform="translate(-25, -20)">
                            <circle cx="0" cy="0" r="12" fill="var(--card)" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"></circle>
                            <rect x="-5" y="-4" width="10" height="8" rx="1" fill="currentColor" opacity="0.2" style={{ animation: "t-n2 8s infinite" }}></rect>
                            <text x="0" y="-20" fontSize="10" fontWeight="600" fill="currentColor" textAnchor="middle">Bio</text>
                          </g>
                          {/* 3. Idea */}
                          <g transform="translate(25, -20)">
                            <circle cx="0" cy="0" r="12" fill="var(--card)" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"></circle>
                            <path d="M-3 -4 L0 -8 L3 -4 Z" fill="currentColor" opacity="0.2" style={{ animation: "t-n3 8s infinite" }}></path>
                            <text x="0" y="-20" fontSize="10" fontWeight="600" fill="currentColor" textAnchor="middle">Ide</text>
                          </g>
                          {/* 4. Script */}
                          <g transform="translate(75, -20)">
                            <circle cx="0" cy="0" r="12" fill="var(--card)" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"></circle>
                            <rect x="-4" y="-5" width="8" height="10" fill="currentColor" opacity="0.2" style={{ animation: "t-n4 8s infinite" }}></rect>
                            <text x="0" y="-20" fontSize="10" fontWeight="600" fill="currentColor" textAnchor="middle">Script</text>
                          </g>
                        </g>

                        {/* Bottom Row: 5 to 8 (Right to Left) */}
                        <g>
                          {/* 5. ATM */}
                          <g transform="translate(75, 25)">
                            <circle cx="0" cy="0" r="12" fill="var(--card)" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"></circle>
                            <path d="M-4 -2 L4 -2 M-4 2 L4 2" stroke="currentColor" strokeWidth="2" opacity="0.2" style={{ animation: "t-n5 8s infinite" }}></path>
                            <text x="0" y="24" fontSize="10" fontWeight="600" fill="currentColor" textAnchor="middle">ATM</text>
                          </g>
                          {/* 6. Carousel */}
                          <g transform="translate(25, 25)">
                            <circle cx="0" cy="0" r="12" fill="var(--card)" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"></circle>
                            <rect x="-5" y="-4" width="6" height="8" fill="currentColor" opacity="0.2" style={{ animation: "t-n6 8s infinite" }}></rect>
                            <text x="0" y="24" fontSize="10" fontWeight="600" fill="currentColor" textAnchor="middle">Slide</text>
                          </g>
                          {/* 7. Ebook */}
                          <g transform="translate(-25, 25)">
                            <circle cx="0" cy="0" r="12" fill="var(--card)" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"></circle>
                            <path d="M-4 -4 L0 -2 L4 -4 L4 4 L0 6 L-4 4 Z" fill="currentColor" opacity="0.2" style={{ animation: "t-n7 8s infinite" }}></path>
                            <text x="0" y="24" fontSize="10" fontWeight="600" fill="currentColor" textAnchor="middle">Buku</text>
                          </g>
                          {/* 8. Schedule */}
                          <g transform="translate(-75, 25)">
                            <circle cx="0" cy="0" r="12" fill="var(--card)" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"></circle>
                            <rect x="-5" y="-4" width="10" height="8" rx="1" fill="currentColor" opacity="0.2" style={{ animation: "t-n8 8s infinite" }}></rect>
                            <text x="0" y="24" fontSize="10" fontWeight="600" fill="currentColor" textAnchor="middle">Jadwal</text>
                          </g>
                        </g>

                        {/* Final Checkmark popping up over Schedule */}
                        <g transform="translate(-75, 25)" style={{ animation: "t-finish 8s infinite", transformOrigin: "0px 0px" }}>
                          <circle cx="0" cy="0" r="16" fill="#10B981"></circle>
                          <path d="M-6 0 L-2 4 L6 -4" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round"></path>
                        </g>
                      </g>
`;

const elearningSvg = `
                      <g transform="translate(0 0) scale(1.6)">
                        <style>{\`
                          @keyframes l-step1 { 0%, 90%, 100% { opacity: 0; transform: scale(0.9); } 10%, 80% { opacity: 1; transform: scale(1); } }
                          @keyframes l-step2 { 0%, 25%, 90%, 100% { stroke-dashoffset: 1; opacity: 0; } 35%, 80% { stroke-dashoffset: 0; opacity: 1; } }
                          @keyframes l-step3 { 0%, 50%, 90%, 100% { opacity: 0; transform: scale(0.5); } 60%, 80% { opacity: 1; transform: scale(1); } }
                          @keyframes l-step4 { 0%, 65%, 90%, 100% { opacity: 0; transform: scale(0.5); } 75%, 85% { opacity: 1; transform: scale(1.2); } }
                          @keyframes l-stair { 0%, 25%, 90%, 100% { opacity: 0; transform: translateY(10px); } 35%, 80% { opacity: 1; transform: translateY(0); } }
                        \`}</style>
                        
                        {/* Step 1: Platform/Screen (Tighter Box) */}
                        <rect x="-110" y="-60" width="220" height="120" rx="6" fill="currentColor" fillOpacity="0.02" stroke="currentColor" strokeOpacity="0.1" strokeWidth="2"></rect>
                        <rect x="-110" y="-60" width="220" height="15" rx="6" fill="currentColor" fillOpacity="0.05"></rect>

                        {/* Step 2: Mentor & Student */}
                        <g style={{ animation: "l-step1 8s infinite", transformOrigin: "center" }}>
                          {/* Mentor (Left) */}
                          <g transform="translate(-60, 20)">
                            <circle cx="0" cy="-15" r="8" fill="var(--rn-accent)" fillOpacity="0.8"></circle>
                            <path d="M-12 10 Q0 -5 12 10 Z" fill="var(--rn-accent)" fillOpacity="0.5"></path>
                            <line x1="8" y1="5" x2="25" y2="-5" stroke="var(--rn-accent)" strokeWidth="2"></line>
                            <text x="0" y="22" fontSize="10" fontWeight="600" fill="currentColor" textAnchor="middle">Mentor</text>
                          </g>
                          
                          {/* Student (Right) */}
                          <g transform="translate(60, 20)">
                            <circle cx="0" cy="-15" r="8" fill="currentColor" fillOpacity="0.5"></circle>
                            <path d="M-12 10 Q0 -5 12 10 Z" fill="currentColor" fillOpacity="0.2"></path>
                            <text x="0" y="22" fontSize="10" fontWeight="600" fill="currentColor" textAnchor="middle">Member</text>
                          </g>
                          
                          {/* Guidance Line */}
                          <path d="M-30 0 Q0 -15 30 0" fill="none" stroke="var(--rn-accent)" strokeWidth="2" strokeDasharray="3 3"></path>
                          <polygon points="25,-5 30,0 23,2" fill="var(--rn-accent)"></polygon>
                        </g>

                        {/* Step 3: Learning Path (Stairs) */}
                        <g>
                          <path d="M-20 30 L-20 15 L0 15 L0 -5 L20 -5 L20 -20 L40 -20" fill="none" stroke="currentColor" strokeWidth="4" strokeOpacity="0.1" strokeDasharray="1 1" pathLength="1" style={{ animation: "l-step2 8s infinite" }}></path>
                          
                          <circle cx="-20" cy="30" r="3" fill="var(--rn-accent)" style={{ animation: "l-stair 8s infinite" }}></circle>
                          <circle cx="0" cy="15" r="3" fill="var(--rn-accent)" style={{ animation: "l-stair 8s infinite", animationDelay: "0.2s" }}></circle>
                          <circle cx="20" cy="-5" r="3" fill="var(--rn-accent)" style={{ animation: "l-stair 8s infinite", animationDelay: "0.4s" }}></circle>
                        </g>

                        {/* Step 4: Gamification / Reward */}
                        <g style={{ animation: "l-step3 8s infinite", transformOrigin: "40px -25px" }}>
                          <circle cx="40" cy="-25" r="12" fill="#FACE68" fillOpacity="0.2"></circle>
                          <path d="M36 -30 L44 -30 L41 -18 Q40 -12 39 -18 Z" fill="#FACE68"></path>
                        </g>
                        
                        <g style={{ animation: "l-step4 8s infinite", transformOrigin: "40px -30px" }}>
                          {/* Confetti / Stars */}
                          <circle cx="30" cy="-40" r="2" fill="#10B981"></circle>
                          <circle cx="50" cy="-35" r="3" fill="#FACE68"></circle>
                          <circle cx="35" cy="-45" r="2" fill="var(--rn-accent)"></circle>
                          <text x="40" y="-50" fontSize="12" fontWeight="bold" fill="#FACE68" textAnchor="middle">LEVEL UP!</text>
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
console.log('done update v8');
