const fs = require('fs');

let page = fs.readFileSync('src/app/page.tsx', 'utf-8');

function replaceSvgAtBlock(index, newSvg) {
  let count = 0;
  let startIdx = 0;
  while (count < index) {
    startIdx = page.indexOf('<g transform="translate(821 600)">', startIdx) + 1;
    count++;
  }
  startIdx = page.indexOf('<g transform="translate(821 600)">', startIdx);
  
  const endIdx = page.indexOf('</svg>', startIdx);
  
  // extract what is between <g ...> and </svg>
  // We want to replace exactly that. 
  // Actually, let's keep <g transform="translate(821 600)"> and append newSvg, then close with </g>
  
  const prefix = page.substring(0, startIdx);
  const suffix = page.substring(endIdx); // starts with </svg>
  
  page = prefix + '<g transform="translate(821 600)">\n' + newSvg + '\n                    </g>\n                  ' + suffix;
}

const ebookSvg = `
                      <g transform="translate(0 0) scale(2.0)">
                        <style>{\`
                          @keyframes e-orbit { 0% { stroke-dashoffset: 60; } 100% { stroke-dashoffset: -60; } }
                          @keyframes e-pulse { 0%, 100% { transform: scale(1); opacity: 0.8; } 50% { transform: scale(1.1); opacity: 1; } }
                          @keyframes e-dot1 { 0%, 10% { opacity: 0; transform: translateX(-40px); } 20%, 80% { opacity: 1; transform: translateX(0); } 90%, 100% { opacity: 0; transform: translateX(0); } }
                          @keyframes e-dot2 { 0%, 30% { opacity: 0; transform: translateX(0); } 40%, 80% { opacity: 1; transform: translateX(40px); } 90%, 100% { opacity: 0; transform: translateX(40px); } }
                          @keyframes e-success { 0%, 50% { opacity: 0; transform: scale(0.5) translate(40px, 0); } 60%, 80% { opacity: 1; transform: scale(1) translate(40px, 0); } 90%, 100% { opacity: 0; transform: scale(0.5) translate(40px, 0); } }
                        \`}</style>
                        
                        {/* Connecting Lines */}
                        <path d="M-40 0 L0 0 L40 0" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.15" vectorEffect="non-scaling-stroke"></path>

                        {/* Node 1: Product */}
                        <g transform="translate(-40, 0)">
                          <rect x="-12" y="-14" width="24" height="28" rx="3" fill="var(--card)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" vectorEffect="non-scaling-stroke"></rect>
                          <circle cx="0" cy="-2" r="4" fill="currentColor" fillOpacity="0.2"></circle>
                          <line x1="-5" y1="6" x2="5" y2="6" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" vectorEffect="non-scaling-stroke"></line>
                          <text x="0" y="24" fontSize="7" fontWeight="400" fill="currentColor" opacity="0.7" textAnchor="middle">Produk</text>
                        </g>

                        {/* Node 2: Faceless (Phone) */}
                        <g transform="translate(0, 0)">
                          <rect x="-14" y="-20" width="28" height="40" rx="4" fill="var(--card)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" vectorEffect="non-scaling-stroke"></rect>
                          <circle cx="0" cy="0" r="6" fill="currentColor" fillOpacity="0.1"></circle>
                          <path d="M-8 0 Q0 -5 8 0 M-8 0 Q0 5 8 0" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" vectorEffect="non-scaling-stroke"></path>
                          <path d="M-6 12 Q0 8 6 12" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" vectorEffect="non-scaling-stroke"></path>
                          <text x="0" y="32" fontSize="7" fontWeight="400" fill="currentColor" opacity="0.7" textAnchor="middle">Faceless</text>
                        </g>

                        {/* Node 3: Cuan (Empty state) */}
                        <g transform="translate(40, 0)">
                          <circle cx="0" cy="0" r="14" fill="var(--card)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" vectorEffect="non-scaling-stroke" strokeDasharray="2 2"></circle>
                          <text x="0" y="26" fontSize="7" fontWeight="400" fill="currentColor" opacity="0.7" textAnchor="middle">Cuan</text>
                        </g>

                        {/* Flow Animation */}
                        <circle cx="-40" cy="0" r="2" fill="var(--rn-accent)" style={{ animation: "e-dot1 6s infinite" }}></circle>
                        <circle cx="0" cy="0" r="2" fill="#10B981" style={{ animation: "e-dot2 6s infinite" }}></circle>

                        {/* Success State on Node 3 */}
                        <g style={{ animation: "e-success 6s infinite", transformOrigin: "center" }}>
                          <circle cx="0" cy="0" r="15" fill="#10B981" fillOpacity="0.1" stroke="#10B981" strokeWidth="1" vectorEffect="non-scaling-stroke"></circle>
                          <text x="0" y="4" fontSize="12" fontWeight="600" fill="#10B981" textAnchor="middle">$</text>
                        </g>
                      </g>
`;

