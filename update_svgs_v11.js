const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf-8');

function replaceSvg(idx, newSvg) {
  let count = 0;
  let searchIdx = 0;
  while (count < idx) {
    searchIdx = page.indexOf('<g transform="translate(821 600)">', searchIdx) + 1;
    count++;
  }
  let startIdx = searchIdx - 1; 
  let endIdx = page.indexOf('</svg>', startIdx);
  const prefix = page.substring(0, startIdx);
  const suffix = page.substring(endIdx);
  page = prefix + '<g transform="translate(821 600)">\n' + newSvg + '\n                    </g>\n                  ' + suffix;
}

const ebookSvg = `
                        <style>{\`
                          @keyframes draw-line { 0%, 20% { stroke-dashoffset: 300; } 80%, 100% { stroke-dashoffset: 0; } }
                          @keyframes pop-in { 0%, 10% { opacity: 0; transform: scale(0.5); } 20%, 90% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(0.5); } }
                          @keyframes slide-dot1 { 0%, 10% { opacity: 0; transform: translateX(-150px); } 25%, 85% { opacity: 1; transform: translateX(0px); } 100% { opacity: 0; transform: translateX(0px); } }
                          @keyframes slide-dot2 { 0%, 40% { opacity: 0; transform: translateX(0px); } 55%, 85% { opacity: 1; transform: translateX(150px); } 100% { opacity: 0; transform: translateX(150px); } }
                          @keyframes float-up { 0% { opacity: 0; transform: translateY(10px); } 50% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(-10px); } }
                        \`}</style>

                        {/* Background subtle lines */}
                        <line x1="-150" y1="0" x2="150" y2="0" stroke="currentColor" strokeWidth="4" strokeOpacity="0.1"></line>

                        {/* Animated Flow Dots */}
                        <circle cx="0" cy="0" r="6" fill="var(--rn-accent)" style={{ animation: "slide-dot1 6s cubic-bezier(0.4, 0, 0.2, 1) infinite" }}></circle>
                        <circle cx="0" cy="0" r="6" fill="#10B981" style={{ animation: "slide-dot2 6s cubic-bezier(0.4, 0, 0.2, 1) infinite" }}></circle>

                        {/* Node 1: Produk */}
                        <g transform="translate(-150 0)">
                          <rect x="-40" y="-45" width="80" height="90" rx="16" fill="var(--card)" stroke="currentColor" strokeWidth="5" strokeOpacity="0.5"></rect>
                          {/* Inner box icon */}
                          <rect x="-18" y="-20" width="36" height="30" rx="6" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="4" strokeOpacity="0.6"></rect>
                          <line x1="-10" y1="20" x2="10" y2="20" stroke="currentColor" strokeWidth="4" strokeOpacity="0.4" strokeLinecap="round"></line>
                          <text x="0" y="70" fontSize="20" fontWeight="600" fill="currentColor" opacity="0.8" textAnchor="middle">Produk</text>
                        </g>

                        {/* Node 2: Faceless */}
                        <g transform="translate(0 0)">
                          <rect x="-45" y="-60" width="90" height="120" rx="18" fill="var(--card)" stroke="currentColor" strokeWidth="5" strokeOpacity="0.6"></rect>
                          {/* Inner phone elements */}
                          <circle cx="0" cy="0" r="20" fill="currentColor" fillOpacity="0.05" stroke="currentColor" strokeWidth="4" strokeOpacity="0.4"></circle>
                          <path d="M-20 0 Q0 -15 20 0 M-20 0 Q0 15 20 0" fill="none" stroke="currentColor" strokeWidth="4" strokeOpacity="0.4"></path>
                          <line x1="-15" y1="-40" x2="15" y2="-40" stroke="currentColor" strokeWidth="4" strokeOpacity="0.3" strokeLinecap="round"></line>
                          <line x1="-12" y1="40" x2="12" y2="40" stroke="currentColor" strokeWidth="4" strokeOpacity="0.3" strokeLinecap="round"></line>
                          <text x="0" y="90" fontSize="20" fontWeight="600" fill="currentColor" opacity="0.8" textAnchor="middle">Faceless</text>
                        </g>

                        {/* Node 3: Cuan */}
                        <g transform="translate(150 0)">
                          <circle cx="0" cy="0" r="45" fill="var(--card)" stroke="currentColor" strokeWidth="5" strokeOpacity="0.3" strokeDasharray="10 10"></circle>
                          <g style={{ animation: "pop-in 6s infinite", transformOrigin: "center" }}>
                            <circle cx="0" cy="0" r="45" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="5"></circle>
                            <text x="0" y="2" fontSize="42" fontWeight="800" fill="#10B981" textAnchor="middle" dominantBaseline="central">$</text>
                            {/* Floating mini dollars */}
                            <text x="-30" y="-30" fontSize="18" fontWeight="700" fill="#10B981" style={{ animation: "float-up 2s infinite" }}>$</text>
                            <text x="30" y="-20" fontSize="14" fontWeight="700" fill="#10B981" style={{ animation: "float-up 2s infinite", animationDelay: "0.5s" }}>$</text>
                          </g>
                          <text x="0" y="75" fontSize="20" fontWeight="600" fill="currentColor" opacity="0.8" textAnchor="middle">Cuan</text>
                        </g>
`;

