# Tauri + Vue 3

<a src="https://github.com/EvanBacon">@EvanBacon</a> Crossy road clone from https://github.com/EvanBacon/Expo-Crossy-Road but inserted through iframe to tauri.
## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

# Installation
Just use ```yarn```

It should install all stuff here and in /game and compile react native web app from /game folder and move it to /public.

Now you just need to do ```yarn tauri:build```

If you want to make changes in /game you will need to recompile stuff and move them to /public again. ```yarn``` again should work for this.