const toolsSvg = `
                      <g transform="translate(0 0) scale(2.0)">
                        <style>{\`
                          @keyframes t-path { 0%, 20% { stroke-dashoffset: 200; } 80%, 100% { stroke-dashoffset: 0; } }
                          @keyframes t-dot { 0%, 10% { opacity: 0; transform: scale(0); } 15%, 85% { opacity: 1; transform: scale(1); } 90%, 100% { opacity: 0; transform: scale(0); } }
                        \`}</style>
                        
                        {/* Background Path (Dimmed) */}
                        <path d="M-60 -15 L60 -15 A 15 15 0 0 1 75 0 A 15 15 0 0 1 60 15 L-60 15" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.1" vectorEffect="non-scaling-stroke"></path>
                        
                        {/* Active Progress Path (Green) */}
                        <path d="M-60 -15 L60 -15 A 15 15 0 0 1 75 0 A 15 15 0 0 1 60 15 L-60 15" fill="none" stroke="#10B981" strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeDasharray="200" strokeDashoffset="200" style={{ animation: "t-path 8s infinite" }}></path>

                        {/* The 8 Nodes */}
                        <g>
                          {/* Top Row: Niche, Bio, Ide, Script */}
                          <g transform="translate(-60, -15)">
                            <circle cx="0" cy="0" r="4" fill="var(--card)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" vectorEffect="non-scaling-stroke"></circle>
                            <circle cx="0" cy="0" r="2" fill="#10B981" style={{ animation: "t-dot 8s infinite", animationDelay: "1.2s" }}></circle>
                            <text x="0" y="-10" fontSize="6" fontWeight="400" fill="currentColor" opacity="0.7" textAnchor="middle">Niche</text>
                          </g>
                          
                          <g transform="translate(-20, -15)">
                            <circle cx="0" cy="0" r="4" fill="var(--card)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" vectorEffect="non-scaling-stroke"></circle>
                            <circle cx="0" cy="0" r="2" fill="#10B981" style={{ animation: "t-dot 8s infinite", animationDelay: "2.0s" }}></circle>
                            <text x="0" y="-10" fontSize="6" fontWeight="400" fill="currentColor" opacity="0.7" textAnchor="middle">Bio</text>
                          </g>
                          
                          <g transform="translate(20, -15)">
                            <circle cx="0" cy="0" r="4" fill="var(--card)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" vectorEffect="non-scaling-stroke"></circle>
                            <circle cx="0" cy="0" r="2" fill="#10B981" style={{ animation: "t-dot 8s infinite", animationDelay: "2.8s" }}></circle>
                            <text x="0" y="-10" fontSize="6" fontWeight="400" fill="currentColor" opacity="0.7" textAnchor="middle">Ide</text>
                          </g>
                          
                          <g transform="translate(60, -15)">
                            <circle cx="0" cy="0" r="4" fill="var(--card)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" vectorEffect="non-scaling-stroke"></circle>
                            <circle cx="0" cy="0" r="2" fill="#10B981" style={{ animation: "t-dot 8s infinite", animationDelay: "3.6s" }}></circle>
                            <text x="0" y="-10" fontSize="6" fontWeight="400" fill="currentColor" opacity="0.7" textAnchor="middle">Script</text>
                          </g>

                          {/* Bottom Row: Jadwal (Left) <- Buku <- Slide <- ATM (Right) */}
                          <g transform="translate(60, 15)">
                            <circle cx="0" cy="0" r="4" fill="var(--card)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" vectorEffect="non-scaling-stroke"></circle>
                            <circle cx="0" cy="0" r="2" fill="#10B981" style={{ animation: "t-dot 8s infinite", animationDelay: "4.8s" }}></circle>
                            <text x="0" y="12" fontSize="6" fontWeight="400" fill="currentColor" opacity="0.7" textAnchor="middle">ATM</text>
                          </g>
                          
                          <g transform="translate(20, 15)">
                            <circle cx="0" cy="0" r="4" fill="var(--card)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" vectorEffect="non-scaling-stroke"></circle>
                            <circle cx="0" cy="0" r="2" fill="#10B981" style={{ animation: "t-dot 8s infinite", animationDelay: "5.6s" }}></circle>
                            <text x="0" y="12" fontSize="6" fontWeight="400" fill="currentColor" opacity="0.7" textAnchor="middle">Slide</text>
                          </g>
                          
                          <g transform="translate(-20, 15)">
                            <circle cx="0" cy="0" r="4" fill="var(--card)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" vectorEffect="non-scaling-stroke"></circle>
                            <circle cx="0" cy="0" r="2" fill="#10B981" style={{ animation: "t-dot 8s infinite", animationDelay: "6.4s" }}></circle>
                            <text x="0" y="12" fontSize="6" fontWeight="400" fill="currentColor" opacity="0.7" textAnchor="middle">Buku</text>
                          </g>
                          
                          <g transform="translate(-60, 15)">
                            <circle cx="0" cy="0" r="4" fill="var(--card)" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" vectorEffect="non-scaling-stroke"></circle>
                            <circle cx="0" cy="0" r="2" fill="#10B981" style={{ animation: "t-dot 8s infinite", animationDelay: "7.2s" }}></circle>
                            <text x="0" y="12" fontSize="6" fontWeight="400" fill="currentColor" opacity="0.7" textAnchor="middle">Jadwal</text>
                          </g>
                        </g>
                      </g>
`;