const toolsSvg = `
                        <style>{\`
                          @keyframes draw-path { 0%, 15% { stroke-dashoffset: 700; } 85%, 100% { stroke-dashoffset: 0; } }
                          @keyframes pop-node { 0%, 5% { opacity: 0; transform: scale(0.5); } 10%, 95% { opacity: 1; transform: scale(1); } 100% { opacity: 0; transform: scale(0.5); } }
                        \`}</style>

                        {/* Background Path */}
                        <path d="M-180 -40 L180 -40 A 40 40 0 0 1 220 0 A 40 40 0 0 1 180 40 L-180 40" fill="none" stroke="currentColor" strokeWidth="6" strokeOpacity="0.1"></path>
                        
                        {/* Animated Active Path (Green) */}
                        <path d="M-180 -40 L180 -40 A 40 40 0 0 1 220 0 A 40 40 0 0 1 180 40 L-180 40" fill="none" stroke="#10B981" strokeWidth="6" strokeDasharray="700" strokeDashoffset="700" style={{ animation: "draw-path 8s ease-in-out infinite" }}></path>

                        {/* Top Row Nodes (Niche, Bio, Ide, Script) */}
                        <g transform="translate(-180 -40)">
                          <circle cx="0" cy="0" r="14" fill="var(--card)" stroke="currentColor" strokeWidth="4" strokeOpacity="0.4"></circle>
                          <circle cx="0" cy="0" r="7" fill="#10B981" style={{ animation: "pop-node 8s infinite", animationDelay: "1.2s", transformOrigin: "center" }}></circle>
                          <text x="0" y="-28" fontSize="18" fontWeight="600" fill="currentColor" opacity="0.8" textAnchor="middle">Niche</text>
                        </g>
                        <g transform="translate(-60 -40)">
                          <circle cx="0" cy="0" r="14" fill="var(--card)" stroke="currentColor" strokeWidth="4" strokeOpacity="0.4"></circle>
                          <circle cx="0" cy="0" r="7" fill="#10B981" style={{ animation: "pop-node 8s infinite", animationDelay: "2.2s", transformOrigin: "center" }}></circle>
                          <text x="0" y="-28" fontSize="18" fontWeight="600" fill="currentColor" opacity="0.8" textAnchor="middle">Bio</text>
                        </g>
                        <g transform="translate(60 -40)">
                          <circle cx="0" cy="0" r="14" fill="var(--card)" stroke="currentColor" strokeWidth="4" strokeOpacity="0.4"></circle>
                          <circle cx="0" cy="0" r="7" fill="#10B981" style={{ animation: "pop-node 8s infinite", animationDelay: "3.2s", transformOrigin: "center" }}></circle>
                          <text x="0" y="-28" fontSize="18" fontWeight="600" fill="currentColor" opacity="0.8" textAnchor="middle">Ide</text>
                        </g>
                        <g transform="translate(180 -40)">
                          <circle cx="0" cy="0" r="14" fill="var(--card)" stroke="currentColor" strokeWidth="4" strokeOpacity="0.4"></circle>
                          <circle cx="0" cy="0" r="7" fill="#10B981" style={{ animation: "pop-node 8s infinite", animationDelay: "4.2s", transformOrigin: "center" }}></circle>
                          <text x="0" y="-28" fontSize="18" fontWeight="600" fill="currentColor" opacity="0.8" textAnchor="middle">Script</text>
                        </g>

                        {/* Bottom Row Nodes (Jadwal, Buku, Slide, ATM) - Note the reverse order in physical layout */}
                        <g transform="translate(180 40)">
                          <circle cx="0" cy="0" r="14" fill="var(--card)" stroke="currentColor" strokeWidth="4" strokeOpacity="0.4"></circle>
                          <circle cx="0" cy="0" r="7" fill="#10B981" style={{ animation: "pop-node 8s infinite", animationDelay: "5.5s", transformOrigin: "center" }}></circle>
                          <text x="0" y="38" fontSize="18" fontWeight="600" fill="currentColor" opacity="0.8" textAnchor="middle">ATM</text>
                        </g>
                        <g transform="translate(60 40)">
                          <circle cx="0" cy="0" r="14" fill="var(--card)" stroke="currentColor" strokeWidth="4" strokeOpacity="0.4"></circle>
                          <circle cx="0" cy="0" r="7" fill="#10B981" style={{ animation: "pop-node 8s infinite", animationDelay: "6.5s", transformOrigin: "center" }}></circle>
                          <text x="0" y="38" fontSize="18" fontWeight="600" fill="currentColor" opacity="0.8" textAnchor="middle">Slide</text>
                        </g>
                        <g transform="translate(-60 40)">
                          <circle cx="0" cy="0" r="14" fill="var(--card)" stroke="currentColor" strokeWidth="4" strokeOpacity="0.4"></circle>
                          <circle cx="0" cy="0" r="7" fill="#10B981" style={{ animation: "pop-node 8s infinite", animationDelay: "7.5s", transformOrigin: "center" }}></circle>
                          <text x="0" y="38" fontSize="18" fontWeight="600" fill="currentColor" opacity="0.8" textAnchor="middle">Buku</text>
                        </g>
                        <g transform="translate(-180 40)">
                          {/* Final Node gets a special popup */}
                          <circle cx="0" cy="0" r="18" fill="var(--card)" stroke="currentColor" strokeWidth="4" strokeOpacity="0.4"></circle>
                          <g style={{ animation: "pop-node 8s infinite", animationDelay: "8.5s", transformOrigin: "center" }}>
                            <circle cx="0" cy="0" r="18" fill="#10B981" fillOpacity="0.2" stroke="#10B981" strokeWidth="5"></circle>
                            <path d="M-6 0 L-2 4 L8 -4" fill="none" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path>
                          </g>
                          <text x="0" y="40" fontSize="18" fontWeight="600" fill="currentColor" opacity="0.8" textAnchor="middle">Jadwal</text>
                        </g>
`;

