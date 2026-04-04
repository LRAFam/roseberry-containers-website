<template>
  <div class="iso-wrap">
    <!--
      Isometric projection — viewer from front-right-above
      Key vertices (SVG coords):
        A(0,0)        B(173.2,100)   front bottom edge
        E(0,-70)      F(173.2,30)    front top edge
        C(121.2,130)  G(121.2,60)    back-right bottom/top
        H(-52,-40)                   back-left top
      Visible faces: long side (A-B-F-E), door end (B-C-G-F), top (E-F-G-H)
    -->
    <svg viewBox="-65 -85 255 235" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <defs>
        <linearGradient id="iso-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#52b07e"/>
          <stop offset="100%" stop-color="#3a9068"/>
        </linearGradient>
        <linearGradient id="iso-side" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#2d7a55"/>
          <stop offset="100%" stop-color="#1e5c40"/>
        </linearGradient>
        <linearGradient id="iso-door" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1a5c38"/>
          <stop offset="100%" stop-color="#143d27"/>
        </linearGradient>
        <radialGradient id="iso-shad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#000" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#000" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- Ground shadow -->
      <ellipse cx="65" cy="152" rx="110" ry="11" fill="url(#iso-shad)"/>

      <!-- ── LONG SIDE FACE (A-B-F-E) ── -->
      <polygon points="0,0 173.2,100 173.2,30 0,-70" fill="url(#iso-side)"/>

      <!-- Alternating corrugation panel highlights -->
      <g fill="#3a9068" opacity="0.28">
        <polygon points="0,0 14.4,8.3 14.4,-61.7 0,-70"/>
        <polygon points="28.9,16.7 43.3,25 43.3,-45 28.9,-53.3"/>
        <polygon points="57.7,33.3 72.2,41.7 72.2,-28.3 57.7,-36.7"/>
        <polygon points="86.6,50 101,58.3 101,-11.7 86.6,-20"/>
        <polygon points="115.5,66.7 129.9,75 129.9,5 115.5,-3.3"/>
        <polygon points="144.3,83.3 158.8,91.7 158.8,21.7 144.3,13.3"/>
      </g>

      <!-- Corrugation lines (11 inner lines between 12 panels) -->
      <g stroke="#1a5c40" stroke-width="0.8" fill="none">
        <line x1="14.4"  y1="8.3"  x2="14.4"  y2="-61.7"/>
        <line x1="28.9"  y1="16.7" x2="28.9"  y2="-53.3"/>
        <line x1="43.3"  y1="25"   x2="43.3"  y2="-45"/>
        <line x1="57.7"  y1="33.3" x2="57.7"  y2="-36.7"/>
        <line x1="72.2"  y1="41.7" x2="72.2"  y2="-28.3"/>
        <line x1="86.6"  y1="50"   x2="86.6"  y2="-20"/>
        <line x1="101"   y1="58.3" x2="101"   y2="-11.7"/>
        <line x1="115.5" y1="66.7" x2="115.5" y2="-3.3"/>
        <line x1="129.9" y1="75"   x2="129.9" y2="5"/>
        <line x1="144.3" y1="83.3" x2="144.3" y2="13.3"/>
        <line x1="158.8" y1="91.7" x2="158.8" y2="21.7"/>
      </g>

      <!-- Top rail on long face -->
      <polygon points="0,-70 173.2,30 173.2,34 0,-66" fill="#0d3a22"/>
      <!-- Bottom rail on long face -->
      <polygon points="0,0 173.2,100 173.2,104 0,4" fill="#0d3a22"/>

      <!-- Company branding text — rotate(30) follows the isometric X-axis direction -->
      <g transform="translate(86.6, 15) rotate(30)" text-anchor="middle">
        <text x="0" y="-6"
          font-size="10" font-family="Arial, sans-serif"
          font-weight="bold" fill="#f59e0b" letter-spacing="2.5">ROSEBERRY</text>
        <text x="0" y="5"
          font-size="7" font-family="Arial, sans-serif"
          font-weight="bold" fill="#fcd34d" letter-spacing="1.5">CONTAINERS</text>
      </g>

      <!-- ── DOOR END FACE (B-C-G-F) ── -->
      <polygon points="173.2,100 121.2,130 121.2,60 173.2,30" fill="url(#iso-door)"/>

      <!-- Door centre split -->
      <line x1="147.2" y1="45" x2="147.2" y2="115" stroke="#0a2018" stroke-width="1.5" fill="none"/>

      <!-- Left door panel subtle highlight -->
      <polygon points="173.2,100 173.2,30 147.2,45 147.2,115" fill="#2a7050" opacity="0.25"/>

      <!-- Cam locking rods -->
      <line x1="160.2" y1="37.5"  x2="160.2" y2="107.5" stroke="#0a2018" stroke-width="2" fill="none"/>
      <line x1="134.2" y1="52.5"  x2="134.2" y2="122.5" stroke="#0a2018" stroke-width="2" fill="none"/>

      <!-- Cam lock circles with green highlight -->
      <circle cx="160.2" cy="72.5" r="3"   fill="#0a2018"/>
      <circle cx="160.2" cy="72.5" r="1.5" fill="#4abe82"/>
      <circle cx="134.2" cy="87.5" r="3"   fill="#0a2018"/>
      <circle cx="134.2" cy="87.5" r="1.5" fill="#4abe82"/>

      <!-- Hinge bars — left door outer edge (x=173.2) -->
      <g fill="#0a2018">
        <rect x="171.7" y="43.5" width="3" height="6.5" rx="0.5"/>
        <rect x="171.7" y="63.5" width="3" height="6.5" rx="0.5"/>
        <rect x="171.7" y="83.5" width="3" height="6.5" rx="0.5"/>
      </g>

      <!-- Hinge bars — right door outer edge (x=121.2) -->
      <g fill="#0a2018">
        <rect x="119.7" y="73.5"  width="3" height="6.5" rx="0.5"/>
        <rect x="119.7" y="93.5"  width="3" height="6.5" rx="0.5"/>
        <rect x="119.7" y="113.5" width="3" height="6.5" rx="0.5"/>
      </g>

      <!-- Door face top/bottom rails -->
      <polygon points="173.2,30 121.2,60 121.2,64 173.2,34" fill="#0d3a22"/>
      <polygon points="173.2,100 121.2,130 121.2,134 173.2,104" fill="#0d3a22"/>

      <!-- ── TOP FACE (E-F-G-H) ── -->
      <polygon points="0,-70 173.2,30 121.2,60 -52,-40" fill="url(#iso-top)"/>

      <!-- Top face grid lines (length direction at 1/3, 2/3; width direction at 1/3, 2/3) -->
      <g stroke="#2a9060" stroke-width="0.5" opacity="0.45" fill="none">
        <line x1="43.3"  y1="-45" x2="-8.7"  y2="-15"/>
        <line x1="86.6"  y1="-20" x2="34.6"  y2="10"/>
        <line x1="129.9" y1="5"   x2="77.9"  y2="35"/>
        <line x1="-17.3" y1="-60" x2="155.9" y2="40"/>
        <line x1="-34.7" y1="-50" x2="138.5" y2="50"/>
      </g>

      <!-- ── OUTLINE EDGES (framing / depth) ── -->
      <g stroke="#0a2018" stroke-width="1.5" fill="none" stroke-linejoin="round">
        <!-- Long face -->
        <line x1="0"     y1="0"    x2="173.2" y2="100"/>
        <line x1="0"     y1="-70"  x2="173.2" y2="30"/>
        <line x1="0"     y1="0"    x2="0"     y2="-70"/>
        <line x1="173.2" y1="100"  x2="173.2" y2="30"/>
        <!-- Door face -->
        <line x1="173.2" y1="100"  x2="121.2" y2="130"/>
        <line x1="121.2" y1="130"  x2="121.2" y2="60"/>
        <line x1="121.2" y1="60"   x2="173.2" y2="30"/>
        <!-- Top face back edges -->
        <line x1="0"     y1="-70"  x2="-52"   y2="-40"/>
        <line x1="-52"   y1="-40"  x2="121.2" y2="60"/>
      </g>
    </svg>
  </div>
</template>

<style scoped>
.iso-wrap {
  animation: isoFloat 4s ease-in-out infinite;
}

@keyframes isoFloat {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
}
</style>