const elearningSvg = `
                      <g transform="translate(0 0) scale(2.0)">
                        <style>{\`
                          @keyframes l-step1 { 0%, 90%, 100% { opacity: 0; transform: scale(0.9); } 10%, 80% { opacity: 1; transform: scale(1); } }
                          @keyframes l-step2 { 0%, 25%, 90%, 100% { stroke-dashoffset: 1; opacity: 0; } 35%, 80% { stroke-dashoffset: 0; opacity: 1; } }
                          @keyframes l-step3 { 0%, 50%, 90%, 100% { opacity: 0; transform: scale(0.5); } 60%, 80% { opacity: 1; transform: scale(1); } }
                          @keyframes l-step4 { 0%, 65%, 90%, 100% { opacity: 0; transform: scale(0.5); } 75%, 85% { opacity: 1; transform: scale(1.2); } }
                          @keyframes l-stair { 0%, 25%, 90%, 100% { opacity: 0; transform: translateY(5px); } 35%, 80% { opacity: 1; transform: translateY(0); } }
                        \`}</style>

                        {/* Step 2: Mentor & Student */}
                        <g style={{ animation: "l-step1 8s infinite", transformOrigin: "center" }}>
                          {/* Mentor (Left) */}
                          <g transform="translate(-40, 20)">
                            <circle cx="0" cy="-12" r="6" fill="var(--rn-accent)" fillOpacity="0.8"></circle>
                            <path d="M-10 8 Q0 -2 10 8 Z" fill="var(--rn-accent)" fillOpacity="0.5"></path>
                            <text x="0" y="18" fontSize="7" fontWeight="400" fill="currentColor" textAnchor="middle">Mentor</text>
                          </g>
                          
                          {/* Student (Right) */}
                          <g transform="translate(40, 20)">
                            <circle cx="0" cy="-12" r="6" fill="currentColor" fillOpacity="0.5"></circle>
                            <path d="M-10 8 Q0 -2 10 8 Z" fill="currentColor" fillOpacity="0.2"></path>
                            <text x="0" y="18" fontSize="7" fontWeight="400" fill="currentColor" textAnchor="middle">Member</text>
                          </g>
                          
                          {/* Guidance Line */}
                          <path d="M-20 0 Q0 -10 20 0" fill="none" stroke="var(--rn-accent)" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke"></path>
                          <polygon points="16,-5 20,0 15,3" fill="var(--rn-accent)"></polygon>
                        </g>

                        {/* Step 3: Learning Path (Stairs) */}
                        <g>
                          <path d="M-20 20 L-20 10 L0 10 L0 0 L20 0 L20 -10 L40 -10" fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" strokeDasharray="2 2" vectorEffect="non-scaling-stroke" pathLength="1" style={{ animation: "l-step2 8s infinite" }}></path>
                          
                          <circle cx="-20" cy="20" r="2" fill="var(--rn-accent)" style={{ animation: "l-stair 8s infinite" }}></circle>
                          <circle cx="0" cy="10" r="2" fill="var(--rn-accent)" style={{ animation: "l-stair 8s infinite", animationDelay: "0.2s" }}></circle>
                          <circle cx="20" cy="0" r="2" fill="var(--rn-accent)" style={{ animation: "l-stair 8s infinite", animationDelay: "0.4s" }}></circle>
                        </g>

                        {/* Step 4: Gamification / Reward */}
                        <g style={{ animation: "l-step3 8s infinite", transformOrigin: "40px -15px" }}>
                          <circle cx="40" cy="-15" r="10" fill="#FACE68" fillOpacity="0.2"></circle>
                          <path d="M37 -20 L43 -20 L41 -10 Q40 -5 39 -10 Z" fill="#FACE68"></path>
                        </g>
                        
                        <g style={{ animation: "l-step4 8s infinite", transformOrigin: "40px -25px" }}>
                          {/* Confetti / Stars */}
                          <circle cx="33" cy="-30" r="1.5" fill="#10B981"></circle>
                          <circle cx="47" cy="-25" r="2" fill="#FACE68"></circle>
                          <circle cx="36" cy="-35" r="1.5" fill="var(--rn-accent)"></circle>
                          <text x="40" y="-40" fontSize="8" fontWeight="600" fill="#FACE68" textAnchor="middle">LEVEL UP</text>
                        </g>
                      </g>
`;

replaceSvgAtBlock(3, elearningSvg); // Do this in reverse order so indexes don't shift!
replaceSvgAtBlock(2, toolsSvg);
replaceSvgAtBlock(1, ebookSvg);

fs.writeFileSync('src/app/page.tsx', page);
console.log('done!');
