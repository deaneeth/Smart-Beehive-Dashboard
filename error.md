[12:41:10.424] Running build in Washington, D.C., USA (East) – iad1
[12:41:10.424] Build machine configuration: 2 cores, 8 GB
[12:41:10.467] Cloning github.com/deaneeth/Smart-Beehive-Monitor-System-Dashboard (Branch: main, Commit: 68046dc)
[12:41:10.488] Skipping build cache, deployment was triggered without cache.
[12:41:11.130] Cloning completed: 662.000ms
[12:41:11.753] Running "vercel build"
[12:41:12.216] Vercel CLI 42.1.1
[12:41:12.725] Installing dependencies...
[12:41:27.625] 
[12:41:27.626] added 265 packages in 15s
[12:41:27.627] 
[12:41:27.627] 15 packages are looking for funding
[12:41:27.627]   run `npm fund` for details
[12:41:27.687] Detected Next.js version: 15.3.2
[12:41:27.690] Running "npm run build"
[12:41:27.802] 
[12:41:27.802] > honey-management-website@0.1.0 build
[12:41:27.802] > next build
[12:41:27.803] 
[12:41:28.391] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[12:41:28.392] This information is used to shape Next.js' roadmap and prioritize features.
[12:41:28.392] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[12:41:28.392] https://nextjs.org/telemetry
[12:41:28.392] 
[12:41:28.489]    ▲ Next.js 15.3.2
[12:41:28.490] 
[12:41:28.515]    Creating an optimized production build ...
[12:41:52.574]  ✓ Compiled successfully in 20.0s
[12:41:52.578]    Linting and checking validity of types ...
[12:41:56.757] Failed to compile.
[12:41:56.757] 
[12:41:56.758] ./app/pages/dashboard/environment/page.tsx:57:30
[12:41:56.758] Type error: Property 'daily_average' does not exist on type '{}'.
[12:41:56.759] 
[12:41:56.759] [0m [90m 55 |[39m[0m
[12:41:56.759] [0m [90m 56 |[39m         [33mObject[39m[33m.[39mentries(data)[33m.[39mforEach(([date[33m,[39m entry]) [33m=>[39m {[0m
[12:41:56.759] [0m[31m[1m>[22m[39m[90m 57 |[39m           [36mconst[39m avg [33m=[39m entry[33m?[39m[33m.[39mdaily_average[33m;[39m[0m
[12:41:56.759] [0m [90m    |[39m                              [31m[1m^[22m[39m[0m
[12:41:56.759] [0m [90m 58 |[39m           [36mif[39m (avg) {[0m
[12:41:56.759] [0m [90m 59 |[39m             humidityArr[33m.[39mpush({ timestamp[33m:[39m date[33m,[39m value[33m:[39m avg[33m.[39mhumidity })[33m;[39m[0m
[12:41:56.760] [0m [90m 60 |[39m             gasResArr[33m.[39mpush({ timestamp[33m:[39m date[33m,[39m value[33m:[39m avg[33m.[39mgas_resistance })[33m;[39m[0m
[12:41:56.781] Next.js build worker exited with code: 1 and signal: null
[12:41:56.801] Error: Command "npm run build" exited with 1
[12:41:57.075] 
[12:42:00.372] Exiting build container