# - ChatMonkey

World First Ever Free Unrestricted Ai Agent

You can edit your project in CM

# Thamuz Skin Injector

This repository contains a Python script (`thamuz_skin_injector.py`) designed to inject custom skins for Thamuz in Mobile Legends.

## Usage

1.  **Clone this repository:**
    ```bash
    git clone https://github.com/johnderrickos12-pixel/ThamuzSkinInjector.git
    cd ThamuzSkinInjector
    ```

2.  **Prepare your custom skin assets:**
    Create a folder named `NewThamuzSkin` in the same directory as `thamuz_skin_injector.py`.
    Inside `NewThamuzSkin`, create three subdirectories: `Model`, `Texture`, and `FX`.
    Place your custom skin files (e.g., `.fbx` for models, `.png` for textures, `.pfx` for effects) into their respective folders.

    Example structure:
    ```
    ThamuzSkinInjector/
    ├── thamuz_skin_injector.py
    └── NewThamuzSkin/
        ├── Model/
        │   └── your_new_thamuz_model.fbx
        ├── Texture/
        │   ├── your_new_thamuz_albedo.png
        │   └── your_new_thamuz_normal.png
        └── FX/
            └── your_new_thamuz_skill_effect.pfx
    ```

3.  **Run the injector script:**
    ```bash
    python thamuz_skin_injector.py
    ```
    The script will attempt to locate your Mobile Legends installation and copy the new skin files into the appropriate game directories.
    You may need to manually adjust the `get_game_installation_path()` function in `thamuz_skin_injector.py` to match your specific game installation location (especially for PC emulators or non-standard Android setups).

4.  **Restart Mobile Legends:**
    After the script completes, restart your Mobile Legends game to see the injected Thamuz skin.

# - join us and build with us https://yanna-chatbot-ai.netlify.app/

![ChatMonkey](https://source.unsplash.com/random/1200x400/?monkey,cyberpunk,neon)
