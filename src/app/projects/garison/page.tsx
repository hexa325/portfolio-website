import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlueprintExplainer from "@/components/BlueprintExplainer";
import Image from "next/image";

const isGitHubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/portfolio-website" : "";

export default function GarisonShowcase() {
  const screenshots = [
    { src: `${basePath}/projects/garison/ss1.png`, alt: "Garison Gameplay - Combat", caption: "Modular state machines handling AI combat patterns." },
    { src: `${basePath}/projects/garison/ss2.png`, alt: "Garison - Inventory", caption: "Custom UI system built from scratch in GML." },
    { src: `${basePath}/projects/garison/ss3.png`, alt: "Garison - Map", caption: "Procedural generation logic for environmental details." },
  ];

  const heroHotspots = [
    {
      x: 15,
      y: 15,
      label: "Inventory System",
      description: "A robust constructor-based inventory featuring item stacking (up to 99), slot management, and dynamic item removal logic.",
      code: "function Inventory() constructor {\n  inventoryItems = [];\n  item_add = function (_name, _quantity, _sprite, _description) {\n    var index = item_find(_name);\n    while (index >= 0 && remaining > 0) {\n      var current_quantity = inventoryItems[index].quantity;\n      if (current_quantity < 99) {\n        var can_add = min(99 - current_quantity, remaining);\n        inventoryItems[index].quantity += can_add;\n        remaining -= can_add;\n      }\n    }\n  }\n}"
    },
    {
      x: 10,
      y: 30,
      label: "Enemy State Machine",
      description: "Finite State Machine handling WANDER, CHASE, and ATTACK logic for entities, including smooth tile-based collision response.",
      code: "function EnemyWander() {\n  if((x == xTo) && (y == yTo)) || (timePassed > enemyWanderDistance / enemySpeed) {\n    if(++wait >= waitDuration) {\n      dir = point_direction(x, y, xstart, ystart) + irandom_range(-45, 45);\n      xTo = x + lengthdir_x(enemyWanderDistance, dir);\n      yTo = y + lengthdir_y(enemyWanderDistance, dir);\n    }\n  }\n  if(++aggroCheck >= aggroCheckDuration) {\n    if(instance_exists(oPlayer)) && (point_distance(x,y,oPlayer.x,oPlayer.y) <= enemyAggroRadius) {\n      state = ENEMYSTATE.CHASE;\n    }\n  }\n}"
    },
    {
      x: 8,
      y: 50,
      label: "Day/Night Shader",
      description: "GLSL fragment shader that mixes day/night colors based on game time and handles dynamic lightning flashes via surface blending.",
      code: "void main() {\n  vec4 pixel = v_vColour * texture2D(gm_BaseTexture, v_vTexcoord);\n  vec4 lightPixel = texture2D(lightTexture, v_vTexcoord);\n  vec3 ambient_color = mix(day_color, night_color, dayTime);\n  vec3 color_with_lamps = min(vec3(1.0), ambient_color + (lightPixel.rgb * dayTime));\n  vec3 final_color = mix(color_with_lamps, vec3(0.9, 0.95, 1.0), lightningFlash);\n  gl_FragColor = vec4(pixel.rgb * final_color.rgb, pixel.a);\n}"
    },
    {
      x: 10,
      y: 70,
      label: "Dialogue Engine",
      description: "A dynamic, tag-based parser supporting real-time text effects (shake, wave, color) and interactive branching choices with timers.",
      code: "function scr_text(_text) {\n  var _char_pos = string_pos(\"<\", _text);\n  while(_char_pos > 0) {\n    var _tag_end = string_pos(\">\", _text);\n    var _tag = string_copy(_text, _char_pos + 1, _tag_end - _char_pos - 1);\n    if (_tag == \"shake\") shake_text[char_index, page] = true;\n    if (_tag == \"c:red\") col_1[char_index, page] = c_red;\n    _text = string_delete(_text, _char_pos, _tag_end - _char_pos + 1);\n    _char_pos = string_pos(\"<\", _text);\n  }\n}"
    },
    {
      x: 15,
      y: 85,
      label: "JSON Save System",
      description: "Global and per-room serialization. Converts complex DS Maps and Inventories into stringified JSON buffers for disk persistence.",
      code: "function SaveRoom() {\n  var _root_list = ds_list_create();\n  with (oParEntity) {\n    var _map = ds_map_create();\n    ds_map_add(_map, \"obj\", object_get_name(object_index));\n    ds_map_add(_map, \"y\", y);\n    ds_map_add(_map, \"x\", x);\n    ds_list_add(_root_list, _map); \n    ds_list_mark_as_map(_root_list, ds_list_size(_root_list)-1);\n  }\n  var _string = json_encode(_root_list);\n  SaveStringToFile(\"room_\" + string(room) + \".txt\", _string);\n}"
    },
    {
      x: 25,
      y: 92,
      label: "Quest Controller",
      description: "State-driven quest logic integrated with dialogue. Uses global status maps to manage progression from 'Not Started' to 'Completed'.",
      code: "function ActivateMaskQuest() {\n  switch(global.questStatus[? \"MaskQuest\"]) {\n    case 0: \n      create_textbox(\"Find the mask...\");\n      global.questStatus[? \"MaskQuest\"] = 1;\n      break;\n    case 1: \n      if (global.iLifted == oMask) {\n        create_textbox(\"You found it!\");\n        global.questStatus[? \"MaskQuest\"] = 2;\n      }\n      break;\n  }\n}"
    }
  ];

  return (
    <main className="min-h-screen bg-[#f4f4f0] dark:bg-[#111111]">
      <Navbar />
      
      <div className="pt-32 pb-24 section-container">
        {/* HEADER */}
        <div className="mb-16 border-b-8 border-black dark:border-white pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <div className="marker-box inline-block cursor-help">PROJECT_SHOWCASE</div>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter uppercase leading-[0.8]">
                Garison
              </h1>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://github.com/hexa325/garison2023" 
                target="_blank" 
                rel="noopener noreferrer"
                className="sync-inv mechanical-click"
              >
                View Source
              </a>
            </div>
          </div>
        </div>

        {/* INTERACTIVE BLUEPRINT HERO */}
        <div className="mb-24">
          <BlueprintExplainer 
            title="CORE_ENGINE_ARCHITECTURE"
            imageSrc="" // Placeholder for now
            alt="Garison Gameplay Schematic"
            hotspots={heroHotspots}
          />
          <p className="mt-4 text-xs font-mono opacity-40 uppercase tracking-widest text-center animate-pulse">
            [ INTERACTIVE: HOVER OVER NODES TO VIEW SYSTEM SCHEMATICS ]
          </p>
        </div>

        {/* TECH SPECS GRID */}
        <div className="grid lg:grid-cols-3 gap-12 mb-32">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-8 bg-blue-600 flex items-center justify-center text-white text-sm">01</span>
                The Vision
              </h2>
              <p className="text-xl font-mono text-black/70 dark:text-white/70 leading-relaxed">
                Garison was born from a desire to push the limits of GameMaker Studio 2. The goal was to create a top-down action RPG that didn't just look good, but felt mechanically deep. I focused on building reusable systems: a custom pathfinding engine, a flexible dialogue system, and a shader-based lighting engine.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold uppercase mb-6 flex items-center gap-4">
                <span className="w-8 h-8 bg-blue-600 flex items-center justify-center text-white text-sm">02</span>
                Technical Breakdown
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="sync-card p-6 space-y-4">
                  <h3 className="font-bold uppercase tracking-tight">Tag-Based Dialogue</h3>
                  <p className="text-sm font-mono text-black/60 dark:text-white/60">
                    Real-time text parser supporting per-character styling and animations. Branching logic integrated with global quest flags.
                  </p>
                </div>
                <div className="sync-card p-6 space-y-4">
                  <h3 className="font-bold uppercase tracking-tight">Persistence Layer</h3>
                  <p className="text-sm font-mono text-black/60 dark:text-white/60">
                    JSON-based serialization using fixed-size buffers for high-performance saving of world state, player stats, and inventory.
                  </p>
                </div>
                <div className="sync-card p-6 space-y-4">
                  <h3 className="font-bold uppercase tracking-tight">Modular AI FSM</h3>
                  <p className="text-sm font-mono text-black/60 dark:text-white/60">
                    Clean separation of behavior logic (Wander, Chase, Attack) allowing for rapid iteration on enemy types without side effects.
                  </p>
                </div>
                <div className="sync-card p-6 space-y-4">
                  <h3 className="font-bold uppercase tracking-tight">Custom UI Stack</h3>
                  <p className="text-sm font-mono text-black/60 dark:text-white/60">
                    Lightweight UI framework built from scratch to handle inventory grids, branching options, and interactive hud elements.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="p-8 border-4 border-black dark:border-white bg-white dark:bg-black">
              <h3 className="font-bold uppercase mb-4 text-xs tracking-widest text-blue-600">Schematic_Info</h3>
              <ul className="space-y-4 font-mono text-sm">
                <li className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span className="opacity-50 text-xs">VERSION</span>
                  <span className="font-bold">2023_EDITION</span>
                </li>
                <li className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span className="opacity-50 text-xs">ENGINE</span>
                  <span className="font-bold">GMS 2.3+</span>
                </li>
                <li className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span className="opacity-50 text-xs">LANGUAGE</span>
                  <span className="font-bold">GML / GLSL</span>
                </li>
                <li className="flex justify-between border-b border-black/10 dark:border-white/10 pb-2">
                  <span className="opacity-50 text-xs">ARCHITECTURE</span>
                  <span className="font-bold">MODULAR_SCRIPTS</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 border-4 border-dashed border-black/20 dark:border-white/20">
              <h3 className="font-bold uppercase mb-4 text-xs tracking-widest opacity-50">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {["GML", "Serialization", "Dialogue Engine", "GLSL", "AI State Machines", "UI Framework"].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-black text-white dark:bg-white dark:text-black text-[10px] font-bold uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* GALLERY SECTION */}
        <div className="space-y-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Visual Identity</h2>
            <div className="h-2 w-24 bg-blue-600 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {screenshots.map((ss, i) => (
              <div key={i} className="space-y-4 group">
                <div className="relative aspect-square border-4 border-black dark:border-white overflow-hidden bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center group-hover:border-blue-600 transition-colors">
                   <div className="absolute inset-0 blueprint-grid opacity-0 group-hover:opacity-20 transition-opacity" />
                   <p className="text-sm font-mono opacity-20 uppercase">Screenshot {i+1} Placeholder</p>
                </div>
                <div>
                   <h4 className="font-bold uppercase text-lg group-hover:text-blue-600 transition-colors">{ss.alt}</h4>
                   <p className="text-sm font-mono opacity-60">{ss.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
