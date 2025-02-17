import { defineConfig } from "vite";
import path from "path";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
    server: { https: true },
    preview: { https: true },
    assetsInclude: [ "**/*.gltf", "**/*.glb" ],
    plugins:
    [
        basicSsl(),
        {
            name: "vite-plugin-aframe-assets",
            enforce: "post",
            transformIndexHtml( html, { bundle } )
            {
                const aframeAssetRegex = /<(a-(?:asset-item|image|video|sound))[^>]*?src=["']([^"']+)["'][^>]*?>/gi;

                return html.replace(
                    aframeAssetRegex,
                    ( match, tag, src ) =>
                    {
                        if ( !src.startsWith( "/" ) && !src.startsWith( "." ) )
                        {
                            return match;
                        }

                        const assetFile = path.posix.join( "public", src );

                        const hashedAsset = bundle
                            && Object.values( bundle ).find(
                                file =>
                                    file.name === path.basename( assetFile )
                            );
                        
                        return match.replace(
                            src,
                            hashedAsset ? `/${hashedAsset.fileName}` : src
                        );
                    }
                );
            },
            generateBundle( _, bundle )
            {
                Object.values( bundle ).forEach(
                    file =>
                    {
                        if (
                            ( file.type === "asset" )
                            && file.fileName.startsWith("assets/" )
                        )
                        {
                            this.emitFile(
                                {
                                    type: "asset",
                                    fileName: file.fileName,
                                    source: file.source
                                }
                            );
                        }
                    }
                );
            }
        }
    ]
});