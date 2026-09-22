import re

def convert_svg(html_file, color):
    with open(html_file, "r") as f:
        content = f.read()

    # Camel case attributes for React
    attrs_to_camel = [
        "fill-opacity",
        "stroke-opacity",
        "stroke-width",
        "stroke-dasharray",
        "stroke-dashoffset",
        "clip-path",
        "stroke-linecap",
        "stroke-linejoin",
        "pathLength" # although already camel, just to be sure
    ]
    for attr in attrs_to_camel:
        camel = attr.split('-')[0] + "".join(word.capitalize() for word in attr.split('-')[1:])
        content = re.sub(rf'{attr}=', f'{camel}=', content)
        # Ensure pathLength is correct
        content = content.replace("pathlength=", "pathLength=")

    # Handle standard animations
    def class_replacer(match):
        cls_val = match.group(1)
        if cls_val.startswith('sc-pop-'):
            delay = int(cls_val.replace('sc-pop-', '')) / 100
            return f'style={{{{ animation: "atm-pop 8s infinite both", animationDelay: "{delay}s" }}}}'
        elif cls_val.startswith('sc-rise-'):
            delay = int(cls_val.replace('sc-rise-', '')) / 100
            return f'style={{{{ animation: "atm-rise 8s infinite both", animationDelay: "{delay}s" }}}}'
        elif cls_val.startswith('sc-draw-'):
            delay = int(cls_val.replace('sc-draw-', '')) / 100
            return f'style={{{{ animation: "atm-draw 8s infinite both", animationDelay: "{delay}s" }}}}'
        elif cls_val == 'sc-turn-a':
            return 'style={{ animation: "atm-turn-a 8s infinite both" }}'
        elif cls_val == 'sc-turn-b':
            return 'style={{ animation: "atm-turn-b 8s infinite both" }}'
        elif cls_val == 'sc-ring':
            return 'style={{ animation: "atm-ring 8s infinite both" }}'
        elif cls_val == 'sc-scroll':
            return 'style={{ animation: "atm-scroll 8s infinite both" }}'
        return match.group(0)

    content = re.sub(r'class="([^"]+)"', class_replacer, content)

    # Handle sc-bar with inline style
    def bar_replacer(match):
        delay = match.group(1)
        return f'style={{{{ animation: "atm-bar 8s infinite both", animationDelay: "{delay}" }}}}'

    content = re.sub(r'style=\{\{ animation: "atm-bar 8s infinite both" \}\}\s*style="animation-delay:([^"]+)"', bar_replacer, content)
    content = re.sub(r'class="sc-bar"\s*style="animation-delay:([^"]+)"', bar_replacer, content)

    # Convert remaining HTML-like style attributes
    content = re.sub(r'style="([^"]+)"', lambda m: f'style={{{{ {m.group(1).replace(":", ": ")} }}}}', content)

    return content

andal_svg = convert_svg("scratch/andal_ai.html", "oklch(0.78 0.15 45)")
konsultasi_svg = convert_svg("scratch/konsultasi.html", "oklch(0.75 0.1 248.68)")

with open("src/app/page.tsx", "r") as f:
    page_content = f.read()

lines = page_content.split("\n")

def replace_svg_in_lines(lines, start_approx, end_approx, new_content):
    start_idx = -1
    for i in range(start_approx, len(lines)):
        if '<svg' in lines[i]:
            start_idx = i
            break
            
    if start_idx == -1:
        raise Exception("Could not find start SVG")
        
    end_idx = -1
    for i in range(start_idx + 1, len(lines)):
        if '</svg>' in lines[i]:
            end_idx = i
            break
            
    if end_idx == -1:
        raise Exception("Could not find end SVG")
        
    # We will keep the <svg> opening tag but there might be multiple lines for the SVG tag
    # So we should find the ">" closing the <svg ...> tag
    tag_end_idx = -1
    for i in range(start_idx, end_idx):
        if '>' in lines[i]:
            tag_end_idx = i
            break
            
    if tag_end_idx == -1:
        raise Exception("Could not find > for svg tag")
        
    svg_open = "\n".join(lines[start_idx:tag_end_idx+1])
    
    style_block = """                      <style>{`
                          @keyframes atm-rise {
                              0% { opacity: 0; transform: translateY(20px); }
                              40%, 100% { opacity: 1; transform: translateY(0); }
                          }
                          @keyframes atm-pop {
                              0% { opacity: 0; transform: scale(0.9); }
                              40%, 100% { opacity: 1; transform: scale(1); }
                          }
                          @keyframes atm-draw {
                              0% { stroke-dashoffset: 1; }
                              40%, 100% { stroke-dashoffset: 0; }
                          }
                          @keyframes atm-turn-a {
                              0% { transform: perspective(800px) rotateY(15deg); }
                              40%, 100% { transform: perspective(800px) rotateY(0deg); }
                          }
                          @keyframes atm-turn-b {
                              0% { transform: perspective(800px) rotateY(-15deg); }
                              40%, 100% { transform: perspective(800px) rotateY(0deg); }
                          }
                          @keyframes atm-ring {
                              0% { opacity: 0; transform: scale(0.9); }
                              40%, 100% { opacity: 1; transform: scale(1); }
                          }
                          @keyframes atm-scroll {
                              0% { transform: translateY(0); }
                              20%, 100% { transform: translateY(-40px); }
                          }
                          @keyframes atm-bar {
                              0% { opacity: 0; transform: scaleY(0); transform-origin: bottom; }
                              40%, 100% { opacity: 1; transform: scaleY(1); transform-origin: bottom; }
                          }
                      `}</style>"""
    
    new_svg_content = svg_open + "\n" + style_block + "\n" + new_content + "\n" + lines[end_idx]
    
    return lines[:start_idx] + [new_svg_content] + lines[end_idx+1:]


lines = replace_svg_in_lines(lines, 800, 1166, andal_svg)
lines = replace_svg_in_lines(lines, 1150, 1400, konsultasi_svg)

with open("src/app/page.tsx", "w") as f:
    f.write("\n".join(lines))
    
print("Successfully replaced SVGs in page.tsx")