const elearningSvg = `
                        <style>{\`
                          @keyframes pop-icon { 0%, 5% { opacity: 0; transform: scale(0.5); } 15%, 85% { opacity: 1; transform: scale(1); } 95%, 100% { opacity: 0; transform: scale(0.5); } }
                          @keyframes pop-reward { 0%, 50% { opacity: 0; transform: translateY(20px) scale(0.5); } 60%, 90% { opacity: 1; transform: translateY(0) scale(1); } 100% { opacity: 0; transform: translateY(20px) scale(0.5); } }
                          @keyframes dash-line { 0%, 20% { stroke-dashoffset: 400; } 80%, 100% { stroke-dashoffset: 0; } }
                        \`}</style>

                        {/* Background structural lines */}
                        <path d="M-120 70 L-120 10 L0 10 L0 -40 L120 -40 L120 -90" fill="none" stroke="currentColor" strokeWidth="4" strokeOpacity="0.1" strokeDasharray="8 8"></path>
                        
                        {/* Animated Step Line */}
                        <path d="M-120 70 L-120 10 L0 10 L0 -40 L120 -40 L120 -90" fill="none" stroke="var(--rn-accent)" strokeWidth="5" strokeDasharray="400" strokeDashoffset="400" style={{ animation: "dash-line 8s ease-in-out infinite" }}></path>

                        {/* Left Side: Mentor */}
                        <g transform="translate(-120 50)" style={{ animation: "pop-icon 8s infinite", transformOrigin: "center" }}>
                          <circle cx="0" cy="-25" r="18" fill="var(--rn-accent)" fillOpacity="0.8"></circle>
                          <path d="M-25 15 Q0 -10 25 15 Z" fill="var(--rn-accent)" fillOpacity="0.4"></path>
                          <text x="0" y="40" fontSize="20" fontWeight="600" fill="currentColor" opacity="0.9" textAnchor="middle">Mentor</text>
                        </g>

                        {/* Middle Side: Member (Learning) */}
                        <g transform="translate(0 0)" style={{ animation: "pop-icon 8s infinite", animationDelay: "2s", transformOrigin: "center" }}>
                          <circle cx="0" cy="-25" r="18" fill="currentColor" fillOpacity="0.5"></circle>
                          <path d="M-25 15 Q0 -10 25 15 Z" fill="currentColor" fillOpacity="0.2"></path>
                          <text x="0" y="40" fontSize="20" fontWeight="600" fill="currentColor" opacity="0.9" textAnchor="middle">Member</text>
                        </g>

                        {/* Top Right Side: Reward / Level Up */}
                        <g transform="translate(120 -70)" style={{ animation: "pop-reward 8s infinite", transformOrigin: "center" }}>
                          {/* Halo ring */}
                          <circle cx="0" cy="-20" r="35" fill="var(--rn-accent)" fillOpacity="0.15" stroke="var(--rn-accent)" strokeWidth="4" strokeOpacity="0.6"></circle>
                          {/* Trophy/Medal icon */}
                          <path d="M-15 -35 L15 -35 L10 -5 L0 5 L-10 -5 Z" fill="#FACE68"></path>
                          <circle cx="0" cy="-20" r="8" fill="var(--card)"></circle>
                          {/* Particles */}
                          <circle cx="-35" cy="-45" r="4" fill="#10B981"></circle>
                          <circle cx="35" cy="-10" r="5" fill="#FACE68"></circle>
                          <circle cx="-25" cy="15" r="4" fill="var(--rn-accent)"></circle>
                          <text x="0" y="35" fontSize="22" fontWeight="800" fill="#FACE68" textAnchor="middle" letterSpacing="2">LEVEL UP</text>
                        </g>
`;

replaceSvg(3, elearningSvg);
replaceSvg(2, toolsSvg);
replaceSvg(1, ebookSvg);

fs.writeFileSync('src/app/page.tsx', page);
console.log('done!');
