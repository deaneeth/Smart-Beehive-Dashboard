[12:45:58.485] Running build in Washington, D.C., USA (East) – iad1
[12:45:58.486] Build machine configuration: 2 cores, 8 GB
[12:45:58.499] Cloning github.com/deaneeth/Smart-Beehive-Monitor-System-Dashboard (Branch: main, Commit: 68046dc)
[12:45:58.507] Skipping build cache, deployment was triggered without cache.
[12:45:59.624] Cloning completed: 1.123s
[12:45:59.973] Running "vercel build"
[12:46:00.605] Vercel CLI 42.1.1
[12:46:00.923] Installing dependencies...
[12:46:16.018] 
[12:46:16.019] added 265 packages in 15s
[12:46:16.019] 
[12:46:16.020] 15 packages are looking for funding
[12:46:16.020]   run `npm fund` for details
[12:46:16.080] Detected Next.js version: 15.3.2
[12:46:16.084] Running "npm run build"
[12:46:16.197] 
[12:46:16.197] > honey-management-website@0.1.0 build
[12:46:16.198] > next build
[12:46:16.198] 
[12:46:16.796] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[12:46:16.797] This information is used to shape Next.js' roadmap and prioritize features.
[12:46:16.797] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[12:46:16.797] https://nextjs.org/telemetry
[12:46:16.797] 
[12:46:16.897]    ▲ Next.js 15.3.2
[12:46:16.898] 
[12:46:16.925]    Creating an optimized production build ...
[12:46:40.403]  ✓ Compiled successfully in 19.0s
[12:46:40.407]    Linting and checking validity of types ...
[12:46:44.569] Failed to compile.
[12:46:44.570] 
[12:46:44.570] ./app/pages/dashboard/environment/page.tsx:57:30
[12:46:44.570] Type error: Property 'daily_average' does not exist on type '{}'.
[12:46:44.571] 
[12:46:44.572] [0m [90m 55 |[39m[0m
[12:46:44.572] [0m [90m 56 |[39m         [33mObject[39m[33m.[39mentries(data)[33m.[39mforEach(([date[33m,[39m entry]) [33m=>[39m {[0m
[12:46:44.572] [0m[31m[1m>[22m[39m[90m 57 |[39m           [36mconst[39m avg [33m=[39m entry[33m?[39m[33m.[39mdaily_average[33m;[39m[0m
[12:46:44.572] [0m [90m    |[39m                              [31m[1m^[22m[39m[0m
[12:46:44.572] [0m [90m 58 |[39m           [36mif[39m (avg) {[0m
[12:46:44.573] [0m [90m 59 |[39m             humidityArr[33m.[39mpush({ timestamp[33m:[39m date[33m,[39m value[33m:[39m avg[33m.[39mhumidity })[33m;[39m[0m
[12:46:44.573] [0m [90m 60 |[39m             gasResArr[33m.[39mpush({ timestamp[33m:[39m date[33m,[39m value[33m:[39m avg[33m.[39mgas_resistance })[33m;[39m[0m
[12:46:44.591] Next.js build worker exited with code: 1 and signal: null
[12:46:44.612] Error: Command "npm run build" exited with 1
[12:46:44.896] 
[12:46:48.223] Exiting build container