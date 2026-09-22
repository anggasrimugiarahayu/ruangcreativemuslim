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
                        <g className="sc-rise" style={{ animationDelay: "0.2s" }}>
                          
                          {/* LEFT: Book (Strategy) */}
                          <g transform="translate(-120, 0)">
                            <g className="sc-pop" style={{ animationDelay: "0.5s" }}>
                              <path d="M-20 -15 C-20 -15, -10 -20, 0 -15 C10 -20, 20 -15, 20 -15 L20 15 C20 15, 10 10, 0 15 C-10 10, -20 15, -20 15 Z" fill="none" stroke="currentColor" strokeOpacity="0.8" strokeWidth="4"></path>
                              <line x1="0" y1="-15" x2="0" y2="15" stroke="currentColor" strokeOpacity="0.8" strokeWidth="4"></line>
                              <line x1="-15" y1="-5" x2="-5" y2="0" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2"></line>
                              <line x1="5" y1="0" x2="15" y2="-5" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2"></line>
                            </g>
                          </g>

                          {/* Line 1 */}
                          <line x1="-90" y1="0" x2="-45" y2="0" stroke="var(--rn-accent)" strokeWidth="3" strokeDasharray="6 6" className="sc-draw" style={{ animationDelay: "1s" }} pathLength="1"></line>

                          {/* CENTER: Faceless Creator */}
                          <g transform="translate(0, 0)">
                            <g className="sc-pop" style={{ animationDelay: "1.5s" }}>
                              {/* Simple Shoulders */}
                              <path d="M-30 30 Q0 -10 30 30 Z" fill="currentColor" fillOpacity="0.2"></path>
                              {/* Simple Head */}
                              <circle cx="0" cy="-15" r="20" fill="currentColor" fillOpacity="0.3"></circle>
                              {/* Mask / Sunglasses */}
                              <rect x="-16" y="-20" width="32" height="10" rx="3" fill="currentColor" stroke="var(--card)" strokeWidth="2"></rect>
                            </g>
                          </g>

                          {/* Line 2 (Trending Up) */}
                          <path d="M 40 10 C 60 10, 70 -20, 90 -20" fill="none" stroke="var(--rn-accent)" strokeWidth="4" className="sc-draw" style={{ animationDelay: "2s" }} pathLength="1" strokeLinecap="round"></path>

                          {/* RIGHT: Cuan / Dollar */}
                          <g transform="translate(120, -20)">
                            <g className="sc-rise" style={{ animationDelay: "2.5s" }}>
                               {/* Big Money Icon */}
                               <circle cx="0" cy="0" r="25" fill="#10B981" fillOpacity="0.15" stroke="#10B981" strokeWidth="3"></circle>
                               <text x="0" y="2" fontSize="26" fontWeight="900" fill="#10B981" textAnchor="middle" dominantBaseline="central">$</text>
                            </g>
                          </g>
                          
                        </g>
                      </g>
`;

const toolsSvg = `
                      <g transform="translate(-12 0)">
                        <g className="sc-rise" style={{ animationDelay: "0.1s" }}>

                          {/* LEFT: Confused (Question mark & Squiggle) */}
                          <g transform="translate(-130, 0)">
                            <g className="sc-pop" style={{ animationDelay: "0.3s" }}>
                              {/* Squiggle bubble */}
                              <path d="M-15 -10 Q-5 -30 10 -20 T20 -5 T5 15 T-15 5 Z" fill="currentColor" fillOpacity="0.1"></path>
                              <text x="2" y="-1" fontSize="24" fontWeight="bold" fill="currentColor" textAnchor="middle" dominantBaseline="central">?</text>
                            </g>
                          </g>
                          
                          {/* Line In */}
                          <line x1="-105" y1="0" x2="-65" y2="0" stroke="currentColor" strokeOpacity="0.5" strokeWidth="3" strokeDasharray="4 4" className="sc-draw" style={{ animationDelay: "0.6s" }} pathLength="1"></line>

                          {/* CENTER: AI Engine Processing */}
                          <g transform="translate(0, 0)">
                            {/* Central Brain */}
                            <rect x="-30" y="-30" width="60" height="60" rx="12" fill="var(--rn-accent)" fillOpacity="0.1" stroke="var(--rn-accent)" strokeWidth="3"></rect>
                            <text x="0" y="2" fontSize="22" fontWeight="900" fill="var(--rn-accent)" textAnchor="middle" dominantBaseline="central">AI</text>
                            
                            {/* 8 Nodes Lighting up sequentially */}
                            <circle cx="0" cy="-45" r="4" fill="var(--rn-accent)" className="sc-pop" style={{ animationDelay: "0.9s" }}></circle>
                            <circle cx="32" cy="-32" r="4" fill="var(--rn-accent)" className="sc-pop" style={{ animationDelay: "1.1s" }}></circle>
                            <circle cx="45" cy="0" r="4" fill="var(--rn-accent)" className="sc-pop" style={{ animationDelay: "1.3s" }}></circle>
                            <circle cx="32" cy="32" r="4" fill="var(--rn-accent)" className="sc-pop" style={{ animationDelay: "1.5s" }}></circle>
                            <circle cx="0" cy="45" r="4" fill="var(--rn-accent)" className="sc-pop" style={{ animationDelay: "1.7s" }}></circle>
                            <circle cx="-32" cy="32" r="4" fill="var(--rn-accent)" className="sc-pop" style={{ animationDelay: "1.9s" }}></circle>
                            <circle cx="-45" cy="0" r="4" fill="var(--rn-accent)" className="sc-pop" style={{ animationDelay: "2.1s" }}></circle>
                            <circle cx="-32" cy="-32" r="4" fill="var(--rn-accent)" className="sc-pop" style={{ animationDelay: "2.3s" }}></circle>
                          </g>

                          {/* Line Out */}
                          <line x1="65" y1="0" x2="105" y2="0" stroke="var(--rn-accent)" strokeWidth="4" className="sc-draw" style={{ animationDelay: "2.6s" }} pathLength="1"></line>
                          
                          {/* RIGHT: Checkmark / Execution */}
                          <g transform="translate(130, 0)">
                             <g className="sc-rise" style={{ animationDelay: "3s" }}>
                               <circle cx="0" cy="0" r="25" fill="var(--rn-accent)" fillOpacity="0.2"></circle>
                               <path d="M-10 0 L-2 8 L12 -6" fill="none" stroke="var(--rn-accent)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"></path>
                             </g>
                          </g>

                        </g>
                      </g>
