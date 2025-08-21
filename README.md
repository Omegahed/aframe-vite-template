# A-Frame Vite Template

## 1. Notice

Copyright © 2025 [James Maki](https://www.jamesmaki.com).

## 2. Table of Contents

<!-- TOC -->

- [1. Notice](#1-notice)
- [2. Table of Contents](#2-table-of-contents)
- [3. Introduction](#3-introduction)
- [4. Getting Started](#4-getting-started)
  - [4.1. Prerequisites](#41-prerequisites)
  - [4.2. Installation](#42-installation)
- [5. Development Server](#5-development-server)
  - [5.1. Launch Development Server](#51-launch-development-server)
  - [5.2. Testing in the Browser](#52-testing-in-the-browser)
  - [5.3. Testing on Other Devices on Your Local Network](#53-testing-on-other-devices-on-your-local-network)
  - [5.4. Rapid Development](#54-rapid-development)
  - [5.5. Stopping the Development Server](#55-stopping-the-development-server)
- [6. Creating a Production Build](#6-creating-a-production-build)
- [7. Testing Your Production Build](#7-testing-your-production-build)
- [8. Project Template](#8-project-template)
  - [8.1. Sample Component](#81-sample-component)
  - [8.2. Folder Structure](#82-folder-structure)
- [9. Assets](#9-assets)
  - [9.1. Images](#91-images)
  - [9.2. Audio](#92-audio)
  - [9.3. Video](#93-video)
  - [9.4. glTF Models](#94-gltf-models)
  - [9.5. MSDF Text](#95-msdf-text)
- [10. Frequently Asked Questions (FAQ)](#10-frequently-asked-questions-faq)
  - [10.1. Where should I put my assets?](#101-where-should-i-put-my-assets)
  - [10.2. How do I add additional asset file types to the bundler?](#102-how-do-i-add-additional-asset-file-types-to-the-bundler)
  - [10.3. What if I want the minified version of A-Frame?](#103-what-if-i-want-the-minified-version-of-a-frame)
- [11. References](#11-references)

<!-- /TOC -->

## 3. Introduction

[A-Frame](https://aframe.io) is a powerful open-source
framework for building virtual reality (VR) and augmented
reality (AR) experiences with HTML. One of the key benefits
of A-Frame is that it enables developers to create immersive
experiences without needing to set up or manage complex
build pipelines. In fact, A-Frame does not require any build
or bundler, making it a great choice for rapid prototyping,
proof-of-concepts, and smaller projects.

However, in larger-scale applications, a bundler can be
helpful. A bundler takes multiple modules and combines them
into a single, optimized file that can be efficiently loaded
by the browser. This can improve performance by reducing the
number of HTTP requests needed to load a page. For example,
when working with complex, third-party libraries or custom
components, a bundler can help ensure that all dependencies
are properly resolved and loaded before the application is
ready.

That's where [Vite](https://vite.dev) comes in – an
excellent alternative to traditional bundlers like
[Webpack](https://webpack.js.org/) or
[Rollup](https://rollupjs.org/). Vite offers blazing-fast
development performance, automatic code splitting, and
significantly reduces the amount of specialized knowledge
you need so that you can focus on your immersive experiences
instead of tooling. Its low-config setup make it a great
choice for modern web projects, including A-Frame
applications.

## 4. Getting Started

### 4.1. Prerequisites

You will need [Node.js](https://nodejs.org/) and
[npm](https://www.npmjs.com/) installed on your development
device.

> [!TIP]
> A code editor like [Visual Studio
> Code](https://code.visualstudio.com/) is also recommended.

### 4.2. Installation

1. Copy the **aframe-vite-template** folder from GitHub to
   your local device.

1. Rename the folder to a project name of your choosing,
   e.g., `my-aframe-project`.

1. Open the **package.json** file and set the **name**
   property to your project name, and update the version
   number needed:

    ```json
    {
        "name": "my-aframe-project"

        "version": "0.0.1"
    }
    ```

1. Open Terminal and ensure you are in the project
   directory, e.g., **my-aframe-project**.

1. Install Node packages via npm:

    ```shell
    npm install
    ```

> [!NOTE]
> Depending on your connection speed, it could take
> several minutes to download all the necessary
> dependencies.

## 5. Development Server

### 5.1. Launch Development Server

1. Start the development server:

    ```shell
    npm run dev
    ```

1. A successful launch will produce links to launch the
   default experience in your web browser and provide a
   similar output:

    ```shell
    VITE v6.1.0  ready in 303 ms

    ➜  Local:   https://localhost:5173/
    ➜  Local:   https://localhost.localdomain:5173/
    ➜  Local:   https://lvh.me:5173/
    ➜  Local:   https://vite.lvh.me:5173/
    ➜  Network: https://127.0.0.1:5173/
    ➜  Network: https://192.168.0.1:5173/
    ➜  press h + enter to show help
    ```

### 5.2. Testing in the Browser

1. Open your A-Frame experience in your web browser by
   navigating to the listed URI starting with
   `https://192.168`. Be certain to include the `:5173` port
   number as well.

> [!NOTE]
> Your local IP address may be different than shown,
> be sure to use the exact URI indicated in your Terminal.

### 5.3. Testing on Other Devices on Your Local Network

This template differs slightly from a default Vite
configuration in assuming that you will want to test your
immersive experience with other devices on your local
network – such as an Meta Quest, Apple Vision Pro, or other
head mounted display (HMD).

The template provides two additional configuration options
to help make that possible.

- It is pre-configured to serve the experience using the
  [HTTPS](https://en.wikipedia.org/wiki/HTTPS) – which is
  required for WebXR immersive experiences.

- It is pre-configured to make the experience available on
  your local network.

> [!TIP]
> You may need to approve firewall requests from your
> operating system in order to make the experience visible
> to other devices on your local network.

Though unlikely, if you wish to change either of these
configurations for any reason, you may do so in the
**vite.config.js** file.

1. As before, open your web browser and navigate to the
   listed URI starting with `https://192.168`. Be certain to
   include the `:5173` port number as well.

> [!NOTE]
> Upon opening the link in your browser you may
> receive a variation of a "Your connection is not
> private..." message due to the generated certificate.
> This is expected. Follow your browser's buttons (e.g.,
> Advanced), links, or prompts to enable you to proceed.

### 5.4. Rapid Development

In most cases you may leave the Vite server running while
you develop in your code editor.

Code changes are generally detected when files are saved,
and the Vite development server will force an update on your
page.

Look for changes in your browser or on your headset to be
nearly immediate.

### 5.5. Stopping the Development Server

1. Select **Ctrl**+**C** in the Terminal to stop the
   Development Server.

## 6. Creating a Production Build

1. Use the following command to create a packaged production
   build.

    ```shell
    npm run build
    ```

> [!NOTE]
> The build process takes noticeably longer than
> starting the development server; but should still be quite
> fast.

1. A successful build will produce a similar output:

    ```shell
    > my-aframe-project@0.0.1 build
    > vite build

    vite v6.1.0 building for production...
    ✓ 7 modules transformed.
    dist/index.html                    0.70 kB │ gzip:   0.34 kB
    dist/assets/index-DcM_wdQA.js  1,408.81 kB │ gzip: 392.02 kB

    (!) Some chunks are larger than 500 kB after minification. Consider:
    - Using dynamic import() to code-split the application
    - Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
    - Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
    ✓ built in 3.91s
    ```

Under the hood Vite has used Rollup to optimize and hash
your production code and assets with sensible default
settings and organized in the **dist** directory. This new
directory contains the code that you will want to host on a
public web server in order to share your project.

Files located in the project's **public** directory are also
imported into the **dist** folder. They are unaltered and
unoptimized during the build process. This is great for
files that do not change often and require a very specific
file name, like **favicon.ico**.

## 7. Testing Your Production Build

Once you've created a production build and generated the
**dist** directory you can test it with the production
Preview Server:

1. Open the Terminal and run the following command:

    ```shell
    npm run preview
    ```

1. As before, you will end up with a very similar output,
   but note that the port for the Preview Server has changed
   to **4173**.

    ```shell
    > my-aframe-project@0.0.1 preview
    > vite preview --host

    ➜  Local:   https://localhost:4173/
    ➜  Local:   https://localhost.localdomain:4173/
    ➜  Local:   https://lvh.me:4173/
    ➜  Local:   https://vite.lvh.me:4173/
    ➜  Network: https://127.0.0.1:4173/
    ➜  Network: https://192.168.0.1:4173/
    ➜  press h + enter to show help
    ```

> [!IMPORTANT]
> The Preview Server port is now 4173.

## 8. Project Template

### 8.1. Sample Component

This project includes a very basic sample component
(**random-color.js**) to demonstrate how a custom component
can be included in the project, and how to reference in the
**index.html** file.

The component simply sets a random color onto the material
property of the `<a-sphere>` element every two (2) seconds.
It can easily be removed by *deleting* the `random-color`
attribute from the sphere, and *removing* the following
import statement from **index.html**:

```html
<!-- ... -->
<head>
    <script type="module">
        // ...
        import "./src/components/random-color.js";
        // ...
    </script>
</head>
<!-- ... -->
```

### 8.2. Folder Structure

Sometimes when setting up a project from scratch it's
unclear what the best way to organize files are. The
template suggests a reasonable folder structure that works
well, but you may change it as needed.

## 9. Assets

The following section provides suggestions on how to import
common asset types.

> [!IMPORTANT]
> Assets located in the **assets/** directory
> need to be imported using an `import` statement so that
> Vite include them in the **dist** bundle.

These examples suggest using the
[A-Frame Asset Management System](https://aframe.io/docs/master/core/asset-management-system.html).

> [!NOTE]
> Sample assets are not provided as part of this project.

### 9.1. Images

Suggested asset location: **src/assets/images/**

Example: **index.html**

```html
<!DOCTYPE html>
<html>
<head>
    <script type="module">
        import "aframe";
        // ...
        import "./src/assets/images/my-image.png";
        // ...
    </script>
</head>
<body>
    <a-scene>
        <a-assets>
            <!-- ... -->

            <img id="my-image" src="./src/assets/images/my-image.png" />

            <!-- ... -->
        </a-assets>

        <!-- ... -->

        <a-image src="#my-image"></a-image>

        <!-- ... -->

    </a-scene>
</body>
</html>
```

> [!TIP]
> See
> [\<a-image\>](https://aframe.io/docs/master/primitives/a-image.html)
> for more information on usage.

### 9.2. Audio

Suggested asset location: **src/assets/audio/**

Example: **index.html**

```html
<!DOCTYPE html>
<html>
<head>
    <script type="module">
        import "aframe";
        // ...
        import "./src/assets/audio/my-audio.mp3";
        // ...
    </script>
</head>
<body>
    <a-scene>
        <a-assets>
            <!-- ... -->

            <audio id="my-audio" src="./src/assets/audio/my-audio.mp3"></audio>

            <!-- ... -->
        </a-assets>

        <!-- ... -->

        <a-sound src="#my-audio"></a-sound>

        <!-- ... -->

    </a-scene>
</body>
</html>
```

> [!TIP]
> See
> [\<a-sound\>](https://aframe.io/docs/master/primitives/a-sound.html)
> for more information on usage.

### 9.3. Video

Suggested asset location: **src/assets/video/**

Example: **index.html**

```html
<!DOCTYPE html>
<html>
<head>
    <script type="module">
        import "aframe";
        // ...
        import "./src/assets/videos/my-video.mp4";
        // ...
    </script>
</head>
<body>
    <a-scene>
        <a-assets>
            <!-- ... -->

            <video id="my-video" src="./src/assets/videos/my-video.mp4"></video>

            <!-- ... -->
        </a-assets>

        <!-- ... -->

        <a-video src="#my-video"></a-sound>

        <!-- ... -->

    </a-scene>
</body>
</html>
```

> [!TIP]
> See
> [\<a-video\>](https://aframe.io/docs/master/primitives/a-video.html)
> for more information on usage.

### 9.4. glTF Models

This template supports [glTF](https://www.khronos.org/gltf/)
**\*.gltf** and **\*.glb** file types.

Suggested asset location: **src/assets/models/**

Example: **index.html**

```html
<!DOCTYPE html>
<html>
<head>
    <script type="module">
        import "aframe";
        // ...
        import "./src/assets/models/my-model.glb";
        // ...
    </script>
</head>
<body>
    <a-scene>
        <a-assets>
            <!-- ... -->

            <a-asset-item
                id="my-model"
                src="./src/assets/models/my-model.glb"
            ></a-asset-item>

            <!-- ... -->
        </a-assets>

        <!-- ... -->

        <a-gltf-model src="#my-model"></a-gltf-model>

        <!-- ... -->

    </a-scene>
</body>
</html>
```

> [!TIP]
> See
> [\<a-gltf-model\>](https://aframe.io/docs/master/primitives/a-gltf-model.html)
> for more information on usage.

### 9.5. MSDF Text

The A-Frame
[text component](https://aframe.io/docs/master/components/text.html)
uses a multi-signed distance field (MSDF) font to render
text within the 3D scene. This is significantly different
than vector-based fonts typically used in 2D web application
UI (e.g., \*.woff, \*.ttf, \*.eot, etc. ).

Some projects may use one, or the other, or a combination of
both. Vector-based fonts for the 2D UI layer can be added to
the **assets/fonts/** directory. MSDF fonts require a
different approach.

> [!WARNING]
> This template does not currently support proper
> hashing of MSDF fonts, so they must be stored in the
> project's **public/** directory.

Suggested asset location: **public/msdf-fonts/**

> [!IMPORTANT]
> Note that the file path pattern has changed
> from the previous asset type examples. Ensure that you
> include both the **\*.png** and **\*.json** files for your
> MSDF font.

Example: **index.html**

```html
<!DOCTYPE html>
<html>
<head>
    <script type="module">
        import "aframe";
        // ...
        import "/public/msdf-fonts/my-font.png";
        import "/public/msdf-fonts/my-font-msdf.json";
        // ...
    </script>
</head>
<body>
    <a-scene>
        <a-assets>
            <!-- ... -->
        </a-assets>

        <!-- ... -->

        <a-text
            value="Hello, World!"
            font="/msdf-fonts/my-font-msdf.json"
        ></a-text>

        <!-- ... -->

    </a-scene>
</body>
</html>
```

> [!TIP]
> See
> [\<a-text\>](https://aframe.io/docs/master/primitives/a-text.html)
> for more information on usage.

## 10. Frequently Asked Questions (FAQ)

### 10.1. Where should I put my assets?

To take full advantage of Vite's bundling and asset hashing
capabilities, files should be contained in the
**src/assets/** directory – with the noted exception of MSDF
fonts, which this template does not currently handle
hashing.

You may use the
[**public/**](https://vite.dev/guide/assets.html#the-public-directory)
folder for any other assets which aren't properly bundled or
that you don't wish to have hashed in the production build.

### 10.2. How do I add additional asset file types to the bundler?

You can add additional file types to the **assetsInclude**
parameter of the **vite.config.js** file:

```javascript
// ...
export default defineConfig(
    {
        // ...
        assetsInclude:
        [
            "**/*.gltf",
            "**/*.glb",
            // Your file type(s) here.
        ],
        // ...
    }
);
```

### 10.3. What if I want the minified version of A-Frame?

Update the import statement in with the minified version
specified in **index.html**:

```html
    <!-- ... -->

<script type="module">
    import "/node_modules/aframe/dist/aframe-master.min.js";
    // ...
</script>

    <!-- ... -->
```

## 11. References

- [A-Frame](https://aframe.io)
- [Vite](https://vite.dev)
- [Rollup](https://rollupjs.org/)
- [Khronos | glTF](https://www.khronos.org/gltf/)
