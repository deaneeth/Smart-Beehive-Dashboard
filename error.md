[12:21:28.663] Running build in Washington, D.C., USA (East) – iad1
[12:21:28.664] Build machine configuration: 2 cores, 8 GB
[12:21:28.692] Cloning github.com/deaneeth/Smart-Beehive-Monitor-System-Dashboard (Branch: main, Commit: c11cd96)
[12:21:28.892] Previous build caches not available
[12:21:29.132] Cloning completed: 440.000ms
[12:21:29.717] Running "vercel build"
[12:21:30.185] Vercel CLI 42.1.1
[12:21:30.471] Installing dependencies...
[12:21:46.319] 
[12:21:46.320] added 265 packages in 16s
[12:21:46.321] 
[12:21:46.321] 15 packages are looking for funding
[12:21:46.322]   run `npm fund` for details
[12:21:46.443] Detected Next.js version: 15.3.2
[12:21:46.474] Running "npm run build"
[12:21:46.729] 
[12:21:46.729] > honey-management-website@0.1.0 build
[12:21:46.729] > next build
[12:21:46.729] 
[12:21:48.301] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[12:21:48.302] This information is used to shape Next.js' roadmap and prioritize features.
[12:21:48.303] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[12:21:48.303] https://nextjs.org/telemetry
[12:21:48.303] 
[12:21:48.439]    ▲ Next.js 15.3.2
[12:21:48.440] 
[12:21:48.616]    Creating an optimized production build ...
[12:22:12.572]  ✓ Compiled successfully in 20.0s
[12:22:12.578]    Linting and checking validity of types ...
[12:22:16.694] Failed to compile.
[12:22:16.695] 
[12:22:16.695] ./app/pages/dashboard/environment/page.tsx:46:15
[12:22:16.695] Type error: Variable 'humidityArr' implicitly has type 'any[]' in some locations where its type cannot be determined.
[12:22:16.695] 
[12:22:16.695] [0m [90m 44 |[39m       [36mconst[39m data [33m=[39m snapshot[33m.[39mval()[33m;[39m[0m
[12:22:16.695] [0m [90m 45 |[39m       [36mif[39m (data) {[0m
[12:22:16.695] [0m[31m[1m>[22m[39m[90m 46 |[39m         [36mconst[39m humidityArr [33m=[39m [][33m;[39m[0m
[12:22:16.695] [0m [90m    |[39m               [31m[1m^[22m[39m[0m
[12:22:16.695] [0m [90m 47 |[39m         [36mconst[39m gasResArr [33m=[39m [][33m;[39m[0m
[12:22:16.695] [0m [90m 48 |[39m         [36mconst[39m pressureArr [33m=[39m [][33m;[39m[0m
[12:22:16.695] [0m [90m 49 |[39m         [36mconst[39m tempArr [33m=[39m [][33m;[39m[0m
[12:22:16.714] Next.js build worker exited with code: 1 and signal: null
[12:22:16.737] Error: Command "npm run build" exited with 1
[12:22:17.171] 
[12:22:20.173] Exiting build container