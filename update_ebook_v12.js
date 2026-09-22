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
                          @keyframes atm-rise {
                            0%, 10% { opacity: 0; transform: translateY(20px); }
                            15%, 90% { opacity: 1; transform: translateY(0); }
                            95%, 100% { opacity: 0; transform: translateY(-10px); }
                          }
                          @keyframes atm-pop {
                            0%, 5% { opacity: 0; transform: scale(0.5); }
                            10%, 90% { opacity: 1; transform: scale(1); }
                            95%, 100% { opacity: 0; transform: scale(0.5); }
                          }
                          @keyframes atm-draw {
                            0%, 10% { stroke-dashoffset: 1; opacity: 0;}
                            20%, 90% { stroke-dashoffset: 0; opacity: 1;}
                            95%, 100% { stroke-dashoffset: 1; opacity: 0;}
                          }
                          @keyframes atm-flow {
                            0%, 10% { opacity: 0; transform: translateX(-10px); }
                            20%, 80% { opacity: 1; transform: translateX(0); }
                            90%, 100% { opacity: 0; transform: translateX(10px); }
                          }
                        \`}</style>

                        <g transform="translate(-12 0)">
                          {/* 1. Left Section: Produk Digital */}
                          <g style={{ animation: "atm-rise 8s infinite both", animationDelay: "0s" }}>
                            <circle cx="-200" cy="-22" r="30" fill="currentColor" fillOpacity="0.06" strokeOpacity="0.75" strokeWidth="5"></circle>
                            {/* Box / Book icon inside */}
                            <path d="M-212 -22 L-206 -33 L-200 -19 L-194 -33 L-188 -22" strokeWidth="5" strokeOpacity="0.8" style={{ animation: "atm-draw 8s infinite both", animationDelay: "0.2s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1"></path>
                            <rect x="-212" y="6" width="24" height="15" rx="3" fill="currentColor" fillOpacity="0.12" strokeOpacity="0.7" strokeWidth="4"></rect>
                            <line x1="-206" y1="25" x2="-194" y2="25" strokeWidth="5" strokeOpacity="0.6"></line>
                            
                            <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "0.5s" }}>
                              <path d="M-200 -60 L-200 -74" strokeWidth="6" strokeOpacity="0.7"></path>
                            </g>
                            <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "0.7s" }}>
                              <path d="M-226 -44 L-236 -54" strokeWidth="6" strokeOpacity="0.7"></path>
                            </g>
                            <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "0.9s" }}>
                              <path d="M-174 -44 L-164 -54" strokeWidth="6" strokeOpacity="0.7"></path>
                            </g>
                          </g>

                          {/* 2. Flow Arrows */}
                          <g style={{ animation: "atm-rise 8s infinite both", animationDelay: "1s" }}>
                            <g transform="translate(-160 -10)">
                              <g style={{ animation: "atm-flow 8s infinite both", animationDelay: "0s" }}>
                                <path d="M0 -12 L11 0 L0 12" strokeWidth="7" strokeOpacity="0.8" fill="none"></path>
                              </g>
                            </g>
                            <g transform="translate(-144 -10)">
                              <g style={{ animation: "atm-flow 8s infinite both", animationDelay: "0.15s" }}>
                                <path d="M0 -12 L11 0 L0 12" strokeWidth="7" strokeOpacity="0.8" fill="none"></path>
                              </g>
                            </g>
                            <g transform="translate(-128 -10)">
                              <g style={{ animation: "atm-flow 8s infinite both", animationDelay: "0.3s" }}>
                                <path d="M0 -12 L11 0 L0 12" strokeWidth="7" strokeOpacity="0.8" fill="none"></path>
                              </g>
                            </g>
                          </g>

                          {/* 3. Middle Section: Faceless / Sosmed */}
                          <g style={{ animation: "atm-rise 8s infinite both", animationDelay: "1.5s" }}>
                            <rect x="-95" y="-100" width="210" height="190" rx="16" fill="currentColor" fillOpacity="0.05" strokeOpacity="0.7" strokeWidth="5"></rect>
                            <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "1.8s" }}>
                              <text x="-70" y="-70" fontSize="30" fontWeight="700" fill="currentColor" fillOpacity="0.85" stroke="none" dominantBaseline="central" letterSpacing="0.68">FACELESS</text>
                            </g>
                            
                            <line x1="100" y1="-70" x2="110" y2="-70" strokeWidth="11" strokeOpacity="0.3" style={{ animation: "atm-draw 8s infinite both", animationDelay: "2s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1"></line>
                            
                            {/* Profile UI elements */}
                            <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "2s" }}>
                              <circle cx="-45" cy="-25" r="22" fill="currentColor" fillOpacity="0.1" strokeOpacity="0.6" strokeWidth="4"></circle>
                            </g>
                            
                            <line x1="-10" y1="-38" x2="80" y2="-38" strokeWidth="8" strokeOpacity="0.6" style={{ animation: "atm-draw 8s infinite both", animationDelay: "2.3s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1"></line>
                            <line x1="-10" y1="-12" x2="55" y2="-12" strokeWidth="8" strokeOpacity="0.6" style={{ animation: "atm-draw 8s infinite both", animationDelay: "2.5s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1"></line>
                            
                            {/* Post grid */}
                            <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "2.8s" }}>
                              <rect x="-70" y="20" width="40" height="40" rx="6" fill="currentColor" fillOpacity="0.08" strokeOpacity="0.6" strokeWidth="4"></rect>
                            </g>
                            <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "3s" }}>
                              <rect x="-15" y="20" width="40" height="40" rx="6" fill="currentColor" fillOpacity="0.08" strokeOpacity="0.6" strokeWidth="4"></rect>
                            </g>
                            <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "3.2s" }}>
                              <rect x="40" y="20" width="40" height="40" rx="6" fill="currentColor" fillOpacity="0.08" strokeOpacity="0.6" strokeWidth="4"></rect>
                            </g>
                          </g>

                          {/* 4. Right Section: Cuan */}
                          <g style={{ animation: "atm-rise 8s infinite both", animationDelay: "3.8s" }}>
                            <rect x="75" y="-50" width="190" height="150" rx="16" fill="var(--card)" strokeOpacity="0.8" strokeWidth="5"></rect>
                            
                            {/* Corner dots */}
                            <rect x="69" y="-56" width="12" height="12" fill="currentColor" stroke="none" opacity="0.85"></rect>
                            <rect x="259" y="-56" width="12" height="12" fill="currentColor" stroke="none" opacity="0.85"></rect>
                            <rect x="259" y="94" width="12" height="12" fill="currentColor" stroke="none" opacity="0.85"></rect>
                            <rect x="69" y="94" width="12" height="12" fill="currentColor" stroke="none" opacity="0.85"></rect>
                            
                            <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "4s" }}>
                              <text x="95" y="-24" fontSize="28" fontWeight="700" fill="#10B981" fillOpacity="0.85" stroke="none" dominantBaseline="central" letterSpacing="0.56">CUAN</text>
                            </g>

                            {/* Cuan rows with checkmarks */}
                            <g>
                              <line x1="128" y1="14" x2="210" y2="14" strokeWidth="10" strokeOpacity="0.65" style={{ animation: "atm-draw 8s infinite both", animationDelay: "4.3s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1"></line>
                              <g transform="translate(107 14)">
                                <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "4.4s" }}>
                                  <rect x="-11" y="-11" width="22" height="22" rx="6" strokeOpacity="0.55" strokeWidth="4"></rect>
                                </g>
                                <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "4.8s" }}>
                                  <rect x="-11" y="-11" width="22" height="22" rx="6" fill="#10B981" fillOpacity="0.18" stroke="#10B981" strokeOpacity="0.95" strokeWidth="4"></rect>
                                  <path d="M-6 0 L-2 4 L7 -5" stroke="#10B981" strokeWidth="5" fill="none"></path>
                                </g>
                              </g>
                            </g>

                            <g>
                              <line x1="128" y1="44" x2="240" y2="44" strokeWidth="10" strokeOpacity="0.65" style={{ animation: "atm-draw 8s infinite both", animationDelay: "5.1s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1"></line>
                              <g transform="translate(107 44)">
                                <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "5.2s" }}>
                                  <rect x="-11" y="-11" width="22" height="22" rx="6" strokeOpacity="0.55" strokeWidth="4"></rect>
                                </g>
                                <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "5.6s" }}>
                                  <rect x="-11" y="-11" width="22" height="22" rx="6" fill="#10B981" fillOpacity="0.18" stroke="#10B981" strokeOpacity="0.95" strokeWidth="4"></rect>
                                  <path d="M-6 0 L-2 4 L7 -5" stroke="#10B981" strokeWidth="5" fill="none"></path>
                                </g>
                              </g>
                            </g>

                            <g>
                              <line x1="128" y1="74" x2="188" y2="74" strokeWidth="10" strokeOpacity="0.65" style={{ animation: "atm-draw 8s infinite both", animationDelay: "5.9s" }} pathLength="1" strokeDasharray="1" strokeDashoffset="1"></line>
                              <g transform="translate(107 74)">
                                <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "6.0s" }}>
                                  <rect x="-11" y="-11" width="22" height="22" rx="6" strokeOpacity="0.55" strokeWidth="4"></rect>
                                </g>
                                <g style={{ animation: "atm-pop 8s infinite both", animationDelay: "6.4s" }}>
                                  <rect x="-11" y="-11" width="22" height="22" rx="6" fill="#10B981" fillOpacity="0.18" stroke="#10B981" strokeOpacity="0.95" strokeWidth="4"></rect>
                                  <path d="M-6 0 L-2 4 L7 -5" stroke="#10B981" strokeWidth="5" fill="none"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
`;
replaceSvg(1, ebookSvg);
fs.writeFileSync('src/app/page.tsx', page);
console.log('Ebook SVG adapted to ATM Bikin Plan structure successfully!');