`;

const elearningSvg = `
                      <g transform="translate(-12 0)">
                        <g className="sc-rise" style={{ animationDelay: "0.1s" }}>
                          
                          {/* Video Player Frame */}
                          <rect x="-160" y="-100" width="320" height="200" rx="12" fill="currentColor" fillOpacity="0.03" stroke="currentColor" strokeOpacity="0.2" strokeWidth="3"></rect>
                          {/* Player Top Bar */}
                          <rect x="-160" y="-100" width="320" height="24" rx="12" fill="currentColor" fillOpacity="0.1"></rect>
                          <circle cx="-140" cy="-88" r="4" fill="currentColor" fillOpacity="0.4"></circle>
                          <circle cx="-125" cy="-88" r="4" fill="currentColor" fillOpacity="0.4"></circle>
                          
                          {/* CENTER/BOTTOM: Play Button */}
                          <g className="sc-pop" style={{ animationDelay: "0.5s" }} transform="translate(0, 30)">
                            <circle cx="0" cy="0" r="30" fill="var(--rn-accent)" fillOpacity="0.2" stroke="var(--rn-accent)" strokeWidth="3"></circle>
                            <path d="M-5 -10 L10 0 L-5 10 Z" fill="var(--rn-accent)"></path>
                          </g>

                          {/* ROADMAP LINE */}
                          <path d="M0 0 C-40 -20, 40 -40, 0 -70" fill="none" stroke="currentColor" strokeOpacity="0.5" strokeWidth="3" strokeDasharray="6 6" className="sc-draw" style={{ animationDelay: "1s" }} pathLength="1"></path>

                          {/* TOP: Trophy (Goal) */}
                          <g className="sc-rise" style={{ animationDelay: "2s" }} transform="translate(0, -55)">
                            <path d="M-16 -12 L16 -12 L12 8 Q0 20 -12 8 Z" fill="#FACE68"></path>
                            <rect x="-5" y="8" width="10" height="10" fill="#FACE68"></rect>
                            <line x1="-16" y1="18" x2="16" y2="18" stroke="#FACE68" strokeWidth="4" strokeLinecap="round"></line>
                            {/* Handles */}
                            <path d="M-16 -4 A10 10 0 0 0 -12 8" fill="none" stroke="#FACE68" strokeWidth="3"></path>
                            <path d="M16 -4 A10 10 0 0 1 12 8" fill="none" stroke="#FACE68" strokeWidth="3"></path>
                            
                            {/* Popping Stars */}
                            <path d="M-25 -25 L-22 -15 L-15 -12 L-22 -9 L-25 0 L-28 -9 L-35 -12 L-28 -15 Z" fill="#FACE68" className="sc-pop" style={{ animationDelay: "2.3s" }}></path>
                            <path d="M25 -10 L27 -4 L32 -2 L27 0 L25 5 L23 0 L18 -2 L23 -4 Z" fill="#FACE68" className="sc-pop" style={{ animationDelay: "2.5s" }}></path>
                            <path d="M0 -35 L2 -28 L8 -26 L2 -24 L0 -18 L-2 -24 L-8 -26 L-2 -28 Z" fill="#FACE68" className="sc-pop" style={{ animationDelay: "2.7s" }}></path>
                          </g>

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
console.log('done');
